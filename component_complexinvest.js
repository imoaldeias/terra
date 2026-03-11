export function renderComplexInvest() {
    return `
        <section class="pt-6 pb-16 lg:pt-12 lg:pb-24" style="background:#FAF7F2;">
            <div class="max-w-6xl mx-auto px-4 lg:px-6">

                <!-- HEADER -->
                <div style="margin-bottom:1.5rem;">
                    <span class="label mb-2 block">Ferramenta de Análise</span>
                    <div style="display:inline-flex;gap:0.5rem;margin-bottom:1rem;margin-top:0.5rem;">
                        <span data-route="invest" style="font-family:'Instrument Sans',sans-serif;font-size:0.68rem;letter-spacing:0.15em;text-transform:uppercase;padding:0.4rem 1rem;border:1px solid rgba(62,74,63,0.25);background:transparent;color:#2F3526;border-radius:4px;cursor:pointer;">Simples</span>
                        <span style="font-family:'Instrument Sans',sans-serif;font-size:0.68rem;letter-spacing:0.15em;text-transform:uppercase;padding:0.4rem 1rem;border:1px solid #2F3526;background:#2F3526;color:#FAF7F2;border-radius:4px;">Complexo</span>
                    </div>
                    <h1 style="line-height:1.1;">Simulador de Investimento</h1>
                    <p style="margin-top:0.5rem; color:#6b7a5e; font-size:0.88rem; line-height:1.5;">
                        Introduza os dados do seu projeto e obtenha os indicadores financeiros essenciais.
                    </p>
                </div>

                <!-- INTRO TEXT -->
                <div style="margin-bottom:1.5rem; padding-bottom:1.5rem; border-bottom:1px solid rgba(62,74,63,0.1);">
                    <p style="line-height:1.9; color:#6b7a5e; font-size:0.82rem; font-style:italic;">
                        Os resultados são indicativos e baseados nos pressupostos introduzidos. Para uma análise de viabilidade detalhada, contacte-nos através do formulário abaixo.
                    </p>
                </div>

                <!-- TYPE SELECTOR (inline buttons, same as Simples) -->
                <div style="margin-bottom:1.25rem;">
                    <div id="project-type-grid" style="display:flex;flex-wrap:wrap;gap:0.5rem;">
                        <button class="cx-type-btn active" data-type="tourism"
                            style="display:flex;align-items:center;gap:0.5rem;padding:0.7rem 1rem;border:1px solid #2F3526;background:#2F3526;color:#FAF7F2;border-radius:4px;cursor:pointer;transition:all 0.2s;font-family:'Instrument Sans',sans-serif;font-size:0.72rem;letter-spacing:0.08em;text-transform:uppercase;">
                            <i data-lucide="hotel" style="width:14px;height:14px;flex-shrink:0;"></i>
                            <span>Hotelaria e Turismo</span>
                        </button>
                        <button class="cx-type-btn" data-type="agriculture"
                            style="display:flex;align-items:center;gap:0.5rem;padding:0.7rem 1rem;border:1px solid rgba(62,74,63,0.2);background:transparent;color:#2F3526;border-radius:4px;cursor:pointer;transition:all 0.2s;font-family:'Instrument Sans',sans-serif;font-size:0.72rem;letter-spacing:0.08em;text-transform:uppercase;">
                            <i data-lucide="leaf" style="width:14px;height:14px;flex-shrink:0;"></i>
                            <span>Agricultura</span>
                        </button>
                        <button class="cx-type-btn" data-type="solar"
                            style="display:flex;align-items:center;gap:0.5rem;padding:0.7rem 1rem;border:1px solid rgba(62,74,63,0.2);background:transparent;color:#2F3526;border-radius:4px;cursor:pointer;transition:all 0.2s;font-family:'Instrument Sans',sans-serif;font-size:0.72rem;letter-spacing:0.08em;text-transform:uppercase;">
                            <i data-lucide="zap" style="width:14px;height:14px;flex-shrink:0;"></i>
                            <span>Energia</span>
                        </button>
                        <button class="cx-type-btn" data-type="realestate"
                            style="display:flex;align-items:center;gap:0.5rem;padding:0.7rem 1rem;border:1px solid rgba(62,74,63,0.2);background:transparent;color:#2F3526;border-radius:4px;cursor:pointer;transition:all 0.2s;font-family:'Instrument Sans',sans-serif;font-size:0.72rem;letter-spacing:0.08em;text-transform:uppercase;">
                            <i data-lucide="building-2" style="width:14px;height:14px;flex-shrink:0;"></i>
                            <span>Promoção Imobiliária</span>
                        </button>
                    </div>
                </div>

                <!-- MAIN GRID: inputs left, results right -->
                <div id="cx-main-grid">

                    <!-- LEFT: INPUTS -->
                    <div style="background:#fff;border:1px solid rgba(62,74,63,0.12);border-radius:4px;padding:1.25rem;display:flex;flex-direction:column;">

                        <div id="cx-form-fields" style="display:flex;flex-direction:column;gap:0;flex:1;"></div>

                        <p id="calc-error" style="display:none;font-family:'Instrument Sans',sans-serif;font-size:0.75rem;color:#c0392b;margin-top:0.75rem;text-align:center;"></p>

                        <button id="btn-calculate"
                            style="width:100%;margin-top:1.25rem;padding:0.75rem;border:1px solid #2F3526;background:#2F3526;color:#FAF7F2;cursor:pointer;font-family:'Instrument Sans',sans-serif;font-size:0.65rem;letter-spacing:0.2em;text-transform:uppercase;border-radius:4px;transition:all 0.3s;">
                            Calcular Retorno
                        </button>
                    </div>

                    <!-- RIGHT: RESULTS -->
                    <div style="background:#fff;border:1px solid rgba(62,74,63,0.12);border-radius:4px;padding:1.25rem;display:flex;flex-direction:column;">

                        <p style="font-family:'Instrument Sans',sans-serif;font-size:0.65rem;letter-spacing:0.2em;text-transform:uppercase;color:#9C7A3C;margin-bottom:1rem;">Resultados</p>

                        <!-- 4 KPI CARDS -->
                        <div style="display:grid;grid-template-columns:1fr 1fr;gap:0.75rem;margin-bottom:1rem;">
                            <div style="background:#EDE8E0;padding:1rem;border-radius:4px;">
                                <p style="font-family:'Instrument Sans',sans-serif;font-size:0.58rem;letter-spacing:0.18em;text-transform:uppercase;color:#9C7A3C;margin-bottom:0.3rem;">ROI Total</p>
                                <p id="res-roi" style="font-family:'Instrument Serif',serif;font-size:1.5rem;color:#2F3526;margin:0;line-height:1;">—</p>
                            </div>
                            <div style="background:#EDE8E0;padding:1rem;border-radius:4px;">
                                <p style="font-family:'Instrument Sans',sans-serif;font-size:0.58rem;letter-spacing:0.18em;text-transform:uppercase;color:#9C7A3C;margin-bottom:0.3rem;">TIR (IRR)</p>
                                <p id="res-irr" style="font-family:'Instrument Serif',serif;font-size:1.5rem;color:#2F3526;margin:0;line-height:1;">—</p>
                            </div>
                            <div style="background:#2F3526;padding:1rem;border-radius:4px;">
                                <p style="font-family:'Instrument Sans',sans-serif;font-size:0.58rem;letter-spacing:0.18em;text-transform:uppercase;color:#9C7A3C;margin-bottom:0.3rem;">Payback</p>
                                <p id="res-payback" style="font-family:'Instrument Serif',serif;font-size:1.5rem;color:#FAF7F2;margin:0;line-height:1;">—</p>
                            </div>
                            <div style="background:#2F3526;padding:1rem;border-radius:4px;">
                                <p style="font-family:'Instrument Sans',sans-serif;font-size:0.58rem;letter-spacing:0.18em;text-transform:uppercase;color:#9C7A3C;margin-bottom:0.3rem;">Equity Multiple</p>
                                <p id="res-em" style="font-family:'Instrument Serif',serif;font-size:1.5rem;color:#FAF7F2;margin:0;line-height:1;">—</p>
                            </div>
                        </div>

                        <!-- SECONDARY METRICS -->
                        <div style="border-top:1px solid rgba(62,74,63,0.1);padding-top:0.75rem;margin-bottom:0.75rem;">
                            <div style="display:flex;flex-direction:column;gap:0.4rem;">
                                <div style="display:flex;justify-content:space-between;">
                                    <span style="font-family:'Instrument Sans',sans-serif;font-size:0.72rem;color:#6b7a5e;">Cash-on-Cash</span>
                                    <span id="res-coc" style="font-family:'Instrument Sans',sans-serif;font-size:0.72rem;color:#2F3526;font-weight:600;">—</span>
                                </div>
                                <div style="display:flex;justify-content:space-between;">
                                    <span style="font-family:'Instrument Sans',sans-serif;font-size:0.72rem;color:#6b7a5e;">Investimento Total</span>
                                    <span id="res-total-inv" style="font-family:'Instrument Sans',sans-serif;font-size:0.72rem;color:#2F3526;font-weight:600;">—</span>
                                </div>
                                <div style="display:flex;justify-content:space-between;">
                                    <span style="font-family:'Instrument Sans',sans-serif;font-size:0.72rem;color:#6b7a5e;">Capital Próprio</span>
                                    <span id="res-equity" style="font-family:'Instrument Sans',sans-serif;font-size:0.72rem;color:#2F3526;font-weight:600;">—</span>
                                </div>
                                <div style="display:flex;justify-content:space-between;">
                                    <span style="font-family:'Instrument Sans',sans-serif;font-size:0.72rem;color:#6b7a5e;">Receita Anual</span>
                                    <span id="res-annual-rev" style="font-family:'Instrument Sans',sans-serif;font-size:0.72rem;color:#2F3526;font-weight:600;">—</span>
                                </div>
                                <div style="display:flex;justify-content:space-between;">
                                    <span style="font-family:'Instrument Sans',sans-serif;font-size:0.72rem;color:#6b7a5e;">EBITDA Anual</span>
                                    <span id="res-ebitda" style="font-family:'Instrument Sans',sans-serif;font-size:0.72rem;color:#2F3526;font-weight:600;">—</span>
                                </div>
                                <div style="display:flex;justify-content:space-between;">
                                    <span style="font-family:'Instrument Sans',sans-serif;font-size:0.72rem;color:#6b7a5e;">Serviço da Dívida /ano</span>
                                    <span id="res-debt" style="font-family:'Instrument Sans',sans-serif;font-size:0.72rem;color:#2F3526;font-weight:600;">—</span>
                                </div>
                                <div style="display:flex;justify-content:space-between;">
                                    <span style="font-family:'Instrument Sans',sans-serif;font-size:0.72rem;color:#6b7a5e;">Cash Flow Líquido /ano</span>
                                    <span id="res-cf" style="font-family:'Instrument Sans',sans-serif;font-size:0.72rem;color:#2F3526;font-weight:600;">—</span>
                                </div>
                                <div style="display:flex;justify-content:space-between;">
                                    <span style="font-family:'Instrument Sans',sans-serif;font-size:0.72rem;color:#6b7a5e;">Valor de Saída</span>
                                    <span id="res-exit" style="font-family:'Instrument Sans',sans-serif;font-size:0.72rem;color:#2F3526;font-weight:600;">—</span>
                                </div>
                            </div>
                        </div>

                        <!-- CHART -->
                        <div style="background:#EDE8E0;padding:1rem;border-radius:4px;margin-bottom:1rem;">
                            <p style="font-family:'Instrument Sans',sans-serif;font-size:0.58rem;letter-spacing:0.18em;text-transform:uppercase;color:#9C7A3C;margin-bottom:0.5rem;">Retorno Acumulado</p>
                            <svg id="invest-chart" width="100%" height="120" viewBox="0 0 400 120" preserveAspectRatio="none">
                                <text x="200" y="65" text-anchor="middle" fill="#9C7A3C"
                                    style="font-family:'Instrument Sans',sans-serif;font-size:10px;letter-spacing:0.1em;">
                                    CALCULE PARA VER O GRÁFICO
                                </text>
                            </svg>
                        </div>

                        <!-- LEAD FORM -->
                        <div style="border-top:1px solid rgba(62,74,63,0.1);padding-top:1rem;">
                            <p style="font-family:'Instrument Sans',sans-serif;font-size:0.65rem;letter-spacing:0.2em;text-transform:uppercase;color:#9C7A3C;margin-bottom:0.3rem;">Análise Personalizada</p>
                            <p style="font-family:'Instrument Sans',sans-serif;font-size:0.8rem;color:#6b7a5e;margin-bottom:0.75rem;line-height:1.5;">Quer um estudo de viabilidade detalhado, sem compromisso?</p>
                            <div style="display:flex;flex-direction:column;gap:0.5rem;">
                                <input type="text" id="lead-name" placeholder="Nome *"
                                    style="border:none;border-bottom:1px solid rgba(62,74,63,0.2);background:transparent;padding:0.4rem 0;font-family:'Instrument Sans',sans-serif;font-size:0.85rem;color:#2F3526;outline:none;width:100%;">
                                <input type="email" id="lead-email" placeholder="Email *"
                                    style="border:none;border-bottom:1px solid rgba(62,74,63,0.2);background:transparent;padding:0.4rem 0;font-family:'Instrument Sans',sans-serif;font-size:0.85rem;color:#2F3526;outline:none;width:100%;">
                                <div id="lead-feedback" style="display:none;padding:0.6rem;text-align:center;font-size:0.8rem;border-radius:4px;"></div>
                                <button id="btn-lead"
                                    style="width:100%;margin-top:0.25rem;padding:0.7rem;border:1px solid #9C7A3C;background:transparent;color:#9C7A3C;cursor:pointer;font-family:'Instrument Sans',sans-serif;font-size:0.65rem;letter-spacing:0.2em;text-transform:uppercase;border-radius:4px;transition:all 0.3s;">
                                    Solicitar Análise
                                </button>
                            </div>
                        </div>

                    </div>
                </div>

            </div>
        </section>
    `;
}

