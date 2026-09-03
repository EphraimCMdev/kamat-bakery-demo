import React, { useState, useEffect } from 'react';
import { X, Sparkles, Send, CheckCircle2, MessageSquare, ArrowRight, ArrowLeft } from 'lucide-react';
import confetti from 'canvas-confetti';
import { FLAVOR_OPTIONS, WEIGHT_OPTIONS } from '../data/cakes';

interface CustomCakeModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialData?: {
    flavor?: string;
    weight?: string;
    occasion?: string;
    cakeTitle?: string;
  };
}

export const CustomCakeModal: React.FC<CustomCakeModalProps> = ({
  isOpen,
  onClose,
  initialData,
}) => {
  const [step, setStep] = useState<number>(1);
  const [submitted, setSubmitted] = useState<boolean>(false);

  // Form State
  const [flavor, setFlavor] = useState<string>(FLAVOR_OPTIONS[0]);
  const [weight, setWeight] = useState<string>(WEIGHT_OPTIONS[1]);
  const [occasion, setOccasion] = useState<string>('Birthday');
  const [tier, setTier] = useState<string>('Single Tier');
  const [cakeMessage, setCakeMessage] = useState<string>('');
  const [themeNotes, setThemeNotes] = useState<string>('');
  const [customerName, setCustomerName] = useState<string>('');
  const [phone, setPhone] = useState<string>('');
  const [date, setDate] = useState<string>('');

  useEffect(() => {
    if (initialData) {
      if (initialData.flavor) setFlavor(initialData.flavor);
      if (initialData.weight) setWeight(initialData.weight);
      if (initialData.occasion) setOccasion(initialData.occasion);
      if (initialData.cakeTitle) setThemeNotes(`Inspired by: ${initialData.cakeTitle}`);
    }
  }, [initialData]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    
    // Trigger confetti celebration
    try {
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 }
      });
    } catch (err) {
      console.log('Confetti triggered');
    }
  };

  const getWhatsAppMessage = () => {
    const text = `*New Cake Enquiry - Kamat Bakery, Dharwad*
--------------------------------
*Occasion:* ${occasion}
*Flavor:* ${flavor}
*Weight/Size:* ${weight}
*Tier Structure:* ${tier}
*Message on Cake:* ${cakeMessage || 'None'}
*Custom Theme / Notes:* ${themeNotes || 'Standard Design'}
*Required Date:* ${date || 'Soon'}
*Customer Name:* ${customerName || 'Customer'}
*Contact:* ${phone || 'Not provided'}
--------------------------------
Please let me know the confirmation and design options!`;
    return encodeURIComponent(text);
  };

  const handleOpenWhatsApp = () => {
    const encoded = getWhatsAppMessage();
    // Using placeholder phone
    window.open(`https://api.whatsapp.com/send?phone=&text=${encoded}`, '_blank');
  };

  return (
    <div
      className="fixed inset-0 z-50 bg-[#140D0B]/80 backdrop-blur-md flex items-center justify-center p-3 sm:p-4 overflow-y-auto animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="bg-[#FAF7F2] w-full max-w-xl rounded-3xl shadow-2xl border border-[#E8DFD5] overflow-hidden relative my-6"
      >
        {/* Modal Header */}
        <div className="bg-[#1F1412] text-[#FAF7F2] p-6 sm:p-7 relative">
          <button
            onClick={onClose}
            className="absolute top-5 right-5 w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors"
          >
            <X className="w-4 h-4" />
          </button>

          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-[10px] uppercase tracking-widest text-[#DDB760] font-semibold mb-2">
            <Sparkles className="w-3 h-3" />
            Kamat Custom Cake Studio
          </div>

          <h2 className="font-serif text-2xl sm:text-3xl font-normal text-[#FAF7F2]">
            {submitted ? 'Enquiry Prepared!' : 'Design Your Celebration Cake'}
          </h2>
          <p className="text-xs text-[#FAF7F2]/75 font-light mt-1">
            {submitted
              ? 'Your bespoke cake specifications are ready to send to our Dharwad bakers.'
              : 'Tell us your vision and we will craft a centerpiece worth celebrating.'}
          </p>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 max-h-[75vh] overflow-y-auto">
          {!submitted ? (
            <form onSubmit={handleSubmit} className="space-y-6">
              
              {/* Step indicator */}
              <div className="flex items-center justify-between pb-4 border-b border-[#E8DFD5] text-xs font-semibold uppercase tracking-wider text-[#5E3E36]">
                <span className={step === 1 ? 'text-[#1F1412] font-bold underline' : ''}>1. Flavor & Size</span>
                <span>•</span>
                <span className={step === 2 ? 'text-[#1F1412] font-bold underline' : ''}>2. Design & Notes</span>
                <span>•</span>
                <span className={step === 3 ? 'text-[#1F1412] font-bold underline' : ''}>3. Details</span>
              </div>

              {step === 1 && (
                <div className="space-y-4 animate-in fade-in duration-200">
                  <div>
                    <label className="block text-xs uppercase tracking-wider font-semibold text-[#1F1412] mb-1.5">
                      Celebration Occasion
                    </label>
                    <select
                      value={occasion}
                      onChange={(e) => setOccasion(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl bg-[#F5EFEB] border border-[#E2D5C8] text-[#1F1412] text-sm focus:border-[#9B6C3F] focus:outline-none"
                    >
                      <option value="Birthday">Birthday</option>
                      <option value="Anniversary">Anniversary</option>
                      <option value="Baby Shower">Baby Shower</option>
                      <option value="Graduation">Graduation</option>
                      <option value="Wedding / Engagement">Wedding / Engagement</option>
                      <option value="Just Because / Party">Just Because / Party</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs uppercase tracking-wider font-semibold text-[#1F1412] mb-1.5">
                      Signature Flavor
                    </label>
                    <select
                      value={flavor}
                      onChange={(e) => setFlavor(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl bg-[#F5EFEB] border border-[#E2D5C8] text-[#1F1412] text-sm focus:border-[#9B6C3F] focus:outline-none"
                    >
                      {FLAVOR_OPTIONS.map((f) => (
                        <option key={f} value={f}>{f}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs uppercase tracking-wider font-semibold text-[#1F1412] mb-1.5">
                      Approximate Weight / Servings
                    </label>
                    <select
                      value={weight}
                      onChange={(e) => setWeight(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl bg-[#F5EFEB] border border-[#E2D5C8] text-[#1F1412] text-sm focus:border-[#9B6C3F] focus:outline-none"
                    >
                      {WEIGHT_OPTIONS.map((w) => (
                        <option key={w} value={w}>{w}</option>
                      ))}
                    </select>
                  </div>

                  <div className="pt-3">
                    <button
                      type="button"
                      onClick={() => setStep(2)}
                      className="w-full py-3.5 rounded-full bg-[#1F1412] text-[#FAF7F2] font-semibold text-xs tracking-widest uppercase hover:bg-[#432C26] transition-all flex items-center justify-center gap-2"
                    >
                      <span>Continue to Design</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              )}

              {step === 2 && (
                <div className="space-y-4 animate-in fade-in duration-200">
                  <div>
                    <label className="block text-xs uppercase tracking-wider font-semibold text-[#1F1412] mb-1.5">
                      Tier Structure
                    </label>
                    <div className="grid grid-cols-3 gap-2">
                      {['Single Tier', '2 Tiers', '3+ Tiers'].map((t) => (
                        <button
                          key={t}
                          type="button"
                          onClick={() => setTier(t)}
                          className={`py-2.5 px-3 rounded-xl text-xs font-semibold border text-center transition-all ${
                            tier === t
                              ? 'bg-[#1F1412] text-[#FAF7F2] border-[#1F1412]'
                              : 'bg-[#F5EFEB] text-[#5E3E36] border-[#E2D5C8]'
                          }`}
                        >
                          {t}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs uppercase tracking-wider font-semibold text-[#1F1412] mb-1.5">
                      Message on Cake
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Happy 30th Birthday Rahul!"
                      value={cakeMessage}
                      onChange={(e) => setCakeMessage(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl bg-[#F5EFEB] border border-[#E2D5C8] text-[#1F1412] text-sm focus:border-[#9B6C3F] focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs uppercase tracking-wider font-semibold text-[#1F1412] mb-1.5">
                      Custom Theme & Special Requests
                    </label>
                    <textarea
                      rows={3}
                      placeholder="Describe color palette, theme elements (e.g. flowers, gold drip, kids character), or special dietary preference..."
                      value={themeNotes}
                      onChange={(e) => setThemeNotes(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl bg-[#F5EFEB] border border-[#E2D5C8] text-[#1F1412] text-sm focus:border-[#9B6C3F] focus:outline-none"
                    />
                  </div>

                  <div className="pt-3 flex gap-3">
                    <button
                      type="button"
                      onClick={() => setStep(1)}
                      className="w-1/3 py-3.5 rounded-full border border-[#D2C4B5] text-[#1F1412] font-semibold text-xs tracking-wider uppercase hover:bg-[#EDE4DC] flex items-center justify-center gap-1"
                    >
                      <ArrowLeft className="w-4 h-4" />
                      Back
                    </button>
                    <button
                      type="button"
                      onClick={() => setStep(3)}
                      className="w-2/3 py-3.5 rounded-full bg-[#1F1412] text-[#FAF7F2] font-semibold text-xs tracking-widest uppercase hover:bg-[#432C26] transition-all flex items-center justify-center gap-2"
                    >
                      <span>Final Details</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              )}

              {step === 3 && (
                <div className="space-y-4 animate-in fade-in duration-200">
                  <div>
                    <label className="block text-xs uppercase tracking-wider font-semibold text-[#1F1412] mb-1.5">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Your Full Name"
                      value={customerName}
                      onChange={(e) => setCustomerName(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl bg-[#F5EFEB] border border-[#E2D5C8] text-[#1F1412] text-sm focus:border-[#9B6C3F] focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs uppercase tracking-wider font-semibold text-[#1F1412] mb-1.5">
                      Phone / WhatsApp Number *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="e.g. 9876543210"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl bg-[#F5EFEB] border border-[#E2D5C8] text-[#1F1412] text-sm focus:border-[#9B6C3F] focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs uppercase tracking-wider font-semibold text-[#1F1412] mb-1.5">
                      Date Required
                    </label>
                    <input
                      type="date"
                      value={date}
                      onChange={(e) => setDate(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl bg-[#F5EFEB] border border-[#E2D5C8] text-[#1F1412] text-sm focus:border-[#9B6C3F] focus:outline-none"
                    />
                  </div>

                  <div className="pt-3 flex gap-3">
                    <button
                      type="button"
                      onClick={() => setStep(2)}
                      className="w-1/3 py-3.5 rounded-full border border-[#D2C4B5] text-[#1F1412] font-semibold text-xs tracking-wider uppercase hover:bg-[#EDE4DC] flex items-center justify-center gap-1"
                    >
                      <ArrowLeft className="w-4 h-4" />
                      Back
                    </button>
                    <button
                      type="submit"
                      className="w-2/3 py-3.5 rounded-full bg-[#E8CA82] text-[#140D0B] font-bold text-xs tracking-widest uppercase hover:bg-[#FAF7F2] transition-all shadow-lg flex items-center justify-center gap-2"
                    >
                      <Sparkles className="w-4 h-4" />
                      <span>Prepare Custom Request</span>
                    </button>
                  </div>
                </div>
              )}

            </form>
          ) : (
            /* Submission Summary & WhatsApp Integration */
            <div className="space-y-6 text-center animate-in zoom-in-95 duration-300">
              <div className="w-16 h-16 rounded-full bg-[#1F1412] text-[#DDB760] flex items-center justify-center mx-auto shadow-lg">
                <CheckCircle2 className="w-8 h-8" />
              </div>

              <div>
                <h3 className="font-serif text-2xl font-bold text-[#1F1412]">
                  Cake Specifications Ready!
                </h3>
                <p className="text-xs text-[#5E3E36] mt-1 font-light max-w-sm mx-auto">
                  Click below to send your complete order summary directly to Kamat Bakery on WhatsApp for immediate confirmation.
                </p>
              </div>

              {/* Summary Card */}
              <div className="p-4 rounded-2xl bg-[#F5EFEB] border border-[#E2D5C8] text-left text-xs text-[#432C26] space-y-1.5 font-mono">
                <p><span className="font-sans font-semibold text-[#1F1412]">Occasion:</span> {occasion}</p>
                <p><span className="font-sans font-semibold text-[#1F1412]">Flavor:</span> {flavor}</p>
                <p><span className="font-sans font-semibold text-[#1F1412]">Weight:</span> {weight} ({tier})</p>
                {cakeMessage && <p><span className="font-sans font-semibold text-[#1F1412]">Message:</span> "{cakeMessage}"</p>}
                {themeNotes && <p><span className="font-sans font-semibold text-[#1F1412]">Theme:</span> {themeNotes}</p>}
                {customerName && <p><span className="font-sans font-semibold text-[#1F1412]">Customer:</span> {customerName} ({phone})</p>}
              </div>

              {/* Direct WhatsApp Action */}
              <div className="space-y-3">
                <button
                  onClick={handleOpenWhatsApp}
                  className="w-full py-4 rounded-full bg-[#25D366] text-white font-bold text-xs tracking-widest uppercase hover:bg-[#1EBE5D] transition-all shadow-lg flex items-center justify-center gap-2"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Send Order On WhatsApp →</span>
                </button>

                <button
                  onClick={onClose}
                  className="w-full py-3 rounded-full text-xs uppercase font-semibold text-[#5E3E36] hover:text-[#1F1412]"
                >
                  Close & Continue Browsing
                </button>
              </div>
            </div>
          )}
        </div>

      </div>
    </div>
  );
};
