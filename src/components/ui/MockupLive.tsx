export default function MockupLive() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
      <div style={{ height: '32px', padding: '0 10px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexShrink: 0, background: 'transparent' }}>
        <div style={{ display: 'flex', gap: '6px', alignItems: 'center' }}>
          <div style={{ width: '6px', height: '6px', borderTop: '1.5px solid #52525b', borderLeft: '1.5px solid #52525b', transform: 'rotate(-45deg)' }} />
          <div style={{ width: '48px', height: '10px', background: 'rgba(255,255,255,0.1)', borderRadius: '5px' }} />
        </div>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: 'rgba(234,86,241,0.5)', border: '1.5px solid #09090b', marginRight: '-4px', zIndex: 3 }} />
          <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#3f3f46', border: '1.5px solid #09090b', marginRight: '-4px', zIndex: 2 }} />
          <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#27272a', border: '1.5px solid #09090b', zIndex: 1 }} />
        </div>
      </div>
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', background: '#09090b' }}>
        <div style={{ flex: '0 0 30%', background: '#141416', position: 'relative', borderBottom: '1px solid #050506' }}>
                  </div>
        <div style={{ flex: '0 0 55%', background: '#18181b', display: 'flex' }}>
          <div style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'flex-end', borderRight: '1px solid #09090b', paddingBottom: '8px' }}>
            <div style={{ width: '24px', height: '24px', background: 'rgba(255,255,255,0.04)', borderRadius: '50%', marginBottom: '5px' }} />
            <div style={{ width: '52px', height: '30px', background: 'rgba(255,255,255,0.04)', borderRadius: '26px 26px 0 0' }} />
          </div>
          <div style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'flex-end', paddingBottom: '8px' }}>
            <div style={{ width: '24px', height: '24px', background: 'rgba(255,255,255,0.04)', borderRadius: '50%', marginBottom: '5px' }} />
            <div style={{ width: '52px', height: '30px', background: 'rgba(255,255,255,0.04)', borderRadius: '26px 26px 0 0' }} />
          </div>
        </div>
      </div>
      <div style={{ padding: '8px 10px 6px', display: 'flex', flexDirection: 'column', background: 'linear-gradient(180deg, #09090b 0%, #111114 100%)', flexShrink: 0 }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '6px', marginBottom: '12px' }}>
          <div style={{ display: 'flex', gap: '4px', alignItems: 'center' }}>
            <div style={{ width: '24px', height: '6px', background: 'rgba(234,86,241,0.25)', borderRadius: '2px' }} />
            <div style={{ width: '52px', height: '6px', background: '#27272a', borderRadius: '2px' }} />
          </div>
          <div style={{ display: 'flex', gap: '4px', alignItems: 'center' }}>
            <div style={{ width: '32px', height: '6px', background: 'rgba(234,86,241,0.25)', borderRadius: '2px' }} />
            <div style={{ width: '76px', height: '6px', background: '#3f3f46', borderRadius: '2px' }} />
          </div>
          <div style={{ display: 'flex', gap: '4px', alignItems: 'center' }}>
            <div style={{ width: '38px', height: '6px', background: '#27272a', borderRadius: '2px' }} />
            <div style={{ width: '38px', height: '6px', background: '#27272a', borderRadius: '2px' }} />
          </div>
        </div>
        <div style={{ display: 'flex', gap: '6px', alignItems: 'center' }}>
          <div style={{ flex: 1, height: '20px', background: '#1f1f23', borderRadius: '10px', display: 'flex', alignItems: 'center', paddingLeft: '8px' }}>
                      </div>
          <div style={{ width: '16px', height: '16px', background: '#27272a', borderRadius: '50%' }} />
          <div style={{ width: '20px', height: '20px', background: '#EA56F1', borderRadius: '50%', boxShadow: '0 0 8px rgba(234,86,241,0.2)' }} />
        </div>
      </div>
    </div>
  )
}
