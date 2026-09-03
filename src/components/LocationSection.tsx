import React from 'react';
import { MapPin, Navigation, Clock, Sparkles } from 'lucide-react';

export const LocationSection: React.FC = () => {
  return (
    <section className="py-24 sm:py-32 bg-[#F5EFEB] relative overflow-hidden border-t border-[#E8DFD5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left: Location & Visiting Information */}
          <div className="lg:col-span-5 space-y-6">
            <div className="inline-flex items-center gap-2">
              <Sparkles className="w-3.5 h-3.5 text-[#C79F3F]" />
              <span className="text-[11px] font-sans font-semibold uppercase tracking-[0.25em] text-[#9B6C3F]">
                Visit Our Bakery
              </span>
            </div>

            <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-normal text-[#1F1412] tracking-tight leading-[1.08]">
              COME SAY
              <br />
              <span className="italic font-light font-editorial text-[#5E3E36]">HELLO.</span>
            </h2>

            <div className="p-6 rounded-2xl bg-[#FAF7F2] border border-[#E8DFD5] space-y-4 shadow-sm">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#9B6C3F] shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-serif text-lg font-semibold text-[#1F1412]">
                    Kamat Bakery
                  </h3>
                  <p className="text-sm text-[#5E3E36] font-light">
                    Dharwad, Karnataka
                  </p>
                  <p className="text-xs text-[#5E3E36]/70 mt-1">
                    (Central location convenient for cake pickups & tastings)
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 pt-3 border-t border-[#E8DFD5]">
                <Clock className="w-5 h-5 text-[#9B6C3F] shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs uppercase font-bold tracking-wider text-[#1F1412]">
                    Store Hours
                  </h4>
                  <p className="text-sm text-[#5E3E36] font-light">
                    Monday – Sunday: 9:00 AM – 10:30 PM
                  </p>
                </div>
              </div>
            </div>

            {/* Directions Button */}
            <a
              href="https://maps.google.com/?q=Dharwad+Karnataka"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-[#1F1412] text-[#FAF7F2] text-xs font-semibold tracking-[0.2em] uppercase hover:bg-[#432C26] transition-all duration-300 shadow-lg hover:shadow-xl group"
            >
              <Navigation className="w-4 h-4 text-[#DDB760]" />
              <span>GET DIRECTIONS</span>
              <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
            </a>
          </div>

          {/* Right: Stylized Visual Map Card */}
          <div className="lg:col-span-7">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-[#E8DFD5] aspect-[16/10] bg-[#EDE4DC] group">
              {/* Map Graphic Simulation */}
              <div className="absolute inset-0 bg-[#E2D5C8] opacity-70">
                {/* Simulated Street grid */}
                <svg className="w-full h-full opacity-40" xmlns="http://www.w3.org/2000/svg">
                  <defs>
                    <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                      <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#B8A593" strokeWidth="1" />
                    </pattern>
                  </defs>
                  <rect width="100%" height="100%" fill="url(#grid)" />
                  <path d="M 0 100 Q 250 200 600 80 T 1200 300" fill="none" stroke="#9B6C3F" strokeWidth="4" opacity="0.6" />
                  <path d="M 100 0 Q 300 300 700 400" fill="none" stroke="#FAF7F2" strokeWidth="6" opacity="0.9" />
                </svg>
              </div>

              {/* Map Center Pin */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative flex flex-col items-center animate-bounce">
                  <div className="px-4 py-2 rounded-xl bg-[#1F1412] text-[#FAF7F2] text-xs font-serif font-semibold shadow-2xl border border-[#DDB760] flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#DDB760] animate-ping" />
                    Kamat Bakery, Dharwad
                  </div>
                  <div className="w-4 h-4 bg-[#1F1412] rotate-45 -mt-2 border-r border-b border-[#DDB760]" />
                </div>
              </div>

              {/* Bottom Card in Map */}
              <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-[#FAF7F2]/90 backdrop-blur-md border border-[#E8DFD5] flex items-center justify-between">
                <div>
                  <p className="text-xs font-bold text-[#1F1412]">Ready for your celebration?</p>
                  <p className="text-[11px] text-[#5E3E36]">Pickups and counter cake consultations daily.</p>
                </div>
                <a
                  href="https://maps.google.com/?q=Dharwad+Karnataka"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-semibold text-[#9B6C3F] hover:text-[#1F1412] uppercase tracking-wider underline"
                >
                  Open in Maps
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
