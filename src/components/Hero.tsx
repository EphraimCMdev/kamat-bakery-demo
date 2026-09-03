import React from 'react';
import { Sparkles, ChevronRight, Instagram } from 'lucide-react';
import { BRAND_CONFIG } from '../data/config';
import { KamatLogo } from './KamatLogo';

interface HeroProps {
  onExploreCakes: () => void;
  onOrderCake: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExploreCakes, onOrderCake }) => {
  return (
    <section className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-[#120E0D] text-[#FAF7F2]">
      {/* Background Cinematic Visual */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1535141192574-5d4897c13136?q=85&w=2200&auto=format&fit=crop"
          alt="Bespoke celebration cake by Kamat Bakery Dharwad"
          className="w-full h-full object-cover object-center scale-105 animate-[pulseSubtle_8s_ease-in-out_infinite]"
        />
        {/* Deep Black & Vignette Overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#120E0D] via-[#120E0D]/65 to-[#120E0D]/45" />
        <div className="absolute inset-0 bg-radial-vignette opacity-80" />
      </div>

      {/* Decorative Subtle Kamat Yellow Accent Lines */}
      <div className="absolute top-28 left-8 hidden lg:block opacity-30 border-l-2 border-[#FFD400] h-28" />
      <div className="absolute bottom-28 right-8 hidden lg:block opacity-30 border-r-2 border-[#FFD400] h-28" />

      {/* Main Hero Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-28 pb-16 flex flex-col items-center">
        
        {/* Brand Logo & Tagline Header */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 mb-7">
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-[#120E0D]/80 backdrop-blur-md border border-[#FFD400]/50 shadow-lg transform hover:scale-105 transition-all duration-300">
            <KamatLogo size="sm" />
            <span className="text-[11px] sm:text-xs font-sans font-bold tracking-[0.28em] uppercase text-[#FAF7F2]">
              KAMAT BAKERY • DHARWAD
            </span>
          </div>

          <a
            href={BRAND_CONFIG.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FFD400]/15 hover:bg-[#FFD400] text-[#FFD400] hover:text-[#120E0D] backdrop-blur-md border border-[#FFD400]/40 transition-all duration-300 text-[11px] font-mono font-semibold shadow-md group"
          >
            <Instagram className="w-3.5 h-3.5" />
            <span>@kamatbakery</span>
            <span className="text-[10px] uppercase font-sans tracking-wider text-white/80 group-hover:text-[#120E0D]">Live</span>
          </a>
        </div>

        {/* Grand Headline */}
        <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-normal tracking-tight leading-[1.06] text-[#FAF7F2] mb-6 drop-shadow-2xl">
          MAKE SOMETHING
          <br />
          <span className="italic font-light text-[#FFD400] font-editorial">
            WORTH CELEBRATING.
          </span>
        </h1>

        {/* Supporting Copy */}
        <p className="max-w-xl text-base sm:text-lg md:text-xl font-light text-[#F5EFEB]/90 tracking-wide leading-relaxed mb-10 font-sans">
          Beautiful cakes, made for your biggest moments.
        </p>

        {/* Action Buttons: Primary (ORDER A CAKE in Kamat Yellow) & Secondary (FOLLOW US ON INSTAGRAM) */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-5 w-full max-w-lg">
          {/* Primary Conversion CTA */}
          <button
            onClick={onOrderCake}
            className="w-full sm:w-auto px-9 py-4 rounded-full bg-[#FFD400] hover:bg-[#FFE14D] text-[#120E0D] text-xs font-black tracking-[0.2em] uppercase transition-all duration-300 shadow-[0_10px_30px_rgba(255,212,0,0.35)] hover:shadow-[0_15px_40px_rgba(255,212,0,0.5)] active:scale-95 flex items-center justify-center gap-2 group"
          >
            <Sparkles className="w-4 h-4 fill-black text-black" />
            <span>ORDER A CAKE</span>
            <ChevronRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1 stroke-[2.5]" />
          </button>

          {/* Primary Discovery CTA: Instagram */}
          <a
            href={BRAND_CONFIG.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-8 py-4 rounded-full bg-white/10 hover:bg-white/20 text-[#FAF7F2] border border-[#FFD400]/50 hover:border-[#FFD400] text-xs font-bold tracking-[0.18em] uppercase transition-all duration-300 backdrop-blur-md shadow-lg active:scale-95 flex items-center justify-center gap-2.5 group"
          >
            <Instagram className="w-4 h-4 text-[#FFD400]" />
            <span>FOLLOW US ON INSTAGRAM</span>
          </a>
        </div>

        {/* Floating Quality Badges */}
        <div className="mt-14 pt-7 border-t border-white/10 w-full max-w-2xl flex items-center justify-around text-center text-white/70 text-[11px] sm:text-xs tracking-widest uppercase">
          <span className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-[#FFD400]" />
            Fresh Bakes Daily
          </span>
          <span className="hidden sm:flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-[#FFD400]" />
            Dharwad Since 1988
          </span>
          <span className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-[#FFD400]" />
            Custom Celebrations
          </span>
        </div>
      </div>

      {/* Subtle "Scroll to explore" Interaction */}
      <button
        onClick={onExploreCakes}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center text-white/60 hover:text-[#FFD400] transition-all duration-300 group focus:outline-none"
      >
        <span className="text-[10px] uppercase font-sans tracking-[0.28em] mb-2 group-hover:tracking-[0.35em] transition-all duration-300 text-[#E8DFD5]">
          Scroll to explore
        </span>
        <div className="w-6 h-10 rounded-full border border-white/30 group-hover:border-[#FFD400] flex items-start justify-center p-1.5 transition-colors">
          <div className="w-1.5 h-2.5 bg-[#FFD400] rounded-full animate-bounce" />
        </div>
      </button>
    </section>
  );
};
