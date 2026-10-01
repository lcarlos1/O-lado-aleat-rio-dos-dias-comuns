import React, { useState } from 'react';
import { BookOpen, Sparkles, ArrowRight, Bookmark, Coffee, Check, ExternalLink } from 'lucide-react';
import { BOOK_INFO } from '../data/bookData';
import bookCoverImg from '../assets/images/book_cover_showcase_1790795591431.jpg';

interface HeroProps {
  onOpenRandom: () => void;
  onReadSample: () => void;
  onOpenAutograph: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  onOpenRandom,
  onReadSample,
  onOpenAutograph,
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const [copiedQuote, setCopiedQuote] = useState(false);

  const heroQuote = "A vida não acontece nos grandes eventos. Ela acontece no intervalo. No aleatório.";

  const handleCopyQuote = () => {
    navigator.clipboard.writeText(`"${heroQuote}" — Luiz Carlos dos Santos, O Lado Aleatório dos Dias Comuns`);
    setCopiedQuote(true);
    setTimeout(() => setCopiedQuote(false), 2200);
  };

  return (
    <section id="inicio" className="relative pt-12 pb-20 md:pt-20 md:pb-32 overflow-hidden border-b border-[#EAE3D6]">
      {/* Subtle atmospheric background gradient */}
      <div 
        aria-hidden="true" 
        className="absolute inset-0 pointer-events-none opacity-40 bg-[radial-gradient(ellipse_80%_60%_at_50%_-20%,rgba(215,198,175,0.45),transparent)]" 
      />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Editorial Information & Actions */}
          <div className="lg:col-span-7 flex flex-col items-start space-y-6">
            
            {/* Unboxed Metadata Header (Anti-pill) */}
            <div className="flex items-center gap-2 text-xs uppercase tracking-wider text-[#7A7267] font-medium">
              <span>Luiz Carlos dos Santos</span>
              <span aria-hidden="true">·</span>
              <span>Crônicas Cotidianas</span>
              <span aria-hidden="true">·</span>
              <span>UICLAP 2026</span>
            </div>

