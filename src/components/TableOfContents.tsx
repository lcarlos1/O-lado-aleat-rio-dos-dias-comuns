import React, { useState } from 'react';
import { Search, BookOpen, ChevronRight, Bookmark } from 'lucide-react';
import { CRONICAS, PARTS, PREFACIO, Cronica } from '../data/bookData';

interface TableOfContentsProps {
  onSelectCronica: (id: string) => void;
}

export const TableOfContents: React.FC<TableOfContentsProps> = ({
  onSelectCronica,
}) => {
  const [selectedPart, setSelectedPart] = useState<number | 'all'>('all');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredCronicas = CRONICAS.filter((item) => {
    const matchesPart = selectedPart === 'all' || item.partNumber === selectedPart;
    const matchesQuery = 
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.tagline.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.theme.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesPart && matchesQuery;
  });

  return (
    <section id="sumario" className="py-20 md:py-28 bg-[#FAF6EE] border-b border-[#E8DFC8]">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header (Anti-pill, clear editorial hierarchy) */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="flex items-center gap-2 text-xs uppercase tracking-wider text-[#8A7E6E] font-medium mb-2">
              <span>Estrutura Editorial</span>
              <span aria-hidden="true">·</span>
              <span>158 Páginas</span>
              <span aria-hidden="true">·</span>
              <span>30 Crônicas</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#1E1D1B] tracking-tight">
              Sumário Completo da Obra
            </h2>
            <p className="font-reading text-base text-[#574F45] mt-2 max-w-xl">
              Organizado em quatro partes que percorrem a anatomia dos dias úteis, 
              os acasos da cidade e o rastro afetivo deixado pelas coisas simples.
            </p>
          </div>

          {/* Search Input */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 text-[#8C7D6B] absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type="text"
              placeholder="Buscar crônica ou tema..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 bg-[#FFFDF9] border border-[#DDD4C5] rounded-md text-sm text-[#2D2A26] placeholder-[#8F8475] focus:outline-hidden focus:ring-1 focus:ring-[#8C5D38] transition-all"
            />
          </div>
        </div>

        {/* Prefácio Feature Card */}
        <div className="mb-10 p-6 sm:p-7 bg-[#FFFDF9] border border-[#E2D8C7] rounded-lg flex flex-col sm:flex-row sm:items-center justify-between gap-4 shadow-xs">
          <div className="space-y-1">
            <span className="text-xs uppercase tracking-wider text-[#8A7E6E] font-medium">Abertura</span>
            <h3 className="font-serif text-2xl text-[#1E1D1B] font-semibold">
              Prefácio: Eu não sabia que estava escrevendo este livro
            </h3>
            <p className="font-reading italic text-sm text-[#61574C]">
              "A vida não acontece nos grandes eventos. Ela acontece no intervalo. No aleatório."
            </p>
          </div>
          <button
            onClick={() => onSelectCronica('prefacio')}
            type="button"
            className="self-start sm:self-center px-4 py-2.5 text-xs font-medium text-[#292623] bg-[#EFE9DD] hover:bg-[#E2DACB] border border-[#D5CABB] rounded-md transition-colors flex items-center gap-2 cursor-pointer shrink-0"
          >
            <BookOpen className="w-4 h-4 text-[#8C5D38]" />
            <span>Ler Prefácio (pág. 3)</span>
          </button>
        </div>

        {/* Filter Controls (Segmented clean buttons) */}
        <div className="flex flex-wrap items-center gap-2 mb-8 border-b border-[#E2D8C7] pb-4">
          <button
            onClick={() => setSelectedPart('all')}
            className={`px-3.5 py-1.5 text-xs font-medium rounded-md transition-colors cursor-pointer ${
              selectedPart === 'all'
                ? 'bg-[#2B2724] text-white shadow-xs'
                : 'text-[#62594E] hover:text-[#1E1D1B] hover:bg-[#EFE7D8]'
            }`}
          >
            Todas as Partes ({CRONICAS.length})
          </button>
          {PARTS.map((part) => (
            <button
              key={part.number}
              onClick={() => setSelectedPart(part.number)}
              className={`px-3.5 py-1.5 text-xs font-medium rounded-md transition-colors cursor-pointer ${
                selectedPart === part.number
                  ? 'bg-[#2B2724] text-white shadow-xs'
                  : 'text-[#62594E] hover:text-[#1E1D1B] hover:bg-[#EFE7D8]'
              }`}
            >
              {part.title} ({part.count})
            </button>
          ))}
        </div>

        {/* Crônicas Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {filteredCronicas.map((cronica) => (
            <div
              key={cronica.id}
              onClick={() => onSelectCronica(cronica.id)}
              className="p-5 sm:p-6 bg-[#FFFDF9] border border-[#E6DDCE] hover:border-[#BFB19C] rounded-lg transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md cursor-pointer flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between text-xs text-[#8A7E6E] mb-2 font-mono">
                  <span>{cronica.part}</span>
                  <span className="text-[#3A352F] font-semibold">pág. {cronica.page}</span>
                </div>
                
                <h3 className="font-serif text-xl sm:text-2xl text-[#1E1D1B] group-hover:text-[#8C4E2D] transition-colors font-semibold">
                  {cronica.title}
                </h3>

                <p className="font-reading text-sm text-[#5C5347] mt-2 line-clamp-2 leading-relaxed">
                  {cronica.tagline}
                </p>
              </div>

              <div className="mt-5 pt-3 border-t border-[#F0E8DC] flex items-center justify-between text-xs text-[#7D7364]">
                <span className="italic">{cronica.theme}</span>
                <span className="text-[#2B2724] font-medium group-hover:translate-x-1 transition-transform inline-flex items-center gap-1">
                  Ler texto <ChevronRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </div>
          ))}
        </div>

        {filteredCronicas.length === 0 && (
          <div className="py-12 text-center text-[#736A5E] font-reading">
            Nenhuma crônica encontrada para o termo "{searchQuery}".
          </div>
        )}

      </div>
    </section>
  );
};
