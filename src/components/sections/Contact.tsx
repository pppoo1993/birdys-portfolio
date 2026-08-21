import ScrollReveal from '../animations/ScrollReveal'

export default function Contact() {
  return (
    <section
      id="contact"
      className="w-full bg-[#0d0d0d]/80 py-32 md:py-24 relative overflow-hidden"
    >
      <ScrollReveal>
        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 relative z-10 items-center px-6 md:px-12">
          {/* Left column */}
          <div className="lg:col-span-7 flex flex-col justify-center space-y-8 text-center lg:text-left">
            <h3 className="text-2xl md:text-3xl font-light tracking-wide text-white leading-relaxed max-w-xl mx-auto lg:mx-0">
              技术在解构界面，<br />
              但设计的本质<span className="text-accent font-semibold">不曾改变</span>。
            </h3>

            <p className="text-[#9a9a9a] text-sm md:text-base font-normal tracking-wider pt-2">
              下一个新时代的产品，<span className="text-[#c0c0c0] border-b border-zinc-800 pb-1 hover:border-accent transition-colors ">一起聊聊吗？</span>
            </p>
          </div>

          {/* Right column - QR card */}
          <div className="lg:col-span-5 flex items-center justify-center lg:justify-end">
            <div
              className="relative p-6 rounded-lg border border-[#1f1f23] flex flex-col items-center gap-0 transition-all duration-300 group hover:border-[#C7FF00]/30 hover:bg-[#161618]"
              style={{
                boxShadow: '0 20px 40px rgba(0, 0, 0, 0.4)',
                transition: 'all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
              }}
            >
              <div className="w-40 h-40 aspect-square p-2 rounded-lg overflow-hidden">
                <div className="w-full h-full flex items-center justify-center rounded-lg">
                  <img
                    src={'https://birdy-portfolio-2026.oss-cn-beijing.aliyuncs.com/images/code.png'}
                    alt="WeChat QR"
                    className="max-w-full max-h-full object-contain opacity-80 group-hover:opacity-100 transition-opacity duration-300"
                  />
                </div>
              </div>

              <span className="text-xs text-[#a0a0a0] tracking-wider group-hover:text-[#C7FF00] transition-colors duration-200">
                加个微信吧
              </span>
            </div>
          </div>
        </div>
      </ScrollReveal>

    </section>
  )
}
