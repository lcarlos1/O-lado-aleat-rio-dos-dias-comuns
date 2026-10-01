import React, { useState } from 'react';
import { Volume2, VolumeX, Sparkles, BookOpen } from 'lucide-react';
import { ambientEngine } from '../utils/audioAmbient';

interface NavbarProps {
  onOpenRandom: () => void;
  onOpenReader: (id?: string) => void;
  onOpenAutograph: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  onOpenRandom,
  onOpenReader,
  onOpenAutograph,
}) => {
  const [isAudioActive, setIsAudioActive] = useState(false);

  const toggleAudio = () => {
    const active = ambientEngine.toggle();
    setIsAudioActive(active);
  };

  return (
    <header className="sticky top-0 z-40 bg-[#FAF8F5]/90 backdrop-blur-md border-b border-[#E8E2D8] transition-colors">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Zone 1: Single text element wordmark */}
        <a 
          href="#inicio" 
          className="font-serif text-xl tracking-tight text-[#1F1E1D] hover:opacity-80 transition-opacity font-semibold"
        >
          O Lado Aleatório
        </a>

        {/* Zone 2: 4-5 text nav links */}
        <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-[#625D56]">
          <a href="#o-livro" className="hover:text-[#1F1E1D] transition-colors">
            A Obra
          </a>
          <a href="#sumario" className="hover:text-[#1F1E1D] transition-colors">
            Sumário
          </a>
          <a href="#momentos" className="hover:text-[#1F1E1D] transition-colors">
            Dias Comuns
          </a>
          <a href="#autor" className="hover:text-[#1F1E1D] transition-colors">
            O Autor
          </a>
          <a href="#adquirir" className="hover:text-[#1F1E1D] transition-colors">
            Onde Comprar
          </a>
        </nav>

        {/* Zone 3: 1-2 primary actions */}
        <div className="flex items-center gap-3">
          <button
            onClick={toggleAudio}
            type="button"
            title={isAudioActive ? "Silenciar som ambiente de chuva" : "Ouvir som sutil de chuva na vidraça"}
            className="p-2 rounded-full text-[#625D56] hover:text-[#1F1E1D] hover:bg-[#EFEAE2] transition-colors flex items-center gap-1.5 text-xs font-sans"
            aria-label="Alternar som ambiente"
          >
            {isAudioActive ? (
              <>
                <Volume2 className="w-4 h-4 text-amber-800 animate-pulse" />
                <span className="hidden sm:inline text-xs text-amber-900">Chuva & Café</span>
              </>
            ) : (
              <>
                <VolumeX className="w-4 h-4" />
                <span className="hidden sm:inline text-xs">Som ambiente</span>
              </>
            )}
          </button>

          <button
            onClick={onOpenRandom}
            type="button"
            className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-[#4A453E] bg-[#EFEAE2] hover:bg-[#E6DFC5] border border-[#DDD6CA] rounded-md transition-colors whitespace-nowrap"
          >
            <Sparkles className="w-3.5 h-3.5 text-amber-700" />
            <span>Abrir ao acaso</span>
          </button>

          <a
            href="https://loja.uiclap.com/titulo/ua205494"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 text-xs font-medium text-[#FAF8F5] bg-[#222120] hover:bg-[#3D3A37] rounded-md transition-colors whitespace-nowrap shadow-xs"
          >
            Comprar na UICLAP
          </a>
        </div>
      </div>
    </header>
  );
};
