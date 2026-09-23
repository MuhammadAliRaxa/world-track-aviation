/**
 * Centralized company contact and brand configuration.
 * All public contact details, WhatsApp routing, and social metadata are maintained here.
 */

export const COMPANY_CONFIG = {
  name: 'World Track Aviation',
  shortName: 'World Track',
  tagline: 'Travel with Trust | Flights, Hotels, Umrah & Visa',
  officeLine: '051-2120721',
  officeLineRaw: '0512120721',
  urgentSupportWhatsapp: '+92 335 0122252',
  urgentSupportWhatsappNumber: '923350122252',
  whatsapp: '+92 329 2721721',
  whatsappNumber: '923292721721',
  phone: '051-2120721',
  phoneFormatted: '051-2120721',
  phoneRaw: '0512120721',
  email: 'worldtrackaviation@gmail.com',
  address: 'World Track Aviation, Office No. 4, Islamabad Center, Block 39, Fazal-ul-Haq Road, Blue Area, Islamabad',
  city: 'Islamabad',
  country: 'Pakistan',
  openingHours: 'Mon - Sat: 09:00 AM - 09:00 PM | WhatsApp 24/7',
  social: {
    facebook: 'https://web.facebook.com/worldtrackaviation/',
    instagram: 'https://www.instagram.com/worldtrackaviation/',
  },

  /**
   * Generates a direct WhatsApp click-to-chat URL with an optional pre-filled message.
   * @param {string} message - Optional pre-filled text
   * @param {'standard' | 'urgent'} type - Which helpline to target
   * @returns {string} wa.me URL
   */
  getWhatsAppUrl(message = '', type = 'standard') {
    const target = type === 'urgent' ? this.urgentSupportWhatsappNumber : this.whatsappNumber;
    const encoded = encodeURIComponent(message);
    return `https://wa.me/${target}${encoded ? `?text=${encoded}` : ''}`;
  },
};

export default COMPANY_CONFIG;
