import React from 'react';
import { MessageSquare, Wand2, PhoneCall, Sparkles, ArrowRight } from 'lucide-react';
import { BRAND_CONFIG } from '../data/config';

interface OrderSectionProps {
  onOpenOrderModal: (initialData?: any) => void;
  onCallKamat: () => void;
}

export const OrderSection: React.FC<OrderSectionProps> = ({
  onOpenOrderModal,
  onCallKamat,
}) => {
  return (
    <section id="contact" className="py-24 sm:py-32 bg-[#FAF7F2] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 mb-3">
            <Sparkles className="w-3.5 h-3.5 text-[#E6BE00]" />
            <span className="text-[11px] font-sans font-bold uppercase tracking-[0.25em] text-[#120E0D]">
              Seamless Ordering
            </span>
          </div>

          <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-normal text-[#120E0D] tracking-tight leading-[1.1]">
            YOUR NEXT CELEBRATION
            <br />
            <span className="italic font-light font-editorial text-[#54403B]">STARTS HERE.</span>
          </h2>

          <p className="mt-4 text-base sm:text-lg text-[#54403B]/90 font-light max-w-xl mx-auto leading-relaxed">
            Choose how you'd like to get in touch with our cake studio in Dharwad.
          </p>
        </div>

        {/* 3 Clear Options Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Option 1: WhatsApp / Enquiry */}
          <div
            onClick={() => onOpenOrderModal({ orderType: 'choose' })}
            className="group relative p-8 sm:p-10 rounded-3xl bg-[#F5EFEB] border border-[#E8DFD5] hover:border-[#FFD400] transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 flex flex-col justify-between cursor-pointer"
          >
            <div>
              <div className="w-14 h-14 rounded-2xl bg-[#120E0D] text-[#FFD400] flex items-center justify-center mb-6 shadow-md group-hover:scale-110 transition-transform duration-300">
                <MessageSquare className="w-7 h-7" />
              </div>

              <span className="text-[10px] uppercase font-sans font-bold tracking-[0.25em] text-[#B88600]">
                Quick & Effortless
              </span>

              <h3 className="font-serif text-2xl sm:text-3xl font-normal text-[#120E0D] mt-2 mb-3">
                ORDER A CAKE
              </h3>

              <p className="text-sm text-[#54403B] font-light leading-relaxed mb-6">
                WhatsApp / enquiry. Message us directly with your preferred flavor, date, and requirement for an instant response.
              </p>
            </div>

            <div className="pt-6 border-t border-[#E2D5C8] flex items-center justify-between text-xs font-bold tracking-[0.16em] uppercase text-[#120E0D] group-hover:text-[#B88600] transition-colors">
              <span>Enquire on WhatsApp</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1.5" />
            </div>
          </div>

          {/* Option 2: Custom Cake Builder (Hero Option) */}
          <div
            onClick={() => onOpenOrderModal({ orderType: 'custom' })}
            className="group relative p-8 sm:p-10 rounded-3xl bg-[#120E0D] text-[#FAF7F2] border-2 border-[#FFD400] transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 flex flex-col justify-between cursor-pointer shadow-xl ring-4 ring-[#FFD400]/20"
          >
            {/* Highlight Badge */}
            <div className="absolute -top-3.5 right-8 px-4 py-1 rounded-full bg-[#FFD400] text-[#120E0D] text-[10px] font-sans font-black uppercase tracking-[0.2em] shadow-md">
              Most Popular
            </div>

            <div>
              <div className="w-14 h-14 rounded-2xl bg-[#FAF7F2] text-[#120E0D] flex items-center justify-center mb-6 shadow-md group-hover:scale-110 transition-transform duration-300">
                <Wand2 className="w-7 h-7 text-[#120E0D]" />
              </div>

              <span className="text-[10px] uppercase font-sans font-bold tracking-[0.25em] text-[#FFD400]">
                Customized Experience
              </span>

              <h3 className="font-serif text-2xl sm:text-3xl font-normal text-[#FAF7F2] mt-2 mb-3">
                CUSTOM CAKE
              </h3>

              <p className="text-sm text-[#F5EFEB]/85 font-light leading-relaxed mb-6">
                Tell us what you want. Share flavors, multi-tier specifications, customized themes, and celebratory toppers.
              </p>
            </div>

            <div className="pt-6 border-t border-white/15 flex items-center justify-between text-xs font-black tracking-[0.16em] uppercase text-[#FFD400] group-hover:text-white transition-colors">
              <span>Start Custom Request</span>
              <ArrowRight className="w-4 h-4 stroke-[2.5] transition-transform group-hover:translate-x-1.5" />
            </div>
          </div>

          {/* Option 3: Call Kamat */}
          <div
            onClick={onCallKamat}
            className="group relative p-8 sm:p-10 rounded-3xl bg-[#F5EFEB] border border-[#E8DFD5] hover:border-[#FFD400] transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 flex flex-col justify-between cursor-pointer"
          >
            <div>
              <div className="w-14 h-14 rounded-2xl bg-[#120E0D] text-[#FFD400] flex items-center justify-center mb-6 shadow-md group-hover:scale-110 transition-transform duration-300">
                <PhoneCall className="w-7 h-7" />
              </div>

              <span className="text-[10px] uppercase font-sans font-bold tracking-[0.25em] text-[#B88600]">
                Direct Line
              </span>

              <h3 className="font-serif text-2xl sm:text-3xl font-normal text-[#120E0D] mt-2 mb-3">
                CALL KAMAT
              </h3>

              <p className="text-sm text-[#54403B] font-light leading-relaxed mb-2">
                Speak directly with us for urgent celebration orders, same-day cake availability, and studio consultations.
              </p>

              <p className="font-mono text-sm font-bold text-[#120E0D] bg-[#FAF7F2] px-3 py-1.5 rounded-lg inline-block border border-[#E2D5C8] mb-6">
                {BRAND_CONFIG.phoneDisplay}
              </p>
            </div>

            <div className="pt-6 border-t border-[#E2D5C8] flex items-center justify-between text-xs font-bold tracking-[0.16em] uppercase text-[#120E0D] group-hover:text-[#B88600] transition-colors">
              <span>Call Bakery Studio</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1.5" />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
