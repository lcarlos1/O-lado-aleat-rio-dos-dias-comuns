import React, { useState } from 'react';
import { 
  Coffee, Key, MessageSquare, Users, CloudRain, 
  Umbrella, Home, Sparkles, ArrowRight, Volume2 
} from 'lucide-react';
import { ORDINARY_MOMENTS, CRONICAS } from '../data/bookData';

interface OrdinaryMomentsGeneratorProps {
  onSelectCronica: (id: string) => void;
}

export const OrdinaryMomentsGenerator: React.FC<OrdinaryMomentsGeneratorProps> = ({
  onSelectCronica,
}) => {
  const [selectedId, setSelectedId] = useState<string>(ORDINARY_MOMENTS[0].id);

  const selectedMoment = ORDINARY_MOMENTS.find(m => m.id === selectedId) || ORDINARY_MOMENTS[0];

  const getIcon = (id: string) => {
    switch (id) {
      case 'cafe-esfriou': return <Coffee className="w-5 h-5 text-amber-900" />;
      case 'chave-perdida': return <Key className="w-5 h-5 text-amber-800" />;
      case 'esperando-mensagem': return <MessageSquare className="w-5 h-5 text-blue-900" />;
      case 'trocou-fila': return <Users className="w-5 h-5 text-stone-700" />;
      case 'chuva-varal': return <CloudRain className="w-5 h-5 text-slate-700" />;
      case 'guarda-chuva': return <Umbrella className="w-5 h-5 text-zinc-800" />;
      default: return <Sparkles className="w-5 h-5 text-amber-700" />;
    }
  };

  return (
    <section id="momentos" className="py-20 md:py-28 bg-[#FAF8F5] border-b border-[#EAE3D6] relative">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-2 text-xs uppercase tracking-wider text-[#8A7E6E] font-medium mb-2">
            <span>Experiência Interativa</span>
            <span aria-hidden="true">·</span>
            <span>O Invisível Cotidiano</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#1E1D1B] tracking-tight text-balance">
            O que aconteceu no seu dia hoje?
          </h2>
          <p className="font-reading text-base sm:text-lg text-[#524B42] mt-3">
            A literatura de Luiz Carlos dos Santos não busca heróis ou grandes epopeias. 
            Escolha uma das pequenas derrotas domésticas abaixo e veja como o livro 
            transforma o detalhe miúdo em poesia límpida.
          </p>
        </div>

        {/* Interactive Grid of Triggers */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 mb-8">
          {ORDINARY_MOMENTS.map((moment) => {
            const isActive = moment.id === selectedId;
            return (
              <button
                key={moment.id}
                onClick={() => setSelectedId(moment.id)}
                type="button"
                className={`p-4 rounded-lg text-left transition-all duration-200 border cursor-pointer flex flex-col justify-between h-32 ${
                  isActive
                    ? 'bg-[#F2E8DC] border-[#8C6D4F] shadow-sm ring-1 ring-[#8C6D4F]'
                    : 'bg-[#FFFDF9] border-[#E8DFC9] hover:bg-[#F9F5EC] hover:border-[#D5C6AC]'
                }`}
              >
                <div className="p-2 bg-white/80 rounded-md w-fit shadow-2xs">
                  {getIcon(moment.id)}
                </div>
                <div>
                  <p className="text-xs font-semibold text-[#292623] line-clamp-2 leading-snug">
                    {moment.trigger}
                  </p>
                  <span className="text-[11px] text-[#7A7061] italic mt-0.5 block truncate">
                    {moment.mood}
                  </span>
                </div>
              </button>
            );
          })}
        </div>

        {/* Selected Moment Resonance Box (Editorial Paper Format) */}
        <div className="bg-[#FFFDF9] border border-[#DFD5C2] rounded-xl p-6 sm:p-10 shadow-sm relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-8 space-y-4">
              <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[#8C5D38]">
                <span>Ressonância Literária</span>
                <span aria-hidden="true">·</span>
                <span>Crônica: {selectedMoment.cronicaTitle}</span>
              </div>

              <blockquote className="font-reading text-xl sm:text-2xl text-[#22201D] leading-relaxed italic border-l-2 border-[#8C5D38] pl-4 sm:pl-6 py-1">
                "{selectedMoment.excerpt}"
              </blockquote>

              <p className="font-sans text-xs text-[#7A7163]">
                Do livro <span className="font-serif italic font-semibold">O Lado Aleatório dos Dias Comuns</span>, de Luiz Carlos dos Santos.
              </p>
            </div>

            <div className="lg:col-span-4 flex flex-col items-start lg:items-end justify-center pt-4 lg:pt-0 border-t lg:border-t-0 lg:border-l border-[#EFE7D8] lg:pl-8">
              <button
                onClick={() => onSelectCronica(selectedMoment.cronicaId)}
                type="button"
                className="w-full sm:w-auto px-6 py-3.5 bg-[#2B2724] hover:bg-[#3F3A36] text-white rounded-md text-xs font-medium transition-colors flex items-center justify-center gap-2 shadow-xs cursor-pointer"
              >
                <span>Ler Crônica Completa</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <span className="text-[11px] text-[#8C8375] mt-2 text-center lg:text-right">
                Acesse o texto integral no leitor digital
              </span>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
