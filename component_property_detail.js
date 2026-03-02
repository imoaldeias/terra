import { appData } from './content_data.js';

export function renderPropertyDetail(id) {
    const prop = appData.properties.find(p => p.id === parseInt(id));

    if (!prop) {
        return `
            <div class="py-40 text-center text-gray-500">
                Propriedade não encontrada.
            </div>
        `;
    }

    // GALERIA
    const galleryImages = prop.gallery_ids
        ? prop.gallery_ids.split(',').map(img => img.trim()).filter(Boolean)
        : [];

    const imagesToShow = galleryImages.length > 0
        ? galleryImages
        : [prop.image];

    const thumbnails = imagesToShow.slice(1); // excluir principal

    return `
        <article class="bg-white min-h-screen">

            <!-- HERO IMAGE -->
            <div class="h-[70vh] w-full overflow-hidden bg-gray-100">
                <img 
                    id="main-gallery-image"
                    src="${imagesToShow[0]}"
                    alt="${prop.title}"
                    class="w-full h-full object-cover transition-all duration-700"
                >
            </div>

            <!-- MAIN CONTENT -->
            <div class="max-w-7xl mx-auto px-6 py-20">

                <!-- BACK BUTTON -->
                <button 
                    data-route="properties"
                    class="mb-12 flex items-center gap-3 text-xs uppercase tracking-[0.25em] font-semibold text-gray-500 hover:text-black transition"
                >
                    <i data-lucide="arrow-left" class="w-4 h-4"></i>
                    Voltar ao Portfólio
                </button>

                <div class="grid grid-cols-1 lg:grid-cols-3 gap-20">

                    <!-- LEFT COLUMN -->
                    <div class="lg:col-span-2 space-y-16">

                        <!-- HEADER -->
                        <div class="space-y-6">
                            
                            <span class="text-xs uppercase tracking-[0.25em] font-semibold text-gray-400">
                                ${prop.tipologia} • ${prop.location}
                            </span>

                            <h1 class="text-5xl lg:text-6xl font-serif font-light leading-tight">
                                ${prop.title}
                            </h1>

                        </div>

                        <!-- DESCRIPTION -->
                        <div class="space-y-8">
                            <h2 class="text-2xl font-serif font-light">
                                Descrição
                            </h2>

                            <div class="text-base font-light leading-relaxed text-gray-600 whitespace-pre-line">
                                ${prop.description || 'Informação sob consulta.'}
                            </div>
                        </div>

                        <!-- CARACTERÍSTICAS -->
                        <div class="space-y-10">

                            <h2 class="text-2xl font-serif font-light">
                                Características
                            </h2>

                            <div class="grid grid-cols-1 sm:grid-cols-2 gap-y-6 gap-x-16 border-t border-gray-100 pt-10 text-sm font-light text-gray-700">

                                <div class="flex justify-between border-b border-gray-100 pb-4">
                                    <span>Área Terreno</span>
                                    <span>${prop.areaTerreno} ha</span>
                                </div>

                                <div class="flex justify-between border-b border-gray-100 pb-4">
                                    <span>Área Construída</span>
                                    <span>${prop.areaConstruida} m²</span>
                                </div>

                                <div class="flex justify-between border-b border-gray-100 pb-4">
                                    <span>Quartos</span>
                                    <span>${prop.quartos || '-'}</span>
                                </div>

                                <div class="flex justify-between border-b border-gray-100 pb-4">
                                    <span>Tipologia</span>
                                    <span>${prop.tipologia}</span>
                                </div>

                                <div class="flex justify-between border-b border-gray-100 pb-4">
                                    <span>Localização</span>
                                    <span>${prop.location}</span>
                                </div>

                                <div class="flex justify-between border-b border-gray-100 pb-4">
                                    <span>Referência</span>
                                    <span>TP-${prop.id}</span>
                                </div>

                            </div>
                        </div>

                        <!-- GALLERY GRID -->
                        ${thumbnails.length > 0 ? `
                        <div class="space-y-10">

                            <h2 class="text-2xl font-serif font-light">
                                Galeria
                            </h2>

                            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                                ${thumbnails.map(img => `
                                    <div 
                                        class="aspect-[4/3] overflow-hidden bg-gray-100 cursor-pointer group"
                                        onclick="document.getElementById('main-gallery-image').src='${img}'"
                                    >
                                        <img 
                                            src="${img}" 
                                            class="w-full h-full object-cover transition duration-700 group-hover:scale-105"
                                            loading="lazy"
                                        >
                                    </div>
                                `).join('')}
                            </div>

                        </div>
                        ` : ''}

                    </div>

                    <!-- RIGHT SIDEBAR -->
                    <div class="lg:col-span-1">

                        <div class="border border-gray-200 p-10 rounded-3xl sticky top-32 space-y-10">

                            <div class="space-y-4">
                                <div class="text-xs uppercase tracking-[0.25em] font-semibold text-gray-400">
                                    Investimento
                                </div>
                                <div class="text-3xl font-serif font-light">
                                    ${prop.price}
                                </div>
                            </div>

                            <div class="border-t border-gray-100 pt-8 space-y-6 text-sm font-light text-gray-600">

                                <div class="flex justify-between">
                                    <span>Terreno</span>
                                    <span>${prop.areaTerreno} ha</span>
                                </div>

                                <div class="flex justify-between">
                                    <span>Construção</span>
                                    <span>${prop.areaConstruida} m²</span>
                                </div>

                                <div class="flex justify-between">
                                    <span>Quartos</span>
                                    <span>${prop.quartos || '-'}</span>
                                </div>

                            </div>

                            <button 
                                data-route="contact"
                                class="w-full border border-black py-4 uppercase tracking-[0.25em] text-xs font-semibold hover:bg-black hover:text-white transition"
                            >
                                Solicitar Informações
                            </button>

                        </div>

                    </div>

                </div>

            </div>

        </article>
    `;
}