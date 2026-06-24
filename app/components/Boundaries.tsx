"use client";
import { motion } from "motion/react";
import { sectionContainer, sectionItem } from "./Reveal";

export default function Boundaries() {
  return (
    <div className="max-md:!px-5 max-md:!py-14" style={{ alignItems: 'center', backgroundColor: 'var(--color-ivory)', boxSizing: 'border-box', display: 'flex', flexDirection: 'column', fontSize: '12px', fontSynthesis: 'none', lineHeight: '16px', MozOsxFontSmoothing: 'grayscale', overflow: 'clip', paddingBlock: 'clamp(56px, 8.9vw, 128px)', paddingInline: '0px', position: 'relative', WebkitFontSmoothing: 'antialiased', width: '100%' }}>
      <div style={{ bottom: '0px', boxSizing: 'border-box', left: '0px', overflow: 'clip', position: 'absolute', right: '0px', top: '0px' }}>
        <svg width="1440" height="100%" viewBox="0 0 1440 900" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg" style={{ top: '0px', right: '0px', bottom: '0px', left: '0px', rotate: '-46deg', position: 'absolute', transformOrigin: '0% 0%' }}>
          <ellipse cx="430" cy="440" rx="720" ry="300" transform="rotate(-14 430 440)" fill="none" stroke="#B58A3C1F" style={{ strokeOpacity: '0.32', stroke: 'rgb(181, 138, 60)' }} />
          <ellipse cx="540" cy="430" rx="560" ry="430" transform="rotate(10 540 430)" fill="none" stroke="#B58A3C12" style={{ strokeOpacity: '0.2', stroke: 'rgb(181, 138, 60)' }} />
          <circle cx="120" cy="250" r="2.4" fill="#B58A3C73" />
          <circle cx="76" cy="600" r="2" fill="#B58A3C59" />
          <circle cx="300" cy="720" r="2.2" fill="#CBA96866" />
          <circle cx="640" cy="150" r="1.8" fill="#CBA96866" />
        </svg>
        <div style={{ bottom: '0px', boxSizing: 'border-box', left: '0px', mixBlendMode: 'soft-light', opacity: '0.6', position: 'absolute', right: '0px', top: '0px' }}>
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <filter id="_0tg7hb0"><feTurbulence type="fractalNoise" baseFrequency="0.86" numOctaves="2" stitchTiles="stitch"/><feColorMatrix type="saturate" values="0"/></filter>
            <rect width="100%" height="100%" filter="url(#_0tg7hb0)" fill="#000000" />
          </svg>
        </div>
      </div>
      <motion.div variants={sectionContainer} initial="hidden" whileInView="show" viewport={{ once: true, margin: "-15% 0px -10% 0px" }} style={{ boxSizing: 'border-box', display: 'flex', flexDirection: 'column', maxWidth: '1180px', position: 'relative', width: '100%' }}>
        <motion.div variants={sectionItem} className="max-md:!max-w-full" style={{ alignItems: 'flex-start', boxSizing: 'border-box', display: 'flex', flexDirection: 'column', maxWidth: '760px', paddingBottom: '62px' }}>
          <div style={{ alignItems: 'center', boxSizing: 'border-box', display: 'flex', gap: '13px', paddingBottom: '28px' }}>
            <div style={{ backgroundColor: 'var(--color-gold)', boxSizing: 'border-box', flexShrink: '0', height: '1px', width: '30px' }} />
            <div style={{ boxSizing: 'border-box', color: 'var(--color-gold-deep)', display: 'inline-block', fontFamily: 'var(--font-label)', fontSize: '13px', fontWeight: 600, letterSpacing: '0.24em', lineHeight: '16px', textTransform: 'uppercase', whiteSpaceCollapse: 'preserve' }}>
              Clear Boundaries
            </div>
          </div>
          <div className="max-md:!text-[30px] max-md:!leading-[34px]" style={{ boxSizing: 'border-box', color: 'var(--color-ink)', display: 'inline-block', fontFamily: 'var(--font-display)', fontSize: 'clamp(30px, calc(30px + 28 * (100vw - 768px) / 672), 58px)', fontWeight: 500, letterSpacing: '-0.02em', lineHeight: 'clamp(34px, calc(34px + 28 * (100vw - 768px) / 672), 62px)' }}>
            What LNAD⁺ is — and what it is not.
          </div>
          <div className="max-md:!max-w-full" style={{ boxSizing: 'border-box', display: 'inline-block', fontFamily: 'var(--font-body)', maxWidth: '600px', paddingTop: '22px' }}>
            <div style={{ boxSizing: 'border-box', color: 'var(--color-graphite)', display: 'inline-block', fontFamily: 'var(--font-body)', fontSize: 'clamp(16px, calc(16px + 3 * (100vw - 768px) / 672), 19px)', lineHeight: 'clamp(25px, calc(25px + 5 * (100vw - 768px) / 672), 30px)', whiteSpaceCollapse: 'preserve' }}>
              The credibility of this work depends on clean boundaries. Here is exactly what the science supports — and what it does not yet.
            </div>
          </div>
        </motion.div>
        <motion.div variants={sectionItem} className="max-md:!flex-col max-md:!gap-10" style={{ boxSizing: 'border-box', display: 'flex', paddingBottom: '56px', width: '100%' }}>
          <motion.div whileHover={{ y: -5 }} transition={{ type: "spring", stiffness: 300, damping: 28 }} className="max-md:!w-full max-md:!shrink max-md:!pr-0 cursor-default" style={{ boxSizing: 'border-box', display: 'flex', flexBasis: '0%', flexDirection: 'column', flexGrow: '1', minWidth: '0px', paddingRight: 'clamp(24px, 8.9vw, 60px)' }}>
            <div style={{ alignItems: 'center', boxSizing: 'border-box', display: 'flex', gap: '10px', paddingBottom: '30px' }}>
              <div style={{ backgroundColor: 'var(--color-gold)', borderRadius: '50%', boxSizing: 'border-box', display: 'inline-block', flexShrink: '0', height: '8px', width: '8px' }} />
              <div style={{ boxSizing: 'border-box', color: 'var(--color-ink)', display: 'inline-block', fontFamily: 'var(--font-label)', fontSize: '13px', fontWeight: 600, letterSpacing: '0.2em', lineHeight: '16px', textTransform: 'uppercase', whiteSpaceCollapse: 'preserve' }}>
                LNAD⁺ is
              </div>
            </div>
            <div style={{ alignItems: 'flex-start', borderTopColor: 'var(--color-line)', borderTopStyle: 'solid', borderTopWidth: '1px', boxSizing: 'border-box', display: 'flex', gap: '16px', paddingBlock: '20px' }}>
              <div style={{ alignItems: 'center', backgroundColor: '#B58A3C24', borderRadius: '50%', boxSizing: 'border-box', display: 'flex', flexShrink: '0', height: '22px', justifyContent: 'center', width: '22px' }}>
                <svg width="12" height="12" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg" style={{ flexShrink: '0' }}>
                  <path d="M2.5 6.2l2.4 2.4L9.5 3.6" fill="none" stroke="#876320" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <div style={{ boxSizing: 'border-box', color: 'var(--color-ink)', display: 'inline-block', fontFamily: 'var(--font-body)', fontSize: 'clamp(16px, calc(16px + 2 * (100vw - 768px) / 672), 18px)', lineHeight: 'clamp(24px, calc(24px + 3 * (100vw - 768px) / 672), 27px)', whiteSpaceCollapse: 'preserve' }}>
                An oral, LathMized® NAD⁺ formulation (LNAD⁺).
              </div>
            </div>
            <div style={{ alignItems: 'flex-start', borderTopColor: 'var(--color-line)', borderTopStyle: 'solid', borderTopWidth: '1px', boxSizing: 'border-box', display: 'flex', gap: '16px', paddingBlock: '20px' }}>
              <div style={{ alignItems: 'center', backgroundColor: '#B58A3C24', borderRadius: '50%', boxSizing: 'border-box', display: 'flex', flexShrink: '0', height: '22px', justifyContent: 'center', width: '22px' }}>
                <svg width="12" height="12" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg" style={{ flexShrink: '0' }}>
                  <path d="M2.5 6.2l2.4 2.4L9.5 3.6" fill="none" stroke="#876320" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <div style={{ boxSizing: 'border-box', color: 'var(--color-ink)', display: 'inline-block', fontFamily: 'var(--font-body)', fontSize: 'clamp(16px, calc(16px + 2 * (100vw - 768px) / 672), 18px)', lineHeight: 'clamp(24px, calc(24px + 3 * (100vw - 768px) / 672), 27px)', whiteSpaceCollapse: 'preserve' }}>
                Studied in a randomized, double-blind, placebo-controlled human trial.
              </div>
            </div>
            <div style={{ alignItems: 'flex-start', borderTopColor: 'var(--color-line)', borderTopStyle: 'solid', borderTopWidth: '1px', boxSizing: 'border-box', display: 'flex', gap: '16px', paddingBlock: '20px' }}>
              <div style={{ alignItems: 'center', backgroundColor: '#B58A3C24', borderRadius: '50%', boxSizing: 'border-box', display: 'flex', flexShrink: '0', height: '22px', justifyContent: 'center', width: '22px' }}>
                <svg width="12" height="12" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg" style={{ flexShrink: '0' }}>
                  <path d="M2.5 6.2l2.4 2.4L9.5 3.6" fill="none" stroke="#876320" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <div style={{ boxSizing: 'border-box', color: 'var(--color-ink)', display: 'inline-block', fontFamily: 'var(--font-body)', fontSize: 'clamp(16px, calc(16px + 2 * (100vw - 768px) / 672), 18px)', lineHeight: 'clamp(24px, calc(24px + 3 * (100vw - 768px) / 672), 27px)', whiteSpaceCollapse: 'preserve' }}>
                Observed to raise intracellular NAD⁺, with downstream NAD-dependent pathway signals.
              </div>
            </div>
            <div style={{ alignItems: 'flex-start', borderTopColor: 'var(--color-line)', borderTopStyle: 'solid', borderTopWidth: '1px', boxSizing: 'border-box', display: 'flex', gap: '16px', paddingBlock: '20px' }}>
              <div style={{ alignItems: 'center', backgroundColor: '#B58A3C24', borderRadius: '50%', boxSizing: 'border-box', display: 'flex', flexShrink: '0', height: '22px', justifyContent: 'center', width: '22px' }}>
                <svg width="12" height="12" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg" style={{ flexShrink: '0' }}>
                  <path d="M2.5 6.2l2.4 2.4L9.5 3.6" fill="none" stroke="#876320" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <div style={{ boxSizing: 'border-box', color: 'var(--color-ink)', display: 'inline-block', fontFamily: 'var(--font-body)', fontSize: 'clamp(16px, calc(16px + 2 * (100vw - 768px) / 672), 18px)', lineHeight: 'clamp(24px, calc(24px + 3 * (100vw - 768px) / 672), 27px)', whiteSpaceCollapse: 'preserve' }}>
                Best understood as precision nutritional & metabolic support.
              </div>
            </div>
          </motion.div>
          <motion.div whileHover={{ y: -5 }} transition={{ type: "spring", stiffness: 300, damping: 28 }} className="max-md:!w-full max-md:!shrink max-md:!border-l-0 max-md:!pl-0 cursor-default" style={{ borderLeftColor: 'var(--color-line)', borderLeftStyle: 'solid', borderLeftWidth: '1px', boxSizing: 'border-box', display: 'flex', flexBasis: '0%', flexDirection: 'column', flexGrow: '1', minWidth: '0px', paddingLeft: 'clamp(24px, 8.9vw, 60px)' }}>
            <div style={{ alignItems: 'center', boxSizing: 'border-box', display: 'flex', gap: '10px', paddingBottom: '30px' }}>
              <div style={{ backgroundColor: 'var(--color-graphite)', borderRadius: '50%', boxSizing: 'border-box', display: 'inline-block', flexShrink: '0', height: '8px', opacity: '0.5', width: '8px' }} />
              <div style={{ boxSizing: 'border-box', color: 'var(--color-graphite)', display: 'inline-block', fontFamily: 'var(--font-label)', fontSize: '13px', fontWeight: 600, letterSpacing: '0.2em', lineHeight: '16px', textTransform: 'uppercase', whiteSpaceCollapse: 'preserve' }}>
                LNAD⁺ is not
              </div>
            </div>
            <div style={{ alignItems: 'flex-start', borderTopColor: 'var(--color-line)', borderTopStyle: 'solid', borderTopWidth: '1px', boxSizing: 'border-box', display: 'flex', gap: '16px', paddingBlock: '20px' }}>
              <div style={{ alignItems: 'center', borderColor: 'var(--color-line)', borderRadius: '50%', borderStyle: 'solid', borderWidth: '1px', boxSizing: 'border-box', display: 'flex', flexShrink: '0', height: '22px', justifyContent: 'center', width: '22px' }}>
                <svg width="12" height="12" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg" style={{ flexShrink: '0' }}>
                  <path d="M3 6h6" fill="none" stroke="#8A8377" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
              </div>
              <div style={{ boxSizing: 'border-box', color: 'var(--color-graphite)', display: 'inline-block', fontFamily: 'var(--font-body)', fontSize: 'clamp(16px, calc(16px + 2 * (100vw - 768px) / 672), 18px)', lineHeight: 'clamp(24px, calc(24px + 3 * (100vw - 768px) / 672), 27px)', whiteSpaceCollapse: 'preserve' }}>
                A treatment for aging, cardiovascular disease, cancer, addiction, or neurodegeneration.
              </div>
            </div>
            <div style={{ alignItems: 'flex-start', borderTopColor: 'var(--color-line)', borderTopStyle: 'solid', borderTopWidth: '1px', boxSizing: 'border-box', display: 'flex', gap: '16px', paddingBlock: '20px' }}>
              <div style={{ alignItems: 'center', borderColor: 'var(--color-line)', borderRadius: '50%', borderStyle: 'solid', borderWidth: '1px', boxSizing: 'border-box', display: 'flex', flexShrink: '0', height: '22px', justifyContent: 'center', width: '22px' }}>
                <svg width="12" height="12" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg" style={{ flexShrink: '0' }}>
                  <path d="M3 6h6" fill="none" stroke="#8A8377" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
              </div>
              <div style={{ boxSizing: 'border-box', color: 'var(--color-graphite)', display: 'inline-block', fontFamily: 'var(--font-body)', fontSize: 'clamp(16px, calc(16px + 2 * (100vw - 768px) / 672), 18px)', lineHeight: 'clamp(24px, calc(24px + 3 * (100vw - 768px) / 672), 27px)', whiteSpaceCollapse: 'preserve' }}>
                A substitute for medical care, diagnosis, or clinical endpoints.
              </div>
            </div>
            <div style={{ alignItems: 'flex-start', borderTopColor: 'var(--color-line)', borderTopStyle: 'solid', borderTopWidth: '1px', boxSizing: 'border-box', display: 'flex', gap: '16px', paddingBlock: '20px' }}>
              <div style={{ alignItems: 'center', borderColor: 'var(--color-line)', borderRadius: '50%', borderStyle: 'solid', borderWidth: '1px', boxSizing: 'border-box', display: 'flex', flexShrink: '0', height: '22px', justifyContent: 'center', width: '22px' }}>
                <svg width="12" height="12" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg" style={{ flexShrink: '0' }}>
                  <path d="M3 6h6" fill="none" stroke="#8A8377" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
              </div>
              <div style={{ boxSizing: 'border-box', color: 'var(--color-graphite)', display: 'inline-block', fontFamily: 'var(--font-body)', fontSize: 'clamp(16px, calc(16px + 2 * (100vw - 768px) / 672), 18px)', lineHeight: 'clamp(24px, calc(24px + 3 * (100vw - 768px) / 672), 27px)', whiteSpaceCollapse: 'preserve' }}>
                The same as flooding the bloodstream, the way IV NAD⁺ does.
              </div>
            </div>
            <div style={{ alignItems: 'flex-start', borderTopColor: 'var(--color-line)', borderTopStyle: 'solid', borderTopWidth: '1px', boxSizing: 'border-box', display: 'flex', gap: '16px', paddingBlock: '20px' }}>
              <div style={{ alignItems: 'center', borderColor: 'var(--color-line)', borderRadius: '50%', borderStyle: 'solid', borderWidth: '1px', boxSizing: 'border-box', display: 'flex', flexShrink: '0', height: '22px', justifyContent: 'center', width: '22px' }}>
                <svg width="12" height="12" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg" style={{ flexShrink: '0' }}>
                  <path d="M3 6h6" fill="none" stroke="#8A8377" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
              </div>
              <div style={{ boxSizing: 'border-box', color: 'var(--color-graphite)', display: 'inline-block', fontFamily: 'var(--font-body)', fontSize: 'clamp(16px, calc(16px + 2 * (100vw - 768px) / 672), 18px)', lineHeight: 'clamp(24px, calc(24px + 3 * (100vw - 768px) / 672), 27px)', whiteSpaceCollapse: 'preserve' }}>
                A claim to prevent, diagnose, treat, or cure any disease.
              </div>
            </div>
          </motion.div>
        </motion.div>
        <motion.div variants={sectionItem} whileHover={{ y: -5 }} transition={{ type: "spring", stiffness: 300, damping: 28 }} className="max-md:!py-8 max-md:!px-6 max-md:!gap-4 cursor-default" style={{ alignItems: 'flex-start', backgroundColor: 'var(--color-ink)', borderRadius: '18px', boxSizing: 'border-box', display: 'flex', gap: 'clamp(16px, 1.7vw, 24px)', overflow: 'clip', paddingBlock: 'clamp(32px, 2.9vw, 42px)', paddingInline: 'clamp(24px, 3.2vw, 46px)', position: 'relative', width: '100%' }}>
          <div style={{ bottom: '0px', boxSizing: 'border-box', left: '0px', mixBlendMode: 'soft-light', opacity: '0.5', position: 'absolute', right: '0px', top: '0px' }}>
            <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
              <filter id="_5uda0s0"><feTurbulence type="fractalNoise" baseFrequency="0.85" numOctaves="2" stitchTiles="stitch"/><feColorMatrix type="saturate" values="0"/></filter>
              <rect width="100%" height="100%" filter="url(#_5uda0s0)" fill="#000000" />
            </svg>
          </div>
          <div style={{ boxSizing: 'border-box', color: 'var(--color-gold)', display: 'inline-block', flexShrink: '0', fontFamily: 'var(--font-display)', fontSize: 'clamp(36px, calc(36px + 20 * (100vw - 768px) / 672), 56px)', fontWeight: 500, lineHeight: 'clamp(26px, calc(26px + 14 * (100vw - 768px) / 672), 40px)', position: 'relative' }}>
            “
          </div>
          <div style={{ boxSizing: 'border-box', display: 'flex', flexDirection: 'column', gap: '14px', position: 'relative' }}>
            <div className="max-md:!text-[21px] max-md:!leading-[28px] max-md:!max-w-full" style={{ boxSizing: 'border-box', color: 'var(--color-cream)', display: 'inline-block', fontFamily: 'var(--font-quote)', fontSize: 'clamp(21px, calc(21px + 9 * (100vw - 768px) / 672), 30px)', fontStyle: 'italic', lineHeight: 'clamp(28px, calc(28px + 10 * (100vw - 768px) / 672), 38px)', maxWidth: '800px' }}>
              Mechanism is the bridge between molecule and medicine — not a substitute for clinical endpoints.
            </div>
            <div style={{ boxSizing: 'border-box', color: 'var(--color-gold-soft)', display: 'inline-block', fontFamily: 'var(--font-label)', fontSize: '12.5px', fontWeight: 600, letterSpacing: '0.2em', lineHeight: '16px', textTransform: 'uppercase', whiteSpaceCollapse: 'preserve' }}>
              Our scientific guardrail
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}
