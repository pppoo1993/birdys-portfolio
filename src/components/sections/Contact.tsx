import ScrollReveal from '../animations/ScrollReveal'

export default function Contact() {
  return (
    <section
      id="contact"
      className="w-full bg-[#0d0d0d] px-6 md:px-24 py-28 border-t border-zinc-900 relative overflow-hidden"
    >
      {/* Grid background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#141414_1px,transparent_1px),linear-gradient(to_bottom,#141414_1px,transparent_1px)] bg-[size:24px_24px] opacity-30 pointer-events-none" />

      <ScrollReveal>
        <div className="max-w-4xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 relative z-10 items-center">
          {/* Left column */}
          <div className="lg:col-span-7 flex flex-col justify-center space-y-8 text-center lg:text-left">
            <h3 className="text-2xl md:text-3xl font-light tracking-wide text-zinc-200 leading-relaxed max-w-xl mx-auto lg:mx-0">
              技术在解构界面，<br />
              但体验的本质<span className="text-accent font-medium">不曾改变</span>。
            </h3>

            <p className="text-zinc-500 text-sm md:text-base font-light tracking-wider pt-2">
              下一个新时代的产品，<span className="text-zinc-300 border-b border-zinc-800 pb-1 hover:border-accent transition-colors ">一起聊聊吗？</span>
            </p>
          </div>

          {/* Right column - QR card */}
          <div className="lg:col-span-5 flex items-center justify-center lg:justify-end">
            <div className="relative p-6 rounded-2xl bg-zinc-900/40 border border-zinc-800 backdrop-blur-sm flex flex-col items-center gap-4 transition-all duration-300 hover:border-accent/40 group">
              <span className="absolute top-2 left-2 w-2 h-2 border-t border-l border-zinc-700 group-hover:border-accent" />
              <span className="absolute top-2 right-2 w-2 h-2 border-t border-r border-zinc-700 group-hover:border-accent" />
              <span className="absolute bottom-2 left-2 w-2 h-2 border-b border-l border-zinc-700 group-hover:border-accent" />
              <span className="absolute bottom-2 right-2 w-2 h-2 border-b border-r border-zinc-700 group-hover:border-accent" />

              <div className="w-40 h-40 aspect-square bg-white p-2 rounded-xl overflow-hidden shadow-[0_0_30px_rgba(0,0,0,0.5)] transition-all duration-300 group-hover:scale-[1.02]">
                <div className="w-full h-full flex items-center justify-center bg-white rounded-lg">
                  <img
                    src="images/qrcode.png"
                    alt="WeChat QR"
                    className="max-w-full max-h-full object-contain"
                  />
                </div>
              </div>

              <span className="font-mono text-[10px] text-zinc-500 tracking-[0.15em] uppercase group-hover:text-zinc-300 transition-colors">
                扫码添加微信
              </span>
            </div>
          </div>
        </div>
      </ScrollReveal>

    </section>
  )
}
