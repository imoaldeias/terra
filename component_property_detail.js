import { appData } from './content_data.js';

export function renderPropertyDetail(id) {
    const prop = appData.properties.find(p => p.id === parseInt(id));

    if (!prop) {
        return `
            <div class="py-40 text-center text-base opacity-60">
                Propriedade não encontrada.
            </div>
        `;
    }

    const galleryImages = prop.gallery_ids && prop.gallery_ids.trim().length > 0
        ? prop.gallery_ids
            .replace(/\r/g, '')
            .replace(/\n/g, ',')
            .split(',')
            .map(img => img.trim())
            .filter(img => img.length > 5)
        : [];

    const images = galleryImages.length > 0 ? galleryImages : [prop.image];


    return `
        <section style="background:#FAF7F2; min-height:100vh; padding-top:2rem; padding-bottom:4rem;">
            <div class="max-w-7xl mx-auto px-4 lg:px-6">

                <!-- TITLE -->
                <h1 style="margin-bottom:0.5rem;">${prop.location} — ${prop.title}</h1>
                <p style="font-family:'Instrument Sans',sans-serif; font-size:0.65rem; letter-spacing:0.3em; text-transform:uppercase; color:#9C7A3C; margin-bottom:2rem;">${prop.tipologia || ''}</p>

                <!-- ══ MAIN GALLERY WRAPPER (arrows outside image) ══ -->
                ${images.length > 1 ? `
                <div style="display:flex; align-items:center; gap:1rem; margin-bottom:0.75rem;">

                    <button id="btn-prev"
                        style="flex-shrink:0; width:2.5rem; height:2.5rem; border-radius:50%; border:1px solid rgba(62,74,63,0.25); background:transparent; color:#2F3526; font-size:1.25rem; cursor:pointer; display:flex; align-items:center; justify-content:center; transition:all 0.2s;"
                        onmouseover="this.style.background='#2F3526';this.style.color='#FAF7F2';"
                        onmouseout="this.style.background='transparent';this.style.color='#2F3526';">
                        ‹
                    </button>

                    <div id="gallery-container" style="flex:1; border-radius:4px; overflow:hidden; background:#EDE8E0; cursor:zoom-in;">
                        <img
                            id="main-gallery-image"
                            src="${images[0]}"
                            alt="${prop.title}"
                            style="width:100%; display:block; transition:opacity 0.4s ease;"
                        >
                    </div>

                    <button id="btn-next"
                        style="flex-shrink:0; width:2.5rem; height:2.5rem; border-radius:50%; border:1px solid rgba(62,74,63,0.25); background:transparent; color:#2F3526; font-size:1.25rem; cursor:pointer; display:flex; align-items:center; justify-content:center; transition:all 0.2s;"
                        onmouseover="this.style.background='#2F3526';this.style.color='#FAF7F2';"
                        onmouseout="this.style.background='transparent';this.style.color='#2F3526';">
                        ›
                    </button>

                </div>
                ` : `
                <div id="gallery-container" style="border-radius:4px; overflow:hidden; background:#EDE8E0; margin-bottom:0.75rem; cursor:zoom-in;">
                    <img
                        id="main-gallery-image"
                        src="${images[0]}"
                        alt="${prop.title}"
                        style="width:100%; display:block;"
                    >
                </div>
                `}

                <!-- IMAGE COUNTER -->
                ${images.length > 1 ? `
                <p id="img-counter" style="font-family:'Instrument Sans',sans-serif; font-size:0.7rem; letter-spacing:0.1em; color:#9C7A3C; text-align:center; margin-bottom:0.75rem;">
                    1 / ${images.length}
                </p>
                ` : ''}

                <!-- THUMBNAIL STRIP -->
                ${images.length > 1 ? `
                <div id="thumbnail-strip"
                    style="display:flex; gap:0.5rem; padding:0.5rem 0 1.5rem; overflow-x:auto;">
                    ${images.map((img, i) => `
                        <button
                            data-thumb="${i}"
                            style="flex-shrink:0; width:80px; height:56px; border-radius:3px; overflow:hidden; border:2px solid ${i === 0 ? '#2F3526' : 'transparent'}; padding:0; cursor:pointer; transition:border-color 0.2s; background:none;">
                            <img src="${img}" style="width:100%; height:100%; object-fit:cover; display:block;" loading="lazy">
                        </button>
                    `).join('')}
                </div>
                ` : ''}

                <!-- LIGHTBOX -->
                <div id="lightbox"
                    style="display:none; position:fixed; inset:0; z-index:1000;
                           background:rgba(20,20,18,0.96);
                           align-items:center; justify-content:center;">

                    <button id="lightbox-close"
                        style="position:absolute; top:1.25rem; right:1.5rem; background:none; border:none; color:#FAF7F2; font-family:'Instrument Sans',sans-serif; font-size:0.75rem; letter-spacing:0.2em; text-transform:uppercase; cursor:pointer; opacity:0.7;">
                        Fechar ✕
                    </button>

                    ${images.length > 1 ? `
                    <button id="lightbox-prev"
                        style="position:absolute; left:1.5rem; top:50%; transform:translateY(-50%); background:rgba(250,247,242,0.1); border:1px solid rgba(250,247,242,0.2); color:#FAF7F2; font-size:1.5rem; cursor:pointer; width:3rem; height:3rem; border-radius:50%; display:flex; align-items:center; justify-content:center; transition:background 0.2s;">
                        ‹
                    </button>
                    <button id="lightbox-next"
                        style="position:absolute; right:1.5rem; top:50%; transform:translateY(-50%); background:rgba(250,247,242,0.1); border:1px solid rgba(250,247,242,0.2); color:#FAF7F2; font-size:1.5rem; cursor:pointer; width:3rem; height:3rem; border-radius:50%; display:flex; align-items:center; justify-content:center; transition:background 0.2s;">
                        ›
                    </button>
                    ` : ''}

                    <div style="width:calc(100% - 10rem); height:calc(100% - 6rem); display:flex; align-items:center; justify-content:center;">
                        <img id="lightbox-image"
                            src="${images[0]}"
                            style="max-width:100%; max-height:100%; object-fit:contain; border-radius:4px;">
                    </div>

                </div>

                <!-- ══ KEY STATS BAR ══ -->
                <div style="display:flex; flex-wrap:wrap; gap:0; border-top:1px solid rgba(62,74,63,0.12); border-bottom:1px solid rgba(62,74,63,0.12); margin-bottom:3rem;">

                    <div style="flex:1; min-width:120px; padding:1.25rem 1.5rem; border-right:1px solid rgba(62,74,63,0.12);">
                        <div class="label" style="margin-bottom:0.35rem;">Preço</div>
                        <div style="font-family:'Instrument Serif',serif; font-size:1.1rem; color:#2F3526;">${prop.price}</div>
                    </div>

                    ${prop.areaTerreno > 0 ? `
                    <div style="flex:1; min-width:120px; padding:1.25rem 1.5rem; border-right:1px solid rgba(62,74,63,0.12);">
                        <div class="label" style="margin-bottom:0.35rem;">Terreno</div>
                        <div style="font-family:'Instrument Serif',serif; font-size:1.1rem; color:#2F3526;">${prop.areaTerreno} ha</div>
                    </div>
                    ` : ''}

                    ${prop.areaConstruida > 0 ? `
                    <div style="flex:1; min-width:120px; padding:1.25rem 1.5rem; border-right:1px solid rgba(62,74,63,0.12);">
                        <div class="label" style="margin-bottom:0.35rem;">Área Construída</div>
                        <div style="font-family:'Instrument Serif',serif; font-size:1.1rem; color:#2F3526;">${prop.areaConstruida} m²</div>
                    </div>
                    ` : ''}

                    ${prop.quartos > 0 ? `
                    <div style="flex:1; min-width:120px; padding:1.25rem 1.5rem; border-right:1px solid rgba(62,74,63,0.12);">
                        <div class="label" style="margin-bottom:0.35rem;">Quartos</div>
                        <div style="font-family:'Instrument Serif',serif; font-size:1.1rem; color:#2F3526;">${prop.quartos}</div>
                    </div>
                    ` : ''}

                    <div style="flex:1; min-width:120px; padding:1.25rem 1.5rem;">
                        <div class="label" style="margin-bottom:0.35rem;">Tipologia</div>
                        <div style="font-family:'Instrument Serif',serif; font-size:1.1rem; color:#2F3526;">${prop.tipologia || '—'}</div>
                    </div>

                </div>

                <!-- ══ TWO COLUMN: Description + Sidebar ══ -->
                <div class="grid grid-cols-1 lg:grid-cols-3" style="gap:4rem;">

                    <!-- LEFT: Description + Video -->
                    <div class="lg:col-span-2" style="display:flex; flex-direction:column; gap:2.5rem;">

                        <div>
                            <p style="font-family:'Instrument Sans',sans-serif; font-size:0.65rem; letter-spacing:0.3em; text-transform:uppercase; color:#9C7A3C; margin-bottom:1.25rem;">Descrição</p>
                            <div style="font-family:'Instrument Sans',sans-serif; font-size:0.95rem; line-height:1.9; color:#2F3526; white-space:pre-line;">${prop.description || 'Informação sob consulta.'}</div>
                        </div>

                        
                    </div>

                    <!-- RIGHT: Sticky Sidebar -->
                    <div class="lg:col-span-1">
                        <div style="position:sticky; top:100px; display:flex; flex-direction:column; gap:0; border:1px solid rgba(62,74,63,0.15); border-radius:4px; overflow:hidden;">

                            <div style="background:#2F3526; padding:1.5rem;">
                                <p style="font-family:'Instrument Sans',sans-serif; font-size:0.65rem; letter-spacing:0.3em; text-transform:uppercase; color:rgba(250,247,242,0.6); margin-bottom:0.5rem;">Referência</p>
                                <p style="font-family:'Instrument Serif',serif; font-size:1.4rem; color:#FAF7F2; line-height:1.2; margin:0;">${prop.title}</p>
                                <p style="font-family:'Instrument Sans',sans-serif; font-size:0.8rem; color:rgba(250,247,242,0.6); margin-top:0.35rem;">${prop.location}</p>
                            </div>

                            <div style="padding:1.5rem; display:flex; flex-direction:column; gap:1rem; background:white;">

                                <div style="display:flex; justify-content:space-between; align-items:baseline; padding-bottom:0.75rem; border-bottom:1px solid rgba(62,74,63,0.08);">
                                    <span class="label">Preço</span>
                                    <span style="font-family:'Instrument Serif',serif; font-size:1rem; color:#2F3526;">${prop.price}</span>
                                </div>

                                ${prop.areaTerreno > 0 ? `
                                <div style="display:flex; justify-content:space-between; align-items:baseline; padding-bottom:0.75rem; border-bottom:1px solid rgba(62,74,63,0.08);">
                                    <span class="label">Terreno</span>
                                    <span style="font-family:'Instrument Sans',sans-serif; font-size:0.9rem; color:#2F3526;">${prop.areaTerreno} ha</span>
                                </div>
                                ` : ''}

                                ${prop.areaConstruida > 0 ? `
                                <div style="display:flex; justify-content:space-between; align-items:baseline; padding-bottom:0.75rem; border-bottom:1px solid rgba(62,74,63,0.08);">
                                    <span class="label">Construída</span>
                                    <span style="font-family:'Instrument Sans',sans-serif; font-size:0.9rem; color:#2F3526;">${prop.areaConstruida} m²</span>
                                </div>
                                ` : ''}

                                ${prop.quartos > 0 ? `
                                <div style="display:flex; justify-content:space-between; align-items:baseline; padding-bottom:0.75rem; border-bottom:1px solid rgba(62,74,63,0.08);">
                                    <span class="label">Quartos</span>
                                    <span style="font-family:'Instrument Sans',sans-serif; font-size:0.9rem; color:#2F3526;">${prop.quartos}</span>
                                </div>
                                ` : ''}

                                <div style="display:flex; justify-content:space-between; align-items:baseline; padding-bottom:0.75rem; border-bottom:1px solid rgba(62,74,63,0.08);">
                                    <span class="label">Tipologia</span>
                                    <span style="font-family:'Instrument Sans',sans-serif; font-size:0.9rem; color:#2F3526;">${prop.tipologia || '—'}</span>
                                </div>

                                <div style="display:flex; justify-content:space-between; align-items:baseline;">
                                    <span class="label">Localização</span>
                                    <span style="font-family:'Instrument Sans',sans-serif; font-size:0.9rem; color:#2F3526;">${prop.location}</span>
                                </div>

                            </div>

                            <div style="padding:1.25rem; background:#FAF7F2; border-top:1px solid rgba(62,74,63,0.1);">
                                <button
                                    data-route="sell"
                                    style="width:100%; background:#2F3526; color:#FAF7F2; border:none; padding:1rem; font-family:'Instrument Sans',sans-serif; font-size:0.7rem; letter-spacing:0.25em; text-transform:uppercase; cursor:pointer; transition:background 0.3s;"
                                    onmouseover="this.style.background='#9C7A3C'"
                                    onmouseout="this.style.background='#2F3526'"
                                >
                                    Solicitar Informações
                                </button>
                                <p style="font-family:'Instrument Sans',sans-serif; font-size:0.7rem; color:#9C7A3C; text-align:center; margin-top:0.75rem; letter-spacing:0.05em;">Resposta em menos de 24 horas</p>
                            </div>

                        </div>
                    </div>

                </div>

            </div>
        </section>
    `;
}

