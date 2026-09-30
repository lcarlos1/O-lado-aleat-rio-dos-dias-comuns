import React, { useState } from 'react';
import { Quote, Copy, Check, ArrowUpRight } from 'lucide-react';
import { NOTABLE_QUOTES } from '../data/bookData';

interface QuotesGalleryProps {
  onOpenReader: (source: string) => void;
}

export const QuotesGallery: React.FC<QuotesGalleryProps> = ({ onOpenReader }) => {
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

  const handleCopy = (quote: string, source: string, index: number) => {
    navigator.clipboard.writeText(`"${quote}" — Luiz Carlos dos Santos, O Lado Aleatório dos Dias Comuns (${source})`);
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  return (
    <section className="py-20 md:py-28 bg-[#FAF8F5] border-b border-[#EAE2D4]">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="flex items-center gap-2 text-xs uppercase tracking-wider text-[#8A7E6E] font-medium mb-2">
            <span>Passagens & Pensamentos</span>
            <span aria-hidden="true">·</span>
            <span>Extratos da Obra</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#1E1D1B] tracking-tight">
            Frases dos Dias Comuns
          </h2>
          <p className="font-reading text-base text-[#574F45] mt-2">
            Linhas que capturam o que a gente sente no silêncio da cozinha ou na pressa da calçada, 
            mas raramente coloca em palavras.
          </p>
        </div>

        {/* Quotes Masonry / Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {NOTABLE_QUOTES.map((item, idx) => (
            <div
              key={idx}
              className="p-6 bg-[#FFFDF9] border border-[#E6DDCE] hover:border-[#C4B7A2] rounded-xl flex flex-col justify-between transition-all duration-200 hover:-translate-y-1 hover:shadow-md group"
            >
              <div>
                <Quote className="w-6 h-6 text-[#A08870]/40 mb-3" />
                <p className="font-reading italic text-base text-[#24211E] leading-relaxed">
                  "{item.quote}"
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-[#F2EBDE] flex items-center justify-between text-xs text-[#7A7061]">
                <div>
                  <span className="font-medium text-[#38332D]">{item.source}</span>
                  <span className="font-mono text-[#8C8375] block">pág. {item.page}</span>
                </div>

                <button
                  onClick={() => handleCopy(item.quote, item.source, idx)}
                  type="button"
                  className="p-1.5 rounded hover:bg-[#F2ECE1] transition-colors cursor-pointer text-[#5C5346] hover:text-[#1E1D1B]"
                  title="Copiar citação com créditos"
                >
                  {copiedIndex === idx ? (
                    <Check className="w-4 h-4 text-emerald-700" />
                  ) : (
                    <Copy className="w-4 h-4" />
                  )}
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
