import React from 'react';
import { ExternalLink, Pen, Truck, ShieldCheck, Heart, Sparkles, BookOpen } from 'lucide-react';
import { BOOK_INFO } from '../data/bookData';

interface PurchaseSectionProps {
  onOpenAutograph: () => void;
  onReadSample: () => void;
}

export const PurchaseSection: React.FC<PurchaseSectionProps> = ({
  onOpenAutograph,
  onReadSample,
}) => {
  return (
    <section id="adquirir" className="py-20 md:py-28 bg-[#FAF8F5] relative">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="flex items-center justify-center gap-2 text-xs uppercase tracking-wider text-[#8A7E6E] font-medium mb-2">
            <span>Disponibilidade & Envio</span>
            <span aria-hidden="true">·</span>
            <span>Edição Física</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#1E1D1B] tracking-tight">
            Adquira o Seu Exemplar
          </h2>
          <p className="font-reading text-base text-[#574F45] mt-3">
            O livro é impresso sob demanda com a mais alta qualidade gráfica em papel Pólen 80g 
            pela editora UICLAP e enviado diretamente para a sua casa.
          </p>
        </div>

        {/* Purchase Cards (Lead options) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          
          {/* Option 1: Official UICLAP Store */}
          <div className="p-8 sm:p-10 bg-[#FFFDF9] border-2 border-[#1E1D1B] rounded-2xl flex flex-col justify-between shadow-md relative">
            <div className="absolute -top-3.5 right-6 bg-[#2B2724] text-white text-[11px] font-sans px-3 py-0.5 rounded-full uppercase tracking-wider">
              Canal Oficial
            </div>

            <div className="space-y-4">
              <span className="text-xs uppercase tracking-wider text-[#7A7061] font-medium">
                Impressão Imediata
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl text-[#1E1D1B] font-semibold">
                Comprar na UICLAP
              </h3>
              <p className="font-reading text-sm text-[#574F44] leading-relaxed">
                Adquira seu exemplar diretamente na plataforma da UICLAP com cálculo automático de frete 
                e pagamento facilitado via cartão de crédito, boleto ou Pix.
              </p>

              <ul className="text-xs text-[#62594D] space-y-2 pt-2 border-t border-[#F0E8DC]">
                <li className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-emerald-700 shrink-0" />
                  <span>Miolo em papel Pólen 80g encorpado</span>
                </li>
                <li className="flex items-center gap-2">
                  <Truck className="w-4 h-4 text-amber-800 shrink-0" />
                  <span>Envio para todo o Brasil com código de rastreio</span>
                </li>
                <li className="flex items-center gap-2">
                  <BookOpen className="w-4 h-4 text-stone-700 shrink-0" />
                  <span>158 páginas com todas as 30 crônicas</span>
                </li>
              </ul>
            </div>

            <div className="mt-8 pt-4">
              <a
                href={BOOK_INFO.printerUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3.5 px-6 bg-[#1E1D1B] hover:bg-[#383431] text-white text-sm font-medium rounded-lg transition-colors flex items-center justify-center gap-2 shadow-xs"
              >
                <span>Acessar UICLAP Oficial</span>
                <ExternalLink className="w-4 h-4" />
              </a>
              <span className="text-[11px] text-[#8C8274] text-center block mt-2 font-mono">
                www.uiclap.com
              </span>
            </div>
          </div>

          {/* Option 2: Autographed Edition */}
          <div className="p-8 sm:p-10 bg-[#FAF4EA] border border-[#DDD3C0] rounded-2xl flex flex-col justify-between shadow-xs">
            <div className="space-y-4">
              <span className="text-xs uppercase tracking-wider text-[#8C5D38] font-medium flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5" />
                Edição Especial
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl text-[#1E1D1B] font-semibold">
                Exemplar com Dedicatória
              </h3>
              <p className="font-reading text-sm text-[#574F44] leading-relaxed">
                Quer presentear alguém ou guardar uma edição com mensagem escrita à mão por Luiz Carlos dos Santos? 
                Envie sua solicitação diretamente ao autor.
              </p>

              <ul className="text-xs text-[#62594D] space-y-2 pt-2 border-t border-[#EAE0CD]">
                <li className="flex items-center gap-2">
                  <Pen className="w-4 h-4 text-[#8C5D38] shrink-0" />
                  <span>Dedicatória personalizada com o nome que desejar</span>
                </li>
                <li className="flex items-center gap-2">
                  <Heart className="w-4 h-4 text-[#8C5D38] shrink-0" />
                  <span>Acompanha marcador de páginas temático</span>
                </li>
                <li className="flex items-center gap-2">
                  <Truck className="w-4 h-4 text-[#8C5D38] shrink-0" />
                  <span>Despachado de Toledo - PR diretamente pelo autor</span>
                </li>
              </ul>
            </div>

            <div className="mt-8 pt-4">
              <button
                onClick={onOpenAutograph}
                type="button"
                className="w-full py-3.5 px-6 bg-[#E8DEC8] hover:bg-[#DBCFB3] text-[#292622] text-sm font-medium rounded-lg border border-[#C5B79B] transition-colors flex items-center justify-center gap-2 cursor-pointer"
              >
                <Pen className="w-4 h-4 text-[#8C5D38]" />
                <span>Pedir Exemplar Autografado</span>
              </button>
              <span className="text-[11px] text-[#8C8274] text-center block mt-2">
                Contato direto via formulário do leitor
              </span>
            </div>
          </div>

        </div>

        {/* Reassurance banner */}
        <div className="mt-14 max-w-2xl mx-auto text-center font-reading italic text-xs text-[#7A7163]">
          "Composto em Times New Roman, com miolo em papel Pólen 80g, e impresso por UICLAP. 
          Toledo, PR : LSantos, 2026."
        </div>

      </div>
    </section>
  );
};
