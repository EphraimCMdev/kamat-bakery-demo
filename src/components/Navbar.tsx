import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight, Sparkles, Instagram } from 'lucide-react';
import { BRAND_CONFIG } from '../data/config';
import { KamatLogo } from './KamatLogo';

interface NavbarProps {
  onOpenOrderModal: (initialData?: any) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenOrderModal }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Cakes', href: '#cakes' },
    { name: 'Celebrations', href: '#celebrations' },
    { name: 'Custom Cakes', href: '#custom-cakes' },
    { name: 'Our Story', href: '#story' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
          isScrolled
            ? 'bg-[#FAF7F2]/95 backdrop-blur-md py-3 shadow-md border-b border-[#E8DFD5]'
            : 'bg-gradient-to-b from-[#120E0D]/90 via-[#120E0D]/50 to-transparent py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            
            {/* Brand Logo with Kamat Yellow Badge */}
            <a
              href="#"
              className="flex items-center gap-3 group focus:outline-none"
            >
              <KamatLogo size="md" className="group-hover:scale-105 transition-transform duration-300" />
              <div className="flex flex-col items-start">
                <span
                  className={`font-serif text-xl sm:text-2xl font-black tracking-[0.16em] transition-colors duration-300 ${
                    isScrolled ? 'text-[#120E0D]' : 'text-[#FAF7F2]'
                  }`}
                >
                  KAMAT
                </span>
                <span
                  className={`text-[8.5px] sm:text-[9.5px] font-sans font-bold tracking-[0.32em] uppercase -mt-1 transition-colors duration-300 ${
                    isScrolled ? 'text-[#B88600]' : 'text-[#FFD400]'
                  }`}
                >
                  Dharwad • Since 1988
                </span>
              </div>
            </a>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center space-x-7">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className={`text-xs uppercase tracking-[0.18em] font-semibold transition-colors duration-200 relative group py-1 ${
                    isScrolled
                      ? 'text-[#3D2E2A] hover:text-[#120E0D]'
                      : 'text-[#FAF7F2]/90 hover:text-white'
                  }`}
                >
                  {link.name}
                  <span
                    className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#FFD400] transition-all duration-300 group-hover:w-full"
                  />
                </a>
              ))}
            </nav>

            {/* Desktop Right Actions: Prominent Instagram & Kamat Yellow Order Button */}
            <div className="hidden sm:flex items-center space-x-3">
              {/* Instagram Noticeable Pill */}
              <a
                href={BRAND_CONFIG.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                title="Follow Kamat Bakery on Instagram"
                className={`inline-flex items-center gap-2 px-3.5 py-2 rounded-full text-xs font-semibold tracking-wider transition-all duration-300 border ${
                  isScrolled
                    ? 'text-[#120E0D] hover:bg-[#FFD400] hover:border-[#FFD400] border-[#D2C4B5] bg-white'
                    : 'text-[#FAF7F2] hover:text-[#120E0D] hover:bg-[#FFD400] hover:border-[#FFD400] border-white/20 bg-white/10 backdrop-blur-sm'
                }`}
              >
                <Instagram className="w-3.5 h-3.5 text-[#FFD400] group-hover:text-[#120E0D]" />
                <span className="font-mono text-[11px]">@kamatbakery</span>
              </a>

              {/* Primary Kamat Yellow Order CTA */}
              <button
                onClick={() => onOpenOrderModal()}
                className="inline-flex items-center px-5 py-2.5 rounded-full text-xs font-black tracking-[0.16em] uppercase bg-[#FFD400] hover:bg-[#FFE14D] text-[#120E0D] shadow-md hover:shadow-xl hover:-translate-y-0.5 active:scale-95 transition-all duration-300 group"
              >
                <Sparkles className="w-3.5 h-3.5 mr-1.5 fill-black text-black" />
                <span>Order a Cake</span>
                <ArrowRight className="w-3.5 h-3.5 ml-1.5 transition-transform duration-300 group-hover:translate-x-1 stroke-[2.5]" />
              </button>
            </div>

            {/* Mobile Actions */}
            <div className="flex sm:hidden items-center gap-2">
              <a
                href={BRAND_CONFIG.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-9 h-9 rounded-full bg-[#FFD400] text-[#120E0D] flex items-center justify-center shadow-md active:scale-95"
              >
                <Instagram className="w-4 h-4 stroke-[2.5]" />
              </a>

              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-label="Toggle Navigation Menu"
                className={`p-2 rounded-lg transition-colors ${
                  isScrolled
                    ? 'text-[#120E0D] hover:bg-[#E8DFD5]/50'
                    : 'text-[#FAF7F2] hover:bg-white/10'
                }`}
              >
                {mobileMenuOpen ? (
                  <X className="w-6 h-6" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </button>
            </div>

          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 md:hidden bg-[#120E0D]/80 backdrop-blur-md">
          <div className="fixed inset-y-0 right-0 w-[85%] max-w-sm bg-[#FAF7F2] p-6 shadow-2xl flex flex-col justify-between animate-in slide-in-from-right duration-300">
            <div>
              {/* Drawer Header */}
              <div className="flex items-center justify-between pb-5 border-b border-[#E8DFD5]">
                <div className="flex items-center gap-2.5">
                  <KamatLogo size="sm" />
                  <div>
                    <span className="font-serif text-xl font-black tracking-[0.16em] text-[#120E0D] block">
                      KAMAT
                    </span>
                    <p className="text-[8.5px] font-sans font-bold tracking-[0.25em] uppercase text-[#B88600]">
                      Dharwad • Since 1988
                    </p>
                  </div>
                </div>
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-2 rounded-full text-[#3D2E2A] hover:bg-[#E8DFD5]"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Navigation Links */}
              <nav className="mt-6 flex flex-col space-y-3">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="text-base font-serif font-medium text-[#120E0D] hover:text-[#B88600] tracking-wide py-2 border-b border-[#FAF7F2]/60 flex items-center justify-between"
                  >
                    <span>{link.name}</span>
                    <ArrowRight className="w-4 h-4 text-[#B88600]" />
                  </a>
                ))}
              </nav>

              {/* Prominent Instagram Box in Mobile Menu */}
              <div className="mt-6 p-4 rounded-2xl bg-[#120E0D] text-[#FAF7F2] border border-[#FFD400]/40 shadow-lg">
                <a
                  href={BRAND_CONFIG.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between group"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-[#FFD400] text-[#120E0D] flex items-center justify-center shrink-0">
                      <Instagram className="w-5 h-5 stroke-[2.5]" />
                    </div>
                    <div>
                      <p className="font-mono text-xs font-bold text-[#FFD400]">@kamatbakery</p>
                      <p className="text-[10.5px] text-white/80 font-light">See our latest cakes on Instagram</p>
                    </div>
                  </div>
                  <ArrowRight className="w-4 h-4 text-[#FFD400] group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>

            {/* Mobile Drawer Bottom Action */}
            <div className="pt-6 border-t border-[#E8DFD5] space-y-3">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenOrderModal();
                }}
                className="w-full flex items-center justify-center py-4 rounded-full bg-[#FFD400] text-[#120E0D] font-black text-xs tracking-[0.18em] uppercase shadow-xl hover:bg-[#FFE14D] active:scale-95"
              >
                <Sparkles className="w-4 h-4 mr-2 fill-black text-black" />
                <span>Order a Cake</span>
              </button>
              <p className="text-center text-[10.5px] text-[#54403B] tracking-wider font-medium">
                Freshly Baked in Dharwad • Since 1988
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
