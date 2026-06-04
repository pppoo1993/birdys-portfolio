import ScrollReveal from '../animations/ScrollReveal'

export default function Contact() {
  return (
    <section
      id="contact"
      className="w-full bg-[#0d0d0d] py-16 md:py-20 border-t border-zinc-900 relative overflow-hidden"
    >
      {/* Grid background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#141414_1px,transparent_1px),linear-gradient(to_bottom,#141414_1px,transparent_1px)] bg-[size:24px_24px] opacity-30 pointer-events-none" />

      <ScrollReveal>
        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 relative z-10 items-center px-6 md:px-12">
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
            <div
              className="relative p-6 rounded-lg bg-[#161618] border border-[#1f1f23] flex flex-col items-center gap-4 transition-all duration-300 group hover:border-[#C7FF00]/30"
              style={{
                boxShadow: '0 20px 40px rgba(0, 0, 0, 0.4)',
                transition: 'all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
              }}
            >
              {/* Corner decorations */}
              <span className="absolute top-2 left-2 w-2 h-2 border-t border-l border-zinc-700 group-hover:border-[#C7FF00] transition-colors duration-200" />
              <span className="absolute top-2 right-2 w-2 h-2 border-t border-r border-zinc-700 group-hover:border-[#C7FF00] transition-colors duration-200" />
              <span className="absolute bottom-2 left-2 w-2 h-2 border-b border-l border-zinc-700 group-hover:border-[#C7FF00] transition-colors duration-200" />
              <span className="absolute bottom-2 right-2 w-2 h-2 border-b border-r border-zinc-700 group-hover:border-[#C7FF00] transition-colors duration-200" />

              <div className="w-40 h-40 aspect-square p-2 rounded-lg overflow-hidden">
                <div className="w-full h-full flex items-center justify-center rounded-lg">
                  <img
                    src={import.meta.env.BASE_URL + 'images/code.PNG'}
                    alt="WeChat QR"
                    className="max-w-full max-h-full object-contain"
                  />
                </div>
              </div>

              <span className="text-xs text-zinc-400 tracking-wider group-hover:text-[#C7FF00] transition-colors duration-200">
                扫码添加微信
              </span>
            </div>
          </div>
        </div>
      </ScrollReveal>

    </section>
  )
}
