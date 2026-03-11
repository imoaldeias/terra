export function renderComplexInvest() {
    return `
        <section class="pt-6 pb-16 lg:pt-12 lg:pb-24" style="background:#0D0F14;">
            <div class="max-w-7xl mx-auto px-4 lg:px-6">

                <!-- HEADER -->
                <div style="margin-bottom:1.5rem;padding-bottom:1rem;border-bottom:1px solid #1E2330;">
                    <span style="font-family:'Instrument Sans',sans-serif;font-size:0.58rem;letter-spacing:0.3em;text-transform:uppercase;color:#C8A96E;display:block;margin-bottom:0.4rem;">Ferramenta de Análise</span>
                    <div style="display:inline-flex;gap:0.5rem;margin-bottom:1rem;margin-top:0.5rem;">
                        <span data-route="invest" style="font-family:'Instrument Sans',sans-serif;font-size:0.65rem;letter-spacing:0.15em;text-transform:uppercase;padding:0.4rem 1rem;border:1px solid #1E2330;background:transparent;color:#8B93A8;border-radius:3px;cursor:pointer;">Simples</span>
                        <span style="font-family:'Instrument Sans',sans-serif;font-size:0.65rem;letter-spacing:0.15em;text-transform:uppercase;padding:0.4rem 1rem;border:1px solid #C8A96E;background:rgba(200,169,110,0.12);color:#C8A96E;border-radius:3px;">Complexo</span>
                    </div>
                    <h1 style="line-height:1.1;color:#E8EAF0;font-family:'Instrument Serif',serif;">Investment Return Simulator</h1>
                    <p style="margin-top:0.5rem;color:#8B93A8;font-size:0.8rem;line-height:1.5;font-family:'Instrument Sans',sans-serif;">
                        Introduza os dados do seu projeto e obtenha os indicadores financeiros institucionais.
                    </p>
                </div>

                <!-- TYPE SELECTOR -->
                <div style="margin-bottom:1.25rem;">
                    <div id="project-type-grid" style="display:flex;flex-wrap:wrap;gap:0.4rem;">
                        <button class="cx-type-btn active" data-type="tourism"
                            style="display:flex;align-items:center;gap:0.5rem;padding:0.5rem 1rem;border:1px solid #C8A96E;background:rgba(200,169,110,0.12);color:#C8A96E;border-radius:3px;cursor:pointer;font-family:'Instrument Sans',sans-serif;font-size:0.65rem;letter-spacing:0.1em;text-transform:uppercase;">
                            <i data-lucide="hotel" style="width:13px;height:13px;flex-shrink:0;"></i>
                            <span>Hospitality</span>
                        </button>
                        <button class="cx-type-btn" data-type="agriculture"
                            style="display:flex;align-items:center;gap:0.5rem;padding:0.5rem 1rem;border:1px solid #1E2330;background:transparent;color:#8B93A8;border-radius:3px;cursor:pointer;font-family:'Instrument Sans',sans-serif;font-size:0.65rem;letter-spacing:0.1em;text-transform:uppercase;">
                            <i data-lucide="leaf" style="width:13px;height:13px;flex-shrink:0;"></i>
                            <span>Agriculture</span>
                        </button>
                        <button class="cx-type-btn" data-type="solar"
                            style="display:flex;align-items:center;gap:0.5rem;padding:0.5rem 1rem;border:1px solid #1E2330;background:transparent;color:#8B93A8;border-radius:3px;cursor:pointer;font-family:'Instrument Sans',sans-serif;font-size:0.65rem;letter-spacing:0.1em;text-transform:uppercase;">
                            <i data-lucide="zap" style="width:13px;height:13px;flex-shrink:0;"></i>
                            <span>Energy</span>
                        </button>
                        <button class="cx-type-btn" data-type="realestate"
                            style="display:flex;align-items:center;gap:0.5rem;padding:0.5rem 1rem;border:1px solid #1E2330;background:transparent;color:#8B93A8;border-radius:3px;cursor:pointer;font-family:'Instrument Sans',sans-serif;font-size:0.65rem;letter-spacing:0.1em;text-transform:uppercase;">
                            <i data-lucide="building-2" style="width:13px;height:13px;flex-shrink:0;"></i>
                            <span>Real Estate</span>
                        </button>
                    </div>
                </div>

                <!-- MAIN GRID -->
                <div id="cx-main-grid" style="display:grid;grid-template-columns:320px 1fr;gap:1.25rem;align-items:start;">

                    <!-- LEFT: INPUTS -->
                    <div style="background:#13161D;border:1px solid #1E2330;border-radius:3px;padding:1.25rem;">
                        <div id="cx-form-fields" style="display:flex;flex-direction:column;"></div>
                        <button id="btn-calculate"
                            style="width:100%;margin-top:1.25rem;padding:0.75rem;border:1px solid #C8A96E;background:rgba(200,169,110,0.1);color:#C8A96E;cursor:pointer;font-family:'Instrument Sans',sans-serif;font-size:0.62rem;letter-spacing:0.2em;text-transform:uppercase;border-radius:3px;transition:all 0.2s;">
                            Calculate Returns
                        </button>
                        <p style="font-family:'Instrument Sans',sans-serif;font-size:0.55rem;color:#4A5268;margin-top:0.75rem;line-height:1.6;text-align:center;">
                            Indicative only · Not investment advice
                        </p>
                    </div>

                    <!-- RIGHT: RESULTS -->
                    <div id="cx-results-panel" style="display:flex;flex-direction:column;gap:0.75rem;">

                        <!-- RETURN METRICS HEADER -->
                        <div style="display:flex;align-items:center;gap:0.5rem;margin-bottom:0.1rem;">
                            <div style="width:2px;height:10px;background:#C8A96E;border-radius:1px;"></div>
                            <span style="font-family:'Instrument Sans',sans-serif;font-size:0.55rem;letter-spacing:0.25em;text-transform:uppercase;color:#C8A96E;">Return Metrics</span>
                        </div>

                        <!-- TOP KPI CARDS: IRR, MOIC, NPV, ROE -->
                        <div style="display:grid;grid-template-columns:repeat(4,1fr);gap:0.5rem;">
                            <div style="background:#C8A96E;border-radius:3px;padding:0.85rem 1rem;">
                                <p style="font-family:'Instrument Sans',sans-serif;font-size:0.52rem;letter-spacing:0.18em;text-transform:uppercase;color:rgba(13,15,20,0.6);margin-bottom:0.3rem;">IRR (Levered)</p>
                                <p id="res-irr-lev" style="font-family:'Courier New',monospace;font-size:1.3rem;font-weight:700;color:#0D0F14;margin:0;line-height:1;">—</p>
                            </div>
                            <div style="background:#13161D;border:1px solid #1E2330;border-radius:3px;padding:0.85rem 1rem;">
                                <p style="font-family:'Instrument Sans',sans-serif;font-size:0.52rem;letter-spacing:0.18em;text-transform:uppercase;color:#8B93A8;margin-bottom:0.3rem;">IRR (Unlevered)</p>
                                <p id="res-irr-unlev" style="font-family:'Courier New',monospace;font-size:1.3rem;font-weight:700;color:#E8EAF0;margin:0;line-height:1;">—</p>
                            </div>
                            <div style="background:#13161D;border:1px solid #1E2330;border-radius:3px;padding:0.85rem 1rem;">
                                <p style="font-family:'Instrument Sans',sans-serif;font-size:0.52rem;letter-spacing:0.18em;text-transform:uppercase;color:#8B93A8;margin-bottom:0.3rem;">MOIC / Eq. Multiple</p>
                                <p id="res-moic" style="font-family:'Courier New',monospace;font-size:1.3rem;font-weight:700;color:#E8EAF0;margin:0;line-height:1;">—</p>
                            </div>
                            <div style="background:#13161D;border:1px solid #1E2330;border-radius:3px;padding:0.85rem 1rem;">
                                <p style="font-family:'Instrument Sans',sans-serif;font-size:0.52rem;letter-spacing:0.18em;text-transform:uppercase;color:#8B93A8;margin-bottom:0.3rem;">NPV</p>
                                <p id="res-npv" style="font-family:'Courier New',monospace;font-size:1.3rem;font-weight:700;color:#E8EAF0;margin:0;line-height:1;">—</p>
                            </div>
                        </div>

                        <!-- ROE + COC -->
                        <div style="display:grid;grid-template-columns:1fr 1fr;gap:0.5rem;">
                            <div style="background:#13161D;border:1px solid #1E2330;border-radius:3px;padding:0.85rem 1rem;">
                                <p style="font-family:'Instrument Sans',sans-serif;font-size:0.52rem;letter-spacing:0.18em;text-transform:uppercase;color:#8B93A8;margin-bottom:0.3rem;">ROE</p>
                                <p id="res-roe" style="font-family:'Courier New',monospace;font-size:1.3rem;font-weight:700;color:#E8EAF0;margin:0;line-height:1;">—</p>
                                <p style="font-family:'Instrument Sans',sans-serif;font-size:0.55rem;color:#4A5268;margin-top:0.3rem;">Return on Equity</p>
                            </div>
                            <div style="background:#13161D;border:1px solid #1E2330;border-radius:3px;padding:0.85rem 1rem;">
                                <p style="font-family:'Instrument Sans',sans-serif;font-size:0.52rem;letter-spacing:0.18em;text-transform:uppercase;color:#8B93A8;margin-bottom:0.3rem;">Cash-on-Cash</p>
                                <p id="res-coc" style="font-family:'Courier New',monospace;font-size:1.3rem;font-weight:700;color:#E8EAF0;margin:0;line-height:1;">—</p>
                                <p style="font-family:'Instrument Sans',sans-serif;font-size:0.55rem;color:#4A5268;margin-top:0.3rem;">Annual yield on equity</p>
                            </div>
                        </div>

                        <!-- PROJECT ECONOMICS + FINANCING (2 col) -->
                        <div style="display:grid;grid-template-columns:1fr 1fr;gap:0.75rem;">

                            <!-- Project Economics -->
                            <div style="background:#13161D;border:1px solid #1E2330;border-radius:3px;overflow:hidden;">
                                <div style="background:#13161D;border-bottom:1px solid #1E2330;padding:0.45rem 0.9rem;display:flex;align-items:center;gap:0.5rem;">
                                    <div style="width:2px;height:10px;background:#3DDC84;border-radius:1px;"></div>
                                    <span style="font-family:'Instrument Sans',sans-serif;font-size:0.55rem;letter-spacing:0.2em;text-transform:uppercase;color:#3DDC84;">Project Economics</span>
                                </div>
                                <div style="padding:0.75rem 0.9rem;">
                                    <div class="cx-metric-row"><span class="cx-metric-label">Total Cost</span><span id="res-total-cost" class="cx-metric-value">—</span></div>
                                    <div class="cx-metric-row"><span class="cx-metric-label">NOI / EBITDA</span><span id="res-noi" class="cx-metric-value">—</span></div>
                                    <div class="cx-metric-row"><span class="cx-metric-label">Annual Revenue</span><span id="res-rev" class="cx-metric-value">—</span></div>
                                    <div class="cx-metric-row"><span class="cx-metric-label">Yield on Cost</span><span id="res-yoc" class="cx-metric-value" style="color:#C8A96E;">—</span></div>
                                    <div class="cx-metric-row"><span class="cx-metric-label">Development Margin</span><span id="res-devmargin" class="cx-metric-value">—</span></div>
                                    <div class="cx-metric-row"><span class="cx-metric-label">Profit on Cost</span><span id="res-poc" class="cx-metric-value">—</span></div>
                                    <div class="cx-metric-row" id="row-payback"><span class="cx-metric-label">Payback Period</span><span id="res-payback" class="cx-metric-value">—</span></div>
                                    <div class="cx-metric-row"><span class="cx-metric-label">Exit Value</span><span id="res-exit" class="cx-metric-value">—</span></div>
                                </div>
                            </div>

                            <!-- Financing -->
                            <div style="background:#13161D;border:1px solid #1E2330;border-radius:3px;overflow:hidden;">
                                <div style="background:#13161D;border-bottom:1px solid #1E2330;padding:0.45rem 0.9rem;display:flex;align-items:center;gap:0.5rem;">
                                    <div style="width:2px;height:10px;background:#6EA8D8;border-radius:1px;"></div>
                                    <span style="font-family:'Instrument Sans',sans-serif;font-size:0.55rem;letter-spacing:0.2em;text-transform:uppercase;color:#6EA8D8;">Financing Structure</span>
                                </div>
                                <div style="padding:0.75rem 0.9rem;">
                                    <div class="cx-metric-row"><span class="cx-metric-label">Loan Amount</span><span id="res-loan" class="cx-metric-value">—</span></div>
                                    <div class="cx-metric-row"><span class="cx-metric-label">Equity Invested</span><span id="res-equity" class="cx-metric-value">—</span></div>
                                    <div class="cx-metric-row"><span class="cx-metric-label">LTV</span><span id="res-ltv" class="cx-metric-value">—</span></div>
                                    <div class="cx-metric-row"><span class="cx-metric-label">LTC</span><span id="res-ltc" class="cx-metric-value">—</span></div>
                                    <div class="cx-metric-row"><span class="cx-metric-label">DSCR</span><span id="res-dscr" class="cx-metric-value">—</span></div>
                                    <div class="cx-metric-row"><span class="cx-metric-label">Annual Debt Service</span><span id="res-debt" class="cx-metric-value">—</span></div>
                                </div>
                            </div>
                        </div>

                        <!-- CHART -->
                        <div style="background:#13161D;border:1px solid #1E2330;border-radius:3px;overflow:hidden;">
                            <div style="border-bottom:1px solid #1E2330;padding:0.45rem 0.9rem;display:flex;align-items:center;gap:0.5rem;">
                                <div style="width:2px;height:10px;background:#C8A96E;border-radius:1px;"></div>
                                <span style="font-family:'Instrument Sans',sans-serif;font-size:0.55rem;letter-spacing:0.2em;text-transform:uppercase;color:#C8A96E;">Cumulative Return Profile</span>
                            </div>
                            <div style="padding:0.75rem 0.9rem;">
                                <svg id="invest-chart" width="100%" height="110" viewBox="0 0 500 110" preserveAspectRatio="none">
                                    <text x="250" y="60" text-anchor="middle" fill="#4A5268" style="font-family:monospace;font-size:10px;letter-spacing:0.1em;">CALCULATE TO VIEW CHART</text>
                                </svg>
                            </div>
                        </div>

                        <!-- RISK: CAP SENSITIVITY + SCENARIOS -->
                        <div id="cx-risk-grid" style="display:grid;grid-template-columns:1fr 1fr;gap:0.75rem;">

                            <!-- Exit Cap Sensitivity -->
                            <div style="background:#13161D;border:1px solid #1E2330;border-radius:3px;overflow:hidden;">
                                <div style="border-bottom:1px solid #1E2330;padding:0.45rem 0.9rem;display:flex;align-items:center;gap:0.5rem;">
                                    <div style="width:2px;height:10px;background:#FF5252;border-radius:1px;"></div>
                                    <span style="font-family:'Instrument Sans',sans-serif;font-size:0.55rem;letter-spacing:0.2em;text-transform:uppercase;color:#FF5252;">Exit Cap Sensitivity</span>
                                </div>
                                <div style="padding:0.75rem 0.9rem;">
                                    <div style="display:grid;grid-template-columns:1fr 1fr 1fr;gap:0.2rem;margin-bottom:0.3rem;">
                                        <span style="font-family:monospace;font-size:0.52rem;color:#4A5268;letter-spacing:0.08em;">CAP RATE</span>
                                        <span style="font-family:monospace;font-size:0.52rem;color:#4A5268;text-align:right;">EXIT €M</span>
                                        <span style="font-family:monospace;font-size:0.52rem;color:#4A5268;text-align:right;">IRR LEV</span>
                                    </div>
                                    <div id="res-cap-sensitivity"></div>
                                </div>
                            </div>

                            <!-- Scenario Analysis -->
                            <div style="background:#13161D;border:1px solid #1E2330;border-radius:3px;overflow:hidden;">
                                <div style="border-bottom:1px solid #1E2330;padding:0.45rem 0.9rem;display:flex;align-items:center;gap:0.5rem;">
                                    <div style="width:2px;height:10px;background:#A78BDA;border-radius:1px;"></div>
                                    <span style="font-family:'Instrument Sans',sans-serif;font-size:0.55rem;letter-spacing:0.2em;text-transform:uppercase;color:#A78BDA;">Scenario Analysis</span>
                                </div>
                                <div id="res-scenarios" style="padding:0.75rem 0.9rem;display:flex;flex-direction:column;gap:0.65rem;"></div>
                            </div>
                        </div>

                        <!-- DISCLAIMER -->
                        <div style="border:1px solid #1E2330;border-radius:3px;padding:0.6rem 0.9rem;">
                            <p style="font-family:'Instrument Sans',sans-serif;font-size:0.55rem;color:#4A5268;line-height:1.7;margin:0;">
                                This analysis is indicative only and based on user-provided assumptions. It does not constitute investment advice or a commitment to lend or invest. Actual results may differ materially.
                            </p>
                        </div>

                    </div><!-- /results -->
                </div><!-- /main grid -->
            </div>
        </section>
    `;
}


