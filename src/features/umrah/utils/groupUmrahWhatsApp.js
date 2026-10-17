import { COMPANY_CONFIG } from '../../../config/company';

/**
 * Builds a formatted WhatsApp booking and inquiry message for a Group Umrah Package.
 * @param {Object} pkg - Normalized or raw group umrah package object
 * @returns {string} Text message for WhatsApp
 */
export function buildGroupUmrahWhatsAppMessage(pkg) {
  if (!pkg) {
    return 'Assalamu Alaikum World Track Aviation, I would like to book a Group Umrah Package. Please share available packages and dates.';
  }

  const sector = pkg.sector || pkg.name || pkg.title || 'Group Umrah Package';
  const airline = pkg.airlineName
    ? `${pkg.airlineName}${pkg.airlineCode ? ` (${pkg.airlineCode})` : ''}`
    : (pkg.airlineCode || '');
  const duration = pkg.durationDays || (pkg.duration ? `${pkg.duration} Days` : '');
  const departure = pkg.outbound?.date || pkg.departure_date || '';
  const returnDate = pkg.inbound?.date || '';

  const makkahParts = [];
  if (pkg.makkahHotel?.name) makkahParts.push(pkg.makkahHotel.name);
  if (pkg.makkahHotel?.nights) makkahParts.push(`${pkg.makkahHotel.nights} Nights`);
  if (pkg.makkahHotel?.shuttle) makkahParts.push(pkg.makkahHotel.shuttle);

  const madinahParts = [];
  if (pkg.madinahHotel?.name) madinahParts.push(pkg.madinahHotel.name);
  if (pkg.madinahHotel?.nights) madinahParts.push(`${pkg.madinahHotel.nights} Nights`);
  if (pkg.madinahHotel?.shuttle) madinahParts.push(pkg.madinahHotel.shuttle);

  const prices = [];
  if (pkg.pricing?.sharing && pkg.pricing.sharing !== 'Call') prices.push(`Sharing: PKR ${pkg.pricing.sharing}`);
  if (pkg.pricing?.quad && pkg.pricing.quad !== 'Call') prices.push(`Quad: PKR ${pkg.pricing.quad}`);
  if (pkg.pricing?.triple && pkg.pricing.triple !== 'Call') prices.push(`Triple: PKR ${pkg.pricing.triple}`);
  if (pkg.pricing?.double && pkg.pricing.double !== 'Call') prices.push(`Double: PKR ${pkg.pricing.double}`);

  let msg = `Assalamu Alaikum World Track Aviation,\n\nI want to book the following *Group Umrah Package*:\n`;
  msg += `\n📍 *Sector:* ${sector}`;
  if (airline) msg += `\n✈️ *Airline:* ${airline}`;
  if (duration) msg += `\n🗓️ *Duration:* ${duration}`;

  if (departure && departure !== 'ON REQUEST') {
    const flightExtra = [pkg.outbound?.flightNo, pkg.outbound?.time].filter(Boolean).join(' ');
    msg += `\n🛫 *Departure:* ${departure}${flightExtra ? ` (${flightExtra})` : ''}`;
  }
  if (returnDate && returnDate !== 'CONFIRMED SEATS') {
    const flightExtra = [pkg.inbound?.flightNo, pkg.inbound?.time].filter(Boolean).join(' ');
    msg += `\n🛬 *Return:* ${returnDate}${flightExtra ? ` (${flightExtra})` : ''}`;
  }

  if (makkahParts.length > 0) {
    msg += `\n🕋 *Makkah Hotel:* ${makkahParts.join(' • ')}`;
  }
  if (madinahParts.length > 0) {
    msg += `\n🕌 *Madinah Hotel:* ${madinahParts.join(' • ')}`;
  }

  if (prices.length > 0) {
    msg += `\n💰 *Rates:* ${prices.join(' | ')}`;
  } else if (pkg.price) {
    msg += `\n💰 *Price:* ${pkg.price}`;
  }

  if (pkg.seatsLeft !== undefined && pkg.seatsLeft !== null) {
    msg += `\n💺 *Available Seats:* ${pkg.seatsLeft} Left`;
  }

  msg += `\n\nPlease confirm availability and share the booking requirements. Thank you!`;

  return msg;
}

/**
 * Directly opens WhatsApp chat with the pre-filled Group Umrah booking message.
 * @param {Object} pkg - Group umrah package object
 */
export function openGroupUmrahWhatsApp(pkg) {
  const msg = buildGroupUmrahWhatsAppMessage(pkg);
  const url = COMPANY_CONFIG.getWhatsAppUrl(msg);
  if (typeof window !== 'undefined') {
    window.open(url, '_blank', 'noopener,noreferrer');
  }
}
