import React, { useState } from 'react';
import { X, Send, CheckCircle2, HeartHandshake, PenLine } from 'lucide-react';

interface AutographModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const AutographModal: React.FC<AutographModalProps> = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    city: '',
    recipient: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email) return;

    // Simulate successful submission and store in local storage
    const existing = JSON.parse(localStorage.getItem('pedidos_autografo') || '[]');
    existing.push({ ...formData, date: new Date().toISOString() });
    localStorage.setItem('pedidos_autografo', JSON.stringify(existing));

    setIsSubmitted(true);
  };

  const handleReset = () => {
    setIsSubmitted(false);
    setFormData({
      name: '',
      email: '',
      city: '',
      recipient: '',
      message: ''
    });
    onClose();
  };

  return (
    <div 
      className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4 overflow-y-auto"
      role="dialog"
      aria-modal="true"
    >
      <div className="w-full max-w-lg bg-[#FAF6EE] border border-[#DDD3BF] rounded-2xl p-6 sm:p-8 shadow-2xl relative">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          type="button"
          className="absolute top-4 right-4 p-2 text-stone-500 hover:text-stone-900 rounded-full hover:bg-stone-200/50 transition-colors"
          aria-label="Fechar janela"
        >
          <X className="w-5 h-5" />
        </button>

        {!isSubmitted ? (
          <div>
            <div className="flex items-center gap-2 text-xs uppercase tracking-wider text-[#8A7E6E] font-medium mb-1">
              <PenLine className="w-3.5 h-3.5 text-[#8C5D38]" />
              <span>Dedicatória Autoral</span>
            </div>

            <h3 className="font-serif text-2xl sm:text-3xl text-[#1E1D1B] font-semibold">
              Exemplar com Autógrafo
            </h3>

            <p className="font-reading text-sm text-[#5B5349] mt-2 mb-6 leading-relaxed">
              O autor Luiz Carlos dos Santos assina e escreve uma dedicatória personalizada 
              em seu exemplar antes do envio a partir de Toledo - PR.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-medium text-[#38332D] mb-1">
                  Seu Nome Completo *
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="Ex: Mariana Silva"
                  className="w-full px-3.5 py-2.5 bg-[#FFFDF9] border border-[#D8CDBA] rounded-md text-sm text-[#24211E] focus:outline-hidden focus:ring-1 focus:ring-[#8C5D38]"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium text-[#38332D] mb-1">
                    E-mail para Contato *
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="voce@exemplo.com"
                    className="w-full px-3.5 py-2.5 bg-[#FFFDF9] border border-[#D8CDBA] rounded-md text-sm text-[#24211E] focus:outline-hidden focus:ring-1 focus:ring-[#8C5D38]"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-[#38332D] mb-1">
                    Cidade / Estado
                  </label>
                  <input
                    type="text"
                    value={formData.city}
                    onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                    placeholder="Ex: Curitiba, PR"
                    className="w-full px-3.5 py-2.5 bg-[#FFFDF9] border border-[#D8CDBA] rounded-md text-sm text-[#24211E] focus:outline-hidden focus:ring-1 focus:ring-[#8C5D38]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-medium text-[#38332D] mb-1">
                  Para quem deve ser a dedicatória?
                </label>
                <input
                  type="text"
                  value={formData.recipient}
                  onChange={(e) => setFormData({ ...formData, recipient: e.target.value })}
                  placeholder="Ex: Para minha mãe Laura / Para mim mesmo"
                  className="w-full px-3.5 py-2.5 bg-[#FFFDF9] border border-[#D8CDBA] rounded-md text-sm text-[#24211E] focus:outline-hidden focus:ring-1 focus:ring-[#8C5D38]"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-[#38332D] mb-1">
                  Mensagem ou detalhe especial (opcional)
                </label>
                <textarea
                  rows={3}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Alguma lembrança, data de aniversário ou detalhe que queira compartilhar com o autor..."
                  className="w-full px-3.5 py-2 bg-[#FFFDF9] border border-[#D8CDBA] rounded-md text-sm text-[#24211E] focus:outline-hidden focus:ring-1 focus:ring-[#8C5D38]"
                />
              </div>

              <div className="pt-2 flex items-center justify-end gap-3">
                <button
                  type="button"
                  onClick={onClose}
                  className="px-4 py-2 text-xs font-medium text-[#574F44] hover:text-[#1E1D1B]"
                >
                  Cancelar
                </button>
                <button
                  type="submit"
                  className="px-5 py-2.5 bg-[#2B2724] hover:bg-[#3D3732] text-white text-xs font-medium rounded-md transition-colors flex items-center gap-2 cursor-pointer shadow-xs"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Enviar Solicitação ao Autor</span>
                </button>
              </div>
            </form>
          </div>
        ) : (
          <div className="text-center py-6 space-y-4">
            <div className="w-12 h-12 bg-emerald-100 text-emerald-800 rounded-full flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-6 h-6" />
            </div>
            <h3 className="font-serif text-2xl text-[#1E1D1B] font-semibold">
              Solicitação Enviada com Sucesso!
            </h3>
            <p className="font-reading text-sm text-[#5B5349] max-w-sm mx-auto leading-relaxed">
              Obrigado, <strong className="font-sans text-[#2B2724]">{formData.name}</strong>. 
              Sua mensagem foi registrada. Em breve você receberá um e-mail com as instruções de envio e o prazo do seu exemplar autografado.
            </p>
            <div className="pt-4">
              <button
                onClick={handleReset}
                type="button"
                className="px-6 py-2.5 bg-[#2B2724] text-white rounded-md text-xs font-medium hover:bg-[#3E3833] transition-colors cursor-pointer"
              >
                Concluir
              </button>
            </div>
          </div>
        )}

      </div>
    </div>
  );
};
