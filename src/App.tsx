import { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { SignatureCakes } from './components/SignatureCakes';
import { InstagramCalloutBanner } from './components/InstagramCalloutBanner';
import { CelebrateOccasions } from './components/CelebrateOccasions';
import { CustomCakeSection } from './components/CustomCakeSection';
import { KamatStory } from './components/KamatStory';
import { InstagramGallery } from './components/InstagramGallery';
import { OrderSection } from './components/OrderSection';
import { LocationSection } from './components/LocationSection';
import { FinalCtaSection } from './components/FinalCtaSection';
import { Footer } from './components/Footer';
import { WhatsAppOrderModal } from './components/WhatsAppOrderModal';
import { CakeDetailModal } from './components/CakeDetailModal';
import { MobileStickyBar } from './components/MobileStickyBar';
import { Cake, CelebrationCategory } from './types';
import { BRAND_CONFIG } from './data/config';

export function App() {
  const [orderModalOpen, setOrderModalOpen] = useState(false);
  const [orderModalPrefill, setOrderModalPrefill] = useState<any>(null);
  const [selectedCake, setSelectedCake] = useState<Cake | null>(null);

  const handleOpenOrderModal = (initialData?: any) => {
    setOrderModalPrefill(initialData || null);
    setOrderModalOpen(true);
  };

  const handleSelectOccasion = (category: CelebrationCategory) => {
    handleOpenOrderModal({
      occasion: category.name,
      orderType: 'custom',
    });
  };

  const handleSelectCake = (cake: Cake) => {
    setSelectedCake(cake);
  };

  const handleQuickOrderCake = (cake: Cake) => {
    handleOpenOrderModal({
      flavor: cake.flavorProfile.split(',')[0],
      cakeTitle: cake.title,
      orderType: 'choose',
    });
  };

  const handleExploreCakes = () => {
    const el = document.getElementById('cakes');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleCallKamat = () => {
    window.location.href = `tel:${BRAND_CONFIG.phoneDisplay}`;
  };

  return (
    <div className="min-h-screen bg-[#FAF7F2] text-[#120E0D] font-sans selection:bg-[#120E0D] selection:text-[#FFD400]">
      {/* Top Navbar */}
      <Navbar onOpenOrderModal={handleOpenOrderModal} />

      {/* 1. Full-Screen Cinematic Hero with Kamat Yellow & Instagram CTA */}
      <Hero
        onExploreCakes={handleExploreCakes}
        onOrderCake={() => handleOpenOrderModal()}
      />

      {/* 2. Signature Cakes (Horizontal Editorial Gallery) */}
      <SignatureCakes
        onSelectCake={handleSelectCake}
        onQuickOrder={handleQuickOrderCake}
      />

      {/* 3. Prominent Instagram Callout Banner (Immediately following Signature Cakes) */}
      <InstagramCalloutBanner />

      {/* 4. Celebrate Something? (Interactive Occasions) */}
      <CelebrateOccasions
        onSelectOccasion={handleSelectOccasion}
      />

      {/* 5. Custom Cakes (Dramatic Split-Screen & Builder) */}
      <CustomCakeSection
        onStartCustomCake={handleOpenOrderModal}
      />

      {/* 6. Kamat Story (Made for Moments • Dharwad Since 1988) */}
      <KamatStory />

      {/* 7. Instagram-Style Gallery ("FOLLOW THE KAMAT CAKE TRAIL.") */}
      <InstagramGallery />

      {/* 8. Order Section ("YOUR NEXT CELEBRATION STARTS HERE.") */}
      <OrderSection
        onOpenOrderModal={handleOpenOrderModal}
        onCallKamat={handleCallKamat}
      />

      {/* 9. Location ("COME SAY HELLO.") */}
      <LocationSection />

      {/* 10. Final CTA ("FOUND YOUR CAKE? / Let's make it yours.") */}
      <FinalCtaSection
        onOrderCake={() => handleOpenOrderModal()}
      />

      {/* Footer */}
      <Footer onOpenCustomOrder={() => handleOpenOrderModal()} />

      {/* Mobile Persistent Floating CTA Bar (Dual Instagram & Order Action) */}
      <MobileStickyBar
        onOrderCake={() => handleOpenOrderModal()}
      />

      {/* Luxury WhatsApp Order Popup ("LET'S MAKE YOUR CAKE.") */}
      <WhatsAppOrderModal
        isOpen={orderModalOpen}
        onClose={() => setOrderModalOpen(false)}
        onBrowseCakes={handleExploreCakes}
        initialData={orderModalPrefill}
      />

      {/* Quick View Cake Detail Modal */}
      <CakeDetailModal
        cake={selectedCake}
        onClose={() => setSelectedCake(null)}
        onOrderThisCake={handleQuickOrderCake}
      />
    </div>
  );
}

export default App;
