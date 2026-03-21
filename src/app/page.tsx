export default function Home() {
  return (
    <div className="min-h-screen bg-[#020202] flex flex-col items-center overflow-hidden">
      {/* Logo with horizontal lines */}
      <div className="w-full flex items-center gap-4 pt-10 sm:pt-12 pb-5 px-6">
        <div className="flex-1 border-t border-white/30" />
        <span className="text-white tracking-[0.35em] text-2xl sm:text-3xl">
          <span className="font-display">SHEA</span>
          <span
            className="font-cursive italic text-[1.4em] tracking-normal relative"
            style={{ top: "0.03em" }}
          >
            C
          </span>
          <span className="font-display">ULLEN</span>
        </span>
        <div className="flex-1 border-t border-white/30" />
      </div>

      {/* Hero content */}
      <div className="flex-1 flex flex-col items-center justify-center px-6 pt-8 sm:pt-12 lg:pt-16 pb-4">
        <div className="max-w-3xl text-center">
          <h1 className="text-white font-serif text-xl sm:text-4xl lg:text-[52px] font-normal leading-tight lg:leading-[1.1]">
            A designer who creates products that work with how humans work.
          </h1>
          <p className="mt-4 text-white/75 text-sm sm:text-base lg:text-[26px] leading-snug font-sans">
            human | kind | design
          </p>
          <a
            href="mailto:shea@goodarchitect.com.au"
            className="mt-6 inline-block rounded-full border border-white/30 bg-white/10 px-8 py-3 text-sm sm:text-base text-white font-sans tracking-wide hover:bg-white hover:text-[#020202] transition-colors duration-200"
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
          <img
            src="/images/postcards/dudilspostcardsvg.webp"
            alt="Dudils"
            className="w-auto h-48 sm:h-72 lg:h-80 object-contain drop-shadow-[0_35px_35px_rgba(0,0,0,0.5)]"
          />
        </a>
        <a
          href="https://www.goodarchitect.com.au"
          target="_blank"
          rel="noopener noreferrer"
          className="postcard-wrapper rotate-1 origin-bottom -mr-4 sm:-mr-8"
        >
          <img
            src="/images/postcards/goodarchitectwebsitepostcardsvg.webp"
            alt="Good Architect"
            className="w-auto h-48 sm:h-72 lg:h-80 object-contain drop-shadow-[0_35px_35px_rgba(0,0,0,0.5)]"
          />
        </a>
        <a
          href="https://www.friendsfindme.com"
          target="_blank"
          rel="noopener noreferrer"
          className="postcard-wrapper rotate-3 origin-bottom"
        >
          <img
            src="/images/postcards/Friendsfindmepostcardsrv.webp"
            alt="Friends Find Me"
            className="w-auto h-48 sm:h-72 lg:h-80 object-contain drop-shadow-[0_35px_35px_rgba(0,0,0,0.5)]"
          />
        </a>
      </div>

      {/* Bottom spacing */}
      <div className="w-full h-8 sm:h-12" />
    </div>
  );
}
