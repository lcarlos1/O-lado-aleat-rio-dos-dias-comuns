import React, { useState, useEffect } from 'react';
import { 
  X, ChevronLeft, ChevronRight, Sparkles, Bookmark, 
  BookmarkCheck, Share2, Check, ZoomIn, ZoomOut, Sun, Moon, BookOpen 
} from 'lucide-react';
import { CRONICAS, PREFACIO, Cronica } from '../data/bookData';

interface InteractiveReaderProps {
  initialCronicaId?: string | 'prefacio';
  isOpen: boolean;
  onClose: () => void;
  onSelectCronica: (id: string) => void;
}

export const InteractiveReader: React.FC<InteractiveReaderProps> = ({
  initialCronicaId = 'prefacio',
  isOpen,
  onClose,
  onSelectCronica,
}) => {
  const [currentId, setCurrentId] = useState<string>(initialCronicaId);
  const [fontSize, setFontSize] = useState<'normal' | 'large' | 'xlarge'>('normal');
  const [theme, setTheme] = useState<'polen' | 'sepia' | 'dark'>('polen');
  const [bookmarks, setBookmarks] = useState<string[]>(() => {
    try {
      return JSON.parse(localStorage.getItem('livro_bookmarks') || '[]');
    } catch {
      return [];
    }
  });
  const [copied, setCopied] = useState(false);
  const [isFlipping, setIsFlipping] = useState(false);

  useEffect(() => {
    if (initialCronicaId) {
      setCurrentId(initialCronicaId);
    }
  }, [initialCronicaId]);

  if (!isOpen) return null;

  // Determine current item
  const isPrefacio = currentId === 'prefacio';
  const cronicaIndex = CRONICAS.findIndex(c => c.id === currentId);
  const currentCronica: Cronica | null = cronicaIndex !== -1 ? CRONICAS[cronicaIndex] : null;

  const currentTitle = isPrefacio ? PREFACIO.title : (currentCronica ? currentCronica.title : 'Crônica');
  const currentPart = isPrefacio ? 'Abertura' : (currentCronica ? currentCronica.part : '');
  const currentPage = isPrefacio ? PREFACIO.page : (currentCronica ? currentCronica.page : 0);
  const paragraphs = isPrefacio ? PREFACIO.content : (currentCronica ? currentCronica.content : []);

  const hasPrev = isPrefacio ? false : true;
  const hasNext = isPrefacio ? CRONICAS.length > 0 : cronicaIndex < CRONICAS.length - 1;

  const handlePrev = () => {
    if (isPrefacio) return;
    if (cronicaIndex === 0) {
      triggerPageFlip('prefacio');
    } else {
      triggerPageFlip(CRONICAS[cronicaIndex - 1].id);
    }
  };

  const handleNext = () => {
    if (isPrefacio) {
      if (CRONICAS.length > 0) triggerPageFlip(CRONICAS[0].id);
    } else if (cronicaIndex < CRONICAS.length - 1) {
      triggerPageFlip(CRONICAS[cronicaIndex + 1].id);
    }
  };

  const triggerPageFlip = (nextId: string) => {
    setIsFlipping(true);
    setTimeout(() => {
      setCurrentId(nextId);
      onSelectCronica(nextId);
      setIsFlipping(false);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 180);
  };

  const handleRandom = () => {
    const randomIndex = Math.floor(Math.random() * CRONICAS.length);
    const randomCronica = CRONICAS[randomIndex];
    triggerPageFlip(randomCronica.id);
  };

  const toggleBookmark = () => {
    const next = bookmarks.includes(currentId)
      ? bookmarks.filter(b => b !== currentId)
      : [...bookmarks, currentId];
    setBookmarks(next);
    localStorage.setItem('livro_bookmarks', JSON.stringify(next));
  };

  const handleCopyPassage = () => {
    const textToCopy = `"${paragraphs.slice(0, 3).join('\n\n')}"\n\n— Luiz Carlos dos Santos, O Lado Aleatório dos Dias Comuns (${currentTitle})`;
    navigator.clipboard.writeText(textToCopy);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  // Theme styling maps
  const themeClasses = {
    polen: 'bg-[#FAF6EE] text-[#242220] border-[#E8DFC8]',
    sepia: 'bg-[#F2E8DC] text-[#2C2723] border-[#DFD1BF]',
    dark: 'bg-[#1C1A18] text-[#E7E2D9] border-[#34302C]',
  };

  const pageThemeBg = {
    polen: 'bg-[#FFFDF9] border-[#EAE1D2] shadow-sm',
    sepia: 'bg-[#FBF6EE] border-[#E4D8C6] shadow-sm',
    dark: 'bg-[#24211E] border-[#38332E] shadow-sm',
  };

  const fontSizeClasses = {
    normal: 'text-base sm:text-lg leading-relaxed sm:leading-[1.9]',
    large: 'text-lg sm:text-xl leading-relaxed sm:leading-[2.0]',
    xlarge: 'text-xl sm:text-2xl leading-relaxed sm:leading-[2.1]',
  };

  return (
    <div 
      className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-sm flex justify-center items-start p-2 sm:p-4 md:p-6"
      role="dialog"
      aria-modal="true"
    >
      <div 
        className={`w-full max-w-4xl rounded-xl border transition-all duration-200 overflow-hidden my-auto flex flex-col max-h-[92vh] ${themeClasses[theme]}`}
      >
        {/* Top Control Bar */}
        <div className="px-5 py-3.5 border-b flex items-center justify-between gap-4 shrink-0 bg-black/5">
          <div className="flex items-center gap-3 truncate">
            <span className="font-serif italic text-xs tracking-wider uppercase text-amber-900/70 dark:text-amber-200/70">
              {currentPart}
            </span>
            <span className="text-xs text-neutral-400">·</span>
            <span className="font-serif font-semibold text-sm truncate">
              {currentTitle}
            </span>
            <span className="text-xs text-neutral-500 font-mono">
              (pág. {currentPage})
            </span>
          </div>

          <div className="flex items-center gap-1.5 sm:gap-2 shrink-0">
            {/* Theme switcher */}
            <div className="flex items-center border rounded-md p-0.5 text-xs">
              <button
                onClick={() => setTheme('polen')}
                className={`px-2 py-1 rounded transition-colors text-xs ${theme === 'polen' ? 'bg-[#EADECE] font-semibold text-[#1F1E1D]' : 'text-neutral-500 hover:text-neutral-900'}`}
                title="Papel Pólen 80g"
              >
                Pólen
              </button>
              <button
                onClick={() => setTheme('sepia')}
                className={`px-2 py-1 rounded transition-colors text-xs ${theme === 'sepia' ? 'bg-[#DFD1BF] font-semibold text-[#1F1E1D]' : 'text-neutral-500 hover:text-neutral-900'}`}
                title="Tom Sépia Clássico"
              >
                Sépia
              </button>
              <button
                onClick={() => setTheme('dark')}
                className={`px-2 py-1 rounded transition-colors text-xs ${theme === 'dark' ? 'bg-[#332F2A] font-semibold text-white' : 'text-neutral-500 hover:text-neutral-200'}`}
                title="Modo Noturno"
              >
                Noturno
              </button>
            </div>

            {/* Font size control */}
            <div className="hidden sm:flex items-center border rounded-md p-0.5 text-xs">
              <button
                onClick={() => setFontSize('normal')}
                className={`px-2 py-1 rounded text-xs ${fontSize === 'normal' ? 'font-bold underline' : 'text-neutral-500'}`}
                title="Fonte Normal"
              >
                A
              </button>
              <button
                onClick={() => setFontSize('large')}
                className={`px-2 py-1 rounded text-sm ${fontSize === 'large' ? 'font-bold underline' : 'text-neutral-500'}`}
                title="Fonte Média"
              >
                A+
              </button>
              <button
                onClick={() => setFontSize('xlarge')}
                className={`px-2 py-1 rounded text-base ${fontSize === 'xlarge' ? 'font-bold underline' : 'text-neutral-500'}`}
                title="Fonte Grande"
              >
                A++
              </button>
            </div>

            {/* Bookmark button */}
            <button
              onClick={toggleBookmark}
              className="p-1.5 rounded hover:bg-black/10 transition-colors"
              title={bookmarks.includes(currentId) ? "Remover marcador" : "Marcar esta crônica"}
            >
              {bookmarks.includes(currentId) ? (
                <BookmarkCheck className="w-4 h-4 text-amber-700" />
              ) : (
                <Bookmark className="w-4 h-4 text-neutral-500" />
              )}
            </button>

            {/* Copy button */}
            <button
              onClick={handleCopyPassage}
              className="p-1.5 rounded hover:bg-black/10 transition-colors"
              title="Copiar trecho da crônica"
            >
              {copied ? <Check className="w-4 h-4 text-emerald-600" /> : <Share2 className="w-4 h-4 text-neutral-500" />}
            </button>

            {/* Close button */}
            <button
              onClick={onClose}
              className="p-1.5 rounded-full hover:bg-black/10 transition-colors ml-1"
              aria-label="Fechar leitor"
            >
              <X className="w-5 h-5 text-neutral-600 dark:text-neutral-300" />
            </button>
          </div>
        </div>

        {/* Reader Document Body */}
        <div className="overflow-y-auto px-6 sm:px-12 md:px-16 py-8 sm:py-12 flex-1">
          <div 
            className={`max-w-2xl mx-auto p-6 sm:p-12 rounded-lg border transition-opacity duration-200 ${pageThemeBg[theme]} ${
              isFlipping ? 'opacity-20 scale-[0.99]' : 'opacity-100 scale-100'
            }`}
          >
            {/* Editorial Header on Page */}
            <div className="text-center mb-8 border-b pb-6 border-black/10 dark:border-white/10">
              <span className="text-xs uppercase tracking-widest text-amber-800/80 dark:text-amber-200/80 font-sans">
                {isPrefacio ? "Abertura Editorial" : currentCronica?.part}
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl text-[#1E1D1B] dark:text-[#EAE6DF] mt-2 mb-2 font-semibold">
                {currentTitle}
              </h2>
              {currentCronica && (
                <p className="font-reading italic text-sm text-neutral-600 dark:text-neutral-400">
                  {currentCronica.tagline}
                </p>
              )}
              <div className="mt-3 text-xs text-neutral-500 font-mono">
                Página {currentPage} de 158
              </div>
            </div>

            {/* Manuscript Paragraphs */}
            <div className={`font-reading space-y-5 text-justify ${fontSizeClasses[fontSize]}`}>
              {paragraphs.map((par, idx) => (
                <p 
                  key={idx} 
                  className={idx === 0 && !isPrefacio ? "first-letter:text-4xl first-letter:font-serif first-letter:float-left first-letter:mr-2 first-letter:leading-none first-letter:text-[#8C4E2D]" : ""}
                >
                  {par}
                </p>
              ))}
            </div>

            {/* Chapter end ornament */}
            <div className="mt-12 pt-6 border-t border-black/10 dark:border-white/10 flex items-center justify-center gap-2 text-neutral-400">
              <span className="w-8 h-px bg-current" />
              <span className="font-serif text-xs italic">Luiz Carlos dos Santos</span>
              <span className="w-8 h-px bg-current" />
            </div>
          </div>
        </div>

        {/* Bottom Navigation & Randomizer */}
        <div className="px-5 py-3.5 border-t flex items-center justify-between gap-4 shrink-0 bg-black/5 text-xs">
          <button
            onClick={handlePrev}
            disabled={!hasPrev}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded transition-colors ${
              hasPrev ? 'hover:bg-black/10 text-neutral-700 dark:text-neutral-200 cursor-pointer' : 'text-neutral-400 cursor-not-allowed opacity-40'
            }`}
          >
            <ChevronLeft className="w-4 h-4" />
            <span className="hidden sm:inline">Crônica anterior</span>
          </button>

          <button
            onClick={handleRandom}
            className="flex items-center gap-1.5 px-4 py-2 bg-[#8C5D38] hover:bg-[#784F2E] text-white rounded-md font-medium transition-colors cursor-pointer shadow-xs"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>Abrir ao acaso</span>
          </button>

          <button
            onClick={handleNext}
            disabled={!hasNext}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded transition-colors ${
              hasNext ? 'hover:bg-black/10 text-neutral-700 dark:text-neutral-200 cursor-pointer' : 'text-neutral-400 cursor-not-allowed opacity-40'
            }`}
          >
            <span className="hidden sm:inline">Próxima crônica</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
