import React from 'react';
import { Feather, Layers, BookCheck, ShieldCheck, HeartHandshake, Truck } from 'lucide-react';
import { BOOK_INFO } from '../data/bookData';
import writerDeskImg from '../assets/images/writer_desk_still_life_1790795612307.jpg';

interface PhysicalBookDetailsProps {
  onOpenAutograph: () => void;
}

export const PhysicalBookDetails: React.FC<PhysicalBookDetailsProps> = ({
  onOpenAutograph,
}) => {
  return (
    <section id="o-livro" className="py-20 md:py-28 bg-[#FAF6EE] border-b border-[#EAE2D2]">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Top Header */}
        <div className="max-w-3xl mb-16">
          <div className="flex items-center gap-2 text-xs uppercase tracking-wider text-[#8A7E6E] font-medium mb-2">
            <span>Materialidade & Edição</span>
            <span aria-hidden="true">·</span>
            <span>Edição 2026</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#1E1D1B] tracking-tight">
            A Experiência do Livro Impresso
          </h2>
          <p className="font-reading text-base sm:text-lg text-[#554D43] mt-3">
            Feito para ser levado no bolso do casaco, esquecido sobre a mesa da cozinha 
            e aberto ao acaso enquanto o café passa. Uma publicação pensada nos mínimos detalhes táteis.
          </p>
        </div>

        {/* Feature Grid with Editorial Card Rhythm */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Visual Showcase */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-xl overflow-hidden border border-[#DED4C3] shadow-lg">
              <img
                src={writerDeskImg}
                alt="Mesa de escrita com caderno, xícara de café e luz suave"
                className="w-full h-80 sm:h-96 object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex items-end p-6">
                <p className="font-reading italic text-white text-sm">
                  "Certos livros não são para devorar. São para habitar de manhã cedo com uma caneca na mão."
                </p>
              </div>
            </div>
          </div>

          {/* Specifications and Highlights */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
            
            <div className="p-6 bg-[#FFFDF9] border border-[#E4DBCB] rounded-lg">
              <div className="w-9 h-9 rounded-md bg-[#F2E8DC] text-[#8C5D38] flex items-center justify-center mb-4">
                <Layers className="w-5 h-5" />
              </div>
              <h3 className="font-serif text-xl font-semibold text-[#201E1C]">
                Miolo em Papel Pólen 80g
              </h3>
              <p className="font-reading text-sm text-[#5D554B] mt-2 leading-relaxed">
                Tonalidade suave levemente amarelada que não reflete a luz solar ou de luminária, 
                garantindo conforto prolongado para os olhos.
              </p>
            </div>

            <div className="p-6 bg-[#FFFDF9] border border-[#E4DBCB] rounded-lg">
              <div className="w-9 h-9 rounded-md bg-[#F2E8DC] text-[#8C5D38] flex items-center justify-center mb-4">
                <Feather className="w-5 h-5" />
              </div>
              <h3 className="font-serif text-xl font-semibold text-[#201E1C]">
                Composto em Times New Roman
              </h3>
              <p className="font-reading text-sm text-[#5D554B] mt-2 leading-relaxed">
                Tipografia sóbria e tradicional que reverencia os mestres da crônica brasileira do século XX, 
                com entrelinha arejada e confortável.
              </p>
            </div>

            <div className="p-6 bg-[#FFFDF9] border border-[#E4DBCB] rounded-lg">
              <div className="w-9 h-9 rounded-md bg-[#F2E8DC] text-[#8C5D38] flex items-center justify-center mb-4">
                <BookCheck className="w-5 h-5" />
              </div>
              <h3 className="font-serif text-xl font-semibold text-[#201E1C]">
                Parte IV Inédita: Ainda
              </h3>
              <p className="font-reading text-sm text-[#5D554B] mt-2 leading-relaxed">
                Esta edição revisada e ampliada conta com 5 crônicas complementares, escritas após a finalização 
                do manuscrito original, expandindo a obra para 158 páginas.
              </p>
            </div>

            <div className="p-6 bg-[#FFFDF9] border border-[#E4DBCB] rounded-lg">
              <div className="w-9 h-9 rounded-md bg-[#F2E8DC] text-[#8C5D38] flex items-center justify-center mb-4">
                <Truck className="w-5 h-5" />
              </div>
              <h3 className="font-serif text-xl font-semibold text-[#201E1C]">
                Impressão Oficial UICLAP
              </h3>
              <p className="font-reading text-sm text-[#5D554B] mt-2 leading-relaxed">
                Produzido e distribuído pela renomada plataforma brasileira de publicação independente, 
                com entrega para todo o território nacional.
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
