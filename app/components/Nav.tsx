export default function Nav() {
  return (
    <div style={{ alignItems: 'center', backgroundColor: '#F4EDDFE6', borderBottomColor: 'var(--color-line)', borderBottomStyle: 'solid', borderBottomWidth: '1px', boxSizing: 'border-box', display: 'flex', fontSize: '12px', fontSynthesis: 'none', justifyContent: 'space-between', lineHeight: '16px', MozOsxFontSmoothing: 'grayscale', paddingBlock: '26px', paddingInline: '60px', WebkitFontSmoothing: 'antialiased', width: '100%' }}>
      <div style={{ alignItems: 'center', boxSizing: 'border-box', display: 'flex', gap: '14px' }}>
        <div style={{ alignItems: 'center', boxSizing: 'border-box', display: 'flex', flexShrink: '0', height: '44px', justifyContent: 'center', position: 'relative', width: '44px' }}>
          <svg width="44" height="44" viewBox="0 0 44 44" xmlns="http://www.w3.org/2000/svg" style={{ flexShrink: '0' }}>
            <ellipse cx="22" cy="22" rx="20.5" ry="11.5" transform="rotate(-30 22 22)" fill="none" stroke="#B58A3C" />
            <circle cx="38" cy="12.5" r="2.6" fill="none" stroke="#B58A3C" />
            <circle cx="7" cy="30" r="1.6" fill="#B58A3C" />
            <circle cx="35" cy="29" r="1.3" fill="#CBA968" />
            <circle cx="11" cy="14" r="1" fill="#CBA968" />
          </svg>
          <div style={{ boxSizing: 'border-box', color: 'var(--color-ink)', display: 'inline-block', fontFamily: 'var(--font-display)', fontSize: '24px', fontWeight: 500, letterSpacing: '-0.05em', lineHeight: '30px', position: 'absolute' }}>
            CC
          </div>
        </div>
        <div style={{ boxSizing: 'border-box', display: 'flex', flexDirection: 'column', gap: '1px' }}>
          <div style={{ boxSizing: 'border-box', color: 'var(--color-ink)', display: 'inline-block', fontFamily: 'var(--font-display)', fontSize: '23px', fontWeight: 500, letterSpacing: '0.04em', lineHeight: '24px', width: 'max-content' }}>
            Cell Context
          </div>
          <div style={{ boxSizing: 'border-box', color: 'var(--color-gold-deep)', display: 'inline-block', fontFamily: 'var(--font-label)', fontSize: '10.5px', fontWeight: 500, letterSpacing: '0.28em', lineHeight: '14px', textTransform: 'uppercase', whiteSpaceCollapse: 'preserve' }}>
            Beyond concentration
          </div>
        </div>
      </div>
      <div style={{ alignItems: 'center', boxSizing: 'border-box', display: 'flex', flexShrink: '0', gap: '42px' }}>
        <div style={{ boxSizing: 'border-box', color: 'var(--color-graphite)', display: 'inline-block', fontFamily: 'var(--font-label)', fontSize: '15px', fontWeight: 500, letterSpacing: '0.01em', lineHeight: '18px', whiteSpaceCollapse: 'preserve' }}>
          The Problem
        </div>
        <div style={{ boxSizing: 'border-box', color: 'var(--color-graphite)', display: 'inline-block', fontFamily: 'var(--font-label)', fontSize: '15px', fontWeight: 500, letterSpacing: '0.01em', lineHeight: '18px', whiteSpaceCollapse: 'preserve' }}>
          The Science
        </div>
        <div style={{ boxSizing: 'border-box', color: 'var(--color-graphite)', display: 'inline-block', fontFamily: 'var(--font-label)', fontSize: '15px', fontWeight: 500, letterSpacing: '0.01em', lineHeight: '18px', whiteSpaceCollapse: 'preserve' }}>
          The Trial
        </div>
        <div style={{ boxSizing: 'border-box', color: 'var(--color-graphite)', display: 'inline-block', fontFamily: 'var(--font-label)', fontSize: '15px', fontWeight: 500, letterSpacing: '0.01em', lineHeight: '18px', whiteSpaceCollapse: 'preserve' }}>
          FAQ
        </div>
      </div>
      <div style={{ alignItems: 'center', backgroundColor: 'var(--color-ink)', borderRadius: 'var(--radius-pill)', boxSizing: 'border-box', display: 'flex', flexShrink: '0', gap: '9px', paddingBlock: '13px', paddingInline: '24px' }}>
        <div style={{ boxSizing: 'border-box', color: 'var(--color-cream)', display: 'inline-block', fontFamily: 'var(--font-label)', fontSize: '15px', fontWeight: 600, letterSpacing: '0.01em', lineHeight: '18px', whiteSpaceCollapse: 'preserve' }}>
          Get in touch
        </div>
      </div>
    </div>
  );
}
