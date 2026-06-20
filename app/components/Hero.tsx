"use client";
import { motion } from "motion/react";
import CountUp from "./CountUp";

export default function Hero() {
  return (
    <div className="max-md:!flex-col max-md:!items-start max-md:!gap-10 max-md:!px-5 max-md:!pt-28 max-md:!pb-14" style={{ alignItems: 'center', backgroundColor: 'var(--color-ivory)', boxSizing: 'border-box', display: 'flex', fontSize: '12px', fontSynthesis: 'none', gap: '40px', justifyContent: 'space-between', lineHeight: '16px', MozOsxFontSmoothing: 'grayscale', overflow: 'clip', paddingBottom: '110px', paddingInline: '60px', paddingTop: '96px', position: 'relative', WebkitFontSmoothing: 'antialiased', width: '100%' }}>
      <div style={{ bottom: '0px', boxSizing: 'border-box', left: '0px', overflow: 'clip', position: 'absolute', right: '0px', top: '0px' }}>
        <svg width="1440" height="100%" viewBox="0 0 1440 900" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg" style={{ top: '0px', right: '0px', bottom: '0px', left: '0px', position: 'absolute' }}>
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
      <div className="max-md:!w-full max-md:!shrink" style={{ alignItems: 'flex-start', boxSizing: 'border-box', display: 'flex', flexDirection: 'column', flexShrink: '0', position: 'relative', width: '620px' }}>
        <div style={{ alignItems: 'center', boxSizing: 'border-box', display: 'flex', gap: '13px', paddingBottom: '36px' }}>
          <div style={{ backgroundColor: 'var(--color-gold)', boxSizing: 'border-box', flexShrink: '0', height: '1px', width: '30px' }} />
          <div style={{ boxSizing: 'border-box', color: 'var(--color-gold-deep)', display: 'inline-block', fontFamily: 'var(--font-label)', fontSize: '13px', fontWeight: 600, letterSpacing: '0.24em', lineHeight: '16px', textTransform: 'uppercase', whiteSpaceCollapse: 'preserve' }}>
            Introducing LathMized® NAD⁺ · LNAD⁺
          </div>
        </div>
        <div className="max-md:!max-w-full" style={{ boxSizing: 'border-box', fontFamily: 'var(--font-display)', maxWidth: '560px', paddingBottom: '14px' }}>
          <div style={{ boxSizing: 'border-box', color: 'var(--color-ink-soft)', fontFamily: 'var(--font-display)', fontSize: '40px', fontWeight: 500, letterSpacing: '-0.01em', lineHeight: '46px' }}>
            Don’t just ask how much NAD⁺ is in the scoop.
          </div>
        </div>
        <div style={{ alignItems: 'flex-start', boxSizing: 'border-box', display: 'flex', flexDirection: 'column' }}>
          <div className="max-md:!text-[44px] max-md:!leading-[44px]" style={{ boxSizing: 'border-box', color: 'var(--color-ink)', fontFamily: 'var(--font-display)', fontSize: '94px', fontWeight: 500, letterSpacing: '-0.025em', lineHeight: '84px' }}>
            Ask how much
          </div>
          <div style={{ alignItems: 'baseline', boxSizing: 'border-box', display: 'flex', gap: '18px' }}>
            <div className="max-md:!text-[44px] max-md:!leading-[46px]" style={{ boxSizing: 'border-box', color: 'var(--color-ink)', display: 'inline-block', fontFamily: 'var(--font-display)', fontSize: '94px', fontWeight: 500, letterSpacing: '-0.025em', lineHeight: '96px' }}>
              is still
            </div>
            <div className="max-md:!text-[46px] max-md:!leading-[46px]" style={{ boxSizing: 'border-box', color: 'var(--color-gold-deep)', display: 'inline-block', fontFamily: 'var(--font-display)', fontSize: '98px', fontStyle: 'italic', fontWeight: 500, letterSpacing: '-0.02em', lineHeight: '96px' }}>
              alive.
            </div>
          </div>
        </div>
        <div className="max-md:!max-w-full" style={{ boxSizing: 'border-box', fontFamily: 'var(--font-body)', maxWidth: '486px', paddingTop: '34px' }}>
          <div style={{ boxSizing: 'border-box', color: 'var(--color-graphite)', fontFamily: 'var(--font-body)', fontSize: '19px', lineHeight: '31px', whiteSpaceCollapse: 'preserve' }}>
            By “alive,” we mean NAD⁺ that stays functionally intact and enzymatically recognizable — still able to participate in NAD⁺ biology. LNAD⁺ is engineered to preserve it on the way into the cell.
          </div>
        </div>
        <div style={{ alignItems: 'center', boxSizing: 'border-box', display: 'flex', gap: '20px', paddingTop: '38px' }}>
          <motion.a href="#trial" className="cursor-pointer" whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }} transition={{ type: "spring", stiffness: 400, damping: 26 }} style={{ alignItems: 'center', backgroundColor: 'var(--color-ink)', borderRadius: 'var(--radius-pill)', boxSizing: 'border-box', display: 'flex', gap: '10px', paddingBlock: '17px', paddingInline: '30px' }}>
            <div style={{ boxSizing: 'border-box', color: 'var(--color-cream)', display: 'inline-block', fontFamily: 'var(--font-label)', fontSize: '16px', fontWeight: 600, lineHeight: '20px', whiteSpaceCollapse: 'preserve' }}>
              See the clinical result
            </div>
            <svg width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" style={{ flexShrink: '0' }}>
              <path d="M3 8h9M8.5 4l4 4-4 4" fill="none" stroke="#EFE7D7" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </motion.a>
          <motion.a href="#science" className="cursor-pointer" whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }} transition={{ type: "spring", stiffness: 400, damping: 26 }} style={{ alignItems: 'center', borderBottomColor: 'var(--color-line)', borderBottomStyle: 'solid', borderBottomWidth: '1px', boxSizing: 'border-box', display: 'flex', paddingBlock: '17px', paddingInline: '4px' }}>
            <div style={{ boxSizing: 'border-box', color: 'var(--color-ink)', display: 'inline-block', fontFamily: 'var(--font-label)', fontSize: '16px', fontWeight: 500, lineHeight: '20px', whiteSpaceCollapse: 'preserve' }}>
              How LNAD⁺ works
            </div>
          </motion.a>
        </div>
        <div style={{ alignItems: 'center', boxSizing: 'border-box', display: 'flex', gap: '16px', paddingTop: '46px' }}>
          <div className="transition-transform hover:-translate-y-0.5 will-change-transform" style={{ boxSizing: 'border-box', color: 'var(--color-graphite)', display: 'inline-block', fontFamily: 'var(--font-label)', fontSize: '12.5px', fontWeight: 600, letterSpacing: '0.2em', lineHeight: '16px', textTransform: 'uppercase', whiteSpaceCollapse: 'preserve' }}>
            Double-blind
          </div>
          <div style={{ backgroundColor: 'var(--color-gold)', borderRadius: '50%', boxSizing: 'border-box', display: 'inline-block', flexShrink: '0', height: '4px', width: '4px' }} />
          <div className="transition-transform hover:-translate-y-0.5 will-change-transform" style={{ boxSizing: 'border-box', color: 'var(--color-graphite)', display: 'inline-block', fontFamily: 'var(--font-label)', fontSize: '12.5px', fontWeight: 600, letterSpacing: '0.2em', lineHeight: '16px', textTransform: 'uppercase', whiteSpaceCollapse: 'preserve' }}>
            Placebo-controlled
          </div>
          <div style={{ backgroundColor: 'var(--color-gold)', borderRadius: '50%', boxSizing: 'border-box', display: 'inline-block', flexShrink: '0', height: '4px', width: '4px' }} />
          <div className="transition-transform hover:-translate-y-0.5 will-change-transform" style={{ boxSizing: 'border-box', color: 'var(--color-graphite)', display: 'inline-block', fontFamily: 'var(--font-label)', fontSize: '12.5px', fontWeight: 600, letterSpacing: '0.2em', lineHeight: '16px', textTransform: 'uppercase', whiteSpaceCollapse: 'preserve' }}>
            Randomized · N=51
          </div>
        </div>
      </div>
      <div className="max-md:!w-full max-md:!self-center" style={{ alignItems: 'center', alignSelf: 'stretch', boxSizing: 'border-box', display: 'flex', flexBasis: '0%', flexGrow: '1', justifyContent: 'center', minWidth: '0px', position: 'relative' }}>
        <div className="max-md:!scale-[0.6] max-md:!origin-top" style={{ boxSizing: 'border-box', flexShrink: '0', height: '560px', position: 'relative', width: '560px' }}>
          <svg width="560" height="560" viewBox="0 0 560 560" xmlns="http://www.w3.org/2000/svg" style={{ top: '0px', right: '0px', bottom: '0px', left: '0px', position: 'absolute' }}>
            <ellipse cx="280" cy="280" rx="268" ry="146" transform="rotate(-26 280 280)" fill="none" stroke="#B58A3C73" />
            <ellipse cx="280" cy="280" rx="226" ry="262" transform="rotate(16 280 280)" fill="none" stroke="#B58A3C2E" />
            <circle cx="38" cy="208" r="3.5" fill="#B58A3C" />
            <circle cx="528" cy="356" r="3" fill="#B58A3C" />
            <circle cx="494" cy="120" r="2.4" fill="#CBA968" />
            <circle cx="78" cy="430" r="2.2" fill="#CBA968" />
            <path d="M62 92 C 140 150, 196 198, 250 248" fill="none" stroke="#B58A3CA6" strokeWidth="1.1" strokeLinecap="round" strokeDasharray="2 8" />
            <circle cx="62" cy="92" r="13" fill="#F4EDDF" stroke="#B58A3C" strokeWidth="1.1" />
            <circle cx="62" cy="92" r="4" fill="#B58A3C" />
          </svg>
          <motion.div animate={{ y: [0, -14, 0] }} transition={{ duration: 8, ease: 'easeInOut', repeat: Infinity }} style={{ boxSizing: 'border-box', height: '400px', left: '80px', position: 'absolute', top: '80px', width: '400px' }}>
            <div style={{ backgroundImage: 'radial-gradient(circle farthest-corner at 50% 41.99999999999999% in oklab, oklab(73.9% -0.031 -0.088 / 40%) 0%, oklab(55.8% -0.029 -0.099 / 20%) 38%, oklab(28.5% -0.014 -0.064 / 0%) 70%)', borderRadius: '50%', boxSizing: 'border-box', height: '400px', left: '0px', position: 'absolute', top: '0px', width: '400px' }} />
            <div style={{ backgroundImage: 'radial-gradient(circle farthest-corner at 50% 33.00000000000001% in oklab, oklab(79.5% -0.023 -0.063) 0%, oklab(63.6% -0.031 -0.088) 14%, oklab(51.6% -0.029 -0.093) 31%, oklab(42.6% -0.025 -0.087) 49%, oklab(32.2% -0.016 -0.075) 70%, oklab(23.7% -0.010 -0.054) 100%)', borderRadius: '50%', boxShadow: '#08102299 0px -32px 60px inset, #AACDEE38 0px 24px 50px inset, #568CC480 0px 0px 64px 6px, #36629E57 0px 0px 140px 32px', boxSizing: 'border-box', height: '300px', left: '50px', position: 'absolute', top: '50px', width: '300px' }} />
            <div style={{ borderRadius: '50%', boxSizing: 'border-box', height: '300px', left: '50px', mixBlendMode: 'soft-light', opacity: '0.7', overflow: 'clip', position: 'absolute', top: '50px', width: '300px' }}>
              <svg width="300" height="300" viewBox="0 0 300 300" xmlns="http://www.w3.org/2000/svg">
                <filter id="_wcmx5w0"><feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="2" stitchTiles="stitch"/><feColorMatrix type="saturate" values="0"/></filter>
                <rect width="300" height="300" filter="url(#_wcmx5w0)" fill="#000000" />
              </svg>
            </div>
            <div style={{ backgroundImage: 'radial-gradient(circle farthest-corner at 50% 50% in oklab, oklab(92.3% -0.012 -0.029 / 50%) 0%, oklab(92.3% -0.012 -0.029 / 0%) 70%)', borderRadius: '50%', boxSizing: 'border-box', height: '84px', left: '130px', position: 'absolute', top: '88px', width: '130px' }} />
            <svg width="300" height="300" viewBox="0 0 300 300" xmlns="http://www.w3.org/2000/svg" style={{ left: '50px', top: '50px', position: 'absolute' }}>
              <circle cx="150" cy="150" r="92" fill="none" stroke="#EAF1F86B" strokeWidth="1.1" />
            </svg>
          </motion.div>
          <motion.svg width="200" height="200" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" animate={{ rotate: 360 }} transition={{ duration: 100, ease: 'linear', repeat: Infinity }} style={{ position: 'absolute', left: '180px', top: '180px', transformOrigin: 'center' }}>
            <g>
              <circle cx="176" cy="100" r="2.4" fill="#B8D4F0" />
              <circle cx="170" cy="71" r="2.4" fill="#B8D4F0" />
              <circle cx="154" cy="46" r="2.4" fill="#B8D4F0" />
              <circle cx="129" cy="30" r="2.4" fill="#B8D4F0" />
              <circle cx="100" cy="24" r="2.4" fill="#B8D4F0" />
              <circle cx="71" cy="30" r="2.4" fill="#B8D4F0" />
              <circle cx="46" cy="46" r="2.4" fill="#B8D4F0" />
              <circle cx="30" cy="71" r="2.4" fill="#B8D4F0" />
              <circle cx="24" cy="100" r="2.4" fill="#B8D4F0" />
              <circle cx="30" cy="129" r="2.4" fill="#B8D4F0" />
              <circle cx="46" cy="154" r="2.4" fill="#B8D4F0" />
              <circle cx="71" cy="170" r="2.4" fill="#B8D4F0" />
              <circle cx="100" cy="176" r="2.4" fill="#B8D4F0" />
              <circle cx="129" cy="170" r="2.4" fill="#B8D4F0" />
              <circle cx="154" cy="154" r="2.4" fill="#B8D4F0" />
              <circle cx="170" cy="129" r="2.4" fill="#B8D4F0" />
            </g>
          </motion.svg>
          <div style={{ boxSizing: 'border-box', display: 'flex', flexDirection: 'column', gap: '2px', left: '84px', position: 'absolute', top: '76px' }}>
            <div style={{ boxSizing: 'border-box', color: 'var(--color-gold-deep)', display: 'inline-block', fontFamily: 'var(--font-label)', fontSize: '11px', fontWeight: 600, letterSpacing: '0.2em', lineHeight: '14px', textTransform: 'uppercase', whiteSpaceCollapse: 'preserve', width: 'max-content' }}>
              LNAD⁺
            </div>
            <div style={{ boxSizing: 'border-box', color: 'var(--color-graphite)', display: 'inline-block', fontFamily: 'var(--font-quote)', fontSize: '14px', fontStyle: 'italic', lineHeight: '18px', whiteSpaceCollapse: 'preserve', width: 'max-content' }}>
              targeted entry
            </div>
          </div>
          <motion.div className="cursor-default" whileHover={{ y: -5 }} transition={{ type: "spring", stiffness: 300, damping: 28 }} style={{ alignItems: 'center', backgroundColor: 'var(--color-ink)', borderRadius: '14px', boxShadow: '#1623383D 0px 18px 40px', boxSizing: 'border-box', display: 'flex', gap: '14px', left: '352px', paddingBlock: '14px', paddingInline: '18px', position: 'absolute', top: '432px' }}>
            <div style={{ boxSizing: 'border-box', color: 'var(--color-gold-soft)', display: 'inline-block', fontFamily: 'var(--font-display)', fontSize: '34px', fontWeight: 500, letterSpacing: '-0.01em', lineHeight: '30px' }}>
              <CountUp to={53} prefix="+" suffix="%" />
            </div>
            <div style={{ backgroundColor: '#EFE7D72E', boxSizing: 'border-box', flexShrink: '0', height: '34px', width: '1px' }} />
            <div style={{ boxSizing: 'border-box', display: 'flex', flexDirection: 'column', gap: '3px' }}>
              <div style={{ boxSizing: 'border-box', color: 'var(--color-cream)', display: 'inline-block', fontFamily: 'var(--font-label)', fontSize: '11.5px', fontWeight: 600, letterSpacing: '0.14em', lineHeight: '14px', textTransform: 'uppercase', whiteSpaceCollapse: 'preserve', width: 'max-content' }}>
                NAD⁺ increase
              </div>
              <div style={{ boxSizing: 'border-box', color: 'var(--color-cream-dim)', display: 'inline-block', fontFamily: 'var(--font-label)', fontSize: '11.5px', fontWeight: 500, letterSpacing: '0.14em', lineHeight: '14px', textTransform: 'uppercase', whiteSpaceCollapse: 'preserve', width: 'max-content' }}>
                in 5 days
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
