import { Cake, CelebrationCategory, InstagramPost } from '../types';

export const SIGNATURE_CAKES: Cake[] = [
  {
    id: 'chocolate-truffle-noir',
    title: 'Belgian Chocolate Truffle',
    category: 'Chocolate',
    subtitle: 'Signature Dark Ganache & Gold Accents',
    description: 'Layers of moist dark chocolate sponge enveloped in velvety 55% Belgian chocolate ganache, finished with edible 24k gold leaf and artisan chocolate shards.',
    flavorProfile: 'Deep Dark Cocoa, Silky Ganache, Subtle Espresso Note',
    bestFor: 'Birthdays, Anniversaries & Chocolate Connoisseurs',
    image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?q=80&w=1200&auto=format&fit=crop',
    alt: 'Belgian Chocolate Truffle Cake by Kamat Bakery',
    tiers: '1 Tier (0.5kg - 3kg)',
    isSignature: true,
    isPopular: true
  },
  {
    id: 'custom-celebration-botanical',
    title: 'Royal Engagement & Floral Tier',
    category: 'Celebration',
    subtitle: 'Handcrafted Fresh Blooms & Gold Leaf Finish',
    description: 'A towering celebration centerpiece dressed in textured swiss meringue buttercream, adorned with delicate fresh seasonal blooms, French macarons, and celebratory topper.',
    flavorProfile: 'Madagascar Vanilla Bean & Fresh Raspberry Coulis',
    bestFor: 'Engagements, Weddings & Milestone Celebrations',
    image: 'https://images.unsplash.com/photo-1535141192574-5d4897c13136?q=80&w=1200&auto=format&fit=crop',
    alt: 'Royal Floral Engagement Cake by Kamat Bakery',
    tiers: '2 - 3 Tiers Available',
    isSignature: true,
    isPopular: true
  },
  {
    id: 'whimsical-wafer-panda',
    title: 'Whimsical Panda & Wafer Roll Cake',
    category: 'Kids',
    subtitle: 'Crisp Wafer Roll Border & Sugar Art Pandas',
    description: 'Playful celebration cake encircled with golden crispy wafer rolls, tied with a satin ribbon and topped with adorable handcrafted panda characters.',
    flavorProfile: 'Rich Milk Chocolate Cream or Funfetti Vanilla',
    bestFor: 'Children’s Birthdays & Joyful Family Parties',
    image: 'https://images.unsplash.com/photo-1562440499-64c9a111f713?q=80&w=1200&auto=format&fit=crop',
    alt: 'Whimsical Panda Wafer Cake Kamat Bakery',
    tiers: '1 - 2 Tiers',
    isSignature: true,
    isPopular: true
  },
  {
    id: 'royal-red-velvet',
    title: 'Royal Red Velvet & Mascarpone',
    category: 'Classics',
    subtitle: 'Velvety Crimson Sponge & Smooth Cream Cheese',
    description: 'An enduring classic with an artisanal touch. Feather-light crimson buttermilk sponge paired with whipped Philadelphia cream cheese frosting and white chocolate pearls.',
    flavorProfile: 'Subtle Cocoa, Tangy Sweet Cream Cheese Frosting',
    bestFor: 'Romance, Anniversaries & Intimate Gatherings',
    image: 'https://images.unsplash.com/photo-1586788680434-30d324b2d46f?q=80&w=1200&auto=format&fit=crop',
    alt: 'Royal Red Velvet Cake Kamat Bakery',
    tiers: '1 - 2 Tiers',
    isSignature: false,
    isPopular: true
  },
  {
    id: 'designer-caramel-gold',
    title: 'Artisan Salted Caramel & Gold',
    category: 'Designer',
    subtitle: 'Golden Luster Drip & Praline Crunch',
    description: 'Handcrafted with slow-simmered artisanal salted caramel, roasted hazelnut praline layers, and a shimmering caramel glaze cascade.',
    flavorProfile: 'Buttery Caramel, Roasted Hazelnuts, Fleur de Sel',
    bestFor: 'Modern Receptions, Housewarmings & Luxury Parties',
    image: 'https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?q=80&w=1200&auto=format&fit=crop',
    alt: 'Designer Salted Caramel Cake Kamat Bakery',
    tiers: '1 - 2 Tiers',
    isSignature: false,
    isPopular: false
  },
  {
    id: 'golden-anniversary-grand',
    title: 'Grand Anniversary Cascade',
    category: 'Anniversary',
    subtitle: 'Textured Ivory Tiers with 24k Gold Accents',
    description: 'Sophisticated tiered masterpiece featuring hand-sculpted wafer paper waves, cascading sugar flowers, and hand-painted gold leaf borders.',
    flavorProfile: 'Ferrero Rocher Chocolate or Mango White Chocolate',
    bestFor: 'Silver / Golden Jubilees & Wedding Anniversaries',
    image: 'https://images.unsplash.com/photo-1535254973040-607b474cb50d?q=80&w=1200&auto=format&fit=crop',
    alt: 'Grand Anniversary Cascade Cake Kamat Bakery',
    tiers: '2 - 4 Tiers',
    isSignature: true,
    isPopular: true
  },
  {
    id: 'botanical-berry-garden',
    title: 'Berry Garden Vanilla Bean',
    category: 'Floral',
    subtitle: 'Fresh Strawberries, Blueberries & Rose Chantilly',
    description: 'A light and refreshing celebration of fresh seasonal berries nestled over sponge infused with organic vanilla bean and delicate cream layers.',
    flavorProfile: 'Light Vanilla, Fresh Berries, Whipped Cream',
    bestFor: 'Garden Parties, High Teas & Summer Celebrations',
    image: 'https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?q=80&w=1200&auto=format&fit=crop',
    alt: 'Berry Garden Vanilla Cake Kamat Bakery',
    tiers: '1 - 2 Tiers',
    isSignature: false,
    isPopular: true
  }
];

