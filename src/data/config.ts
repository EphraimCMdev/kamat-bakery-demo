export const BRAND_CONFIG = {
  name: 'Kamat Bakery',
  location: 'Dharwad',
  instagramUrl: 'https://www.instagram.com/kamatbakery/',
  instagramHandle: '@kamatbakery',
  // Placeholder WhatsApp link - easily replaceable when actual number is provided
  whatsappBaseUrl: 'https://api.whatsapp.com/send?phone=&text=',
  phoneDisplay: '+91 XXXXX XXXXX',
};

export const createWhatsAppUrl = (message: string): string => {
  return `${BRAND_CONFIG.whatsappBaseUrl}${encodeURIComponent(message)}`;
};
