import React, { useEffect } from 'react';
import { Cake } from '../types';
import { X, Sparkles, MessageSquare } from 'lucide-react';

interface CakeDetailModalProps {
  cake: Cake | null;
  onClose: () => void;
  onOrderThisCake: (cake: Cake) => void;
}

export const CakeDetailModal: React.FC<CakeDetailModalProps> = ({
  cake,
  onClose,
  onOrderThisCake,
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && cake) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [cake, onClose]);

  if (!cake) return null;

  return (
    <div
      className="fixed inset-0 z-50 bg-[#120E0D]/80 backdrop-blur-md flex items-end sm:items-center justify-center p-0 sm:p-4 overflow-y-auto animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="bg-[#FAF7F2] w-full max-w-2xl rounded-t-3xl sm:rounded-3xl shadow-2xl border border-[#E8DFD5] overflow-hidden relative flex flex-col md:flex-row max-h-[92vh] sm:max-h-[85vh] animate-in slide-in-from-bottom sm:zoom-in-95 duration-200"
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          aria-label="Close dialog"
          className="absolute top-4 right-4 z-20 w-8 h-8 rounded-full bg-[#120E0D]/75 text-white flex items-center justify-center hover:bg-[#120E0D] transition-colors shadow-md"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Left Side: Image */}
        <div className="md:w-1/2 aspect-[4/3] sm:aspect-square md:aspect-auto relative bg-[#120E0D]">
          <img
            src={cake.image}
            alt={cake.alt}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent md:hidden" />
          
          <div className="absolute bottom-4 left-4 z-10 md:hidden text-white flex items-center gap-2">
            <span className="text-[10px] uppercase font-bold tracking-widest bg-[#FFD400] text-[#120E0D] px-2.5 py-1 rounded-full">
              {cake.category}
            </span>
          </div>
        </div>

        {/* Right Side: Details */}
        <div className="md:w-1/2 p-6 sm:p-8 flex flex-col justify-between overflow-y-auto">
          <div>
            <div className="hidden md:inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EDE4DC] text-[10px] uppercase tracking-widest text-[#120E0D] font-bold mb-3 border border-[#D2C4B5]">
              <Sparkles className="w-3 h-3 text-[#E6BE00]" />
              {cake.category} Collection
            </div>

            <h3 className="font-serif text-2xl sm:text-3xl font-normal text-[#120E0D] leading-tight">
              {cake.title}
            </h3>

            <p className="text-xs font-bold text-[#B88600] tracking-wide mt-1 mb-4">
              {cake.subtitle}
            </p>

            <p className="text-sm text-[#3D2E2A] font-light leading-relaxed mb-6">
              {cake.description}
            </p>

            {/* Flavor & Best For notes */}
            <div className="space-y-3 p-4 rounded-xl bg-[#F5EFEB] border border-[#E2D5C8] text-xs text-[#3D2E2A]">
              <div>
                <span className="font-bold text-[#120E0D] uppercase tracking-wider block text-[10px]">
                  Flavor Notes
                </span>
                <span className="font-light">{cake.flavorProfile}</span>
              </div>
              <div>
                <span className="font-bold text-[#120E0D] uppercase tracking-wider block text-[10px]">
                  Ideal For
                </span>
                <span className="font-light">{cake.bestFor}</span>
              </div>
              {cake.tiers && (
                <div>
                  <span className="font-bold text-[#120E0D] uppercase tracking-wider block text-[10px]">
                    Sizing & Tiers
                  </span>
                  <span className="font-light">{cake.tiers}</span>
                </div>
              )}
            </div>
          </div>

          {/* Action CTAs: Both trigger Demo Coming Soon modal */}
          <div className="pt-6 space-y-2.5">
            <button
              onClick={() => {
                onClose();
                onOrderThisCake(cake);
              }}
              className="w-full py-3.5 rounded-full bg-[#FFD400] hover:bg-[#FFE14D] text-[#120E0D] font-black text-xs tracking-widest uppercase transition-all shadow-md flex items-center justify-center gap-2"
            >
              <Sparkles className="w-4 h-4 fill-black text-black" />
              <span>Customize This Design</span>
            </button>

            <button
              onClick={() => {
                onClose();
                onOrderThisCake(cake);
              }}
              className="w-full py-3 rounded-full bg-white border border-[#120E0D] text-[#120E0D] font-bold text-xs tracking-wider uppercase hover:bg-[#EDE4DC] transition-all flex items-center justify-center gap-2"
            >
              <MessageSquare className="w-4 h-4 text-[#120E0D]" />
              <span>Enquire on WhatsApp →</span>
            </button>
          </div>

        </div>

      </div>
    </div>
  );
};
