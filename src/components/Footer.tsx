import React from 'react';
import { ArrowUp, Sparkles, Instagram } from 'lucide-react';
import { BRAND_CONFIG } from '../data/config';
import { KamatLogo } from './KamatLogo';

interface FooterProps {
  onOpenCustomOrder: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenCustomOrder }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#120E0D] text-[#FAF7F2] pt-20 pb-28 md:pb-16 border-t border-white/10 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-16 border-b border-white/10">
          
          {/* Brand Column with Kamat Logo */}
          <div className="lg:col-span-2 space-y-4">
            <a href="#" className="flex items-center gap-3 group">
              <KamatLogo size="md" />
              <div>
                <span className="font-serif text-2xl font-black tracking-[0.18em] text-[#FAF7F2] block">
                  KAMAT
                </span>
                <span className="text-[9px] font-sans font-bold tracking-[0.35em] uppercase text-[#FFD400]">
                  Dharwad • Since 1988
                </span>
              </div>
            </a>

            <p className="text-sm font-light text-[#F5EFEB]/80 max-w-sm leading-relaxed">
              Crafting celebration centerpieces, artisanal loaves and signature cakes that make every milestone in Dharwad unforgettable.
            </p>

            {/* Direct Action & Instagram Link */}
            <div className="pt-2 flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <button
                onClick={onOpenCustomOrder}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#FFD400] text-[#120E0D] text-xs font-black tracking-wider uppercase hover:bg-[#FFE14D] transition-all shadow-md active:scale-95"
              >
                <Sparkles className="w-3.5 h-3.5 fill-black text-black" />
                <span>Plan A Cake</span>
              </button>

              <a
                href={BRAND_CONFIG.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs font-bold text-[#FAF7F2]/90 hover:text-[#FFD400] transition-colors py-2"
              >
                <Instagram className="w-4 h-4 text-[#FFD400]" />
                <span>Instagram · @kamatbakery</span>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <h4 className="text-xs uppercase font-bold tracking-[0.2em] text-[#FFD400]">
              Explore
            </h4>
            <ul className="space-y-2 text-sm text-[#F5EFEB]/75 font-light">
              <li><a href="#cakes" className="hover:text-[#FFD400] transition-colors">Signature Cakes</a></li>
              <li><a href="#celebrations" className="hover:text-[#FFD400] transition-colors">Celebration Styles</a></li>
              <li><a href="#custom-cakes" className="hover:text-[#FFD400] transition-colors">Custom Cake Studio</a></li>
              <li><a href="#story" className="hover:text-[#FFD400] transition-colors">Our Dharwad Story</a></li>
              <li><a href="#gallery" className="hover:text-[#FFD400] transition-colors">Instagram Showcase</a></li>
            </ul>
          </div>

          {/* Celebrations */}
          <div className="space-y-3">
            <h4 className="text-xs uppercase font-bold tracking-[0.2em] text-[#FFD400]">
              Celebrations
            </h4>
            <ul className="space-y-2 text-sm text-[#F5EFEB]/75 font-light">
              <li><a href="#celebrations" className="hover:text-[#FFD400] transition-colors">Birthdays & Milestones</a></li>
              <li><a href="#celebrations" className="hover:text-[#FFD400] transition-colors">Anniversary Centerpieces</a></li>
              <li><a href="#celebrations" className="hover:text-[#FFD400] transition-colors">Wedding & Engagement</a></li>
              <li><a href="#celebrations" className="hover:text-[#FFD400] transition-colors">Baby Showers & Revels</a></li>
              <li><a href="#celebrations" className="hover:text-[#FFD400] transition-colors">Designer Sculpted Cakes</a></li>
            </ul>
          </div>

          {/* Connect & Social */}
          <div className="space-y-3">
            <h4 className="text-xs uppercase font-bold tracking-[0.2em] text-[#FFD400]">
              Connect
            </h4>
            <div className="space-y-2.5 text-sm text-[#F5EFEB]/80 font-light">
              <p>
                <a
                  href={BRAND_CONFIG.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#FFD400] transition-colors flex items-center gap-1.5 font-medium"
                >
                  <Instagram className="w-4 h-4 text-[#FFD400]" />
                  <span>Instagram · @kamatbakery</span>
                </a>
              </p>
              <p className="text-xs text-[#F5EFEB]/70 pt-1">
                Open Daily: 9:00 AM – 10:30 PM<br />
                Dharwad, Karnataka
              </p>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/50">
          <p>© {new Date().getFullYear()} Kamat Bakery, Dharwad (Since 1988). All rights reserved.</p>
          
          <div className="flex items-center gap-6">
            <a
              href={BRAND_CONFIG.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#FFD400] transition-colors flex items-center gap-1.5 font-mono"
            >
              <Instagram className="w-3.5 h-3.5 text-[#FFD400]" />
              <span>@kamatbakery</span>
            </a>

            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-1.5 hover:text-[#FFD400] transition-colors"
            >
              <span>Back to top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
