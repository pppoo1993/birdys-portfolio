export default function MockupPad() {
  return (
    <>
      <div className="flex gap-0" style={{ height: '155px' }}>
        <div className="flex-1 flex flex-col justify-center px-1.5" style={{ background: '#0a0a0c' }}>
          <div className="w-full bg-[#111] rounded-sm flex items-center justify-center relative" style={{ aspectRatio: '4/3' }}>
            <div className="w-5 h-5 rounded-full bg-[#C7FF00]/20 flex items-center justify-center">
              <div className="w-0 h-0 border-t-[4px] border-t-transparent border-b-[4px] border-b-transparent border-l-[7px] border-l-[#C7FF00] ml-0.5" />
            </div>
            <div className="absolute bottom-1 right-1 text-[7px] text-white/70 bg-black/60 px-1 rounded">1:23</div>
          </div>
        </div>
        <div className="w-[80px] px-2 py-2 flex flex-col gap-1" style={{ background: '#121215' }}>
          <div className="text-[8px] text-[#a0a0a0] font-medium mb-0.5">选集</div>
          {[1,2,3,4,5].map((ep) => (
            <div key={ep} className={`h-[16px] rounded-sm flex items-center px-1.5 text-[7px] ${ep === 2 ? 'bg-[#C7FF00]/10 text-[#C7FF00] border border-[#C7FF00]/20' : 'text-[#6a6a6a]'}`}>{ep}. 第{ep}集</div>
          ))}
        </div>
      </div>
    </>
  )
}