export function initComplexInvest() {

    // Inject grid styles — DOMPurify strips <style> tags, so inject programmatically
    const styleId = 'cx-invest-styles';
    if (!document.getElementById(styleId)) {
        const s = document.createElement('style');
        s.id = styleId;
        s.textContent = `
            #cx-main-grid { display:grid; grid-template-columns:1fr 1fr; gap:1.5rem; align-items:stretch; }
            .cx-field-row { display:grid; grid-template-columns:1fr 100px; align-items:center; gap:0.75rem; padding:0.45rem 0; border-bottom:1px solid rgba(62,74,63,0.06); }
            @media (max-width:768px) {
                #cx-main-grid { grid-template-columns:1fr; }
                .cx-field-row { grid-template-columns:1fr 85px; gap:0.5rem; }
                .cx-type-btn span { display:none; }
                .cx-type-btn { padding:0.6rem 0.75rem !important; justify-content:center; }
            }
            @media (max-width:400px) { .cx-field-row { grid-template-columns:1fr 75px; } }
        `;
        document.head.appendChild(s);
    }

    let currentType = 'tourism';

    const IS = `width:100%;border:none;border-bottom:1px solid rgba(62,74,63,0.2);background:transparent;padding:0.4rem 0;font-family:'Instrument Sans',sans-serif;font-size:0.9rem;color:#2F3526;outline:none;`;
    const LS = `font-family:'Instrument Sans',sans-serif;font-size:0.62rem;letter-spacing:0.15em;text-transform:uppercase;color:#9C7A3C;display:block;margin-bottom:0.3rem;`;

    function sectionHTML(title) {
        return `<div style="padding-top:1.1rem;padding-bottom:0.5rem;border-bottom:1px solid rgba(62,74,63,0.1);margin-bottom:0.1rem;">
                    <p style="font-family:'Instrument Sans',sans-serif;font-size:0.62rem;letter-spacing:0.2em;text-transform:uppercase;color:#2F3526;margin:0;">${title}</p>
                </div>`;
    }

    function fieldHTML(id, label, opts = {}) {
        return `<div class="cx-field-row">
                    <label style="${LS};margin:0;">${label}</label>
                    <input type="number" id="${id}" min="0"
                        ${opts.step ? `step="${opts.step}"` : ''}
                        ${opts.max  ? `max="${opts.max}"`   : ''}
                        value="${opts.value !== undefined ? opts.value : ''}"
                        style="${IS};width:100%;text-align:right;">
                </div>`;
    }

    function getSharedFields() {
        return `
            ${sectionHTML('Propriedade')}
            ${fieldHTML('inp-price',   'Preço da Propriedade (€)',   { value: 2000000 })}
            ${fieldHTML('inp-devcost', 'Custo de Desenvolvimento (€)', { value: 500000 })}
            ${sectionHTML('Financiamento')}
            ${fieldHTML('inp-loan',  'Financiamento Bancário (%)', { max:95, value:60 })}
            ${fieldHTML('inp-rate',  'Taxa de Juro (%)',           { step:'0.1', value:4 })}
            ${fieldHTML('inp-years', 'Horizonte (anos)',            { max:30, value:15 })}
            ${fieldHTML('inp-exit',  'Valor de Saída (€) opcional', {})}
            ${fieldHTML('inp-caprate','Cap Rate (%) opcional',      { step:'0.1' })}
        `;
    }

    const specificInputs = {
        tourism: `
            ${sectionHTML('Turismo')}
            ${fieldHTML('inp-units',      'Nº Unidades / Quartos',      { value:12 })}
            ${fieldHTML('inp-nightprice', 'Preço Médio / Noite (€)',    { value:150 })}
            ${fieldHTML('inp-occupancy',  'Taxa de Ocupação (%)',        { max:100, value:65 })}
            ${fieldHTML('inp-opcost',     'Custos Operacionais (€/ano)', { value:80000 })}
        `,
        agriculture: `
            ${sectionHTML('Agricultura')}
            ${fieldHTML('inp-land',      'Área do Terreno (ha)',        { value:120 })}
            ${fieldHTML('inp-yield',     'Produção por ha (ton)',        { step:'0.1', value:3 })}
            ${fieldHTML('inp-croprice',  'Preço de Mercado (€/ton)',    { value:400 })}
            ${fieldHTML('inp-farmcost',  'Custos Operacionais (€/ha)',  { value:400 })}
            ${fieldHTML('inp-subsidies', 'Subsídios Anuais (€)',        { value:18000 })}
        `,
        solar: `
            ${sectionHTML('Energia Solar')}
            ${fieldHTML('inp-mw-solar',  'Potência Solar (MW)',          { step:'0.1', value:2 })}
            ${fieldHTML('inp-sunhours',  'Horas de Sol / Ano',           { value:1800 })}
            ${sectionHTML('Energia Eólica')}
            ${fieldHTML('inp-mw-wind',   'Potência Eólica (MW)',         { step:'0.1', value:0 })}
            ${fieldHTML('inp-windhours', 'Horas de Vento / Ano',         { value:0 })}
            ${sectionHTML('Comercialização')}
            ${fieldHTML('inp-kwh',       'Preço Eletricidade (€/kWh)',   { step:'0.001', value:0.065 })}
            ${fieldHTML('inp-gridcost',  'Custo Ligação Rede (€)',        { value:0 })}
        `,
        realestate: `
            ${sectionHTML('Promoção Imobiliária')}
            ${fieldHTML('inp-buildarea', 'Área Construível (m²)',        { value:2000 })}
            ${fieldHTML('inp-buildcost', 'Custo Construção (€/m²)',      { value:800 })}
            ${fieldHTML('inp-saleprice', 'Preço de Venda (€/m²)',        { value:2500 })}
            ${fieldHTML('inp-buildtime', 'Prazo de Construção (anos)',   { max:10, value:3 })}
        `
    };

    // ─── HELPERS ───────────────────────────────────────────────────────────

    function fmt(n) {
        return '€' + Math.round(n).toLocaleString('pt-PT');
    }

    function fmtPct(n) {
        return n.toFixed(1) + '%';
    }

    // Annual mortgage payment (principal + interest) using standard annuity formula
    function annualDebtService(loanAmt, annualRate, years) {
        if (loanAmt <= 0 || annualRate <= 0 || years <= 0) return 0;
        const r = annualRate / 12;
        const n = years * 12;
        const monthly = loanAmt * (r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
        return monthly * 12;
    }

    function calcIRR(cashflows) {
        let rate = 0.1;
        for (let i = 0; i < 200; i++) {
            let npv = 0, dnpv = 0;
            for (let t = 0; t < cashflows.length; t++) {
                npv  += cashflows[t] / Math.pow(1 + rate, t);
                dnpv -= t * cashflows[t] / Math.pow(1 + rate, t + 1);
            }
            if (Math.abs(npv) < 1) break;
            if (dnpv === 0) break;
            rate = rate - npv / dnpv;
        }
        return isFinite(rate) ? rate * 100 : 0;
    }

    function drawChart(annualCashflows, equity) {
        const svg = document.getElementById('invest-chart');
        if (!svg) return;
        const W = 400, H = 160, pad = 30;
        let cumulative = [-equity];
        for (let cf of annualCashflows) {
            cumulative.push(cumulative[cumulative.length - 1] + cf);
        }
        const minV = Math.min(...cumulative);
        const maxV = Math.max(...cumulative);
        const range = maxV - minV || 1;
        const n = cumulative.length;
        const toX = i => pad + (i / (n - 1)) * (W - pad * 2);
        const toY = v => H - pad - ((v - minV) / range) * (H - pad * 2);
        const path = cumulative.map((v, i) => (i === 0 ? 'M' : 'L') + toX(i).toFixed(1) + ',' + toY(v).toFixed(1)).join(' ');
        const zeroY = toY(0).toFixed(1);
        svg.innerHTML = `
            <line x1="${pad}" y1="${zeroY}" x2="${W - pad}" y2="${zeroY}" stroke="rgba(62,74,63,0.2)" stroke-width="1" stroke-dasharray="4"/>
            <path d="${path}" fill="none" stroke="#9C7A3C" stroke-width="2"/>
            ${cumulative.map((v, i) => i % 2 === 0 ? `<text x="${toX(i).toFixed(1)}" y="${H - 8}" text-anchor="middle" fill="#9C7A3C" style="font-size:9px;font-family:sans-serif;">${i}</text>` : '').join('')}
            <text x="${W - pad - 4}" y="${toY(maxV).toFixed(1) - 4}" text-anchor="end" fill="#2F3526" style="font-size:9px;font-family:sans-serif;">${fmt(maxV)}</text>
        `;
    }

    function showError(msg) {
        const btn = document.getElementById('btn-calculate');
        const existing = document.getElementById('calc-error');
        if (existing) existing.remove();
        const err = document.createElement('p');
        err.id = 'calc-error';
        err.style.cssText = "font-family:'Instrument Sans',sans-serif; font-size:0.78rem; color:#c0392b; margin-top:0.75rem; text-align:center;";
        err.textContent = msg;
        btn.insertAdjacentElement('afterend', err);
        setTimeout(() => err.remove(), 4000);
    }

    // ─── CALCULATE ─────────────────────────────────────────────────────────

    function calculate() {
        const existing = document.getElementById('calc-error');
        if (existing) existing.remove();

        const price   = parseFloat(document.getElementById('inp-price').value) || 0;
        const devcost = parseFloat(document.getElementById('inp-devcost').value) || 0;
        const loanPct = parseFloat(document.getElementById('inp-loan').value) / 100 || 0;
        const rate    = parseFloat(document.getElementById('inp-rate').value) / 100 || 0;
        const years   = parseInt(document.getElementById('inp-years').value) || 10;

        // Validation
        if (price === 0 && devcost === 0)
            return showError('Preencha pelo menos o Preço da Propriedade ou o Custo de Desenvolvimento.');
        if (!document.getElementById('inp-loan').value)
            return showError('Indique o Financiamento Bancário (%).');
        if (!document.getElementById('inp-rate').value)
            return showError('Indique a Taxa de Juro (%).');

        // Solar adds grid connection to CAPEX
        let extraCapex = 0;
        if (currentType === 'solar') {
            extraCapex = parseFloat(document.getElementById('inp-gridcost')?.value) || 0;
        }

        const totalInv    = price + devcost + extraCapex;
        const loanAmt     = totalInv * loanPct;
        const finalEquity = totalInv - loanAmt;

        if (finalEquity <= 0)
            return showError('O Financiamento Bancário não pode ser 100%. O Capital Próprio tem de ser positivo.');

        // Annual debt service = principal + interest (full mortgage payment)
        const debtService    = annualDebtService(loanAmt, rate, years);
        // Interest-only component (for IRR cashflows — principal is equity buildup, not a cost)
        const annualInterest = loanAmt * rate;

        // ─── REAL ESTATE: lump-sum exit model ──────────────────────────────
        if (currentType === 'realestate') {
            const buildarea  = parseFloat(document.getElementById('inp-buildarea')?.value) || 0;
            const buildcost  = parseFloat(document.getElementById('inp-buildcost')?.value) || 0;
            const saleprice  = parseFloat(document.getElementById('inp-saleprice')?.value) || 0;
            const buildtime  = parseFloat(document.getElementById('inp-buildtime')?.value) || 2;

            const gdv              = buildarea * saleprice;
            const totalBuildCost   = buildarea * buildcost;
            const totalDebtCost    = debtService * buildtime;
            const devProfit        = gdv - totalBuildCost - devcost - price - totalDebtCost;

            const roi = finalEquity > 0 ? (devProfit / finalEquity) * 100 : 0;
            const coc = roi; // same for lump-sum exit
            const cashflows = [-finalEquity, ...Array(Math.max(Math.round(buildtime) - 1, 0)).fill(0), devProfit + finalEquity];
            const irr = calcIRR(cashflows);

            document.getElementById('res-roi').textContent        = fmtPct(roi);
            document.getElementById('res-irr').textContent        = fmtPct(irr);
            document.getElementById('res-payback').textContent    = Math.round(buildtime) + ' anos';
            document.getElementById('res-coc').textContent        = fmtPct(coc);
            document.getElementById('res-total-inv').textContent  = fmt(totalInv);
            document.getElementById('res-equity').textContent     = fmt(finalEquity);
            document.getElementById('res-annual-rev').textContent = fmt(gdv);
            document.getElementById('res-ebitda').textContent     = fmt(devProfit);
            document.getElementById('res-debt').textContent       = fmt(totalDebtCost) + ' (total)';
            document.getElementById('res-cf').textContent         = fmt(devProfit);
            

            drawChart([...Array(Math.round(buildtime)).fill(0), devProfit], finalEquity);
            return;
        }

        // ─── INCOME-PRODUCING MODELS ────────────────────────────────────────
        let annualRevenue = 0;
        let annualOpCost  = 0;

        if (currentType === 'tourism') {
            const units      = parseFloat(document.getElementById('inp-units')?.value) || 0;
            const nightprice = parseFloat(document.getElementById('inp-nightprice')?.value) || 0;
            const occupancy  = parseFloat(document.getElementById('inp-occupancy')?.value) / 100 || 0;
            const opcost     = parseFloat(document.getElementById('inp-opcost')?.value) || 0;
            annualRevenue    = units * nightprice * 365 * occupancy;
            annualOpCost     = opcost;

        } else if (currentType === 'agriculture') {
            const land      = parseFloat(document.getElementById('inp-land')?.value) || 0;
            const yieldHa   = parseFloat(document.getElementById('inp-yield')?.value) || 0;
            const croprice  = parseFloat(document.getElementById('inp-croprice')?.value) || 0;
            const farmcost  = parseFloat(document.getElementById('inp-farmcost')?.value) || 0;
            const subsidies = parseFloat(document.getElementById('inp-subsidies')?.value) || 0;
            annualRevenue   = land * yieldHa * croprice + subsidies;
            annualOpCost    = land * farmcost;

        } else if (currentType === 'solar') {
            const mwSolar   = parseFloat(document.getElementById('inp-mw-solar')?.value) || 0;
            const mwWind    = parseFloat(document.getElementById('inp-mw-wind')?.value) || 0;
            const sunhours  = parseFloat(document.getElementById('inp-sunhours')?.value) || 0;
            const windhours = parseFloat(document.getElementById('inp-windhours')?.value) || 0;
            const kwh       = parseFloat(document.getElementById('inp-kwh')?.value) || 0;
            const totalMw   = mwSolar + mwWind;
            annualRevenue   = (mwSolar * 1000 * sunhours * kwh) + (mwWind * 1000 * windhours * kwh);
            annualOpCost    = totalMw * 20000;
        }

        const ebitda      = annualRevenue - annualOpCost;
        // For Cash-on-Cash: subtract full debt service (what you actually receive each year)
        const annualCF    = ebitda - debtService;
        // For IRR: subtract interest only (principal is equity buildup, counted in exit)
        const annualCFirr = ebitda - annualInterest;

        // Exit value: use manual input, or calculate from cap rate, or 0
        const exitInput   = parseFloat(document.getElementById('inp-exit')?.value) || 0;
        const capRate     = parseFloat(document.getElementById('inp-caprate')?.value) / 100 || 0;
        const exitValue   = exitInput > 0 ? exitInput
                          : (capRate > 0 ? ebitda / capRate : 0);

        // IRR cashflows use interest-only CF + exit value at end
        const cashflows = [-finalEquity, ...Array(years - 1).fill(annualCFirr), annualCFirr + exitValue];
        const irr = calcIRR(cashflows);

        // Payback vs total investment
        let cumulative = 0;
        let payback = null;
        for (let y = 1; y <= years; y++) {
            cumulative += annualCF;
            if (cumulative >= finalEquity && !payback) payback = y;
        }

        const totalReturn    = annualCF * years;
        const roi            = finalEquity > 0 ? (totalReturn / finalEquity) * 100 : 0;
        const coc            = finalEquity > 0 ? (annualCF / finalEquity) * 100 : 0;
        const equityMultiple = finalEquity > 0 ? (totalReturn + finalEquity) / finalEquity : 0;

        const irrDisplay = irr > 100
            ? '>' + (Math.round(irr/10)*10) + '%*'
            : fmtPct(irr);
        const highLeverage = loanPct > 0.85;

        document.getElementById('res-em').textContent           = equityMultiple.toFixed(2) + 'x';
        document.getElementById('res-exit').textContent         = exitValue > 0 ? fmt(exitValue) : 'Não definido';
        document.getElementById('res-roi').textContent          = fmtPct(roi);
        document.getElementById('res-irr').textContent          = irrDisplay;
        document.getElementById('res-payback').textContent      = payback ? payback + ' anos' : '>' + years + 'a';
        document.getElementById('res-coc').textContent          = fmtPct(coc);
        document.getElementById('res-total-inv').textContent    = fmt(totalInv);
        document.getElementById('res-equity').textContent       = fmt(finalEquity);
        document.getElementById('res-annual-rev').textContent   = fmt(annualRevenue);
        document.getElementById('res-ebitda').textContent       = fmt(ebitda);
        document.getElementById('res-debt').textContent         = fmt(debtService) + ' /ano';
        document.getElementById('res-cf').textContent           = fmt(annualCF) + ' /ano';
        

        if (highLeverage) {
            const existing = document.getElementById('leverage-warning');
            if (!existing) {
                const warn = document.createElement('p');
                warn.id = 'leverage-warning';
                warn.style.cssText = "font-family:'Instrument Sans',sans-serif; font-size:0.72rem; color:#9C7A3C; margin-top:1rem; line-height:1.5; border-left:2px solid #9C7A3C; padding-left:0.75rem;";
                warn.textContent = '* Financiamento acima de 85% amplifica artificialmente a TIR. Considere um cenário com menor alavancagem para resultados mais conservadores.';
                document.getElementById('cx-form-fields').closest('div').appendChild(warn);
            }
        } else {
            const existing = document.getElementById('leverage-warning');
            if (existing) existing.remove();
        }

        // Chart: flat cashflows + spike at exit if applicable
        const chartCFs = Array(years).fill(annualCF);
        if (exitValue > 0) chartCFs[years - 1] = annualCF + exitValue;
        drawChart(chartCFs, finalEquity);
    }

    // ─── INIT ───────────────────────────────────────────────────────────────

    function loadSpecificInputs(type) {
        const el = document.getElementById('cx-form-fields');
        if (el) {
            el.innerHTML = getSharedFields() + (specificInputs[type] || '');
            // Wire up all inputs to auto-calculate on change
            el.querySelectorAll('input').forEach(inp => {
                inp.addEventListener('input', calculate);
            });
        }
    }

    function setActiveType(type) {
        currentType = type;
        document.querySelectorAll('.cx-type-btn').forEach(btn => {
            if (btn.dataset.type === type) {
                btn.style.background  = '#2F3526';
                btn.style.color       = '#FAF7F2';
                btn.style.borderColor = '#2F3526';
            } else {
                btn.style.background  = 'transparent';
                btn.style.color       = '#2F3526';
                btn.style.borderColor = 'rgba(62,74,63,0.2)';
            }
        });
        loadSpecificInputs(type);
        if (window.lucide) lucide.createIcons();
    }

    loadSpecificInputs('tourism');
    if (window.lucide) lucide.createIcons();
    // Auto-calculate on load so results are visible immediately
    calculate();

    document.getElementById('project-type-grid')?.addEventListener('click', e => {
        const btn = e.target.closest('.cx-type-btn');
        if (btn) { setActiveType(btn.dataset.type); calculate(); }
    });

    const calcBtn = document.getElementById('btn-calculate');
    if (calcBtn) {
        calcBtn.addEventListener('click', calculate);
        calcBtn.addEventListener('mouseover', () => { calcBtn.style.background = '#2F3526'; calcBtn.style.color = '#FAF7F2'; });
        calcBtn.addEventListener('mouseout',  () => { calcBtn.style.background = 'transparent'; calcBtn.style.color = '#2F3526'; });
    }

    const leadBtn = document.getElementById('btn-lead');
    if (leadBtn) {
        leadBtn.addEventListener('mouseover', () => { leadBtn.style.background = '#9C7A3C'; leadBtn.style.color = '#FAF7F2'; });
        leadBtn.addEventListener('mouseout',  () => { leadBtn.style.background = 'transparent'; leadBtn.style.color = '#9C7A3C'; });
    }
}