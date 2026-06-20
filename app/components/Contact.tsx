"use client";

import { motion, AnimatePresence } from "motion/react";
import { useState } from "react";

const INTERESTS = ["Curious customer", "Practitioner", "Press", "Partnership"];
const ease = [0.22, 1, 0.36, 1] as const;

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [interest, setInterest] = useState<string>("Curious customer");
  const [message, setMessage] = useState("");
  const [consent, setConsent] = useState(false);
  const [touched, setTouched] = useState(false);
  const [sent, setSent] = useState(false);

  const emailOk = /^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email);
  const valid = name.trim().length > 1 && emailOk && consent;

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    setTouched(true);
    if (valid) setSent(true);
  };

  const inputBase =
    "w-full rounded-xl border px-[18px] text-[16px] outline-none transition-shadow duration-200 placeholder:text-[#9A9486]";

  return (
    <div className="flex min-h-screen w-full max-md:flex-col" style={{ fontFamily: "var(--font-body)" }}>
      {/* ───────────────────────── RAIL ───────────────────────── */}
      <aside
        className="relative flex w-[44%] max-w-[600px] shrink-0 flex-col overflow-hidden px-14 pb-12 pt-[104px] max-md:w-full max-md:max-w-none max-md:px-6 max-md:pb-10 max-md:pt-24"
        style={{ background: "radial-gradient(120% 70% at 20% 0%, #1B2C49 0%, #15233C 58%, #0E1A2D 100%)", color: "var(--color-cream)" }}
      >
        <div className="pointer-events-none absolute inset-0 opacity-50" style={{ mixBlendMode: "soft-light" }}>
          <svg width="100%" height="100%" preserveAspectRatio="none">
            <filter id="grainRail2"><feTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves="2" stitchTiles="stitch" /><feColorMatrix type="saturate" values="0" /></filter>
            <rect width="100%" height="100%" filter="url(#grainRail2)" />
          </svg>
        </div>
        <div className="pointer-events-none absolute -bottom-32 -right-28 h-[360px] w-[360px] rounded-full" style={{ background: "radial-gradient(circle at 50% 45%, rgba(110,160,215,0.32) 0%, rgba(60,105,160,0.14) 42%, rgba(20,40,70,0) 72%)" }} />

        <div className="relative z-10 flex h-full flex-col">
          <div className="flex items-center gap-[11px] pb-6">
            <span className="h-1.5 w-1.5 rounded-full" style={{ background: "var(--color-gold)" }} />
            <span style={{ fontFamily: "var(--font-label)", fontWeight: 600, fontSize: 12, letterSpacing: "0.24em", textTransform: "uppercase", color: "var(--color-gold-soft)" }}>Get in touch</span>
          </div>
          <h1 className="max-md:!text-[40px] max-md:!leading-[42px]" style={{ fontFamily: "var(--font-display)", fontWeight: 500, fontSize: 54, lineHeight: "56px", letterSpacing: "-0.02em", color: "var(--color-cream)", margin: 0 }}>
            Let’s talk about LNAD⁺.
          </h1>
          <p className="max-w-[380px] pt-6" style={{ fontSize: 17, lineHeight: "28px", color: "var(--color-cream-dim)", margin: 0 }}>
            Questions about the science, early access, or a partnership — leave a note and the right person will get back to you.
          </p>

          <div className="flex flex-col gap-5 pt-12">
            <a href="mailto:hello@cellcontext.com" className="flex items-center gap-3.5">
              <span className="flex h-[38px] w-[38px] shrink-0 items-center justify-center rounded-full" style={{ border: "1px solid rgba(203,169,104,0.45)" }}>
                <svg width="17" height="17" viewBox="0 0 17 17" fill="none"><rect x="2" y="3.5" width="13" height="10" rx="2" stroke="#CBA968" strokeWidth="1.2" /><path d="M2.5 4.5l6 4 6-4" stroke="#CBA968" strokeWidth="1.2" /></svg>
              </span>
              <span className="flex flex-col gap-0.5">
                <span style={{ fontFamily: "var(--font-label)", fontWeight: 600, fontSize: 11, letterSpacing: "0.18em", textTransform: "uppercase", color: "var(--color-cream-dim)" }}>Email</span>
                <span style={{ fontSize: 16, color: "var(--color-cream)" }}>hello@cellcontext.com</span>
              </span>
            </a>
            <div className="flex items-center gap-3.5">
              <span className="flex h-[38px] w-[38px] shrink-0 items-center justify-center rounded-full" style={{ border: "1px solid rgba(203,169,104,0.45)" }}>
                <svg width="17" height="17" viewBox="0 0 17 17" fill="none"><path d="M8.5 15s5-4.2 5-8.2A5 5 0 003.5 6.8c0 4 5 8.2 5 8.2z" stroke="#CBA968" strokeWidth="1.2" strokeLinejoin="round" /><circle cx="8.5" cy="6.8" r="1.7" stroke="#CBA968" strokeWidth="1.2" /></svg>
              </span>
              <span className="flex flex-col gap-0.5">
                <span style={{ fontFamily: "var(--font-label)", fontWeight: 600, fontSize: 11, letterSpacing: "0.18em", textTransform: "uppercase", color: "var(--color-cream-dim)" }}>Studio</span>
                <span style={{ fontSize: 16, color: "var(--color-cream)" }}>Boston, Massachusetts</span>
              </span>
            </div>
          </div>

          <div className="mt-auto flex flex-col gap-3.5 pt-14 max-md:hidden" style={{ borderTop: "1px solid rgba(239,231,215,0.16)" }}>
            <span className="max-w-[380px] pt-8" style={{ fontFamily: "var(--font-quote)", fontStyle: "italic", fontSize: 23, lineHeight: "31px", color: "var(--color-cream)" }}>
              “Cellular outcomes are determined by context — not concentration alone.”
            </span>
            <span style={{ fontFamily: "var(--font-label)", fontWeight: 600, fontSize: 10.5, letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--color-gold-soft)" }}>The Cell Context premise</span>
          </div>
        </div>
      </aside>

      {/* ───────────────────────── FORM ───────────────────────── */}
      <section className="flex flex-1 flex-col justify-center px-[88px] pb-12 pt-[92px] max-md:px-6 max-md:pb-12 max-md:pt-4" style={{ background: "var(--color-ivory)" }}>
        <AnimatePresence mode="wait">
          {sent ? (
            <motion.div
              key="sent"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease }}
              className="flex max-w-[460px] flex-col items-start"
            >
              <motion.span
                initial={{ scale: 0.6, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.1, type: "spring", stiffness: 320, damping: 18 }}
                className="mb-7 flex h-16 w-16 items-center justify-center rounded-full"
                style={{ background: "rgba(181,138,60,0.14)", border: "1px solid var(--color-gold)" }}
              >
                <svg width="28" height="28" viewBox="0 0 28 28" fill="none"><path d="M6 15l5 5L22 9" stroke="#876320" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
              </motion.span>
              <h2 style={{ fontFamily: "var(--font-display)", fontWeight: 500, fontSize: 40, lineHeight: "44px", letterSpacing: "-0.01em", color: "var(--color-ink)", margin: 0 }}>
                Thank you, {name.split(" ")[0] || "friend"}.
              </h2>
              <p className="pt-4" style={{ fontSize: 18, lineHeight: "28px", color: "var(--color-graphite)", margin: 0 }}>
                Your note is in. Our team reads every message and will be in touch within two business days.
              </p>
              <button
                onClick={() => { setSent(false); setName(""); setEmail(""); setMessage(""); setConsent(false); setTouched(false); }}
                className="mt-8 text-[15px] underline-offset-4 transition-opacity hover:opacity-70"
                style={{ fontFamily: "var(--font-label)", fontWeight: 500, color: "var(--color-gold-deep)", textDecoration: "underline" }}
              >
                Send another message
              </button>
            </motion.div>
          ) : (
            <motion.form
              key="form"
              onSubmit={submit}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
              className="flex w-full max-w-[640px] flex-col"
              noValidate
            >
              <h2 style={{ fontFamily: "var(--font-display)", fontWeight: 500, fontSize: 34, lineHeight: "38px", letterSpacing: "-0.01em", color: "var(--color-ink)", margin: 0 }}>
                Send us a note
              </h2>
              <p className="pb-6 pt-2" style={{ fontSize: 16, color: "var(--color-graphite)", margin: 0 }}>
                We read every message. Expect a reply within two business days.
              </p>

              <label className="flex flex-col gap-[9px] pb-4">
                <span style={{ fontFamily: "var(--font-label)", fontWeight: 500, fontSize: 15, color: "var(--color-ink)" }}>Full name</span>
                <input
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Eleanor Vance"
                  className={`${inputBase} h-[54px] focus:!shadow-[0_0_0_3px_rgba(181,138,60,0.16)]`}
                  style={{ background: "#FBF7EC", borderColor: touched && name.trim().length <= 1 ? "var(--color-coral)" : "var(--color-line)", color: "#1C2536" }}
                  onFocus={(e) => (e.currentTarget.style.borderColor = "var(--color-gold)")}
                  onBlur={(e) => (e.currentTarget.style.borderColor = touched && name.trim().length <= 1 ? "var(--color-coral)" : "var(--color-line)")}
                />
              </label>

              <label className="flex flex-col gap-[9px] pb-4">
                <span style={{ fontFamily: "var(--font-label)", fontWeight: 500, fontSize: 15, color: "var(--color-ink)" }}>Email address</span>
                <span
                  className="flex h-[54px] items-center gap-3 rounded-xl border px-[18px] transition-shadow duration-200 focus-within:shadow-[0_0_0_3px_rgba(181,138,60,0.16)]"
                  style={{ background: "#fff", borderColor: touched && !emailOk ? "var(--color-coral)" : "var(--color-line)" }}
                >
                  <svg width="17" height="17" viewBox="0 0 17 17" fill="none"><rect x="2" y="3.5" width="13" height="10" rx="2" stroke="#876320" strokeWidth="1.2" /><path d="M2.5 4.5l6 4 6-4" stroke="#876320" strokeWidth="1.2" /></svg>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="you@email.com"
                    className="w-full bg-transparent text-[16px] outline-none placeholder:text-[#9A9486]"
                    style={{ color: "#1C2536" }}
                  />
                </span>
              </label>

              <div className="flex flex-col gap-3 pb-4">
                <span style={{ fontFamily: "var(--font-label)", fontWeight: 500, fontSize: 15, color: "var(--color-ink)" }}>I’m reaching out as a…</span>
                <div className="flex flex-wrap gap-2.5">
                  {INTERESTS.map((opt) => {
                    const active = interest === opt;
                    return (
                      <button
                        key={opt}
                        type="button"
                        onClick={() => setInterest(opt)}
                        className="inline-flex items-center gap-2 rounded-full px-[18px] py-[11px] text-[14.5px] transition-colors duration-200"
                        style={{
                          fontFamily: "var(--font-label)", fontWeight: 500,
                          background: active ? "rgba(181,138,60,0.12)" : "#FBF7EC",
                          border: active ? "1.5px solid var(--color-gold)" : "1px solid var(--color-line)",
                          color: active ? "var(--color-ink)" : "var(--color-graphite)",
                        }}
                      >
                        {active && <svg width="13" height="13" viewBox="0 0 13 13" fill="none"><path d="M2.5 6.7l2.6 2.6L10.7 3.7" stroke="#876320" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" /></svg>}
                        {opt}
                      </button>
                    );
                  })}
                </div>
              </div>

              <label className="flex flex-col gap-[9px] pb-5">
                <span style={{ fontFamily: "var(--font-label)", fontWeight: 500, fontSize: 15, color: "var(--color-ink)" }}>Your message</span>
                <textarea
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  rows={3}
                  placeholder="What you’re hoping LNAD⁺ can support, a question for our team, or how you heard about us…"
                  className={`${inputBase} resize-none py-[15px] leading-[24px] focus:!shadow-[0_0_0_3px_rgba(181,138,60,0.16)]`}
                  style={{ background: "#FBF7EC", borderColor: "var(--color-line)", color: "#1C2536" }}
                  onFocus={(e) => (e.currentTarget.style.borderColor = "var(--color-gold)")}
                  onBlur={(e) => (e.currentTarget.style.borderColor = "var(--color-line)")}
                />
              </label>

              <button type="button" onClick={() => setConsent((c) => !c)} className="flex items-start gap-3.5 pb-5 text-left">
                <span
                  className="mt-0.5 flex h-[22px] w-[22px] shrink-0 items-center justify-center rounded-md transition-colors duration-200"
                  style={{ background: consent ? "var(--color-gold)" : "#fff", border: consent ? "1.5px solid var(--color-gold)" : touched && !consent ? "1.5px solid var(--color-coral)" : "1.5px solid #B8B1A2" }}
                >
                  {consent && <svg width="13" height="13" viewBox="0 0 13 13" fill="none"><path d="M2.5 6.7l2.6 2.6L10.7 3.7" stroke="#fff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" /></svg>}
                </span>
                <span style={{ fontSize: 15, lineHeight: "23px", color: "var(--color-graphite)" }}>
                  I agree to be contacted by Cell Context and understand LNAD⁺ is a dietary supplement — not a treatment for any disease. <span style={{ color: "var(--color-gold-deep)", textDecoration: "underline" }}>Privacy Policy.</span>
                </span>
              </button>

              <div className="flex flex-wrap items-center gap-x-6 gap-y-3">
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.015 }}
                  whileTap={{ scale: 0.985 }}
                  className="inline-flex items-center justify-center gap-2.5 rounded-full px-[38px] py-[18px] text-[16px] transition-shadow duration-300 hover:shadow-[0_12px_34px_rgba(22,35,59,0.22)]"
                  style={{ fontFamily: "var(--font-label)", fontWeight: 600, background: "var(--color-ink)", color: "var(--color-cream)" }}
                >
                  Send message
                  <svg width="17" height="17" viewBox="0 0 16 16" fill="none"><path d="M3 8h9M8.5 4l4 4-4 4" stroke="#EFE7D7" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
                </motion.button>
                <span className="flex items-center gap-2" style={{ fontSize: 14, color: "var(--color-graphite)" }}>
                  <svg width="15" height="15" viewBox="0 0 15 15" fill="none"><rect x="3" y="6.5" width="9" height="6.5" rx="1.4" stroke="#876320" strokeWidth="1.1" /><path d="M5 6.5V5a2.5 2.5 0 015 0v1.5" stroke="#876320" strokeWidth="1.1" /></svg>
                  Encrypted · never sold
                </span>
              </div>

              <AnimatePresence>
                {touched && !valid && (
                  <motion.p
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    className="overflow-hidden pt-4"
                    style={{ fontSize: 14, color: "var(--color-coral)" }}
                  >
                    Please add your name, a valid email, and agree to be contacted.
                  </motion.p>
                )}
              </AnimatePresence>
            </motion.form>
          )}
        </AnimatePresence>
      </section>
    </div>
  );
}
