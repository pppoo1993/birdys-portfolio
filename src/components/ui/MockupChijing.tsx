export default function MockupChijing() {
  return (
    <>
      <div className="h-[140px] opacity-30" style={{ background: 'linear-gradient(to bottom, #222, #16161a)' }} />
      <div className="px-2.5 grid grid-cols-2 gap-1.5 -mt-10">
        <div className="h-[45px] bg-[rgba(255,255,255,0.04)] border border-[rgba(255,255,255,0.05)] rounded-md flex items-center justify-center text-[8px] text-[#8a8a8a]">画画</div>
        <div className="h-[45px] bg-[rgba(255,255,255,0.04)] border border-[rgba(255,255,255,0.05)] rounded-md flex items-center justify-center text-[8px] text-[#8a8a8a]">台词</div>
        <div className="h-[45px] bg-[rgba(255,255,255,0.04)] border border-[rgba(255,255,255,0.05)] rounded-md flex items-center justify-center text-[8px] text-[#8a8a8a]">接龙</div>
        <div className="h-[45px] bg-[rgba(255,255,255,0.04)] border border-[rgba(255,255,255,0.05)] rounded-md flex items-center justify-center text-[8px] text-[#8a8a8a]">MV</div>
      </div>
      <div className="mx-2.5 mt-3 h-8 rounded-2xl flex items-center justify-center"
        style={{ background: 'linear-gradient(90deg, #0099ff, #0066cc)', boxShadow: '0 4px 12px rgba(0,102,204,0.4)' }}>
        <span className="text-white text-[9px] font-bold tracking-wider">AI 创作视频</span>
      </div>
    </>
  )
}
