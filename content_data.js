/* =====================================================
   content_data.js
===================================================== */

export let appData = {
    properties: [],
    about: {
        title: "TerraPrima Alentejo Heritage Estate",
        subtitle: "Representação e Gestão de Ativos Rurais",
        description: "Estrutura especializada na gestão e valorização de património rural.",
        values: ["Confidencialidade", "Rigor", "Visão de Longo Prazo"]
    }
};

const SHEET_CSV_URL =
    'https://docs.google.com/spreadsheets/d/e/2PACX-1vSMJLh55N7yiksusMxcYd7XpWTo1GE6y0FpSPiqLLBrzodkh2AGLen7aHl8D2RmEj239c7mjvvNS6UW/pub?output=csv';

/* ================= HELPERS ================= */

function toNumber(value) {
    const num = parseInt(value);
    return isNaN(num) ? 0 : num;
}

function capitalizeFirst(str) {
    if (!str) return '';
    return str.charAt(0).toUpperCase() + str.slice(1);
}

function escapeHTML(str) {
    if (!str) return '';
    return str
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");
}

function normalizeProperty(p) {
    return {
        id: toNumber(p.id),

        title: escapeHTML((p.title || '').trim()),
        location: escapeHTML((p.location || '').trim()),
        locationNormalized: (p.location || '').trim().toLowerCase(),

        tipologia: escapeHTML(
            capitalizeFirst((p.tipologia || '').trim())
        ),

        price: escapeHTML((p.price || '').trim()),
        description: escapeHTML((p.description || '').trim()),

        priceValue: p.priceValue && p.priceValue.trim() !== ''
            ? parseInt(
                p.priceValue
                    .replace(/\./g, '')
                    .replace(/\s/g, '')
                    .replace('€', '')
            )
            : null,

        areaConstruida: toNumber(p.areaConstruida),
        areaTerreno: toNumber(p.areaTerreno),
        quartos: toNumber(p.quartos),

        gallery_ids: (p.gallery_ids || '').trim(),

        image: p.image_capa && p.image_capa.trim() !== ''
            ? p.image_capa.trim()
            : 'https://placehold.co/600x800?text=TerraPrimus'
    };
}

/* ================= SIMPLE CSV PARSER ================= */

function parseCSV(text) {
    const rows = [];
    const lines = text.trim().split('\n');

    // Properly handle quoted CSV
    const parseLine = (line) => {
        const result = [];
        let current = '';
        let insideQuotes = false;

        for (let i = 0; i < line.length; i++) {
            const char = line[i];

            if (char === '"') {
                insideQuotes = !insideQuotes;
            } else if (char === ',' && !insideQuotes) {
                result.push(current);
                current = '';
            } else {
                current += char;
            }
        }

        result.push(current);
        return result.map(v => v.replace(/^"|"$/g, '').trim());
    };

    const headers = parseLine(lines[0]);

    for (let i = 1; i < lines.length; i++) {
        const values = parseLine(lines[i]);
        const obj = {};

        headers.forEach((header, index) => {
            obj[header.trim()] = values[index] || '';
        });

        rows.push(obj);
    }

    return rows;
}

/* ================= DATA LOADER ================= */

export async function loadSiteData() {
    try {
        const response = await fetch(SHEET_CSV_URL);

        if (!response.ok) {
            throw new Error("Falha ao carregar CSV");
        }

        const csvText = await response.text();

        const rawData = parseCSV(csvText);

        const cleanData = rawData
            .map(normalizeProperty)
            .filter(p => p.id !== 0);

        appData.properties = cleanData;

        console.log("✅ Propriedades carregadas:", cleanData.length);

        return cleanData;

    } catch (error) {
        console.error("❌ Erro real:", error);
        throw error;
    }
}