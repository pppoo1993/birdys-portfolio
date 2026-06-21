export default function MockupPad() {
  return (
    <div style={{ display: 'flex', height: '180px' }}>
      <div style={{ width: '70%', display: 'flex', flexDirection: 'column', justifyContent: 'center', paddingLeft: '4px', paddingRight: '4px', background: '#09090b' }}>
        <div style={{ width: '100%', background: '#111114', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative', aspectRatio: '16/9' }}>
          <div style={{ width: '32px', height: '32px', borderRadius: '50%', background: 'rgba(199,255,0,0.25)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="#C7FF00" stroke="#C7FF00" strokeWidth="2" strokeLinejoin="round"><polygon points="6,3 20,12 6,21" /></svg>
          </div>
        </div>
      </div>
      <div style={{ width: '30%', padding: '10px 8px', display: 'flex', flexDirection: 'column', gap: '4px', background: '#18181b' }}>
        <div style={{ height: '10px', width: '100%', background: 'rgba(255,255,255,0.1)', borderRadius: '2px', marginBottom: '6px' }} />
        <div style={{ height: '5px', width: '20px', background: 'rgba(255,255,255,0.06)', borderRadius: '2px', marginBottom: '4px' }} />
        {[1,2,3,4,5].map((i) => (
          <div key={i} style={{
            height: '16px',
            borderRadius: '2px',
            background: i === 2 ? 'rgba(199,255,0,0.1)' : 'rgba(255,255,255,0.03)',
            border: i === 2 ? '1px solid rgba(199,255,0,0.15)' : 'none'
          }} />
        ))}
      </div>
    </div>
  )
}
