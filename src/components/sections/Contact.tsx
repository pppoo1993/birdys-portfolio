import ScrollReveal from '../animations/ScrollReveal'

const contactBg = 'https://picsum.photos/seed/contact-bg/1400/900'

export default function Contact() {
  return (
    <section
      id="contact"
      className="bg-fixed-mobile-fallback relative flex w-full items-center overflow-hidden px-6 py-24 sm:px-8 md:py-32 lg:px-12"
      style={{
        backgroundImage: `url(${contactBg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
      }}
    >
      <div className="absolute inset-0 bg-black/55" />
      <div className="relative z-10 mx-auto w-full max-w-5xl">
        <p className="heading-section mb-10 sm:hidden">联系方式</p>
        <ScrollReveal>
          <div className="mx-auto flex max-w-lg flex-col items-center gap-8 sm:flex-row sm:gap-12">
            {/* QR Code */}
            <div className="h-36 w-36 shrink-0 overflow-hidden rounded-2xl border-2 border-white/20 bg-white p-2 sm:h-40 sm:w-40">
              <img
                src="/images/qrcode.png"
                alt="微信二维码"
                className="h-full w-full object-contain"
              />
            </div>

            {/* Text */}
            <div className="text-center sm:text-left">
              <p className="text-lg font-medium text-white sm:text-xl">扫码联系我</p>
              <p className="body-text mt-2 text-sm">如果您对我的经历和作品感兴趣，欢迎扫码联系。期待新的机会，也期待与您交流。</p>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
