import React, { useState } from 'react';
import { ArrowRight, Sparkles, Check, HeartHandshake, Wand2 } from 'lucide-react';
import { FLAVOR_OPTIONS, WEIGHT_OPTIONS } from '../data/cakes';

interface CustomCakeSectionProps {
  onStartCustomCake: (prefill?: any) => void;
}

export const CustomCakeSection: React.FC<CustomCakeSectionProps> = ({
  onStartCustomCake,
}) => {
  const [selectedFlavor, setSelectedFlavor] = useState(FLAVOR_OPTIONS[0]);
  const [selectedWeight, setSelectedWeight] = useState(WEIGHT_OPTIONS[1]);

  const handleStartWithPrefill = () => {
    onStartCustomCake({
      flavor: selectedFlavor,
      weight: selectedWeight,
      orderType: 'custom'
    });
  };

  return (
    <section id="custom-cakes" className="py-24 sm:py-32 bg-[#120E0D] text-[#FAF7F2] relative overflow-hidden">
      {/* Ambient background yellow & orange glows */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#FFD400]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#FF7A00]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Dramatic Large Cake Image */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-white/10 aspect-[4/5] sm:aspect-square lg:aspect-[4/5]">
              <img
                src="https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?q=85&w=1400&auto=format&fit=crop"
                alt="Custom handcrafted designer cake by Kamat Bakery Dharwad"
                loading="lazy"
                className="w-full h-full object-cover object-center scale-100 hover:scale-105 transition-transform duration-700"
              />
              
              <div className="absolute inset-0 bg-gradient-to-t from-[#120E0D]/85 via-transparent to-black/20" />

              {/* Floating Feature Card */}
              <div className="absolute bottom-6 left-6 right-6 p-5 rounded-2xl bg-[#1C1614]/95 backdrop-blur-md border border-[#FFD400]/30 shadow-xl">
                <div className="flex items-center gap-2 mb-2.5">
                  <Wand2 className="w-4 h-4 text-[#FFD400]" />
                  <span className="text-[10.5px] uppercase font-sans font-bold tracking-[0.22em] text-[#FFD400]">
                    Bespoke Craftsmanship
                  </span>
                </div>
                <div className="grid grid-cols-2 gap-2 text-xs text-[#FAF7F2]/90 font-light">
                  <div className="flex items-center gap-1.5">
                    <Check className="w-3.5 h-3.5 text-[#FFD400] stroke-[3]" />
                    <span>Personalized Themes</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Check className="w-3.5 h-3.5 text-[#FFD400] stroke-[3]" />
                    <span>Multi-Tier Stacking</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Check className="w-3.5 h-3.5 text-[#FFD400] stroke-[3]" />
                    <span>Custom Flavors</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Check className="w-3.5 h-3.5 text-[#FFD400] stroke-[3]" />
                    <span>Edible Art & Florals</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Copy & Interactive Enquiry Flow */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            
            {/* Tagline */}
            <div className="inline-flex items-center gap-2 mb-4">
              <Sparkles className="w-3.5 h-3.5 text-[#FFD400]" />
              <span className="text-[11px] font-sans font-bold uppercase tracking-[0.28em] text-[#FFD400]">
                Custom Cake Studio • Dharwad
              </span>
            </div>

            {/* Large Dramatic Headline */}
            <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-normal tracking-tight leading-[1.08] text-[#FAF7F2] mb-6">
              YOU IMAGINE IT.
              <br />
              <span className="italic font-light font-editorial text-[#FFD400]">
                WE BAKE IT.
              </span>
            </h2>

            {/* Copy */}
            <p className="text-base sm:text-lg text-[#F5EFEB]/90 font-light leading-relaxed mb-8">
              Have something specific in mind? Tell us what you're imagining and let Kamat turn it into a cake worth remembering.
            </p>

            {/* Interactive Taste Configurator */}
            <div className="bg-[#1C1614] p-6 rounded-2xl border border-white/10 mb-8 space-y-4 shadow-inner">
              <p className="text-xs uppercase tracking-[0.2em] font-bold text-[#FFD400]">
                Quick Taste Configurator:
              </p>

              <div>
                <label className="block text-[11px] uppercase tracking-wider text-white/70 mb-2 font-semibold">
                  Select Flavor Profile
                </label>
                <select
                  value={selectedFlavor}
                  onChange={(e) => setSelectedFlavor(e.target.value)}
                  aria-label="Select Flavor Profile"
                  className="w-full px-4 py-3 rounded-xl bg-[#120E0D] border border-white/20 text-white text-sm focus:border-[#FFD400] focus:outline-none focus:ring-1 focus:ring-[#FFD400] transition-colors"
                >
                  {FLAVOR_OPTIONS.map((flavor) => (
                    <option key={flavor} value={flavor}>
                      {flavor}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-[11px] uppercase tracking-wider text-white/70 mb-2 font-semibold">
                  Select Approximate Size
                </label>
                <select
                  value={selectedWeight}
                  onChange={(e) => setSelectedWeight(e.target.value)}
                  aria-label="Select Approximate Size"
                  className="w-full px-4 py-3 rounded-xl bg-[#120E0D] border border-white/20 text-white text-sm focus:border-[#FFD400] focus:outline-none focus:ring-1 focus:ring-[#FFD400] transition-colors"
                >
                  {WEIGHT_OPTIONS.map((weight) => (
                    <option key={weight} value={weight}>
                      {weight}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Primary Kamat Yellow CTA Button */}
            <button
              onClick={handleStartWithPrefill}
              className="inline-flex items-center justify-center px-9 py-4 rounded-full bg-[#FFD400] hover:bg-[#FFE14D] text-[#120E0D] text-xs font-black tracking-[0.22em] uppercase transition-all duration-300 shadow-[0_10px_30px_rgba(255,212,0,0.35)] hover:shadow-[0_15px_40px_rgba(255,212,0,0.5)] active:scale-95 group w-full sm:w-auto"
            >
              <span>START A CUSTOM CAKE</span>
              <ArrowRight className="w-4 h-4 ml-2 stroke-[2.5] transition-transform duration-300 group-hover:translate-x-1.5" />
            </button>
            
            <p className="mt-4 text-xs text-white/60 flex items-center gap-1.5 font-light">
              <HeartHandshake className="w-3.5 h-3.5 text-[#FFD400]" />
              <span>We collaborate with you on WhatsApp to finalize every celebratory detail.</span>
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};
