import React, { useState } from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { Mail, Phone, Copy, Check, Send, Sparkles, MessageCircle, ExternalLink } from 'lucide-react';

export default function Contact() {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [submittedWhatsAppUrl, setSubmittedWhatsAppUrl] = useState('');

  const copyText = (text, isEmail) => {
    navigator.clipboard.writeText(text);
    if (isEmail) {
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2000);
    } else {
      setCopiedPhone(true);
      setTimeout(() => setCopiedPhone(false), 2000);
    }
  };

  const handleWhatsAppSubmit = (e) => {
    e.preventDefault();
    const cleanName = name.trim();
    const cleanEmail = email.trim();
    const cleanMsg = message.trim();

    if (!cleanName || !cleanEmail || !cleanMsg) return;

    // Build professional WhatsApp message as required
    const waText = `Hello Ajeet,

Name: ${cleanName}

Email: ${cleanEmail}

Message:
${cleanMsg}

I found your portfolio and would like to connect.`;

    const waUrl = `https://wa.me/${PERSONAL_INFO.whatsappNumber}?text=${encodeURIComponent(waText)}`;
    setSubmittedWhatsAppUrl(waUrl);
    setSubmitted(true);

    // Open WhatsApp in a new window/tab
    window.open(waUrl, '_blank', 'noopener,noreferrer');
  };

  const handleEmailFallback = () => {
    const cleanName = name.trim();
    const cleanEmail = email.trim();
    const cleanMsg = message.trim();

    const subject = encodeURIComponent(`Portfolio Inquiry from ${cleanName || 'Visitor'}`);
    const body = encodeURIComponent(`Hello Ajeet,

Name: ${cleanName}
Email: ${cleanEmail}

Message:
${cleanMsg}

I found your portfolio and would like to connect.`);

    window.location.href = `mailto:${PERSONAL_INFO.email}?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="py-24 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto border-t border-slate-100">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-start">
        {/* Left Information */}
        <div className="md:col-span-6 space-y-5">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-purple-700 bg-purple-50 px-3 py-1 rounded-full border border-purple-200/80">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Start A Conversation</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight">
            LET'S BUILD SOMETHING.
          </h2>

          <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
            Have an idea for a product, need high-velocity engineering for your company, or want to discuss
            MyRyedo or Aakrish Tech?
          </p>

          <blockquote className="border-l-2 border-purple-600 pl-4 py-1 text-slate-800 font-medium italic text-base">
            “You bring the vision. I’ll bring the curiosity, engineering, and digital growth strategy.”
          </blockquote>

          <div className="space-y-3 pt-4">
            {/* WhatsApp / Phone Card */}
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold">
                  <MessageCircle className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[11px] font-mono text-slate-400 block">WHATSAPP / PHONE</span>
                  <a
                    href={`https://wa.me/${PERSONAL_INFO.whatsappNumber}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-semibold text-slate-900 hover:text-emerald-700 transition-colors flex items-center gap-1"
                  >
                    <span>{PERSONAL_INFO.phone}</span>
                    <ExternalLink className="w-3 h-3 text-slate-400" />
                  </a>
                </div>
              </div>
              <button
                onClick={() => copyText(PERSONAL_INFO.phone, false)}
                className="p-2 text-slate-400 hover:text-slate-700 transition-colors"
                title="Copy phone"
              >
                {copiedPhone ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
              </button>
            </div>

            {/* Email Card */}
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-purple-100 text-purple-700 flex items-center justify-center font-bold">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[11px] font-mono text-slate-400 block">DIRECT EMAIL</span>
                  <a
                    href={`mailto:${PERSONAL_INFO.email}`}
                    className="text-sm font-semibold text-slate-900 hover:text-purple-600 transition-colors"
                  >
                    {PERSONAL_INFO.email}
                  </a>
                </div>
              </div>
              <button
                onClick={() => copyText(PERSONAL_INFO.email, true)}
                className="p-2 text-slate-400 hover:text-slate-700 transition-colors"
                title="Copy email"
              >
                {copiedEmail ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
              </button>
            </div>
          </div>
        </div>

        {/* Right WhatsApp Contact Form */}
        <div className="md:col-span-6 bg-slate-50/90 p-6 sm:p-8 rounded-3xl border border-slate-200 shadow-xs relative">
          <div className="flex items-center justify-between mb-3 pb-2 border-b border-slate-200/80">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
              <h3 className="text-base font-bold text-slate-900">
                Connect via WhatsApp
              </h3>
            </div>
            <span className="text-[11px] font-mono text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">
              Direct & Instant
            </span>
          </div>

          <p className="text-xs text-slate-500 mb-5 leading-relaxed">
            Fill in your details below. Submitting will prepare a structured message and connect us
            instantly on WhatsApp.
          </p>

          {submitted ? (
            <div className="py-6 px-4 rounded-2xl bg-white border border-emerald-200 text-center space-y-4 animate-in fade-in duration-200">
              <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                <Check className="w-6 h-6" />
              </div>
              <div>
                <h4 className="text-base font-bold text-slate-900">WhatsApp Chat Prepared!</h4>
                <p className="text-xs text-slate-600 mt-1 max-w-sm mx-auto">
                  If WhatsApp did not open automatically, click the button below to launch your chat with Ajeet.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-2.5 pt-2">
                <a
                  href={submittedWhatsAppUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs flex items-center justify-center gap-1.5 shadow-sm transition-colors"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Open WhatsApp</span>
                </a>
                <button
                  type="button"
                  onClick={() => setSubmitted(false)}
                  className="w-full sm:w-auto px-4 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold text-xs transition-colors"
                >
                  Edit Message
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleWhatsAppSubmit} className="space-y-4">
              <div>
                <label className="text-xs font-semibold text-slate-700 block mb-1">
                  Your Name *
                </label>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="e.g. Rahul Sharma / Sarah"
                  className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-slate-200 text-slate-900 text-xs sm:text-sm focus:outline-hidden focus:border-emerald-600 transition-colors shadow-2xs"
                />
              </div>

              <div>
                <label className="text-xs font-semibold text-slate-700 block mb-1">
                  Your Email *
                </label>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="e.g. rahul@company.com"
                  className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-slate-200 text-slate-900 text-xs sm:text-sm focus:outline-hidden focus:border-emerald-600 transition-colors shadow-2xs"
                />
              </div>

              <div>
                <label className="text-xs font-semibold text-slate-700 block mb-1">
                  Message *
                </label>
                <textarea
                  rows={4}
                  required
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Hey Ajeet, I'd like to discuss a project / explore a collaboration..."
                  className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-slate-200 text-slate-900 text-xs sm:text-sm focus:outline-hidden focus:border-emerald-600 transition-colors shadow-2xs"
                />
              </div>

              <div className="pt-1 flex flex-col sm:flex-row gap-2.5">
                <button
                  type="submit"
                  className="flex-1 py-3 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs sm:text-sm flex items-center justify-center gap-2 transition-all shadow-sm active:scale-98"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Send on WhatsApp</span>
                </button>

                <button
                  type="button"
                  onClick={handleEmailFallback}
                  className="py-3 px-4 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-semibold text-xs sm:text-sm transition-colors flex items-center justify-center gap-1.5"
                  title="Send via Email instead"
                >
                  <Mail className="w-4 h-4" />
                  <span>Email</span>
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
