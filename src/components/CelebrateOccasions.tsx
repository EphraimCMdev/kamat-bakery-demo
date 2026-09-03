import React from 'react';
import { CELEBRATION_CATEGORIES } from '../data/cakes';
import { CelebrationCategory } from '../types';
import { ArrowRight, Sparkles } from 'lucide-react';

interface CelebrateOccasionsProps {
  onSelectOccasion: (category: CelebrationCategory) => void;
}

export const CelebrateOccasions: React.FC<CelebrateOccasionsProps> = ({
  onSelectOccasion,
}) => {
  return (
    <section id="celebrations" className="py-24 sm:py-32 bg-[#F5EFEB] relative overflow-hidden border-y border-[#E8DFD5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 mb-3">
            <Sparkles className="w-3.5 h-3.5 text-[#E6BE00]" />
            <span className="text-[11px] font-sans font-bold uppercase tracking-[0.25em] text-[#120E0D]">
              Tailored For Your Milestones
            </span>
          </div>

          <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-normal text-[#120E0D] tracking-tight leading-[1.1]">
            WHAT ARE WE
            <br />
            <span className="italic font-light font-editorial text-[#54403B]">CELEBRATING?</span>
          </h2>

          <p className="mt-4 text-base sm:text-lg text-[#54403B]/90 font-light max-w-xl mx-auto leading-relaxed">
            Every moment in Dharwad holds a distinct memory. Choose your occasion and explore handcrafted cake styles created to celebrate it.
          </p>
        </div>

        {/* Interactive Categories Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {CELEBRATION_CATEGORIES.map((cat, idx) => (
            <div
              key={cat.id}
              onClick={() => onSelectOccasion(cat)}
              className="group relative h-[380px] sm:h-[420px] rounded-2xl overflow-hidden cursor-pointer shadow-md hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 flex flex-col justify-end p-6 sm:p-8"
            >
              {/* Background Image */}
              <img
                src={cat.image}
                alt={`${cat.name} Celebration Cake by Kamat`}
                loading="lazy"
                className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-110"
              />

              {/* Dark Luxury Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#120E0D] via-[#120E0D]/55 to-black/15 group-hover:via-[#120E0D]/65 transition-colors duration-300" />

              {/* Card Index Marker */}
              <div className="absolute top-6 right-6 text-[#FFD400]/70 font-mono text-xs font-bold">
                0{idx + 1}
              </div>

              {/* Content Overlay */}
              <div className="relative z-10 text-white transform transition-transform duration-300 group-hover:translate-y-0">
                <span className="text-[10px] uppercase font-sans tracking-[0.25em] text-[#FFD400] font-bold block mb-1">
                  Occasion Collection
                </span>
                
                <h3 className="font-serif text-2xl sm:text-3xl font-normal text-[#FAF7F2] mb-2 group-hover:text-[#FFD400] transition-colors">
                  {cat.name}
                </h3>

                <p className="text-xs sm:text-sm text-white/85 font-light mb-4 line-clamp-2 leading-relaxed">
                  {cat.tagline}
                </p>

                {/* Popular Styles Tags */}
                <div className="flex flex-wrap gap-1.5 mb-4 opacity-80 group-hover:opacity-100 transition-opacity">
                  {cat.popularStyles.map((style, i) => (
                    <span
                      key={i}
                      className="text-[9px] uppercase tracking-wider px-2 py-0.5 rounded-full bg-white/10 backdrop-blur-sm text-white/95 border border-white/10"
                    >
                      {style}
                    </span>
                  ))}
                </div>

                {/* Explore CTA */}
                <div className="flex items-center text-xs font-bold uppercase tracking-[0.18em] text-[#FAF7F2] group-hover:text-[#FFD400] transition-colors">
                  <span>Plan {cat.name} Cake</span>
                  <ArrowRight className="w-3.5 h-3.5 ml-2 transition-transform duration-300 group-hover:translate-x-2" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
