export default function Home() {
  return (
    <div className="min-h-screen bg-[#020202] flex flex-col items-center overflow-hidden">
      {/* Logo with horizontal lines */}
      <div className="w-full flex items-center gap-4 pt-20 sm:pt-24 pb-5 px-6">
        <div className="flex-1 border-t-2 border-[#f6e3a4]" />
        <span className="text-[#f6e3a4] tracking-[0.35em] text-2xl sm:text-3xl inline-flex items-center">
          <span className="font-display">SHEA</span>
          <span
            className="font-cursive text-[2.65em] tracking-normal leading-none -ml-2"
          >
            C
          </span>
          <span className="font-display">ULLEN</span>
        </span>
        <div className="flex-1 border-t-2 border-[#f6e3a4]" />
      </div>

      {/* Hero content */}
      <div className="flex-1 flex flex-col items-center justify-center px-6 pt-4 sm:pt-6 lg:pt-8 pb-4">
        <div className="max-w-3xl text-center">
          <h1 className="text-white font-serif text-xl sm:text-4xl lg:text-[52px] font-normal leading-tight lg:leading-[1.1]">
            A designer who creates products that work with how humans work.
          </h1>
          <p className="mt-4 text-white/75 text-sm sm:text-base lg:text-[26px] leading-snug font-sans">
            human | kind | design
          </p>
          <a
            href="mailto:shea@goodarchitect.com.au"
            className="mt-6 mb-8 sm:mb-10 inline-block rounded-full border border-[#f6e3a4]/40 bg-[#f6e3a4] px-8 py-3 text-sm sm:text-base text-[#020202] font-sans tracking-wide hover:bg-[#f6e3a4]/80 transition-colors duration-200"
          >
            shea@goodarchitect.com.au
          </a>
        </div>
      </div>

      {/* Postcards */}
      <div className="flex items-end justify-center pb-0 px-4">
        <a
          href="https://dudils.com"
          target="_blank"
          rel="noopener noreferrer"
          className="postcard-wrapper -rotate-3 origin-bottom -mr-4 sm:-mr-8"
        >
          <div className="postcard-card h-48 sm:h-72 lg:h-80">
            <img
              src="/images/postcards/dudilspostcard.webp"
              alt="Dudils"
              className="w-full h-full object-cover"
            />
            <div className="postcard-overlay">
              <h3 className="postcard-title font-title">Dudils</h3>
              <p className="postcard-subtitle font-subtitle">home plan search engine</p>
            </div>
          </div>
        </a>
        <a
          href="https://www.goodarchitect.com.au"
          target="_blank"
          rel="noopener noreferrer"
          className="postcard-wrapper rotate-1 origin-bottom -mr-4 sm:-mr-8"
        >
          <div className="postcard-card h-48 sm:h-72 lg:h-80">
            <img
              src="/images/postcards/good.webp"
              alt="Good Architect"
              className="w-full h-full object-cover"
            />
            <div className="postcard-overlay">
              <h3 className="postcard-title font-title">Good Architect</h3>
              <p className="postcard-subtitle font-subtitle">architecture website</p>
            </div>
          </div>
        </a>
        <a
          href="https://www.friendsfindme.com"
          target="_blank"
          rel="noopener noreferrer"
          className="postcard-wrapper rotate-3 origin-bottom"
        >
          <div className="postcard-card h-48 sm:h-72 lg:h-80">
            <img
              src="/images/postcards/Friendsfindmepostcard.webp"
              alt="Friends Find Me"
              className="w-full h-full object-cover"
            />
            <div className="postcard-overlay">
              <h3 className="postcard-title font-title">FriendsFindMe</h3>
              <p className="postcard-subtitle font-subtitle">Let your friends know where to look if you don&apos;t come back</p>
            </div>
          </div>
        </a>
      </div>

      {/* Bottom spacing */}
      <div className="w-full h-8 sm:h-12" />
    </div>
  );
}
