import Image from "next/image";

export default function Home() {
  return (
    <main className="bg-[#fafafa] flex flex-col items-center">
      {/* Hero Section */}
      <section className="relative w-full max-w-[1440px] min-h-[100svh] md:min-h-0 md:h-[847px] overflow-clip flex flex-col">
        {/* Background Image */}
        <div className="absolute inset-[-8%_-5%_0_-5%]">
          <Image
            src="/pictures/hero-background-image.jpg"
            alt="Hero background"
            fill
            className="object-cover object-[center_25%]"
            sizes="(max-width: 1440px) 100vw, 1440px"
            preload
          />
        </div>

        {/* Frosted glass strip with gradient fade */}
        <div
          className="absolute left-0 bottom-0 w-full h-[50%] md:h-[349px] backdrop-blur-[10px]"
          style={{
            maskImage: "linear-gradient(to top, black 40%, transparent 100%)",
            WebkitMaskImage:
              "linear-gradient(to top, black 40%, transparent 100%)",
          }}
        />

        {/* Navbar */}
        <nav className="relative z-10 w-full flex items-center justify-between px-5 md:px-8 py-6">
          <span className="text-base font-semibold tracking-[-0.04em] capitalize">
            H.Studio
          </span>

          <div className="hidden md:flex items-center gap-8 lg:gap-14 text-base font-semibold tracking-[-0.04em] capitalize">
            <span>About</span>
            <span>Services</span>
            <span>Projects</span>
            <span>News</span>
            <span>Contact</span>
          </div>

          {/* Desktop CTA */}
          <button className="hidden md:block bg-black text-white text-sm font-medium tracking-[-0.04em] px-4 py-3 rounded-full whitespace-nowrap">
            Let&apos;s talk
          </button>

          {/* Mobile hamburger */}
          <button className="md:hidden flex flex-col gap-[6px] w-8 py-1" aria-label="Menu">
            <span className="block w-full h-[2px] bg-black" />
            <span className="block w-full h-[2px] bg-black" />
            <span className="block w-full h-[2px] bg-black" />
          </button>
        </nav>

        {/* Hero Content — pushed to bottom */}
        <div className="relative w-full mt-auto px-5 md:px-8 pb-8 md:pb-12">
          {/* Name block — inline-block centers the text block, then hello aligns to its left edge */}
          <div className="w-full text-center">
            <div className="inline-block text-center md:text-left">
              <p className="font-mono text-xs md:text-sm uppercase text-white mix-blend-overlay leading-[1.1] mb-[-0.4em] md:pl-[0.15em]">
                [ Hello i&apos;m ]
              </p>
              {/* Mobile: stacked, each word fills width */}
              <h1
                className="md:hidden font-medium capitalize leading-[1] tracking-[-0.07em] text-white mix-blend-overlay"
                style={{ fontSize: "clamp(5rem, 22vw, 10rem)" }}
              >
                Harvey<br />Specter
              </h1>
              {/* Desktop: single line */}
              <h1
                className="hidden md:block font-medium capitalize leading-[1.1] tracking-[-0.07em] text-white mix-blend-overlay whitespace-nowrap"
                style={{ fontSize: "clamp(3.5rem, 13.75vw, 198px)" }}
              >
                Harvey&nbsp;&nbsp;Specter
              </h1>
            </div>
          </div>

          {/* Description + CTA */}
          <div className="w-full flex flex-col items-start md:items-end mt-4 md:mt-2">
            <div className="flex flex-col items-start gap-4">
              <p className="w-full md:w-[294px] text-sm uppercase leading-[1.3] tracking-[-0.04em] text-[#1f1f1f]">
                <span className="font-bold italic">H.Studio is a </span>
                <span className="italic">full-service</span>
                <span className="font-bold italic">
                  {" "}
                  creative studio creating beautiful digital experiences and
                  products. We are an{" "}
                </span>
                <span className="italic">award winning</span>
                <span className="font-bold italic">
                  {" "}
                  desing and art group specializing in branding, web design and
                  engineering.
                </span>
              </p>
              <button className="bg-black text-white text-sm font-medium tracking-[-0.04em] px-6 py-4 md:px-4 md:py-3 rounded-full whitespace-nowrap">
                Let&apos;s talk
              </button>
            </div>
          </div>
        </div>
      </section>
      {/* Bio Section */}
      <section className="w-full max-w-[1440px] overflow-clip px-5 md:px-8 py-20 md:py-[120px]">
        <div className="flex flex-col gap-6">
          {/* Top label + divider */}
          <div className="flex flex-col gap-3 items-end">
            <span className="font-mono text-sm uppercase text-[#1f1f1f] leading-[1.1] text-right w-full">
              [ 8+ years in industry ]
            </span>
            <div className="w-full h-px bg-[#1f1f1f]" />
          </div>

          {/* Staggered typography */}
          <div
            className="flex flex-col gap-1 md:gap-2 uppercase font-light tracking-[-0.08em] text-black leading-[0.84]"
            style={{ fontSize: "clamp(2.5rem, 6.67vw, 96px)" }}
          >
            {/* Line 1: A creative director / */}
            <div className="flex items-start gap-3">
              <span className="whitespace-nowrap">
                A creative director &nbsp;&nbsp;/
              </span>
              <span className="font-mono text-sm tracking-normal font-normal leading-[1.1] text-[#1f1f1f] mt-1">
                001
              </span>
            </div>

            {/* Line 2: Photographer (indented) */}
            <div className="md:pl-[15.5%]">
              <span>Photographer</span>
            </div>

            {/* Line 3: Born & raised (more indented) */}
            <div className="md:pl-[44.3%]">
              <span>
                Born{" "}
                <span className="font-playfair italic font-normal">&amp;</span>
                {" "}raised
              </span>
            </div>

            {/* Line 4: on the south side */}
            <div>
              <span>on the south side</span>
            </div>

            {/* Line 5: of chicago. (indented) + label */}
            <div className="relative md:pl-[44%]">
              <span>of chicago.</span>
              <span className="hidden md:inline font-mono text-sm tracking-normal font-normal leading-[1.1] text-[#1f1f1f] absolute right-0 top-[26px] whitespace-nowrap">
                [ creative freelancer ]
              </span>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
