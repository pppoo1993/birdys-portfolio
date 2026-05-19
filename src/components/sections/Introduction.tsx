import { introductionData } from '../../data/introduction'

export default function Introduction() {
  return (
    <section
      id="intro"
      className="bg-fixed-mobile-fallback relative flex h-screen w-full flex-col overflow-hidden px-6 sm:px-8 lg:px-12"
      style={{
        backgroundImage: `url(${introductionData.photoPath})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
      }}
    >
      <div className="absolute inset-0 bg-black/55" />
      <div className="relative z-10 mx-auto flex w-full max-w-5xl flex-1 flex-col pt-[15vh]">
        {/* Name + Title */}
        <h1 className="heading-xl mb-3 text-4xl text-white sm:text-4xl md:text-5xl">
          {introductionData.name}
        </h1>
        <p className="mb-8 font-sans text-lg font-medium tracking-wider text-accent sm:mb-10 sm:text-sm">
          {introductionData.title}
        </p>

        {/* Avatar + Quote bubble — mobile: stacked, centered */}
        <div className="mb-8 flex flex-col items-center gap-4 sm:mb-12 sm:flex-row sm:items-center sm:gap-5">
          <div className="h-20 w-20 shrink-0 overflow-hidden rounded-full border-2 border-accent sm:h-20 sm:w-20">
            <img
              src={introductionData.avatarPath}
              alt=""
              className="h-full w-full object-cover"
            />
          </div>
          <div className="relative rounded-2xl border border-white/10 bg-white/10 px-5 py-3 backdrop-blur sm:rounded-tl-sm sm:px-6 sm:py-4">
            <p className="text-sm italic leading-relaxed text-white/85 sm:text-lg">
              {introductionData.quote}
            </p>
          </div>
        </div>

        {/* Bio sections + Scroll hint */}
        <div className="mt-auto flex items-end justify-between gap-8 pb-20 sm:pb-24">
          <div className="max-w-xl space-y-3 sm:space-y-4">
            {introductionData.bioSections.map((section, i) => (
              <div key={i}>
                <p className="text-sm text-white/60 sm:text-sm">
                  <span className="accent-text font-semibold">{section.heading}</span>
                  <span className="hidden text-text-tertiary sm:inline"> | </span>
                  <span className="block text-white/60 sm:inline">{section.body}</span>
                </p>
              </div>
            ))}
          </div>

          {/* Scroll hint — hidden on mobile */}
          <div className="hidden shrink-0 animate-bounce flex-col items-center gap-1 text-white/30 sm:flex">
            <span className="text-2xs tracking-widest uppercase">Scroll</span>
            <svg width="12" height="20" viewBox="0 0 12 20" fill="none">
              <rect x="1" y="1" width="10" height="18" rx="5" stroke="currentColor" strokeWidth="1.5" />
              <circle cx="6" cy="6" r="1.5" fill="currentColor" />
            </svg>
          </div>
        </div>
      </div>
    </section>
  )
}
