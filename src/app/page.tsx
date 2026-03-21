export default function Home() {
  return (
    <div className="min-h-screen bg-[#020202] flex flex-col items-center overflow-hidden">
      {/* Logo */}
      <div className="pt-6 pb-5">
        <span className="text-white tracking-[0.25em] text-lg">
          <span className="font-serif">shea</span>
          <span
            className="font-script italic text-[1.4em] tracking-normal relative"
            style={{ top: "0.03em" }}
          >
            C
          </span>
          <span className="font-serif">ullen</span>
        </span>
      </div>

      {/* Thin divider */}
      <div className="w-full border-t border-white/30" />

      {/* Hero content */}
      <div className="flex-1 flex flex-col items-center justify-center px-6 pt-16 sm:pt-24 lg:pt-32 pb-12">
        <div className="max-w-3xl text-center">
          <h1 className="text-white font-serif text-xl sm:text-4xl lg:text-[52px] font-normal leading-tight lg:leading-[1.1]">
            A designer who creates products that work with how humans work.
          </h1>
          <p className="mt-4 text-white/75 text-sm sm:text-base lg:text-[26px] leading-snug font-sans">
            Humankind Design
          </p>
        </div>
      </div>

      {/* Postcards */}
      <div className="flex items-end justify-center pb-0 px-4 -mb-4 sm:-mb-8">
        <a
          href="https://dudils.com"
          target="_blank"
          rel="noopener noreferrer"
          className="postcard-wrapper -rotate-3 origin-bottom -mr-4 sm:-mr-8"
        >
          <img
            src="/images/postcards/dudilspostcardsvg.svg"
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
            src="/images/postcards/goodarchitectwebsitepostcardsvg.svg"
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
            src="/images/postcards/Friendsfindmepostcardsrv.svg"
            alt="Friends Find Me"
            className="w-auto h-48 sm:h-72 lg:h-80 object-contain drop-shadow-[0_35px_35px_rgba(0,0,0,0.5)]"
          />
        </a>
      </div>
    </div>
  );
}
