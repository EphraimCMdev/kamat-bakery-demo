import React from 'react';
import { Sparkles, Instagram } from 'lucide-react';
import { BRAND_CONFIG } from '../data/config';

interface MobileStickyBarProps {
  onOrderCake: () => void;
}

export const MobileStickyBar: React.FC<MobileStickyBarProps> = ({
  onOrderCake,
}) => {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 md:hidden bg-[#120E0D]/95 backdrop-blur-lg border-t border-white/10 p-2.5 px-4 shadow-[0_-10px_25px_rgba(0,0,0,0.4)] flex items-center gap-2.5">
      {/* Instagram Button */}
      <a
        href={BRAND_CONFIG.instagramUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Instagram Profile"
        className="h-11 px-3.5 rounded-full bg-white/10 border border-[#FFD400]/40 text-[#FAF7F2] flex items-center justify-center gap-1.5 shrink-0 shadow-md active:scale-95 transition-transform"
      >
        <Instagram className="w-4 h-4 text-[#FFD400]" />
        <span className="text-[11px] font-mono font-bold">@kamatbakery</span>
      </a>

      {/* Main Order Button in Kamat Yellow */}
      <button
        onClick={onOrderCake}
        className="flex-1 h-11 rounded-full bg-[#FFD400] text-[#120E0D] font-black text-xs uppercase tracking-[0.18em] shadow-[0_4px_15px_rgba(255,212,0,0.3)] flex items-center justify-center gap-2 active:scale-95 transition-transform"
      >
        <Sparkles className="w-4 h-4 fill-black text-black" />
        <span>ORDER A CAKE</span>
      </button>
    </div>
  );
};
