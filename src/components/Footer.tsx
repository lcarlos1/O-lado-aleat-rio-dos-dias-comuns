import React, { useState } from 'react';
import { BookOpen, ChevronUp, FileText } from 'lucide-react';
import { BOOK_INFO } from '../data/bookData';

export const Footer: React.FC = () => {
  const [showColophon, setShowColophon] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#FAF6EE] border-t border-[#E6DDCC] pt-16 pb-12 text-xs text-[#6F6659]">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Main Footer Row */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-[#EAE1D1]">
          
          <div className="md:col-span-5 space-y-3">
            <h4 className="font-serif text-xl text-[#1F1D1A] font-semibold">
              O Lado Aleatório dos Dias Comuns
            </h4>
            <p className="font-reading text-sm text-[#5C5346] max-w-sm leading-relaxed">
              30 crônicas cotidianas e aleatórias sobre o que acontece quando nada acontece. 
              Uma reflexão atenta sobre a textura e os silêncios dos nossos dias.
            </p>
            <div className="text-xs text-[#807667]">
              <span>© 2026 Luiz Carlos dos Santos. Todos os direitos reservados.</span>
            </div>
          </div>

          <div className="md:col-span-4 space-y-2">
            <h5 className="font-sans font-semibold text-xs uppercase tracking-wider text-[#353029]">
              Ficha Técnica
            </h5>
            <div className="space-y-1 text-xs text-[#645B4E]">
              <p><strong className="text-[#353029]">Autor:</strong> {BOOK_INFO.author}</p>
              <p><strong className="text-[#353029]">Cidade:</strong> {BOOK_INFO.city}</p>
              <p><strong className="text-[#353029]">Páginas:</strong> {BOOK_INFO.pages} p.</p>
              <p><strong className="text-[#353029]">Impressão:</strong> {BOOK_INFO.printer}</p>
              <p><strong className="text-[#353029]">Papel:</strong> {BOOK_INFO.paper} · Times New Roman</p>
            </div>
            <button
              onClick={() => setShowColophon(!showColophon)}
              type="button"
              className="text-[#8C5D38] hover:underline font-medium pt-1 inline-flex items-center gap-1 cursor-pointer"
            >
              <FileText className="w-3.5 h-3.5" />
              <span>{showColophon ? "Ocultar ficha catalográfica" : "Ver ficha catalográfica (CIP)"}</span>
            </button>
          </div>

          <div className="md:col-span-3 space-y-2">
            <h5 className="font-sans font-semibold text-xs uppercase tracking-wider text-[#353029]">
              Navegação
            </h5>
            <ul className="space-y-1.5 text-xs">
              <li>
                <a href="#inicio" className="hover:text-[#1F1D1A] transition-colors">Início</a>
              </li>
              <li>
                <a href="#o-livro" className="hover:text-[#1F1D1A] transition-colors">A Obra</a>
              </li>
              <li>
                <a href="#sumario" className="hover:text-[#1F1D1A] transition-colors">Sumário</a>
              </li>
              <li>
                <a href="#momentos" className="hover:text-[#1F1D1A] transition-colors">Experiência Interativa</a>
              </li>
              <li>
                <a href="#autor" className="hover:text-[#1F1D1A] transition-colors">O Autor</a>
              </li>
              <li>
                <a href="#adquirir" className="hover:text-[#1F1D1A] transition-colors">Comprar Exemplar</a>
              </li>
            </ul>
          </div>

        </div>

        {/* Colophon Drawer */}
        {showColophon && (
          <div className="py-6 px-6 my-6 bg-[#FFFDF9] border border-[#DDD3C2] rounded-lg font-mono text-[11px] text-[#4A4237] max-w-xl mx-auto shadow-2xs">
            <p className="font-bold border-b border-[#EBE2D4] pb-2 mb-2 text-center">
              Dados Internacionais de Catalogação na Publicação (CIP)
            </p>
            <p>S237l Santos, Luiz Carlos dos.</p>
            <p className="pl-4">
              O lado aleatório dos dias comuns : 30 crônicas cotidianas e aleatórias / 
              Luiz Carlos dos Santos. – Toledo, PR : LSantos, 2026.
            </p>
            <p className="pl-4">158 p.</p>
            <p className="pl-4 pt-1">
              1. Crônicas brasileiras – Século XXI. 2. Literatura brasileira – Crônicas. 
              3. Cotidiano – Crônicas. I. Título.
            </p>
            <p className="pl-4 pt-1">CDD B869.3 · CDU 821.134.3(81)-3</p>
            <p className="pl-4 pt-1 text-[#8C5D38]">ISBN 978-00-0000-000-0</p>
          </div>
        )}

        {/* Bottom Utility Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          <p>
            Composto em Times New Roman, com miolo em papel Pólen 80g, e impresso por UICLAP.
          </p>
          <button
            onClick={scrollToTop}
            type="button"
            className="flex items-center gap-1.5 text-[#5C5346] hover:text-[#1F1D1A] transition-colors cursor-pointer"
          >
            <span>Voltar ao topo</span>
            <ChevronUp className="w-4 h-4" />
          </button>
        </div>

      </div>
    </footer>
  );
};
