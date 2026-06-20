"use client";
import { motion } from "motion/react";
import { sectionContainer, sectionItem } from "./Reveal";

export default function CTA() {
  return (
    <div className="max-md:!px-5 max-md:!py-14" style={{ alignItems: 'center', backgroundColor: '#F4EDDF', boxSizing: 'border-box', display: 'flex', flexDirection: 'column', fontSize: '12px', fontSynthesis: 'none', lineHeight: '16px', MozOsxFontSmoothing: 'grayscale', overflow: 'clip', overflowX: 'visible', overflowY: 'visible', paddingBlock: '100px', paddingInline: '64px', WebkitFontSmoothing: 'antialiased', width: '100%' }}>
      <div className="max-md:!py-16 max-md:!px-6" style={{ alignItems: 'center', backgroundImage: 'radial-gradient(ellipse 80% 90% at 50% 14.000000000000002% in oklab, oklab(35% -0.010 -0.091) 0%, oklab(25.7% -0.008 -0.051) 56%, oklab(21.8% -0.008 -0.041) 100%)', borderRadius: '44px', boxShadow: '#ADC8EB1F 0px 1px 0px inset, #1A2C4929 0px 32px 90px, #1A2C4914 0px 6px 22px', boxSizing: 'border-box', display: 'flex', flexDirection: 'column', overflow: 'clip', paddingBlock: '120px', paddingInline: '60px', position: 'relative', width: '100%' }}>
        <div style={{ bottom: -128, boxSizing: 'border-box', left: -60, mixBlendMode: 'soft-light', opacity: '0.5', position: 'absolute', right: -60, top: -526 }}>
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <filter id="_69n17h0"><feTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves="2" stitchTiles="stitch"/><feColorMatrix type="saturate" values="0"/></filter>
            <rect width="100%" height="100%" filter="url(#_69n17h0)" fill="#000000" />
          </svg>
        </div>
        <div style={{ backgroundImage: 'radial-gradient(circle farthest-corner at 50% 44.99999999999999% in oklab, oklab(69.2% -0.031 -0.093 / 30%) 0%, oklab(51.4% -0.027 -0.097 / 14%) 40%, oklab(27.7% -0.012 -0.060 / 0%) 72%)', borderRadius: '50%', boxSizing: 'border-box', height: '480px', left: '50%', position: 'absolute', top: -486, translate: '-50%', width: '620px' }} />
        <svg width="900" height="640" viewBox="0 0 900 640" xmlns="http://www.w3.org/2000/svg" style={{ position: 'absolute', top: -526, left: '50%', opacity: '0.6', translate: '-50%' }}>
          <ellipse cx="450" cy="300" rx="400" ry="200" transform="rotate(-18 450 300)" fill="none" stroke="#B58A3C38" />
          <ellipse cx="450" cy="300" rx="320" ry="340" transform="rotate(14 450 300)" fill="none" stroke="#B58A3C1A" />
          <circle cx="70" cy="250" r="3" fill="#B58A3C99" />
          <circle cx="830" cy="360" r="2.6" fill="#B58A3C80" />
          <circle cx="740" cy="110" r="2" fill="#CBA96899" />
        </svg>
        <motion.div variants={sectionContainer} initial="hidden" whileInView="show" viewport={{ once: true, margin: "-15% 0px -10% 0px" }} className="max-md:!max-w-full" style={{ alignItems: 'center', boxSizing: 'border-box', display: 'flex', flexDirection: 'column', maxWidth: '760px', position: 'relative', width: '100%' }}>
          <motion.div variants={sectionItem} style={{ alignItems: 'center', boxSizing: 'border-box', display: 'flex', gap: '13px', paddingBottom: '30px' }}>
            <div style={{ backgroundColor: 'var(--color-gold)', borderRadius: '50%', boxSizing: 'border-box', display: 'inline-block', flexShrink: '0', height: '6px', width: '6px' }} />
            <div style={{ boxSizing: 'border-box', color: 'var(--color-gold-soft)', display: 'inline-block', fontFamily: 'var(--font-label)', fontSize: '13px', fontWeight: 600, letterSpacing: '0.24em', lineHeight: '16px', textTransform: 'uppercase', whiteSpaceCollapse: 'preserve' }}>
              Get in touch
            </div>
          </motion.div>
          <motion.div variants={sectionItem} className="max-md:!text-[32px] max-md:!leading-[34px] max-md:!max-w-full" style={{ boxSizing: 'border-box', color: 'var(--color-cream)', display: 'flex', flexWrap: 'wrap', fontFamily: 'var(--font-display)', fontSize: '68px', fontWeight: 500, justifyContent: 'center', letterSpacing: '-0.02em', lineHeight: '68px', maxWidth: '700px', textAlign: 'center' }}>
            Be among the first to ask the better question.
          </motion.div>
          <motion.div variants={sectionItem} className="max-md:!max-w-full" style={{ boxSizing: 'border-box', fontFamily: 'var(--font-body)', maxWidth: '520px', paddingTop: '26px' }}>
            <div style={{ boxSizing: 'border-box', color: 'var(--color-cream-dim)', display: 'flex', flexWrap: 'wrap', fontFamily: 'var(--font-body)', fontSize: '19px', justifyContent: 'center', lineHeight: '31px', textAlign: 'center', whiteSpaceCollapse: 'preserve' }}>
              Have a question about the science, the trial, or LNAD⁺ itself? Our team reads every note — and would love to hear from you.
            </div>
          </motion.div>
          <motion.div variants={sectionItem} className="max-md:!flex-col max-md:!gap-3 max-md:!w-full" style={{ alignItems: 'center', boxSizing: 'border-box', display: 'flex', gap: '20px', paddingTop: '44px' }}>
            <motion.a href="/contact" whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }} transition={{ type: "spring", stiffness: 400, damping: 26 }} className="max-md:!w-full max-md:!justify-center cursor-pointer" style={{ alignItems: 'center', backgroundColor: 'var(--color-gold)', borderRadius: 'var(--radius-pill)', boxSizing: 'border-box', display: 'flex', gap: '10px', paddingBlock: '18px', paddingInline: '34px' }}>
              <div style={{ boxSizing: 'border-box', color: '#1C1404', display: 'inline-block', fontFamily: 'var(--font-label)', fontSize: '16px', fontWeight: 600, lineHeight: '20px', whiteSpaceCollapse: 'preserve' }}>
                Get in touch
              </div>
              <svg width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" style={{ flexShrink: '0' }}>
                <path d="M3 8h9M8.5 4l4 4-4 4" fill="none" stroke="#1C1404" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </motion.a>
            <motion.a href="#trial" whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }} transition={{ type: "spring", stiffness: 400, damping: 26 }} className="max-md:!w-full max-md:!justify-center cursor-pointer" style={{ alignItems: 'center', borderColor: '#EFE7D74D', borderRadius: 'var(--radius-pill)', borderStyle: 'solid', borderWidth: '1px', boxSizing: 'border-box', display: 'flex', paddingBlock: '18px', paddingInline: '28px' }}>
              <div style={{ boxSizing: 'border-box', color: 'var(--color-cream)', display: 'inline-block', fontFamily: 'var(--font-label)', fontSize: '16px', fontWeight: 500, lineHeight: '20px', whiteSpaceCollapse: 'preserve' }}>
                Read the trial summary
              </div>
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