export const CELEBRATION_CATEGORIES: CelebrationCategory[] = [
  {
    id: 'birthday',
    name: 'Birthday',
    tagline: 'Make every year unforgettably sweet.',
    description: 'From joyful kids themes to sophisticated adult milestone centerpieces crafted to light up the room.',
    image: 'https://images.unsplash.com/photo-1588195538326-c5b1e9f80a1b?q=80&w=1000&auto=format&fit=crop',
    popularStyles: ['Themed Sculpted Cakes', 'Chocolate Overload', 'Floral Buttercream']
  },
  {
    id: 'anniversary',
    name: 'Anniversary',
    tagline: 'Celebrating enduring love & timeless stories.',
    description: 'Romantic tiered creations adorned with delicate textures, champagne tones, and hand-painted gold detailing.',
    image: 'https://images.unsplash.com/photo-1535254973040-607b474cb50d?q=80&w=1000&auto=format&fit=crop',
    popularStyles: ['24k Gold Accents', 'Textured Buttercream', 'Red Velvet Rose']
  },
  {
    id: 'baby-shower',
    name: 'Baby Shower',
    tagline: 'Welcoming new beginnings with gentle sweetness.',
    description: 'Soft pastel palettes, whimsical cloud motifs, teddy bear themes, and dreamy gender-reveal sponge layers.',
    image: 'https://images.unsplash.com/photo-1562440499-64c9a111f713?q=80&w=1000&auto=format&fit=crop',
    popularStyles: ['Pastel Watercolor', 'Teddy Bear & Clouds', 'Gender Reveal Hidden Core']
  },
  {
    id: 'graduation',
    name: 'Graduation',
    tagline: 'Honoring hard work and proud milestones.',
    description: 'Bold, celebratory statement cakes complete with edible caps, scrolls, customized college crests and rich flavors.',
    image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?q=80&w=1000&auto=format&fit=crop',
    popularStyles: ['Black & Gold Truffle', 'Custom Scroll Details', 'Modern Geometric']
  },
  {
    id: 'wedding',
    name: 'Wedding & Engagement',
    tagline: 'The magnificent focal point of your big day.',
    description: 'Multi-tiered architectural masterpieces with cascading edible flowers, hand-piped lace, and exquisite flavor pairings.',
    image: 'https://images.unsplash.com/photo-1535141192574-5d4897c13136?q=80&w=1000&auto=format&fit=crop',
    popularStyles: ['Multi-Tier Royal Florals', 'Just Engaged Themes', 'Pearl & Marble Finish']
  },
  {
    id: 'just-because',
    name: 'Pastries & Breads',
    tagline: 'Fresh bakes, daily gourmet loaves & sweet treats.',
    description: 'Satisfying Dharwad’s daily cravings with artisanal sourdough, multigrain loaves, croissants, and decadent pastries.',
    image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?q=80&w=1000&auto=format&fit=crop',
    popularStyles: ['Artisan Multigrain', 'Gourmet Breads', 'Fresh Pastries']
  }
];

