import React from 'react';
import { Sparkles, Heart, Award, Clock } from 'lucide-react';
import { KamatLogo } from './KamatLogo';

export const KamatStory: React.FC = () => {
  return (
    <section id="story" className="py-24 sm:py-32 bg-[#FAF7F2] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Subtle Brand Tag */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 mb-3">
            <Sparkles className="w-3.5 h-3.5 text-[#E6BE00]" />
            <span className="text-[11px] font-sans font-bold uppercase tracking-[0.3em] text-[#120E0D]">
              KAMAT BAKERY • DHARWAD
            </span>
          </div>

          <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-normal text-[#120E0D] tracking-tight leading-[1.1]">
            MADE FOR
            <br />
            <span className="italic font-light font-editorial text-[#54403B]">MOMENTS.</span>
          </h2>
        </div>

        {/* Editorial Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Text / Heritage Story Column */}
          <div className="lg:col-span-6 space-y-6 text-[#3D2E2A]">
            <p className="font-serif text-2xl sm:text-3xl text-[#120E0D] font-normal leading-relaxed">
              In Dharwad, celebrations are woven into the heart of everyday life. At Kamat Bakery, we believe a cake is never just dessert—it is the centerpiece of memory.
            </p>

            <p className="text-base sm:text-lg font-light leading-relaxed text-[#54403B]/90 font-sans">
              Satisfying Dharwad’s cravings one bake at a time since 1988. From children blowing out their very first birthday candles to families coming together for silver & golden jubilees, our ovens have always run on the warmth of local celebrations.
            </p>

            <p className="text-base sm:text-lg font-light leading-relaxed text-[#54403B]/90 font-sans">
              We combine the artistry of modern patisserie with time-tested baking integrity. Every tier is stacked with care, every frosting piped with intention, and every creation tailored to make your celebration truly unforgettable.
            </p>

            {/* 3 Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6 border-t border-[#E8DFD5]">
              <div className="p-4 rounded-xl bg-[#F5EFEB] border border-[#E2D5C8]">
                <Heart className="w-5 h-5 text-[#FFD400] mb-2 fill-[#FFD400]" />
                <h3 className="font-serif text-base font-bold text-[#120E0D]">Bespoke Craft</h3>
                <p className="text-xs text-[#54403B] font-light mt-1">Made fresh for your specific milestone.</p>
              </div>

              <div className="p-4 rounded-xl bg-[#F5EFEB] border border-[#E2D5C8]">
                <Clock className="w-5 h-5 text-[#120E0D] mb-2" />
                <h3 className="font-serif text-base font-bold text-[#120E0D]">Baked Daily</h3>
                <p className="text-xs text-[#54403B] font-light mt-1">Small batch preparation every morning.</p>
              </div>

              <div className="p-4 rounded-xl bg-[#F5EFEB] border border-[#E2D5C8]">
                <Award className="w-5 h-5 text-[#FFD400] mb-2" />
                <h3 className="font-serif text-base font-bold text-[#120E0D]">Since 1988</h3>
                <p className="text-xs text-[#54403B] font-light mt-1">Beloved local destination for celebration.</p>
              </div>
            </div>
          </div>

          {/* Right Visual Composition */}
          <div className="lg:col-span-6 relative">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="rounded-2xl overflow-hidden shadow-lg aspect-[3/4] border border-[#E8DFD5]">
                  <img
                    src="https://images.unsplash.com/photo-1578985545062-69928b1d9587?q=80&w=800&auto=format&fit=crop"
                    alt="Artisan chocolate cake finishing"
                    loading="lazy"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="rounded-2xl overflow-hidden shadow-lg aspect-square border border-[#E8DFD5]">
                  <img
                    src="https://images.unsplash.com/photo-1509440159596-0249088772ff?q=80&w=800&auto=format&fit=crop"
                    alt="Fresh artisan bakery bread"
                    loading="lazy"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              <div className="space-y-4 pt-8">
                <div className="rounded-2xl overflow-hidden shadow-lg aspect-square border border-[#E8DFD5]">
                  <img
                    src="https://images.unsplash.com/photo-1535141192574-5d4897c13136?q=80&w=800&auto=format&fit=crop"
                    alt="Floral details on cake"
                    loading="lazy"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="rounded-2xl overflow-hidden shadow-lg aspect-[3/4] border border-[#E8DFD5]">
                  <img
                    src="https://images.unsplash.com/photo-1586788680434-30d324b2d46f?q=80&w=800&auto=format&fit=crop"
                    alt="Velvet red texture cake"
                    loading="lazy"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Floating Stamp / Authentic Kamat Logo */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 p-2 bg-[#FAF7F2] rounded-full shadow-2xl border-4 border-[#FAF7F2] hover:scale-110 transition-transform duration-300">
              <KamatLogo size="xl" />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
