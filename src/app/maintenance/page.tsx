import React from 'react';
import type { Metadata } from 'next';
import Image from 'next/image';
import { Wrench, Phone, Mail, MessageCircle, MapPin, Clock, RefreshCw } from 'lucide-react';
import { COMPANY_CONFIG } from '@/config/company';

export const metadata: Metadata = {
  title: 'Under Maintenance | World Track Aviation',
  description: 'World Track Aviation is currently undergoing scheduled system maintenance. We will be back shortly.',
  robots: {
    index: false,
    follow: false,
  },
};

export default function MaintenancePage() {
  const whatsappUrl = COMPANY_CONFIG.getWhatsAppUrl(
    'Hi World Track Aviation team, I am reaching out while your website is undergoing maintenance. I would like assistance with a booking.'
  );

  return (
    <main className="min-h-screen bg-[#070e1b] text-white flex flex-col items-center justify-center p-4 sm:p-6 relative overflow-hidden">
      {/* Decorative ambient gradients */}
      <div className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] bg-emerald-600/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[50vw] h-[50vw] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-lg w-full bg-[#0d1829]/90 border border-slate-700/60 rounded-3xl p-6 sm:p-8 shadow-2xl backdrop-blur-md relative z-10 text-center">
        {/* Brand Logo */}
        <div className="flex justify-center mb-6">
          <Image
            src="/assets/world_track_logo.png"
            alt={COMPANY_CONFIG.name}
            width={180}
            height={52}
            priority
            className="h-10 w-auto object-contain brightness-110"
          />
        </div>

        {/* Maintenance Icon Badge */}
        <div className="w-16 h-16 bg-amber-500/10 border border-amber-500/20 text-amber-400 rounded-2xl flex items-center justify-center mx-auto mb-5 shadow-inner">
          <Wrench size={30} className="animate-pulse" />
        </div>

        {/* Headline */}
        <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight mb-3">
          We&apos;ll Be Back Shortly!
        </h1>

        <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-6">
          Our backend system is currently undergoing scheduled maintenance and upgrades. We apologize for any inconvenience.
        </p>

        {/* Operating Hours Note */}
        <div className="flex items-center justify-center gap-2 text-xs text-slate-400 bg-slate-800/50 rounded-xl py-2 px-3 mb-6 border border-slate-700/40">
          <Clock size={13} className="text-emerald-400" />
          <span>{COMPANY_CONFIG.openingHours}</span>
        </div>

        {/* Action / Contact Block */}
        <div className="border-t border-slate-700/60 pt-5 space-y-2.5 text-left">
          <p className="text-xs font-semibold uppercase tracking-wider text-slate-400 text-center mb-3">
            Need Immediate Booking or Inquiries?
          </p>

          {/* WhatsApp Direct Chat Button */}
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-between p-3.5 rounded-xl bg-emerald-600/15 hover:bg-emerald-600/25 border border-emerald-500/30 text-emerald-400 hover:text-emerald-300 transition-all font-medium text-sm group"
          >
            <div className="flex items-center gap-3">
              <span className="w-8 h-8 rounded-lg bg-emerald-500/20 flex items-center justify-center text-emerald-400">
                <MessageCircle size={18} />
              </span>
              <div>
                <div className="font-semibold text-white group-hover:text-emerald-300 transition-colors">
                  WhatsApp 24/7 Helpline
                </div>
                <div className="text-xs text-slate-400">{COMPANY_CONFIG.whatsapp}</div>
              </div>
            </div>
            <span className="text-xs font-semibold uppercase tracking-wider px-2 py-1 rounded bg-emerald-500/20 text-emerald-300">
              Chat
            </span>
          </a>

          {/* Phone Call Button */}
          <a
            href={`tel:${COMPANY_CONFIG.phoneRaw}`}
            className="flex items-center justify-between p-3.5 rounded-xl bg-slate-800/60 hover:bg-slate-800 border border-slate-700/60 text-slate-200 transition-all font-medium text-sm group"
          >
            <div className="flex items-center gap-3">
              <span className="w-8 h-8 rounded-lg bg-blue-500/15 flex items-center justify-center text-blue-400">
                <Phone size={18} />
              </span>
              <div>
                <div className="font-semibold text-white group-hover:text-blue-300 transition-colors">
                  Direct Office Line
                </div>
                <div className="text-xs text-slate-400">{COMPANY_CONFIG.phoneFormatted}</div>
              </div>
            </div>
            <span className="text-xs font-semibold uppercase tracking-wider px-2 py-1 rounded bg-slate-700/50 text-slate-300">
              Call
            </span>
          </a>

          {/* Email Contact */}
          <a
            href={`mailto:${COMPANY_CONFIG.email}`}
            className="flex items-center justify-between p-3 rounded-xl bg-slate-800/40 hover:bg-slate-800/70 border border-slate-700/40 text-slate-300 text-xs transition-colors"
          >
            <div className="flex items-center gap-2.5">
              <Mail size={15} className="text-slate-400" />
              <span>{COMPANY_CONFIG.email}</span>
            </div>
            <span className="text-[11px] text-slate-400">Email Us</span>
          </a>
        </div>

        {/* Physical Office Address */}
        <div className="mt-6 pt-4 border-t border-slate-800 text-[11px] text-slate-400 flex items-start justify-center gap-1.5 leading-relaxed">
          <MapPin size={13} className="text-amber-400 shrink-0 mt-0.5" />
          <span>{COMPANY_CONFIG.address}</span>
        </div>

        {/* Refresh check button */}
        <div className="mt-5">
          <button
            type="button"
            onClick={() => {
              if (typeof window !== 'undefined') window.location.reload();
            }}
            className="inline-flex items-center gap-1.5 text-xs text-slate-400 hover:text-white transition-colors cursor-pointer"
          >
            <RefreshCw size={12} />
            <span>Check again if site is online</span>
          </button>
        </div>
      </div>
    </main>
  );
}