export function initPropertyDetail(id) {
    const prop = appData.properties.find(p => p.id === parseInt(id));
    if (!prop) return;

    const galleryImages = prop.gallery_ids && prop.gallery_ids.trim().length > 0
        ? prop.gallery_ids
            .replace(/\r/g, '')
            .replace(/\n/g, ',')
            .split(',')
            .map(img => img.trim())
            .filter(img => img.length > 5)
        : [];

    const images = galleryImages.length > 0 ? galleryImages : [prop.image];
    let currentIndex = 0;

    function updateImage(index) {
        currentIndex = (index + images.length) % images.length;

        const main    = document.getElementById('main-gallery-image');
        const lightbox = document.getElementById('lightbox-image');
        const counter  = document.getElementById('img-counter');

        if (main) {
            main.style.opacity = '0';
            setTimeout(() => {
                main.src = images[currentIndex];
                main.style.opacity = '1';
            }, 200);
        }
        if (lightbox) lightbox.src = images[currentIndex];
        if (counter)  counter.innerText = `${currentIndex + 1} / ${images.length}`;

        document.querySelectorAll('[data-thumb]').forEach(btn => {
            btn.style.borderColor = parseInt(btn.dataset.thumb) === currentIndex
                ? '#2F3526' : 'transparent';
        });
    }

    // Main image → open lightbox
    const mainImg = document.getElementById('main-gallery-image');
    if (mainImg) mainImg.addEventListener('click', () => {
        const lb = document.getElementById('lightbox');
        const lbImg = document.getElementById('lightbox-image');
        if (lb && lbImg) {
            lbImg.src = images[currentIndex];
            lb.style.display = 'flex';
        }
    });

    // Lightbox close
    const closeBtn = document.getElementById('lightbox-close');
    if (closeBtn) closeBtn.addEventListener('click', () => {
        document.getElementById('lightbox').style.display = 'none';
    });

    // Lightbox background click
    const lightbox = document.getElementById('lightbox');
    if (lightbox) lightbox.addEventListener('click', e => {
        if (e.target === lightbox) lightbox.style.display = 'none';
    });

    // Main gallery arrows
    const btnPrev = document.getElementById('btn-prev');
    const btnNext = document.getElementById('btn-next');
    if (btnPrev) btnPrev.addEventListener('click', e => { e.stopPropagation(); updateImage(currentIndex - 1); });
    if (btnNext) btnNext.addEventListener('click', e => { e.stopPropagation(); updateImage(currentIndex + 1); });

    // Lightbox arrows
    const lbPrev = document.getElementById('lightbox-prev');
    const lbNext = document.getElementById('lightbox-next');
    if (lbPrev) lbPrev.addEventListener('click', e => { e.stopPropagation(); updateImage(currentIndex - 1); });
    if (lbNext) lbNext.addEventListener('click', e => { e.stopPropagation(); updateImage(currentIndex + 1); });

    // Thumbnail clicks
    document.querySelectorAll('[data-thumb]').forEach(btn => {
        btn.addEventListener('click', () => updateImage(parseInt(btn.dataset.thumb)));
    });

    // Keyboard navigation
    document.addEventListener('keydown', e => {
        const lb = document.getElementById('lightbox');
        if (e.key === 'ArrowLeft')  updateImage(currentIndex - 1);
        if (e.key === 'ArrowRight') updateImage(currentIndex + 1);
        if (e.key === 'Escape' && lb) lb.style.display = 'none';
    });
}