            {/* Book Title */}
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-[#1E1D1B] leading-[1.08] tracking-tight text-balance">
              O Lado Aleatório <br />
              <span className="italic font-normal text-[#443E38]">dos Dias Comuns</span>
            </h1>

            {/* Subtitle / Poetic Premise */}
            <p className="font-reading text-lg sm:text-xl text-[#4A453F] leading-relaxed max-w-2xl">
              Um livro sobre o que acontece quando nada acontece. Trinta crônicas sobre o café 
              que esfria na bancada, a chave que já não abre porta alguma e a beleza silenciosa dos 
              intervalos onde a vida realmente mora.
            </p>

            {/* Interactive Quotation Card */}
            <div className="w-full max-w-xl p-5 bg-[#F4EFE6]/70 border-l-2 border-[#8C6D4F] rounded-r-md">
              <blockquote className="font-reading italic text-base text-[#38332E] leading-relaxed">
                "{heroQuote}"
              </blockquote>
              <div className="mt-3 flex items-center justify-between text-xs text-[#7A7267]">
                <span>Trecho do Prefácio · Página 3</span>
                <button
                  onClick={handleCopyQuote}
                  type="button"
                  className="hover:text-[#1E1D1B] transition-colors flex items-center gap-1 cursor-pointer"
                >
                  {copiedQuote ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-700" />
                      <span className="text-emerald-800 font-medium">Copiado</span>
                    </>
                  ) : (
                    <>
                      <span>Copiar trecho</span>
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* Primary Action Zone */}
            <div className="pt-2 flex flex-wrap items-center gap-4 w-full">
              <button
                onClick={onReadSample}
                type="button"
                className="px-6 py-3.5 bg-[#222120] hover:bg-[#383532] text-[#FAF8F5] text-sm font-medium rounded-md shadow-sm transition-all flex items-center gap-2 group cursor-pointer"
              >
                <BookOpen className="w-4 h-4 text-[#D8C7B5]" />
                <span>Ler Degustação (Prefácio)</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </button>

              <button
                onClick={onOpenRandom}
                type="button"
                className="px-5 py-3.5 bg-[#EDE7DC] hover:bg-[#E2DACB] text-[#332F2A] border border-[#D5CABE] text-sm font-medium rounded-md transition-colors flex items-center gap-2 cursor-pointer"
              >
                <Sparkles className="w-4 h-4 text-amber-800" />
                <span>Abrir página ao acaso</span>
              </button>

              <a
                href={BOOK_INFO.printerUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-3.5 text-[#5C5349] hover:text-[#1E1D1B] text-sm font-medium transition-colors inline-flex items-center gap-1.5"
              >
                <span>Comprar na UICLAP</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>

            {/* Physical Specs Bar (Quiet unboxed text) */}
            <div className="pt-4 border-t border-[#E8E1D5] w-full flex flex-wrap items-center gap-y-2 gap-x-6 text-xs text-[#6F675C]">
              <div>
                <span className="text-[#38332D] font-medium">Miolo:</span> Papel Pólen 80g
              </div>
              <span aria-hidden="true" className="text-[#C8BFB2]">·</span>
              <div>
                <span className="text-[#38332D] font-medium">Volume:</span> 158 páginas
              </div>
              <span aria-hidden="true" className="text-[#C8BFB2]">·</span>
              <div>
                <span className="text-[#38332D] font-medium">Tipografia:</span> Times New Roman
              </div>
              <span aria-hidden="true" className="text-[#C8BFB2]">·</span>
              <div>
                <span className="text-[#38332D] font-medium">Impressão:</span> UICLAP
              </div>
            </div>

          </div>

          {/* Right Column: Physical Book Showcase & Interactive Tactile Card */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center">
            <div 
              className="relative w-full max-w-[340px] sm:max-w-[380px] group perspective-[1000px]"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              {/* Decorative backdrop glow */}
              <div 
                aria-hidden="true" 
                className="absolute -inset-4 bg-gradient-to-tr from-[#E6D9C8]/60 to-[#D4C3AC]/40 rounded-2xl blur-xl -z-10 transition-transform duration-500 group-hover:scale-105" 
              />

              {/* Realistic Book Mockup Container */}
              <div 
                className={`relative bg-[#FAF6EE] p-3 sm:p-4 rounded-xl border border-[#DFD6C7] shadow-xl transition-all duration-500 ease-out ${
                  isHovered ? 'rotate-1 -translate-y-2 shadow-2xl' : 'rotate-0 translate-y-0'
                }`}
              >
                {/* Book Cover Image */}
                <div className="relative aspect-[3/4] overflow-hidden rounded-md bg-[#252422] book-shadow">
                  <img
                    src={bookCoverImg}
                    alt="Capa do livro O Lado Aleatório dos Dias Comuns por Luiz Carlos dos Santos"
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-102"
                    referrerPolicy="no-referrer"
                  />

                  {/* Tactile Book Spine / Sheen overlay */}
                  <div className="absolute inset-0 bg-gradient-to-r from-black/25 via-transparent to-white/10 pointer-events-none" />
                  
                  {/* Subtle Bookmark Ribbon */}
                  <div className="absolute top-0 right-8 w-4 h-16 bg-[#8C2D19] shadow-md rounded-b-sm pointer-events-none flex items-end justify-center pb-1">
                    <div className="w-2 h-2 bg-amber-200/50 rounded-full" />
                  </div>

                  {/* Corner Badge - Edição Ampliada */}
                  <div className="absolute bottom-3 left-3 bg-[#1F1E1D]/90 backdrop-blur-xs text-[#EAE4DC] text-[11px] font-sans px-2.5 py-1 rounded">
                    Edição Revista & Ampliada
                  </div>
                </div>

                {/* Tactile interaction cue */}
                <div className="mt-3.5 px-1 flex items-center justify-between text-xs text-[#7A7267]">
                  <span className="flex items-center gap-1.5 font-serif italic text-sm text-[#4E463E]">
                    Brochura · 30 Crônicas
                  </span>
                  <button
                    onClick={onReadSample}
                    className="text-xs text-[#2B2724] font-medium hover:underline inline-flex items-center gap-1 cursor-pointer"
                  >
                    Folhear amostra <ArrowRight className="w-3 h-3" />
                  </button>
                </div>
              </div>

              {/* Ambient quote beneath mockup */}
              <p className="text-center font-reading italic text-xs text-[#7D7467] mt-4">
                "Pode ser aberto ao acaso, numa página qualquer, como quem abre a janela para ver se está chovendo."
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