export function initComplexInvest() {

    // ─── STYLES ──────────────────────────────────────────────────────────────
    const styleId = 'cx-invest-styles';
    if (!document.getElementById(styleId)) {
        const s = document.createElement('style');
        s.id = styleId;
        s.textContent = `
            #cx-main-grid { display:grid; grid-template-columns:320px 1fr; gap:1.25rem; align-items:start; }
            .cx-field-row { display:grid; grid-template-columns:1fr 100px; align-items:center; gap:0.5rem; padding:0.38rem 0; border-bottom:1px solid #1E2330; }
            .cx-section-title { padding:0.9rem 0 0.4rem; border-bottom:1px solid #1E2330; margin-bottom:0.1rem; }
            .cx-section-title span { font-family:'Instrument Sans',sans-serif; font-size:0.58rem; letter-spacing:0.2em; text-transform:uppercase; color:#8B93A8; }
            .cx-metric-row { display:flex; justify-content:space-between; align-items:center; padding:0.3rem 0; border-bottom:1px solid #1E2330; }
            .cx-metric-label { font-family:monospace; font-size:0.62rem; color:#8B93A8; }
            .cx-metric-value { font-family:monospace; font-size:0.62rem; font-weight:600; color:#E8EAF0; }
            .cx-type-btn:hover { border-color:#C8A96E !important; color:#C8A96E !important; }
            @media (max-width:900px) {
                #cx-main-grid { grid-template-columns:1fr; }
                .cx-type-btn span { display:none; }
                .cx-type-btn { padding:0.5rem 0.75rem !important; }
            }
        `;
        document.head.appendChild(s);
    }

    let currentType = 'tourism';

    // ─── INPUT HELPERS ────────────────────────────────────────────────────────
    const IS = `width:100%;border:none;border-bottom:1px solid #252C3C;background:transparent;padding:0.25rem 0;font-family:monospace;font-size:0.82rem;color:#E8EAF0;outline:none;text-align:right;`;
    const LS = `font-family:'Instrument Sans',sans-serif;font-size:0.6rem;letter-spacing:0.1em;text-transform:uppercase;color:#8B93A8;`;

    function sectionHTML(title) {
        return `<div class="cx-section-title"><span>${title}</span></div>`;
    }
    function fieldHTML(id, label, opts = {}) {
        return `<div class="cx-field-row">
            <label style="${LS};margin:0;">${label}</label>
            <input type="number" id="${id}" min="${opts.min ?? 0}" ${opts.max ? `max="${opts.max}"` : ''} ${opts.step ? `step="${opts.step}"` : ''} value="${opts.value ?? ''}" style="${IS}">
        </div>`;
    }

    function getSharedFields() {
        return `
            ${sectionHTML('Property / Asset')}
            ${fieldHTML('inp-price',      'Acquisition Price (€)',    { value: 2000000 })}
            ${fieldHTML('inp-devcost',    'Development / CapEx (€)',  { value: 500000 })}
            ${sectionHTML('Financing')}
            ${fieldHTML('inp-loan',       'LTV — Loan (%)',           { max: 95, value: 60 })}
            ${fieldHTML('inp-rate',       'Interest Rate (%)',         { step: '0.1', value: 4 })}
            ${fieldHTML('inp-years',      'Hold Period (yrs)',         { max: 30, value: 15 })}
            ${sectionHTML('Valuation')}
            ${fieldHTML('inp-exit',       'Exit Value Override (€)',   {})}
            ${fieldHTML('inp-caprate',    'Exit Cap Rate (%)',         { step: '0.1', value: 6 })}
            ${fieldHTML('inp-discount',   'Discount Rate — NPV (%)',   { step: '0.5', value: 8 })}
        `;
    }

    const specificInputs = {
        tourism: `
            ${sectionHTML('Hospitality Operations')}
            ${fieldHTML('inp-units',      'Units / Rooms',             { value: 12 })}
            ${fieldHTML('inp-nightprice', 'Avg Rate / Night (€)',      { value: 150 })}
            ${fieldHTML('inp-occupancy',  'Occupancy Rate (%)',         { max: 100, value: 65 })}
            ${fieldHTML('inp-opcost',     'Annual OpEx (€)',            { value: 80000 })}
        `,
        agriculture: `
            ${sectionHTML('Agricultural Operations')}
            ${fieldHTML('inp-land',       'Land Area (ha)',             { value: 120 })}
            ${fieldHTML('inp-yield',      'Yield / Hectare (t/ha)',     { step: '0.1', value: 3 })}
            ${fieldHTML('inp-croprice',   'Commodity Price (€/t)',      { value: 400 })}
            ${fieldHTML('inp-farmcost',   'Farm OpEx (€/ha)',           { value: 400 })}
            ${fieldHTML('inp-subsidies',  'Annual Subsidies (€)',       { value: 18000 })}
        `,
        solar: `
            ${sectionHTML('Generation')}
            ${fieldHTML('inp-mw-solar',   'Solar Capacity (MW)',        { step: '0.1', value: 2 })}
            ${fieldHTML('inp-sunhours',   'Peak Sun Hours / yr',        { value: 1800 })}
            ${fieldHTML('inp-mw-wind',    'Wind Capacity (MW)',          { step: '0.1', value: 0 })}
            ${fieldHTML('inp-windhours',  'Wind Hours / yr',            { value: 0 })}
            ${sectionHTML('Commercial')}
            ${fieldHTML('inp-kwh',        'Power Price (€/kWh)',        { step: '0.001', value: 0.065 })}
            ${fieldHTML('inp-gridcost',   'Grid Connection (€)',        { value: 0 })}
        `,
        realestate: `
            ${sectionHTML('Development')}
            ${fieldHTML('inp-buildarea',  'GBA (m²)',                   { value: 2000 })}
            ${fieldHTML('inp-buildcost',  'Build Cost (€/m²)',          { value: 800 })}
            ${fieldHTML('inp-saleprice',  'Target Sale Price (€/m²)',   { value: 2500 })}
            ${fieldHTML('inp-buildtime',  'Development Period (yrs)',   { max: 10, value: 3 })}
        `
    };

    // ─── MATH ────────────────────────────────────────────────────────────────
    function annualDebtService(loan, rate, years) {
        if (loan <= 0 || rate <= 0 || years <= 0) return 0;
        const r = rate / 12, n = years * 12;
        return (loan * (r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1)) * 12;
    }

    function calcIRR(cfs, guess = 0.1) {
        let rate = guess;
        for (let i = 0; i < 300; i++) {
            let npv = 0, dnpv = 0;
            for (let t = 0; t < cfs.length; t++) {
                const d = Math.pow(1 + rate, t);
                npv  += cfs[t] / d;
                dnpv -= t * cfs[t] / (d * (1 + rate));
            }
            if (Math.abs(npv) < 0.5 || dnpv === 0) break;
            rate -= npv / dnpv;
        }
        return (isFinite(rate) && rate > -1) ? rate * 100 : null;
    }

    function calcNPV(cfs, r) {
        return cfs.reduce((acc, cf, t) => acc + cf / Math.pow(1 + r, t), 0);
    }

    // ─── FORMATTERS ──────────────────────────────────────────────────────────
    function fmt(n, dec = 0) {
        if (!isFinite(n)) return '—';
        return '€' + n.toLocaleString('en-IE', { minimumFractionDigits: dec, maximumFractionDigits: dec });
    }
    function fmtM(n) {
        if (!isFinite(n)) return '—';
        return (n / 1e6).toFixed(1) + 'M';
    }
    function fmtPct(n, dec = 1) {
        if (n === null || !isFinite(n)) return '—';
        return n.toFixed(dec) + '%';
    }
    function fmtX(n) {
        if (n === null || !isFinite(n)) return '—';
        return n.toFixed(2) + 'x';
    }
    function irrColor(v) {
        if (v === null || !isFinite(v)) return '#4A5268';
        return v >= 15 ? '#3DDC84' : v >= 8 ? '#C8A96E' : '#FF5252';
    }
    function dscrColor(v) {
        if (v === null || !isFinite(v)) return '#4A5268';
        return v >= 1.5 ? '#3DDC84' : v >= 1.0 ? '#C8A96E' : '#FF5252';
    }

    // ─── CHART ───────────────────────────────────────────────────────────────
    function drawChart(cashflows, equity) {
        const svg = document.getElementById('invest-chart');
        if (!svg) return;
        const W = 500, H = 110, padX = 10, padY = 12;
        const cumulative = [-equity];
        for (const cf of cashflows) cumulative.push(cumulative[cumulative.length - 1] + cf);
        const minV = Math.min(...cumulative);
        const maxV = Math.max(...cumulative);
        const range = maxV - minV || 1;
        const n = cumulative.length;
        const toX = i => padX + (i / (n - 1)) * (W - padX * 2);
        const toY = v => H - padY - ((v - minV) / range) * (H - padY * 2);
        const zeroY = toY(0);
        const path = cumulative.map((v, i) => `${i === 0 ? 'M' : 'L'}${toX(i).toFixed(1)},${toY(v).toFixed(1)}`).join(' ');
        const area = path + ` L${toX(n-1).toFixed(1)},${zeroY.toFixed(1)} L${toX(0).toFixed(1)},${zeroY.toFixed(1)} Z`;
        const step = Math.max(1, Math.floor(n / 7));
        svg.innerHTML = `
            <defs>
                <linearGradient id="cxgrd" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stop-color="#C8A96E" stop-opacity="0.25"/>
                    <stop offset="100%" stop-color="#C8A96E" stop-opacity="0"/>
                </linearGradient>
            </defs>
            <line x1="${padX}" y1="${zeroY.toFixed(1)}" x2="${W-padX}" y2="${zeroY.toFixed(1)}" stroke="#1E2330" stroke-width="1" stroke-dasharray="4,3"/>
            <path d="${area}" fill="url(#cxgrd)"/>
            <path d="${path}" fill="none" stroke="#C8A96E" stroke-width="1.5" stroke-linejoin="round"/>
            ${cumulative.map((v, i) => i % step === 0 ? `<text x="${toX(i).toFixed(1)}" y="${H}" text-anchor="middle" fill="#4A5268" style="font-size:8px;font-family:monospace;">Y${i}</text>` : '').join('')}
        `;
    }

    // ─── CALCULATE ───────────────────────────────────────────────────────────
    function calculate() {
        const price        = parseFloat(document.getElementById('inp-price')?.value)    || 0;
        const devCost      = parseFloat(document.getElementById('inp-devcost')?.value)  || 0;
        const loanPct      = (parseFloat(document.getElementById('inp-loan')?.value)    || 0) / 100;
        const rate         = (parseFloat(document.getElementById('inp-rate')?.value)    || 0) / 100;
        const years        = parseInt(document.getElementById('inp-years')?.value)      || 10;
        const exitOverride = parseFloat(document.getElementById('inp-exit')?.value)     || 0;
        const capRate      = (parseFloat(document.getElementById('inp-caprate')?.value) || 0) / 100;
        const discountRate = (parseFloat(document.getElementById('inp-discount')?.value)|| 8) / 100;

        const extraCapex   = currentType === 'solar' ? (parseFloat(document.getElementById('inp-gridcost')?.value) || 0) : 0;
        const totalCost    = price + devCost + extraCapex;
        const loanAmt      = totalCost * loanPct;
        const equity       = totalCost - loanAmt;
        if (equity <= 0) return;

        const debtService  = annualDebtService(loanAmt, rate, years);
        const interestOnly = loanAmt * rate;

        // ── REAL ESTATE ──────────────────────────────────────────────────────
        if (currentType === 'realestate') {
            const buildArea    = parseFloat(document.getElementById('inp-buildarea')?.value) || 0;
            const buildCostSqm = parseFloat(document.getElementById('inp-buildcost')?.value) || 0;
            const salePriceSqm = parseFloat(document.getElementById('inp-saleprice')?.value) || 0;
            const buildTime    = parseFloat(document.getElementById('inp-buildtime')?.value) || 2;

            const gdv           = buildArea * salePriceSqm;
            const totalBuildCost= buildArea * buildCostSqm;
            const totalDebtCost = debtService * buildTime;
            const devProfit     = gdv - totalBuildCost - devCost - price - totalDebtCost;
            const devMargin     = gdv > 0 ? (devProfit / gdv) * 100 : 0;
            const profitOnCost  = totalCost > 0 ? (devProfit / totalCost) * 100 : 0;
            const yieldOnCost   = profitOnCost;
            const roe           = equity > 0 ? (devProfit / equity) * 100 : 0;
            const moic          = equity > 0 ? (devProfit + equity) / equity : null;

            const cashflows     = [-equity, ...Array(Math.max(Math.round(buildTime) - 1, 0)).fill(0), devProfit + equity];
            const unfLevCfs     = [-totalCost, ...Array(Math.max(Math.round(buildTime) - 1, 0)).fill(0), devProfit + totalCost];
            const irrLev        = calcIRR(cashflows);
            const irrUnlev      = calcIRR(unfLevCfs);
            const npv           = calcNPV(cashflows, discountRate);
            const ltv           = gdv > 0 ? (loanAmt / gdv) * 100 : null;
            const ltc           = totalCost > 0 ? (loanAmt / totalCost) * 100 : null;
            const dscr          = totalDebtCost > 0 ? devProfit / totalDebtCost : null;

            // Populate
            const el = id => document.getElementById(id);
            el('res-irr-lev').textContent   = fmtPct(irrLev);
            el('res-irr-lev').style.color   = irrColor(irrLev);
            el('res-irr-unlev').textContent = fmtPct(irrUnlev);
            el('res-irr-unlev').style.color = irrColor(irrUnlev);
            el('res-moic').textContent      = fmtX(moic);
            el('res-npv').textContent       = fmt(npv);
            el('res-npv').style.color       = npv >= 0 ? '#3DDC84' : '#FF5252';
            el('res-roe').textContent       = fmtPct(roe);
            el('res-coc').textContent       = fmtPct(roe);
            el('res-total-cost').textContent= fmt(totalCost);
            el('res-noi').textContent       = fmt(devProfit);
            el('res-noi').style.color       = devProfit >= 0 ? '#3DDC84' : '#FF5252';
            el('res-rev').textContent       = fmt(gdv);
            el('res-yoc').textContent       = fmtPct(yieldOnCost);
            el('res-devmargin').textContent = fmtPct(devMargin);
            el('res-poc').textContent       = fmtPct(profitOnCost);
            el('res-payback').textContent   = Math.round(buildTime) + ' yrs';
            el('res-exit').textContent      = fmt(gdv);
            el('res-loan').textContent      = fmt(loanAmt);
            el('res-equity').textContent    = fmt(equity);
            el('res-ltv').textContent       = fmtPct(ltv);
            el('res-ltv').style.color       = ltv > 80 ? '#FF5252' : ltv > 65 ? '#C8A96E' : '#3DDC84';
            el('res-ltc').textContent       = fmtPct(ltc);
            el('res-dscr').textContent      = dscr !== null ? dscr.toFixed(2) + 'x' : '—';
            el('res-dscr').style.color      = dscrColor(dscr);
            el('res-debt').textContent      = fmt(debtService) + ' /yr';

            // No cap sensitivity for lump-sum
            document.getElementById('cx-risk-grid').style.display = 'none';
            drawChart([...Array(Math.round(buildTime)).fill(0), devProfit], equity);
            return;
        }

        // ── INCOME-PRODUCING ─────────────────────────────────────────────────
        let annualRevenue = 0, annualOpCost = 0;
        if (currentType === 'tourism') {
            const units      = parseFloat(document.getElementById('inp-units')?.value)      || 0;
            const nightPrice = parseFloat(document.getElementById('inp-nightprice')?.value) || 0;
            const occupancy  = (parseFloat(document.getElementById('inp-occupancy')?.value) || 0) / 100;
            const opCost     = parseFloat(document.getElementById('inp-opcost')?.value)     || 0;
            annualRevenue    = units * nightPrice * 365 * occupancy;
            annualOpCost     = opCost;
        } else if (currentType === 'agriculture') {
            const land       = parseFloat(document.getElementById('inp-land')?.value)       || 0;
            const yieldHa    = parseFloat(document.getElementById('inp-yield')?.value)      || 0;
            const cropPrice  = parseFloat(document.getElementById('inp-croprice')?.value)   || 0;
            const farmCost   = parseFloat(document.getElementById('inp-farmcost')?.value)   || 0;
            const subsidies  = parseFloat(document.getElementById('inp-subsidies')?.value)  || 0;
            annualRevenue    = land * yieldHa * cropPrice + subsidies;
            annualOpCost     = land * farmCost;
        } else if (currentType === 'solar') {
            const mwSolar    = parseFloat(document.getElementById('inp-mw-solar')?.value)   || 0;
            const sunHours   = parseFloat(document.getElementById('inp-sunhours')?.value)   || 0;
            const mwWind     = parseFloat(document.getElementById('inp-mw-wind')?.value)    || 0;
            const windHours  = parseFloat(document.getElementById('inp-windhours')?.value)  || 0;
            const kwhPrice   = parseFloat(document.getElementById('inp-kwh')?.value)        || 0;
            annualRevenue    = mwSolar * 1000 * sunHours * kwhPrice + mwWind * 1000 * windHours * kwhPrice;
            annualOpCost     = (mwSolar + mwWind) * 20000;
        }

        const noi         = annualRevenue - annualOpCost;
        const annualCF    = noi - debtService;
        const annualCFirr = noi - interestOnly;

        const exitValue   = exitOverride > 0 ? exitOverride
                          : capRate > 0 ? noi / capRate
                          : totalCost;

        const cashflows   = [-equity, ...Array(years - 1).fill(annualCFirr), annualCFirr + exitValue - loanAmt];
        const unfLevCfs   = [-totalCost, ...Array(years - 1).fill(noi), noi + exitValue];
        const irrLev      = calcIRR(cashflows);
        const irrUnlev    = calcIRR(unfLevCfs);
        const npv         = calcNPV(cashflows, discountRate);
        const totalReturn = annualCF * years + (exitValue - totalCost);
        const moic        = equity > 0 ? (equity + totalReturn) / equity : null;
        const roe         = equity > 0 ? (annualCF / equity) * 100 : null;
        const yieldOnCost = totalCost > 0 ? (noi / totalCost) * 100 : null;
        const devMargin   = annualRevenue > 0 ? (noi / annualRevenue) * 100 : null;
        const profitOnCost= totalCost > 0 ? (noi * years / totalCost) * 100 : null;
        const ltv         = exitValue > 0 ? (loanAmt / exitValue) * 100 : null;
        const ltc         = totalCost > 0 ? (loanAmt / totalCost) * 100 : null;
        const dscr        = debtService > 0 ? noi / debtService : null;

        let cumulative = 0, payback = null;
        for (let y = 1; y <= years; y++) {
            cumulative += annualCF;
            if (cumulative >= equity && !payback) payback = y;
        }

        // Populate main metrics
        const el = id => document.getElementById(id);
        el('res-irr-lev').textContent    = fmtPct(irrLev);
        el('res-irr-lev').style.color    = irrColor(irrLev);
        el('res-irr-unlev').textContent  = fmtPct(irrUnlev);
        el('res-irr-unlev').style.color  = irrColor(irrUnlev);
        el('res-moic').textContent       = fmtX(moic);
        el('res-npv').textContent        = fmt(npv);
        el('res-npv').style.color        = npv >= 0 ? '#3DDC84' : '#FF5252';
        el('res-roe').textContent        = fmtPct(roe);
        el('res-coc').textContent        = fmtPct(roe);
        el('res-total-cost').textContent = fmt(totalCost);
        el('res-noi').textContent        = fmt(noi);
        el('res-noi').style.color        = noi >= 0 ? '#3DDC84' : '#FF5252';
        el('res-rev').textContent        = fmt(annualRevenue);
        el('res-yoc').textContent        = fmtPct(yieldOnCost);
        el('res-devmargin').textContent  = fmtPct(devMargin);
        el('res-poc').textContent        = fmtPct(profitOnCost);
        el('res-payback').textContent    = payback ? payback + ' yrs' : '>' + years + ' yrs';
        el('res-exit').textContent       = fmt(exitValue);
        el('res-loan').textContent       = fmt(loanAmt);
        el('res-equity').textContent     = fmt(equity);
        el('res-ltv').textContent        = fmtPct(ltv);
        el('res-ltv').style.color        = ltv > 80 ? '#FF5252' : ltv > 65 ? '#C8A96E' : '#3DDC84';
        el('res-ltc').textContent        = fmtPct(ltc);
        el('res-dscr').textContent       = dscr !== null ? dscr.toFixed(2) + 'x' : '—';
        el('res-dscr').style.color       = dscrColor(dscr);
        el('res-debt').textContent       = fmt(debtService) + ' /yr';

        // ── EXIT CAP SENSITIVITY ──────────────────────────────────────────────
        document.getElementById('cx-risk-grid').style.display = 'grid';
        const baseCapPct = capRate > 0 ? capRate * 100 : (noi / exitValue) * 100;
        const capSensEl  = document.getElementById('res-cap-sensitivity');
        capSensEl.innerHTML = '';
        for (let delta = -1.5; delta <= 1.55; delta += 0.5) {
            const capR = Math.max(0.5, baseCapPct + delta) / 100;
            const ev   = noi / capR;
            const cfs2 = [-equity, ...Array(years - 1).fill(annualCFirr), annualCFirr + ev - loanAmt];
            const irr2 = calcIRR(cfs2);
            const isBase = Math.abs(delta) < 0.01;
            const row = document.createElement('div');
            row.style.cssText = `display:grid;grid-template-columns:1fr 1fr 1fr;gap:0.2rem;padding:0.22rem 0;border-bottom:1px solid #1E2330;${isBase ? 'background:rgba(200,169,110,0.07);' : ''}`;
            row.innerHTML = `
                <span style="font-family:monospace;font-size:0.62rem;color:#8B93A8;">${(capR * 100).toFixed(1)}%${isBase ? ' <span style="color:#C8A96E">●</span>' : ''}</span>
                <span style="font-family:monospace;font-size:0.62rem;color:#E8EAF0;text-align:right;">${fmtM(ev)}</span>
                <span style="font-family:monospace;font-size:0.62rem;text-align:right;color:${irrColor(irr2)};">${fmtPct(irr2)}</span>
            `;
            capSensEl.appendChild(row);
        }

        // ── SCENARIO ANALYSIS ─────────────────────────────────────────────────
        const scenariosEl = document.getElementById('res-scenarios');
        scenariosEl.innerHTML = '';
        const scenarioDefs = [
            { label: 'Bear', color: '#6EA8D8', revMult: 0.75, costMult: 1.15 },
            { label: 'Base', color: '#C8A96E', revMult: 1.00, costMult: 1.00 },
            { label: 'Bull', color: '#3DDC84', revMult: 1.25, costMult: 0.90 },
        ];
        scenarioDefs.forEach(s => {
            const adjRev  = annualRevenue * s.revMult;
            const adjCost = annualOpCost  * s.costMult;
            const adjNOI  = adjRev - adjCost;
            const adjCF   = adjNOI - debtService;
            const adjExit = capRate > 0 ? adjNOI / capRate : exitValue * s.revMult;
            const cfs2    = [-equity, ...Array(years - 1).fill(adjNOI - interestOnly), adjNOI - interestOnly + adjExit - loanAmt];
            const irr2    = calcIRR(cfs2);
            const moic2   = equity > 0 ? (equity + adjCF * years + (adjExit - totalCost)) / equity : null;
            const block   = document.createElement('div');
            block.innerHTML = `
                <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:0.3rem;">
                    <span style="background:${s.color}22;color:${s.color};border:1px solid ${s.color}44;border-radius:2px;padding:0.12rem 0.45rem;font-family:monospace;font-size:0.55rem;letter-spacing:0.1em;">${s.label}</span>
                    <span style="font-family:monospace;font-size:0.6rem;color:${irrColor(irr2)};">IRR ${fmtPct(irr2)}</span>
                </div>
                <div style="display:grid;grid-template-columns:1fr 1fr;gap:0.15rem;">
                    <div class="cx-metric-row"><span class="cx-metric-label">NOI</span><span class="cx-metric-value">${fmt(adjNOI)}</span></div>
                    <div class="cx-metric-row"><span class="cx-metric-label">MOIC</span><span class="cx-metric-value">${fmtX(moic2)}</span></div>
                    <div class="cx-metric-row"><span class="cx-metric-label">CF/yr</span><span class="cx-metric-value" style="color:${adjCF >= 0 ? '#3DDC84' : '#FF5252'}">${fmt(adjCF)}</span></div>
                    <div class="cx-metric-row"><span class="cx-metric-label">Exit</span><span class="cx-metric-value">${fmtM(adjExit)}</span></div>
                </div>
            `;
            scenariosEl.appendChild(block);
        });

        // Chart
        const chartCFs = Array(years).fill(annualCF);
        chartCFs[years - 1] = annualCF + exitValue;
        drawChart(chartCFs, equity);
    }

    // ─── INIT ────────────────────────────────────────────────────────────────
    function loadSpecificInputs(type) {
        const el = document.getElementById('cx-form-fields');
        if (!el) return;
        el.innerHTML = getSharedFields() + (specificInputs[type] || '');
        el.querySelectorAll('input').forEach(inp => inp.addEventListener('input', calculate));
    }

    function setActiveType(type) {
        currentType = type;
        document.querySelectorAll('.cx-type-btn').forEach(btn => {
            const active = btn.dataset.type === type;
            btn.style.borderColor = active ? '#C8A96E' : '#1E2330';
            btn.style.background  = active ? 'rgba(200,169,110,0.12)' : 'transparent';
            btn.style.color       = active ? '#C8A96E' : '#8B93A8';
        });
        loadSpecificInputs(type);
        if (window.lucide) lucide.createIcons();
    }

    loadSpecificInputs('tourism');
    if (window.lucide) lucide.createIcons();
    calculate();

    document.getElementById('project-type-grid')?.addEventListener('click', e => {
        const btn = e.target.closest('.cx-type-btn');
        if (btn) { setActiveType(btn.dataset.type); calculate(); }
    });

    const calcBtn = document.getElementById('btn-calculate');
    if (calcBtn) calcBtn.addEventListener('click', calculate);
}