export const INSTAGRAM_GALLERY: InstagramPost[] = [
  {
    id: 'ig-1',
    image: 'https://images.unsplash.com/photo-1535141192574-5d4897c13136?q=80&w=800&auto=format&fit=crop',
    caption: 'A 2-tier white & gold floral symphony with ‘Just Engaged’ topper crafted in Dharwad.',
    likes: '482',
    tag: '#EngagementCake #KamatDharwad'
  },
  {
    id: 'ig-2',
    image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?q=80&w=800&auto=format&fit=crop',
    caption: 'Freshly baked artisanal seed-crusted multigrain loaf straight from the oven.',
    likes: '389',
    tag: '#GourmetBreads #Since1988'
  },
  {
    id: 'ig-3',
    image: 'https://images.unsplash.com/photo-1562440499-64c9a111f713?q=80&w=800&auto=format&fit=crop',
    caption: 'Cute Panda wonderland cake bordered with crispy wafer rolls and pink satin bow.',
    likes: '614',
    tag: '#KidsCakes #KamatCreations'
  },
  {
    id: 'ig-4',
    image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?q=80&w=800&auto=format&fit=crop',
    caption: '55% Belgian chocolate truffle dripping with real gold leaf. The evergreen celebration favorite.',
    likes: '729',
    tag: '#ChocolateTruffle #Dharwad'
  },
  {
    id: 'ig-5',
    image: 'https://images.unsplash.com/photo-1586788680434-30d324b2d46f?q=80&w=800&auto=format&fit=crop',
    caption: 'Velvety crimson layers paired with whipped mascarpone cream cheese and fresh berries.',
    likes: '456',
    tag: '#RedVelvet #SignatureKamat'
  },
  {
    id: 'ig-6',
    image: 'https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?q=80&w=800&auto=format&fit=crop',
    caption: 'Fresh seasonal strawberries & blueberries nestled over Madagascar vanilla bean sponge.',
    likes: '821',
    tag: '#FreshFruitGateau #DharwadEats'
  },
  {
    id: 'ig-7',
    image: 'https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?q=80&w=800&auto=format&fit=crop',
    caption: 'Slow-cooked salted caramel drip cake with roasted hazelnut praline crunch.',
    likes: '587',
    tag: '#SaltedCaramel #KamatBakery'
  },
  {
    id: 'ig-8',
    image: 'https://images.unsplash.com/photo-1535254973040-607b474cb50d?q=80&w=800&auto=format&fit=crop',
    caption: 'Grand celebration tiers with gold lustering for a golden jubilee in Dharwad.',
    likes: '942',
    tag: '#CelebrationCenterpiece #Kamat'
  }
];

export const FLAVOR_OPTIONS = [
  'Belgian Chocolate Truffle',
  'Royal Red Velvet & Cream Cheese',
  'Lotus Biscoff Salted Caramel',
  'Madagascar Vanilla & Berry Coulis',
  'Butterscotch Supreme & Nut Praline',
  'Ferrero Hazelnut Crunch',
  'Fresh Seasonal Fruit Gateau',
  'Dutch Dark Chocolate'
];

export const WEIGHT_OPTIONS = [
  '0.5 kg (4-6 servings)',
  '1.0 kg (8-10 servings)',
  '1.5 kg (12-15 servings)',
  '2.0 kg (16-20 servings)',
  '3.0+ kg (Multi-Tier Grand)'
];
