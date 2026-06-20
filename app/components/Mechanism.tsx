"use client";
import { motion } from "motion/react";
import { sectionContainer, sectionItem } from "./Reveal";

export default function Mechanism() {
  return (
    <div className="max-md:!px-5 max-md:!py-14" style={{ alignItems: 'center', backgroundColor: 'var(--color-ivory)', boxSizing: 'border-box', display: 'flex', flexDirection: 'column', fontSize: '12px', fontSynthesis: 'none', lineHeight: '16px', MozOsxFontSmoothing: 'grayscale', overflow: 'clip', paddingBlock: '128px', paddingInline: '60px', position: 'relative', WebkitFontSmoothing: 'antialiased', width: '100%' }}>
      <div style={{ bottom: '0px', boxSizing: 'border-box', left: '0px', overflow: 'clip', position: 'absolute', right: '0px', top: '0px' }}>
        <svg width="1440" height="100%" viewBox="0 0 1440 900" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg" style={{ top: '0px', right: '0px', bottom: '0px', left: '0px', rotate: '70deg', position: 'absolute', transformOrigin: '0% 0%' }}>
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
        <motion.div variants={sectionItem} className="max-md:!flex-col max-md:!items-start max-md:!gap-10" style={{ alignItems: 'flex-end', boxSizing: 'border-box', display: 'flex', gap: '48px', justifyContent: 'space-between', paddingBottom: '66px' }}>
          <div style={{ alignItems: 'flex-start', boxSizing: 'border-box', display: 'flex', flexDirection: 'column' }}>
            <div style={{ alignItems: 'center', boxSizing: 'border-box', display: 'flex', gap: '13px', paddingBottom: '28px' }}>
              <div style={{ backgroundColor: 'var(--color-gold)', boxSizing: 'border-box', flexShrink: '0', height: '1px', width: '30px' }} />
              <div style={{ boxSizing: 'border-box', color: 'var(--color-gold-deep)', display: 'inline-block', fontFamily: 'var(--font-label)', fontSize: '12px', fontWeight: 600, letterSpacing: '0.24em', lineHeight: '16px', textTransform: 'uppercase' }}>
                How LNAD⁺ Works
              </div>
            </div>
            <div className="max-md:!text-[32px] max-md:!leading-[34px]" style={{ boxSizing: 'border-box', color: 'var(--color-ink)', display: 'inline-block', fontFamily: 'var(--font-display)', fontSize: '58px', fontWeight: 500, letterSpacing: '-0.02em', lineHeight: '60px' }}>
              Engineered for the journey in.
            </div>
          </div>
          <div className="max-md:!max-w-full" style={{ boxSizing: 'border-box', fontFamily: 'var(--font-body)', maxWidth: '330px', paddingBottom: '6px' }}>
            <div style={{ boxSizing: 'border-box', color: 'var(--color-graphite)', fontFamily: 'var(--font-body)', fontSize: '17px', lineHeight: '27px', whiteSpaceCollapse: 'preserve' }}>
              A physicochemically modulated formulation designed to alter how NAD⁺ behaves — while preserving its native structure.
            </div>
          </div>
        </motion.div>
        <motion.div variants={sectionItem} className="max-md:!flex-col max-md:!gap-10" style={{ boxSizing: 'border-box', display: 'flex', gap: '32px', paddingBottom: '60px', width: '100%' }}>
          <motion.div className="cursor-default" whileHover={{ y: -5 }} transition={{ type: "spring", stiffness: 300, damping: 28 }} style={{ alignItems: 'flex-start', borderTopColor: 'var(--color-ink)', borderTopStyle: 'solid', borderTopWidth: '1px', boxSizing: 'border-box', display: 'flex', flexBasis: '0%', flexDirection: 'column', flexGrow: '1', minWidth: '0px', paddingTop: '24px' }}>
            <div style={{ alignItems: 'center', boxSizing: 'border-box', display: 'flex', justifyContent: 'space-between', paddingBottom: '36px', width: '100%' }}>
              <div style={{ boxSizing: 'border-box', color: 'var(--color-gold-deep)', display: 'inline-block', fontFamily: 'var(--font-label)', fontSize: '12px', fontWeight: 600, letterSpacing: '0.16em', lineHeight: '16px' }}>
                01
              </div>
              <svg width="40" height="40" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg" style={{ flexShrink: '0' }}>
                <circle cx="20" cy="20" r="17" fill="none" stroke="#162338" strokeWidth="1.3" />
                <path d="M9 20 Q14 11, 20 20 T31 20" fill="none" stroke="#B58A3C" strokeWidth="1.6" strokeLinecap="round" />
              </svg>
            </div>
            <div style={{ boxSizing: 'border-box', display: 'inline-block', fontFamily: 'var(--font-display)', paddingBottom: '14px' }}>
              <div style={{ boxSizing: 'border-box', color: 'var(--color-ink)', display: 'inline-block', fontFamily: 'var(--font-display)', fontSize: '29px', fontWeight: 500, lineHeight: '32px' }}>
                Physicochemical modulation
              </div>
            </div>
            <div style={{ boxSizing: 'border-box', color: 'var(--color-graphite)', display: 'inline-block', fontFamily: 'var(--font-body)', fontSize: '17.5px', lineHeight: '28px', whiteSpaceCollapse: 'preserve' }}>
              Alters how NAD⁺ behaves on its way through the body — without altering its native molecular structure.
            </div>
          </motion.div>
          <motion.div className="cursor-default" whileHover={{ y: -5 }} transition={{ type: "spring", stiffness: 300, damping: 28 }} style={{ alignItems: 'flex-start', borderTopColor: 'var(--color-ink)', borderTopStyle: 'solid', borderTopWidth: '1px', boxSizing: 'border-box', display: 'flex', flexBasis: '0%', flexDirection: 'column', flexGrow: '1', minWidth: '0px', paddingTop: '24px' }}>
            <div style={{ alignItems: 'center', boxSizing: 'border-box', display: 'flex', justifyContent: 'space-between', paddingBottom: '36px', width: '100%' }}>
              <div style={{ boxSizing: 'border-box', color: 'var(--color-gold-deep)', display: 'inline-block', fontFamily: 'var(--font-label)', fontSize: '12px', fontWeight: 600, letterSpacing: '0.16em', lineHeight: '16px' }}>
                02
              </div>
              <svg width="40" height="40" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg" style={{ flexShrink: '0' }}>
                <circle cx="24" cy="20" r="13" fill="none" stroke="#162338" strokeWidth="1.3" />
                <circle cx="24" cy="20" r="4" fill="#3F6DA1" />
                <path d="M3 20h14M13 16l4 4-4 4" fill="none" stroke="#B58A3C" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <div style={{ boxSizing: 'border-box', display: 'inline-block', fontFamily: 'var(--font-display)', paddingBottom: '14px' }}>
              <div style={{ boxSizing: 'border-box', color: 'var(--color-ink)', display: 'inline-block', fontFamily: 'var(--font-display)', fontSize: '29px', fontWeight: 500, lineHeight: '32px' }}>
                Targeted cellular entry
              </div>
            </div>
            <div style={{ boxSizing: 'border-box', color: 'var(--color-graphite)', display: 'inline-block', fontFamily: 'var(--font-body)', fontSize: '17.5px', lineHeight: '28px', whiteSpaceCollapse: 'preserve' }}>
              Designed to support delivery into cells — where NAD⁺ matters most — rather than simply flooding the circulation.
            </div>
          </motion.div>
          <motion.div className="cursor-default" whileHover={{ y: -5 }} transition={{ type: "spring", stiffness: 300, damping: 28 }} style={{ alignItems: 'flex-start', borderTopColor: 'var(--color-ink)', borderTopStyle: 'solid', borderTopWidth: '1px', boxSizing: 'border-box', display: 'flex', flexBasis: '0%', flexDirection: 'column', flexGrow: '1', minWidth: '0px', paddingTop: '24px' }}>
            <div style={{ alignItems: 'center', boxSizing: 'border-box', display: 'flex', justifyContent: 'space-between', paddingBottom: '36px', width: '100%' }}>
              <div style={{ boxSizing: 'border-box', color: 'var(--color-gold-deep)', display: 'inline-block', fontFamily: 'var(--font-label)', fontSize: '12px', fontWeight: 600, letterSpacing: '0.16em', lineHeight: '16px' }}>
                03
              </div>
              <svg width="40" height="40" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg" style={{ flexShrink: '0' }}>
                <path d="M20 5 L33 12 L33 24 Q33 32 20 36 Q7 32 7 24 L7 12 Z" fill="none" stroke="#162338" strokeWidth="1.3" />
                <path d="M14 20l4.5 4.5L27 16" fill="none" stroke="#B58A3C" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <div style={{ boxSizing: 'border-box', display: 'inline-block', fontFamily: 'var(--font-display)', paddingBottom: '14px' }}>
              <div style={{ boxSizing: 'border-box', color: 'var(--color-ink)', display: 'inline-block', fontFamily: 'var(--font-display)', fontSize: '29px', fontWeight: 500, lineHeight: '32px' }}>
                Preserved & recognizable
              </div>
            </div>
            <div style={{ boxSizing: 'border-box', color: 'var(--color-graphite)', display: 'inline-block', fontFamily: 'var(--font-body)', fontSize: '17.5px', lineHeight: '28px', whiteSpaceCollapse: 'preserve' }}>
              Keeps NAD⁺ functionally intact and enzymatically recognizable, so it can still participate in NAD⁺ biology.
            </div>
          </motion.div>
        </motion.div>
        <motion.div variants={sectionItem} className="max-md:!flex-col max-md:!items-start max-md:!gap-5 max-md:!px-6 cursor-default" whileHover={{ y: -5 }} transition={{ type: "spring", stiffness: 300, damping: 28 }} style={{ alignItems: 'center', backgroundColor: '#1623380A', borderRadius: '16px', boxSizing: 'border-box', display: 'flex', gap: '28px', paddingBlock: '28px', paddingInline: '36px', width: '100%' }}>
          <div style={{ boxSizing: 'border-box', color: 'var(--color-ink)', display: 'inline-block', flexShrink: '0', fontFamily: 'var(--font-quote)', fontSize: '17px', fontStyle: 'italic', lineHeight: '22px' }}>
            Designed to support increases in
          </div>
          <div style={{ alignItems: 'center', boxSizing: 'border-box', display: 'flex', flexBasis: '0%', flexGrow: '1', flexWrap: 'wrap', gap: '12px' }}>
            <div className="transition-transform hover:-translate-y-0.5 will-change-transform" style={{ alignItems: 'center', backgroundColor: 'var(--color-ivory)', borderColor: 'var(--color-line)', borderRadius: 'var(--radius-pill)', borderStyle: 'solid', borderWidth: '1px', boxSizing: 'border-box', display: 'inline-flex', gap: '9px', paddingBlock: '10px', paddingInline: '17px' }}>
              <svg width="10" height="11" viewBox="0 0 11 12" xmlns="http://www.w3.org/2000/svg" style={{ flexShrink: '0' }}>
                <path d="M5.5 11V1M5.5 1L1.5 5M5.5 1l4 4" fill="none" stroke="#B58A3C" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <div style={{ boxSizing: 'border-box', color: 'var(--color-ink)', display: 'inline-block', fontFamily: 'var(--font-label)', fontSize: '13px', fontWeight: 600, letterSpacing: '0.14em', lineHeight: '16px', textTransform: 'uppercase', whiteSpaceCollapse: 'preserve' }}>
                NAD⁺ availability
              </div>
            </div>
            <div className="transition-transform hover:-translate-y-0.5 will-change-transform" style={{ alignItems: 'center', backgroundColor: 'var(--color-ivory)', borderColor: 'var(--color-line)', borderRadius: 'var(--radius-pill)', borderStyle: 'solid', borderWidth: '1px', boxSizing: 'border-box', display: 'inline-flex', gap: '9px', paddingBlock: '10px', paddingInline: '17px' }}>
              <svg width="10" height="11" viewBox="0 0 11 12" xmlns="http://www.w3.org/2000/svg" style={{ flexShrink: '0' }}>
                <path d="M5.5 11V1M5.5 1L1.5 5M5.5 1l4 4" fill="none" stroke="#B58A3C" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <div style={{ boxSizing: 'border-box', color: 'var(--color-ink)', display: 'inline-block', fontFamily: 'var(--font-label)', fontSize: '13px', fontWeight: 600, letterSpacing: '0.14em', lineHeight: '16px', textTransform: 'uppercase', whiteSpaceCollapse: 'preserve' }}>
                Metabolic flux
              </div>
            </div>
            <div className="transition-transform hover:-translate-y-0.5 will-change-transform" style={{ alignItems: 'center', backgroundColor: 'var(--color-ivory)', borderColor: 'var(--color-line)', borderRadius: 'var(--radius-pill)', borderStyle: 'solid', borderWidth: '1px', boxSizing: 'border-box', display: 'inline-flex', gap: '9px', paddingBlock: '10px', paddingInline: '17px' }}>
              <svg width="10" height="11" viewBox="0 0 11 12" xmlns="http://www.w3.org/2000/svg" style={{ flexShrink: '0' }}>
                <path d="M5.5 11V1M5.5 1L1.5 5M5.5 1l4 4" fill="none" stroke="#B58A3C" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <div style={{ boxSizing: 'border-box', color: 'var(--color-ink)', display: 'inline-block', fontFamily: 'var(--font-label)', fontSize: '13px', fontWeight: 600, letterSpacing: '0.14em', lineHeight: '16px', textTransform: 'uppercase', whiteSpaceCollapse: 'preserve' }}>
                Bioenergetic function
              </div>
            </div>
            <div className="transition-transform hover:-translate-y-0.5 will-change-transform" style={{ alignItems: 'center', backgroundColor: 'var(--color-ivory)', borderColor: 'var(--color-line)', borderRadius: 'var(--radius-pill)', borderStyle: 'solid', borderWidth: '1px', boxSizing: 'border-box', display: 'inline-flex', gap: '9px', paddingBlock: '10px', paddingInline: '17px' }}>
              <svg width="10" height="11" viewBox="0 0 11 12" xmlns="http://www.w3.org/2000/svg" style={{ flexShrink: '0' }}>
                <path d="M5.5 11V1M5.5 1L1.5 5M5.5 1l4 4" fill="none" stroke="#B58A3C" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <div style={{ boxSizing: 'border-box', color: 'var(--color-ink)', display: 'inline-block', fontFamily: 'var(--font-label)', fontSize: '13px', fontWeight: 600, letterSpacing: '0.14em', lineHeight: '16px', textTransform: 'uppercase', whiteSpaceCollapse: 'preserve' }}>
                Cellular resilience
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}
