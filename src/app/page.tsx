import Image from "next/image";
import { EmailLink } from "@/components/EmailLink";
import { PostcardScrollFlip } from "@/components/PostcardScrollFlip";

const POSTCARD_SIZES = "(max-width: 640px) 85vw, (max-width: 1024px) 30vw, 320px";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#020202] flex flex-col items-center overflow-hidden">
      {/* Logo with horizontal lines */}
      <div className="w-full flex items-center gap-4 pt-[76px] sm:pt-[91px] pb-5 px-6">
        <div className="flex-1 border-t-2 border-[#f6e3a4]" />
        <EmailLink className="text-[#f6e3a4] tracking-[0.35em] text-2xl sm:text-3xl inline-flex items-center no-underline hover:opacity-80 transition-opacity cursor-pointer">
          <span className="font-display">SHEA</span>
          <span
            className="font-cursive text-[2.65em] tracking-normal leading-none -ml-2"
          >
            C
          </span>
          <span className="font-display ml-1">ULLEN</span>
        </EmailLink>
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
          <EmailLink
            className="mt-6 mb-8 sm:mb-10 inline-block rounded-full border border-[#f6e3a4]/40 bg-[#f6e3a4] px-8 py-3 text-sm sm:text-base text-[#020202] font-sans tracking-wide hover:bg-[#f6e3a4]/80 transition-colors duration-200 cursor-pointer"
          >
            shea@goodarchitect.com.au
          </EmailLink>
        </div>
      </div>

      {/* Postcards */}
      <PostcardScrollFlip />
      <div className="flex flex-col sm:flex-row items-center sm:items-end justify-center pb-0 px-4 sm:gap-0">
        {/* Dudils */}
        <a
          href="https://dudils.com"
          target="_blank"
          rel="noopener noreferrer"
          className="postcard-wrapper -rotate-3 origin-bottom z-30 sm:-mr-4 md:-mr-8"
        >
          <div className="postcard-card h-56 sm:h-72 lg:h-80">
            <div className="postcard-front">
              <Image
                src="/images/postcards/dudilspostcard.webp"
                alt="Dudils"
                fill
                className="object-cover"
                sizes={POSTCARD_SIZES}
                quality={55}
                priority
              />
              <div className="postcard-overlay">
                <h2 className="postcard-title font-title">Dudils</h2>
                <p className="postcard-subtitle font-subtitle">home plan search engine</p>
              </div>
            </div>
            <div className="postcard-back">
              <Image
                src="/images/postcards/reverse/dudils.webp"
                alt="Dudils details"
                fill
                className="object-fill"
                sizes={POSTCARD_SIZES}
                quality={55}
              />
              <div className="postcard-back-content">
                <h2 className="postcard-back-header font-handwrite">Dudils</h2>
                <div className="postcard-back-body">
                  <div className="postcard-back-left">
                    <p className="postcard-back-description font-handwrite">
                      A home plan search engine that filters for passive solar design.
                      <br /><br /><strong>Goal:</strong> pressure project home builders to add north orientation as a filter on their websites and redesign their plans to be passive solar capable.
                    </p>
                  </div>
                  <div className="postcard-back-right">
                    <p className="postcard-back-address-line font-handwrite">Next.js</p>
                    <p className="postcard-back-address-line font-handwrite">Vercel</p>
                    <p className="postcard-back-address-line font-handwrite">TypeScript</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </a>

        {/* Good Architect */}
        <a
          href="https://www.goodarchitect.com.au"
          target="_blank"
          rel="noopener noreferrer"
          className="postcard-wrapper rotate-1 origin-bottom z-20 mt-4 sm:mt-0 sm:-mr-4 md:-mr-8"
        >
          <div className="postcard-card h-56 sm:h-72 lg:h-80">
            <div className="postcard-front">
              <Image
                src="/images/postcards/good.webp"
                alt="Good Architect"
                fill
                className="object-cover"
                sizes={POSTCARD_SIZES}
                quality={55}
                priority
              />
              <div className="postcard-overlay">
                <h2 className="postcard-title font-title">Good Architect</h2>
                <p className="postcard-subtitle font-subtitle">architecture website</p>
              </div>
            </div>
            <div className="postcard-back">
              <Image
                src="/images/postcards/reverse/good.webp"
                alt="Good Architect details"
                fill
                className="object-fill"
                sizes={POSTCARD_SIZES}
                quality={55}
              />
              <div className="postcard-back-content">
                <h2 className="postcard-back-header font-handwrite">Good Architect</h2>
                <div className="postcard-back-body">
                  <div className="postcard-back-left">
                    <p className="postcard-back-description font-handwrite">
                      An architecture website that advocates for sustainability and educates people on passive solar design and common approval processes.
                      <br /><br /><strong>Goal:</strong> showcase past work and reviews while providing a SEO channel.
                    </p>
                  </div>
                  <div className="postcard-back-right">
                    <p className="postcard-back-address-line font-handwrite">Google</p>
                    <p className="postcard-back-address-line font-handwrite">Sites</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </a>

        {/* FriendsFindMe */}
        <a
          href="https://www.friendsfindme.com"
          target="_blank"
          rel="noopener noreferrer"
          className="postcard-wrapper rotate-3 origin-bottom z-10 mt-4 sm:mt-0"
        >
          <div className="postcard-card h-56 sm:h-72 lg:h-80">
            <div className="postcard-front">
              <Image
                src="/images/postcards/Friendsfindmepostcard.webp"
                alt="Friends Find Me"
                fill
                className="object-cover"
                sizes={POSTCARD_SIZES}
                quality={55}
                priority
              />
              <div className="postcard-overlay">
                <h2 className="postcard-title font-title">FriendsFindMe</h2>
                <p className="postcard-subtitle font-subtitle">Choose your adventure</p>
              </div>
            </div>
            <div className="postcard-back">
              <Image
                src="/images/postcards/reverse/friend.webp"
                alt="FriendsFindMe details"
                fill
                className="object-fill"
                sizes={POSTCARD_SIZES}
                quality={55}
              />
              <div className="postcard-back-content">
                <h2 className="postcard-back-header font-handwrite">FriendsFindMe</h2>
                <div className="postcard-back-body">
                  <div className="postcard-back-left">
                    <p className="postcard-back-description font-handwrite">
                      A phone app that lets people log their trip details. If they don&apos;t return on time, it sends an SMS to their friends so they know where to start looking.
                      <br /><br /><strong>Goal:</strong> find lost people faster, because the sooner a search begins, the better the odds.
                    </p>
                  </div>
                  <div className="postcard-back-right">
                    <p className="postcard-back-address-line font-handwrite">Flutter</p>
                    <p className="postcard-back-address-line font-handwrite">Supabase</p>
                    <p className="postcard-back-address-line font-handwrite">Twilio</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </a>
      </div>

      <div className="w-full h-8 sm:h-12" />
    </main>
  );
}
