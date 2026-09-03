import React from 'react';
import { Sparkles, ArrowRight, Instagram } from 'lucide-react';
import { BRAND_CONFIG } from '../data/config';
import { KamatLogo } from './KamatLogo';

interface FinalCtaSectionProps {
  onOrderCake: () => void;
}

export const FinalCtaSection: React.FC<FinalCtaSectionProps> = ({ onOrderCake }) => {
  return (
    <section className="py-24 sm:py-32 bg-[#120E0D] text-[#FAF7F2] relative overflow-hidden text-center">
      {/* Background Ambience & Kamat Yellow Glow */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#1C1614] to-[#120E0D]" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-[#FFD400]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
        
        {/* Authentic Kamat Logo */}
        <div className="mb-6">
          <KamatLogo size="lg" className="hover:scale-105 transition-transform duration-300" />
        </div>

        {/* Subtle Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-[#FFD400]/40 mb-5">
          <Sparkles className="w-3.5 h-3.5 text-[#FFD400]" />
          <span className="text-[11px] font-sans font-bold uppercase tracking-[0.25em] text-[#FFD400]">
            Kamat Bakery • Dharwad Since 1988
          </span>
        </div>

        {/* Big Heading */}
        <h2 className="font-serif text-4xl sm:text-6xl lg:text-7xl font-normal tracking-tight text-[#FAF7F2] mb-3">
          FOUND YOUR CAKE?
        </h2>

        {/* Subtitle */}
        <p className="font-serif italic font-light font-editorial text-2xl sm:text-4xl text-[#FFD400] mb-10">
          Let's make it yours.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 w-full max-w-lg mx-auto">
          <button
            onClick={onOrderCake}
            className="w-full sm:w-auto px-9 py-4 rounded-full bg-[#FFD400] hover:bg-[#FFE14D] text-[#120E0D] text-xs font-black tracking-[0.2em] uppercase transition-all duration-300 shadow-[0_10px_30px_rgba(255,212,0,0.35)] hover:shadow-[0_15px_40px_rgba(255,212,0,0.5)] active:scale-95 flex items-center justify-center gap-2 group"
          >
            <span>ORDER A CAKE</span>
            <ArrowRight className="w-4 h-4 stroke-[2.5] transition-transform group-hover:translate-x-1" />
          </button>

          <a
            href={BRAND_CONFIG.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-8 py-4 rounded-full bg-white/10 border border-[#FFD400]/50 hover:border-[#FFD400] text-[#FAF7F2] text-xs font-bold tracking-[0.2em] uppercase hover:bg-white/20 transition-all duration-300 active:scale-95 flex items-center justify-center gap-2.5 shadow-lg"
          >
            <Instagram className="w-4 h-4 text-[#FFD400]" />
            <span>FOLLOW US ON INSTAGRAM</span>
          </a>
        </div>

      </div>
    </section>
  );
};
