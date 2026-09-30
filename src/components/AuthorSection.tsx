import React from 'react';
import { MapPin, Calendar, BookOpen, PenTool, Mail } from 'lucide-react';
import { BOOK_INFO } from '../data/bookData';

interface AuthorSectionProps {
  onOpenAutograph: () => void;
}

export const AuthorSection: React.FC<AuthorSectionProps> = ({ onOpenAutograph }) => {
  return (
    <section id="autor" className="py-20 md:py-28 bg-[#FAF6EE] border-b border-[#EAE2D2]">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Atmospheric street/author visual */}
          <div className="lg:col-span-5">
            <div className="relative rounded-2xl overflow-hidden border border-[#DCD3C2] shadow-md">
              <img
                src="/src/assets/images/bakery_morning_street_1790795622475.jpg"
                alt="Rua de bairro em Toledo ao amanhecer com padaria tradicional"
                className="w-full h-[400px] object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent flex flex-col justify-end p-6 text-white">
                <span className="font-mono text-xs text-[#EAE2D5] uppercase tracking-wider">
                  Cenário de Inspiração
                </span>
                <p className="font-serif text-lg font-semibold mt-1">
                  A cidade vista da janela da padaria
                </p>
                <p className="text-xs text-stone-300 font-reading italic mt-1">
                  Toledo, Paraná · Onde os dias comuns ganham forma literária
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Narrative Biography */}
          <div className="lg:col-span-7 space-y-6">
            
            <div className="flex items-center gap-2 text-xs uppercase tracking-wider text-[#8A7E6E] font-medium">
              <span>Sobre o Autor</span>
              <span aria-hidden="true">·</span>
              <span>Crônica Brasileira</span>
              <span aria-hidden="true">·</span>
              <span>Toledo - PR</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#1E1D1B] tracking-tight">
              Luiz Carlos dos Santos
            </h2>

            <div className="font-reading text-base sm:text-lg text-[#474037] space-y-4 leading-relaxed">
              <p>
                Luiz Carlos dos Santos escreve a partir da fricção diária com a realidade comum. 
                Não se interessa pelos episódios espetaculares ou pelos dias que entram nas enciclopédias: 
                seu olhar se demora naquilo que quase todo mundo esquece de notar.
              </p>
              <p>
                "Escrevia na segunda-feira, porque a segunda pesa. Na terça, porque a terça finge que é segunda. 
                Na quarta, porque na quarta a semana já cansa." Foi observando a senhora que conta moedas 
                para pagar dois pingados e o homem que carrega um buquê de flores embrulhado em papel pardo 
                que este livro tomou corpo ao longo dos anos.
              </p>
              <p className="italic text-[#2F2B26] border-l-2 border-[#8C6D4F] pl-4">
                "Espero que em alguma dessas linhas você se reconheça. Não no extraordinário. No comum. 
                Que é onde, no fim, a gente mora."
              </p>
            </div>

            {/* Author details in unboxed clean typography */}
            <div className="pt-4 border-t border-[#E6DECf] flex flex-wrap gap-6 text-xs text-[#6F675B]">
              <div className="flex items-center gap-1.5">
                <MapPin className="w-4 h-4 text-[#8C5D38]" />
                <span>Toledo, Paraná, Brasil</span>
              </div>
              <div className="flex items-center gap-1.5">
                <BookOpen className="w-4 h-4 text-[#8C5D38]" />
                <span>30 crônicas em 158 páginas</span>
              </div>
              <div className="flex items-center gap-1.5">
                <PenTool className="w-4 h-4 text-[#8C5D38]" />
                <span>Diagramação, revisão e capa autorais</span>
              </div>
            </div>

            <div className="pt-2">
              <button
                onClick={onOpenAutograph}
                type="button"
                className="px-5 py-3 bg-[#EAE2D4] hover:bg-[#DDD3C2] text-[#2D2A26] rounded-md text-xs font-medium transition-colors inline-flex items-center gap-2 cursor-pointer border border-[#CEC2AE]"
              >
                <Mail className="w-4 h-4 text-[#8C5D38]" />
                <span>Solicitar exemplar autografado / Falar com o autor</span>
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
