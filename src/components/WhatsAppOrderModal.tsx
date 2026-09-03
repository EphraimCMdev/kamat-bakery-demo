import React, { useState, useEffect } from 'react';
import { X, Sparkles, MessageSquare, Cake as CakeIcon, Wand2, ArrowRight, Check } from 'lucide-react';
import { FLAVOR_OPTIONS, WEIGHT_OPTIONS } from '../data/cakes';
import { KamatLogo } from './KamatLogo';

type OrderType = 'choose' | 'custom' | 'direct';

interface WhatsAppOrderModalProps {
  isOpen: boolean;
  onClose: () => void;
  onProceedToDemoHandoff: () => void;
  initialData?: {
    flavor?: string;
    weight?: string;
    occasion?: string;
    cakeTitle?: string;
    orderType?: OrderType;
  };
}

export const WhatsAppOrderModal: React.FC<WhatsAppOrderModalProps> = ({
  isOpen,
  onClose,
  onProceedToDemoHandoff,
  initialData,
}) => {
  const [selectedType, setSelectedType] = useState<OrderType>('choose');
  const [flavor, setFlavor] = useState<string>(FLAVOR_OPTIONS[0]);
  const [weight, setWeight] = useState<string>(WEIGHT_OPTIONS[1]);
  const [occasion, setOccasion] = useState<string>('Birthday');
  const [customNotes, setCustomNotes] = useState<string>('');

  useEffect(() => {
    if (initialData) {
      if (initialData.orderType) setSelectedType(initialData.orderType);
      if (initialData.flavor) setFlavor(initialData.flavor);
      if (initialData.weight) setWeight(initialData.weight);
      if (initialData.occasion) setOccasion(initialData.occasion);
      if (initialData.cakeTitle) setCustomNotes(`Interested in: ${initialData.cakeTitle}`);
    }
  }, [initialData]);

  // Handle ESC key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleContinue = () => {
    // Closes order configurator and opens the Demo Preview Modal
    onProceedToDemoHandoff();
  };

  return (
    <div
      className="fixed inset-0 z-50 bg-[#120E0D]/80 backdrop-blur-md flex items-end sm:items-center justify-center p-0 sm:p-4 overflow-y-auto animate-in fade-in duration-300"
      onClick={onClose}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="bg-[#FAF7F2] w-full max-w-4xl rounded-t-3xl sm:rounded-3xl shadow-2xl border border-[#E8DFD5] overflow-hidden relative flex flex-col md:flex-row max-h-[92vh] sm:max-h-[88vh] animate-in slide-in-from-bottom sm:zoom-in-95 duration-300"
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          aria-label="Close order dialog"
          className="absolute top-4 right-4 z-20 w-9 h-9 rounded-full bg-[#120E0D]/75 hover:bg-[#120E0D] text-white flex items-center justify-center transition-colors shadow-md"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Left Side (Desktop): Gorgeous Cake Visual */}
        <div className="md:w-5/12 hidden md:block relative bg-[#120E0D]">
          <img
            src="https://images.unsplash.com/photo-1535141192574-5d4897c13136?q=85&w=1200&auto=format&fit=crop"
            alt="Artisanal Celebration Cake by Kamat Bakery"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#120E0D] via-[#120E0D]/40 to-transparent opacity-90" />

          {/* Left Overlay Text */}
          <div className="absolute bottom-8 left-8 right-8 text-[#FAF7F2]">
            <div className="flex items-center gap-2 mb-3">
              <KamatLogo size="sm" />
              <span className="text-[10px] uppercase font-sans font-extrabold tracking-widest text-[#FFD400]">
                Kamat Bakery • Since 1988
              </span>
            </div>

            <h3 className="font-serif text-2xl font-normal leading-tight text-[#FAF7F2]">
              Made for your biggest moments.
            </h3>
            <p className="text-xs text-white/80 font-light mt-2 leading-relaxed">
              Every celebration in Dharwad deserves an exceptional centerpiece baked with passion.
            </p>
          </div>
        </div>

        {/* Right Side: Content & 3 Options */}
        <div className="md:w-7/12 p-6 sm:p-8 md:p-10 flex flex-col justify-between overflow-y-auto">
          
          <div>
            {/* Header */}
            <div className="mb-6">
              <div className="inline-flex items-center gap-2 text-[10px] font-sans font-extrabold uppercase tracking-[0.25em] text-[#120E0D] mb-1.5">
                <Sparkles className="w-3.5 h-3.5 text-[#E6BE00]" />
                Enquiry & Order
              </div>
              <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-normal text-[#120E0D] tracking-tight">
                LET'S MAKE YOUR CAKE.
              </h2>
              <p className="text-xs sm:text-sm text-[#54403B] font-light mt-1.5 leading-relaxed">
                Tell us what you're celebrating and we'll help you find the perfect cake.
              </p>
            </div>

            {/* The Three Simple Options */}
            <div className="space-y-3 mb-6">
              
              {/* Option 1: Choose a Cake */}
              <div
                onClick={() => setSelectedType('choose')}
                className={`p-3.5 sm:p-4 rounded-2xl border-2 transition-all cursor-pointer flex items-start justify-between ${
                  selectedType === 'choose'
                    ? 'bg-[#120E0D] text-[#FAF7F2] border-[#FFD400] shadow-md'
                    : 'bg-[#F5EFEB] text-[#120E0D] border-[#E8DFD5] hover:border-[#FFD400]/60'
                }`}
              >
                <div className="flex items-start gap-3">
                  <div className={`w-9 h-9 rounded-xl flex items-center justify-center shrink-0 ${
                    selectedType === 'choose' ? 'bg-[#FFD400] text-[#120E0D]' : 'bg-[#120E0D] text-[#FFD400]'
                  }`}>
                    <CakeIcon className="w-5 h-5 stroke-[2.2]" />
                  </div>
                  <div>
                    <h4 className="font-serif text-base sm:text-lg font-medium leading-snug">
                      🎂 Choose a Cake
                    </h4>
                    <p className={`text-xs font-light mt-0.5 ${
                      selectedType === 'choose' ? 'text-white/85' : 'text-[#54403B]'
                    }`}>
                      Browse our signature cake collection & select flavors
                    </p>
                  </div>
                </div>

                <div className={`w-5 h-5 rounded-full border flex items-center justify-center shrink-0 mt-0.5 ${
                  selectedType === 'choose' ? 'border-[#FFD400] bg-[#FFD400] text-[#120E0D]' : 'border-[#B8A593]'
                }`}>
                  {selectedType === 'choose' && <Check className="w-3.5 h-3.5 stroke-[3.5]" />}
                </div>
              </div>

              {/* Option 2: Custom Cake */}
              <div
                onClick={() => setSelectedType('custom')}
                className={`p-3.5 sm:p-4 rounded-2xl border-2 transition-all cursor-pointer flex items-start justify-between ${
                  selectedType === 'custom'
                    ? 'bg-[#120E0D] text-[#FAF7F2] border-[#FFD400] shadow-md'
                    : 'bg-[#F5EFEB] text-[#120E0D] border-[#E8DFD5] hover:border-[#FFD400]/60'
                }`}
              >
                <div className="flex items-start gap-3">
                  <div className={`w-9 h-9 rounded-xl flex items-center justify-center shrink-0 ${
                    selectedType === 'custom' ? 'bg-[#FFD400] text-[#120E0D]' : 'bg-[#120E0D] text-[#FFD400]'
                  }`}>
                    <Wand2 className="w-5 h-5 stroke-[2.2]" />
                  </div>
                  <div>
                    <h4 className="font-serif text-base sm:text-lg font-medium leading-snug">
                      ✨ Custom Cake
                    </h4>
                    <p className={`text-xs font-light mt-0.5 ${
                      selectedType === 'custom' ? 'text-white/85' : 'text-[#54403B]'
                    }`}>
                      Have something specific in mind? Bespoke tiers & themes
                    </p>
                  </div>
                </div>

                <div className={`w-5 h-5 rounded-full border flex items-center justify-center shrink-0 mt-0.5 ${
                  selectedType === 'custom' ? 'border-[#FFD400] bg-[#FFD400] text-[#120E0D]' : 'border-[#B8A593]'
                }`}>
                  {selectedType === 'custom' && <Check className="w-3.5 h-3.5 stroke-[3.5]" />}
                </div>
              </div>

              {/* Option 3: WhatsApp Kamat */}
              <div
                onClick={() => setSelectedType('direct')}
                className={`p-3.5 sm:p-4 rounded-2xl border-2 transition-all cursor-pointer flex items-start justify-between ${
                  selectedType === 'direct'
                    ? 'bg-[#120E0D] text-[#FAF7F2] border-[#FFD400] shadow-md'
                    : 'bg-[#F5EFEB] text-[#120E0D] border-[#E8DFD5] hover:border-[#FFD400]/60'
                }`}
              >
                <div className="flex items-start gap-3">
                  <div className={`w-9 h-9 rounded-xl flex items-center justify-center shrink-0 ${
                    selectedType === 'direct' ? 'bg-[#FFD400] text-[#120E0D]' : 'bg-[#120E0D] text-[#FFD400]'
                  }`}>
                    <MessageSquare className="w-5 h-5 stroke-[2.2]" />
                  </div>
                  <div>
                    <h4 className="font-serif text-base sm:text-lg font-medium leading-snug">
                      💬 WhatsApp Kamat
                    </h4>
                    <p className={`text-xs font-light mt-0.5 ${
                      selectedType === 'direct' ? 'text-white/85' : 'text-[#54403B]'
                    }`}>
                      Talk to us directly for quick questions & availability
                    </p>
                  </div>
                </div>

                <div className={`w-5 h-5 rounded-full border flex items-center justify-center shrink-0 mt-0.5 ${
                  selectedType === 'direct' ? 'border-[#FFD400] bg-[#FFD400] text-[#120E0D]' : 'border-[#B8A593]'
                }`}>
                  {selectedType === 'direct' && <Check className="w-3.5 h-3.5 stroke-[3.5]" />}
                </div>
              </div>

            </div>

            {/* Contextual Detail Inputs based on selected option */}
            {selectedType === 'choose' && (
              <div className="space-y-3 p-4 rounded-2xl bg-[#EDE4DC]/70 border border-[#E2D5C8] mb-6 animate-in fade-in duration-200">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-[10px] uppercase font-bold tracking-wider text-[#120E0D] mb-1">
                      Preferred Flavor
                    </label>
                    <select
                      value={flavor}
                      onChange={(e) => setFlavor(e.target.value)}
                      aria-label="Preferred Flavor"
                      className="w-full px-3 py-2 rounded-xl bg-[#FAF7F2] border border-[#D2C4B5] text-xs text-[#120E0D] focus:outline-none focus:border-[#FFD400]"
                    >
                      {FLAVOR_OPTIONS.map((f) => (
                        <option key={f} value={f}>{f}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-[10px] uppercase font-bold tracking-wider text-[#120E0D] mb-1">
                      Size / Weight
                    </label>
                    <select
                      value={weight}
                      onChange={(e) => setWeight(e.target.value)}
                      aria-label="Size / Weight"
                      className="w-full px-3 py-2 rounded-xl bg-[#FAF7F2] border border-[#D2C4B5] text-xs text-[#120E0D] focus:outline-none focus:border-[#FFD400]"
                    >
                      {WEIGHT_OPTIONS.map((w) => (
                        <option key={w} value={w}>{w}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-[10px] uppercase font-bold tracking-wider text-[#120E0D] mb-1">
                    Occasion
                  </label>
                  <select
                    value={occasion}
                    onChange={(e) => setOccasion(e.target.value)}
                    aria-label="Occasion"
                    className="w-full px-3 py-2 rounded-xl bg-[#FAF7F2] border border-[#D2C4B5] text-xs text-[#120E0D] focus:outline-none focus:border-[#FFD400]"
                  >
                    <option value="Birthday">Birthday</option>
                    <option value="Anniversary">Anniversary</option>
                    <option value="Baby Shower">Baby Shower</option>
                    <option value="Graduation">Graduation</option>
                    <option value="Wedding / Reception">Wedding / Reception</option>
                    <option value="Just Because">Just Because</option>
                  </select>
                </div>
              </div>
            )}

            {selectedType === 'custom' && (
              <div className="space-y-3 p-4 rounded-2xl bg-[#EDE4DC]/70 border border-[#E2D5C8] mb-6 animate-in fade-in duration-200">
                <div>
                  <label className="block text-[10px] uppercase font-bold tracking-wider text-[#120E0D] mb-1">
                    Describe Your Vision (Theme, Colors, Message)
                  </label>
                  <textarea
                    rows={2}
                    value={customNotes}
                    onChange={(e) => setCustomNotes(e.target.value)}
                    placeholder="e.g. 2-tier chocolate truffle with floral topper for a 25th anniversary..."
                    className="w-full px-3 py-2 rounded-xl bg-[#FAF7F2] border border-[#D2C4B5] text-xs text-[#120E0D] focus:outline-none focus:border-[#FFD400]"
                  />
                </div>
                <div className="grid grid-cols-2 gap-2 text-xs">
                  <div>
                    <label className="block text-[10px] uppercase font-bold text-[#120E0D] mb-1">Occasion</label>
                    <input
                      type="text"
                      value={occasion}
                      onChange={(e) => setOccasion(e.target.value)}
                      placeholder="e.g. Birthday"
                      className="w-full px-3 py-1.5 rounded-lg bg-[#FAF7F2] border border-[#D2C4B5] text-xs"
                    />
                  </div>
                  <div>
                    <label className="block text-[10px] uppercase font-bold text-[#120E0D] mb-1">Approx. Weight</label>
                    <select
                      value={weight}
                      onChange={(e) => setWeight(e.target.value)}
                      aria-label="Approx. Weight"
                      className="w-full px-3 py-1.5 rounded-lg bg-[#FAF7F2] border border-[#D2C4B5] text-xs"
                    >
                      {WEIGHT_OPTIONS.map((w) => (
                        <option key={w} value={w}>{w}</option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>
            )}

            {selectedType === 'direct' && (
              <div className="p-4 rounded-2xl bg-[#EDE4DC]/70 border border-[#E2D5C8] mb-6 text-xs text-[#3D2E2A] leading-relaxed animate-in fade-in duration-200">
                💬 <span className="font-bold text-[#120E0D]">WhatsApp Direct Enquiry:</span> You will connect directly with our baking desk in Dharwad to discuss flavors, same-day cake availability, and pickup times.
              </div>
            )}

          </div>

          {/* Final Action CTA Button in Kamat Yellow (triggers Demo Preview Modal) */}
          <div className="space-y-3 pt-2">
            <button
              onClick={handleContinue}
              className="w-full py-4 rounded-full bg-[#FFD400] hover:bg-[#FFE14D] text-[#120E0D] font-black text-xs tracking-[0.2em] uppercase transition-all duration-300 shadow-[0_10px_25px_rgba(255,212,0,0.35)] hover:shadow-[0_15px_35px_rgba(255,212,0,0.45)] flex items-center justify-center gap-2 group active:scale-98"
            >
              <MessageSquare className="w-4 h-4 stroke-[2.5]" />
              <span>CONTINUE ON WHATSAPP</span>
              <ArrowRight className="w-4 h-4 stroke-[2.5] transition-transform group-hover:translate-x-1" />
            </button>

            <p className="text-center text-[11px] text-[#54403B] font-light">
              We respond promptly to confirm cake availability and custom options.
            </p>
          </div>

        </div>

      </div>
    </div>
  );
};
