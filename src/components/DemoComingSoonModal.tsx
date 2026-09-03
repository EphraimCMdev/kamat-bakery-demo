import React, { useEffect } from 'react';
import { X, Sparkles, MessageSquare, ArrowRight } from 'lucide-react';
import { KamatLogo } from './KamatLogo';

interface DemoComingSoonModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const DemoComingSoonModal: React.FC<DemoComingSoonModalProps> = ({
  isOpen,
  onClose,
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 bg-[#120E0D]/80 backdrop-blur-md flex items-center justify-center p-4 overflow-y-auto animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="bg-[#FAF7F2] w-full max-w-md rounded-3xl shadow-2xl border border-[#E8DFD5] overflow-hidden relative p-8 sm:p-10 text-center animate-in zoom-in-95 duration-200"
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          aria-label="Close dialog"
          className="absolute top-4 right-4 w-9 h-9 rounded-full bg-[#120E0D]/10 hover:bg-[#120E0D] hover:text-[#FAF7F2] text-[#120E0D] flex items-center justify-center transition-colors"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Brand Logo & Icon */}
        <div className="flex flex-col items-center justify-center mb-6">
          <div className="relative mb-3">
            <KamatLogo size="lg" />
            <div className="absolute -bottom-1 -right-1 w-6 h-6 rounded-full bg-[#FFD400] text-[#120E0D] border-2 border-[#FAF7F2] flex items-center justify-center shadow-md">
              <MessageSquare className="w-3 h-3" />
            </div>
          </div>

          {/* Visual Indicator: DEMO PREVIEW */}
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FFD400] text-[#120E0D] text-[10px] font-sans font-black uppercase tracking-[0.22em] shadow-sm">
            <Sparkles className="w-3 h-3 fill-black text-black" />
            <span>DEMO PREVIEW</span>
          </div>
        </div>

        {/* Heading */}
        <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#120E0D] tracking-tight leading-tight mb-2">
          WHATSAPP ORDERS
          <br />
          <span className="italic font-light font-editorial text-[#B88600]">
            COMING SOON
          </span>
        </h2>

        {/* Explanatory Body Copy */}
        <div className="space-y-2 text-sm text-[#54403B] font-light leading-relaxed my-6 max-w-xs mx-auto">
          <p>
            This is a demo version of the <strong className="font-semibold text-[#120E0D]">Kamat Bakery</strong> website.
          </p>
          <p className="text-xs text-[#54403B]/80 pt-1">
            WhatsApp ordering will be connected when the final website goes live.
          </p>
        </div>

        {/* Single Primary Action: CONTINUE EXPLORING */}
        <button
          onClick={onClose}
          className="w-full py-4 rounded-full bg-[#FFD400] hover:bg-[#FFE14D] text-[#120E0D] font-black text-xs tracking-[0.2em] uppercase transition-all duration-300 shadow-[0_8px_25px_rgba(255,212,0,0.35)] hover:shadow-[0_12px_30px_rgba(255,212,0,0.45)] hover:-translate-y-0.5 active:scale-95 flex items-center justify-center gap-2"
        >
          <span>CONTINUE EXPLORING</span>
          <ArrowRight className="w-4 h-4 stroke-[2.5]" />
        </button>
      </div>
    </div>
  );
};
