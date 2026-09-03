import React, { useRef, useState } from 'react';
import { SIGNATURE_CAKES } from '../data/cakes';
import { Cake } from '../types';
import { ChevronLeft, ChevronRight, Sparkles, Eye, ArrowUpRight } from 'lucide-react';

interface SignatureCakesProps {
  onSelectCake: (cake: Cake) => void;
  onQuickOrder: (cake: Cake) => void;
}

export const SignatureCakes: React.FC<SignatureCakesProps> = ({
  onSelectCake,
  onQuickOrder,
}) => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [activeFilter, setActiveFilter] = useState<string>('All');

  const categories = ['All', 'Chocolate', 'Celebration', 'Floral', 'Kids', 'Anniversary', 'Designer'];

  const filteredCakes = activeFilter === 'All'
    ? SIGNATURE_CAKES
    : SIGNATURE_CAKES.filter(c => c.category === activeFilter);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = direction === 'left' ? -420 : 420;
      scrollContainerRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <section id="cakes" className="py-24 sm:py-32 bg-[#FAF7F2] relative overflow-hidden">
      {/* Background Watermark */}
      <div className="absolute top-12 right-0 -mr-24 select-none pointer-events-none opacity-[0.03] text-[#120E0D] font-serif text-[180px] font-bold leading-none hidden md:block">
        KAMAT
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 mb-3">
              <Sparkles className="w-3.5 h-3.5 text-[#E6BE00]" />
              <span className="text-[11px] font-sans font-bold uppercase tracking-[0.25em] text-[#120E0D]">
                Signature Collection • Dharwad
              </span>
            </div>
            
            <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-normal text-[#120E0D] tracking-tight leading-[1.12]">
              CAKES THAT STEAL
              <br />
              <span className="italic font-light font-editorial text-[#54403B]">THE SHOW.</span>
            </h2>

            <p className="mt-4 text-base sm:text-lg text-[#54403B]/90 font-light max-w-xl leading-relaxed">
              From timeless classics to custom creations, every celebration deserves a centrepiece.
            </p>
          </div>

          {/* Navigation Arrows for Slider */}
          <div className="flex items-center gap-3 mt-6 md:mt-0">
            <button
              onClick={() => scroll('left')}
              aria-label="Previous cakes"
              className="w-12 h-12 rounded-full border border-[#D2C4B5] bg-white flex items-center justify-center text-[#120E0D] hover:bg-[#FFD400] hover:border-[#FFD400] transition-all duration-300 active:scale-95 shadow-sm"
            >
              <ChevronLeft className="w-5 h-5 stroke-[2.5]" />
            </button>
            <button
              onClick={() => scroll('right')}
              aria-label="Next cakes"
              className="w-12 h-12 rounded-full border border-[#D2C4B5] bg-white flex items-center justify-center text-[#120E0D] hover:bg-[#FFD400] hover:border-[#FFD400] transition-all duration-300 active:scale-95 shadow-sm"
            >
              <ChevronRight className="w-5 h-5 stroke-[2.5]" />
            </button>
          </div>
        </div>

        {/* Category Pill Filters */}
        <div className="flex items-center gap-2 overflow-x-auto no-scrollbar pb-6 mb-4 -mx-4 px-4 sm:mx-0 sm:px-0">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className={`px-4 py-2 rounded-full text-xs font-bold tracking-wider uppercase transition-all duration-300 whitespace-nowrap ${
                activeFilter === cat
                  ? 'bg-[#120E0D] text-[#FFD400] shadow-md border border-[#120E0D]'
                  : 'bg-[#EDE4DC]/80 text-[#54403B] hover:bg-[#FFD400]/20 hover:text-[#120E0D]'
              }`}
            >
              {cat === 'All' ? 'All Creations' : cat}
            </button>
          ))}
        </div>

        {/* Horizontal Editorial Scrolling Carousel */}
        <div
          ref={scrollContainerRef}
          className="flex gap-6 sm:gap-8 overflow-x-auto no-scrollbar pb-8 pt-2 scroll-smooth snap-x snap-mandatory -mx-4 px-4 sm:mx-0 sm:px-0"
        >
          {filteredCakes.map((cake) => (
            <div
              key={cake.id}
              className="flex-none w-[290px] sm:w-[350px] lg:w-[390px] snap-start group relative flex flex-col bg-[#F5EFEB] rounded-2xl overflow-hidden border border-[#E8DFD5] transition-all duration-500 hover:shadow-2xl hover:-translate-y-1.5"
            >
              {/* Image Container with Luxury Overlay */}
              <div className="relative aspect-[4/5] w-full overflow-hidden bg-[#120E0D]/5 cursor-pointer" onClick={() => onSelectCake(cake)}>
                <img
                  src={cake.image}
                  alt={cake.alt}
                  loading="lazy"
                  className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-108"
                />
                
                <div className="absolute inset-0 bg-gradient-to-t from-[#120E0D]/80 via-transparent to-transparent opacity-60 group-hover:opacity-85 transition-opacity duration-300" />

                {/* Badges */}
                <div className="absolute top-4 left-4 flex flex-col gap-1.5 z-10">
                  <span className="px-3 py-1 rounded-full text-[10px] font-sans font-bold uppercase tracking-[0.2em] bg-[#120E0D]/90 backdrop-blur-md text-[#FAF7F2] border border-white/15">
                    {cake.category}
                  </span>
                  {cake.isSignature && (
                    <span className="px-3 py-1 rounded-full text-[9px] font-sans font-extrabold uppercase tracking-[0.18em] bg-[#FFD400] text-[#120E0D] shadow-sm">
                      Kamat Signature
                    </span>
                  )}
                </div>

                {/* Quick View Button overlay on hover */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/25 backdrop-blur-[2px]">
                  <span className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#FFD400] text-[#120E0D] text-xs font-black tracking-wider uppercase shadow-xl transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                    <Eye className="w-3.5 h-3.5 stroke-[2.5]" />
                    View Details
                  </span>
                </div>

                {/* Bottom Overlay Info on Image */}
                <div className="absolute bottom-4 left-4 right-4 text-white z-10">
                  <p className="text-[11px] font-sans font-bold tracking-widest text-[#FFD400] uppercase">
                    {cake.tiers || 'Artisanal Made'}
                  </p>
                </div>
              </div>

              {/* Card Body - Minimal & Editorial */}
              <div className="p-6 flex-1 flex flex-col justify-between bg-[#F5EFEB]">
                <div>
                  <h3
                    onClick={() => onSelectCake(cake)}
                    className="font-serif text-xl sm:text-2xl font-normal text-[#120E0D] group-hover:text-[#B88600] transition-colors cursor-pointer leading-snug"
                  >
                    {cake.title}
                  </h3>
                  <p className="mt-1 text-xs text-[#54403B] font-medium tracking-wide">
                    {cake.subtitle}
                  </p>
                  <p className="mt-3 text-xs text-[#54403B]/80 line-clamp-2 leading-relaxed font-sans">
                    {cake.flavorProfile}
                  </p>
                </div>

                {/* Action Buttons */}
                <div className="mt-6 pt-4 border-t border-[#E2D5C8] flex items-center justify-between">
                  <button
                    onClick={() => onSelectCake(cake)}
                    className="text-xs font-sans font-bold uppercase tracking-[0.16em] text-[#120E0D] hover:text-[#B88600] flex items-center gap-1 group/btn"
                  >
                    <span>Details</span>
                    <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
                  </button>

                  <button
                    onClick={() => onQuickOrder(cake)}
                    className="px-4 py-2 rounded-full bg-[#120E0D] hover:bg-[#FFD400] hover:text-[#120E0D] text-[#FAF7F2] text-[11px] font-bold tracking-wider uppercase transition-colors shadow-sm"
                  >
                    Order Design
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Swipe hint for mobile */}
        <div className="text-center sm:hidden mt-2 text-[11px] text-[#54403B] tracking-widest uppercase font-medium">
          ← Swipe to explore more cakes →
        </div>
      </div>
    </section>
  );
};
