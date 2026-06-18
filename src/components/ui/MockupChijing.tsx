export default function MockupChijing() {
  const cards = [
    { h: 72 },
    { h: 72 },
    { h: 88 },
    { h: 48 },
    { h: 64 },
    { h: 80 },
  ]

  return (
    <div style={{ position: 'relative', height: '100%', background: '#09090b', overflow: 'hidden' }}>
      {/* Waterfall grid background */}
      <div style={{ padding: '8px 6px 80px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0px' }}>
          {cards.map((card, i) => (
            <div key={i} style={{
              background: '#141416', borderRadius: '4px', border: '1px solid #09090b',
              overflow: 'hidden', opacity: 0.55
            }}>
              <div style={{ height: `${card.h}px`, background: '#18181b' }} />
              <div style={{ padding: '4px 6px', display: 'flex', flexDirection: 'column', gap: '3px' }}>
                <div style={{ height: '4px', background: '#27272a', borderRadius: '2px', width: '70%' }} />
                <div style={{ height: '4px', background: '#27272a', borderRadius: '2px', width: '90%' }} />
                <div style={{ height: '4px', background: '#27272a', borderRadius: '2px', width: '50%' }} />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom floating panel */}
      <div style={{
        position: 'absolute', bottom: 0, left: 0, right: 0,
        background: 'linear-gradient(transparent, rgba(9,9,11,0.75) 20%, rgba(9,9,11,0.95))',
        backdropFilter: 'blur(8px)',
        WebkitBackdropFilter: 'blur(8px)',
        padding: '28px 10px 12px',
        display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '12px'
      }}>
        <div style={{ display: 'flex', gap: '8px', justifyContent: 'center', width: '100%' }}>
          {[15, 50, -15, 0].map((rot, i) => (
            <div key={i} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '5px' }}>
              <div style={{
                width: '22px', height: '22px', background: '#1f1f23',
                border: '1px solid #27272a', borderRadius: '6px',
                display: 'flex', justifyContent: 'center', alignItems: 'center'
              }}>
                <div style={{
                  width: i===3 ? '11px' : '9px', height: i===3 ? '5px' : '9px',
                  background: '#3f3f46', borderRadius: i===1 ? '50%' : '2px',
                  transform: rot ? `rotate(${rot}deg)` : 'none'
                }} />
              </div>
              <div style={{ width: '20px', height: '4px', background: '#27272a', borderRadius: '2px' }} />
            </div>
          ))}
        </div>
        <div style={{
          width: '100%', height: '22px',
          background: 'linear-gradient(90deg, #00B3FE 0%, #0090e0 100%)',
          borderRadius: '11px', display: 'flex', justifyContent: 'center', alignItems: 'center',
          boxShadow: '0 4px 12px rgba(0,179,254,0.4)', gap: '4px'
        }}>
          <span style={{ color: 'rgba(255,255,255,0.85)', fontSize: '8px', fontWeight: 600, letterSpacing: '0.04em' }}>AI 创作视频</span>
        </div>
        <div style={{
          width: '18px', height: '18px', background: '#27272a',
          borderRadius: '50%',
          display: 'flex', justifyContent: 'center', alignItems: 'center'
        }}>
          <svg width="10" height="10" viewBox="0 0 12 12">
            <line x1="2" y1="2" x2="10" y2="10" stroke="#A0A0A0" strokeWidth="1.5" />
            <line x1="10" y1="2" x2="2" y2="10" stroke="#A0A0A0" strokeWidth="1.5" />
          </svg>
        </div>
      </div>
    </div>
  )
}
