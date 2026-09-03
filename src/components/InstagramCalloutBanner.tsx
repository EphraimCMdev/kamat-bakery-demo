import React from 'react';
import { Instagram, ArrowRight, Sparkles } from 'lucide-react';
import { BRAND_CONFIG } from '../data/config';
import { KamatLogo } from './KamatLogo';

export const InstagramCalloutBanner: React.FC = () => {
  return (
    <section className="relative py-12 sm:py-16 bg-[#120E0D] text-[#FAF7F2] overflow-hidden border-y border-[#FFD400]/20">
      {/* Background Yellow Ambience */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#FFD400]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-80 h-80 bg-[#FF7A00]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="rounded-3xl bg-gradient-to-r from-[#1C1614] via-[#241C19] to-[#1C1614] border border-[#FFD400]/30 p-8 sm:p-12 shadow-2xl flex flex-col lg:flex-row items-center justify-between gap-8">
          
          {/* Left: Brand Identity & Message */}
          <div className="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left gap-6">
            <div className="relative group">
              <KamatLogo size="lg" className="transform group-hover:rotate-6 transition-transform duration-300" />
              <div className="absolute -bottom-1 -right-1 w-6 h-6 rounded-full bg-[#FFD400] text-[#120E0D] flex items-center justify-center shadow-md">
                <Instagram className="w-3.5 h-3.5" />
              </div>
            </div>

            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FFD400]/15 border border-[#FFD400]/40 text-[#FFD400] text-[10px] font-sans font-bold uppercase tracking-[0.22em] mb-2">
                <Sparkles className="w-3 h-3" />
                Live Cake Portfolio
              </div>

              <h3 className="font-serif text-2xl sm:text-4xl font-normal text-[#FAF7F2] leading-tight">
                FOLLOW KAMAT <span className="text-[#FFD400] font-mono font-medium">@kamatbakery</span>
              </h3>

              <p className="text-sm sm:text-base text-[#F5EFEB]/80 font-light mt-1.5 max-w-xl leading-relaxed">
                See our latest cakes, daily fresh creations & celebrations happening across Dharwad.
              </p>
            </div>
          </div>

          {/* Right: Unmissable Kamat Yellow CTA */}
          <div className="shrink-0 w-full sm:w-auto">
            <a
              href={BRAND_CONFIG.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-[#FFD400] hover:bg-[#FFE14D] text-[#120E0D] text-xs font-black tracking-[0.2em] uppercase transition-all duration-300 shadow-[0_10px_25px_rgba(255,212,0,0.3)] hover:shadow-[0_15px_35px_rgba(255,212,0,0.45)] hover:-translate-y-0.5 active:scale-95 group"
            >
              <Instagram className="w-4 h-4 stroke-[2.5]" />
              <span>FOLLOW US ON INSTAGRAM</span>
              <ArrowRight className="w-4 h-4 stroke-[2.5] transition-transform duration-300 group-hover:translate-x-1.5" />
            </a>
          </div>

        </div>
      </div>
    </section>
  );
};
