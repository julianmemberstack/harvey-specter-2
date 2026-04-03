import Image from "next/image";
import ScrollAnimations from "./ScrollAnimations";
import Navbar from "./Navbar";

export default function Home() {
  return (
    <main className="bg-[#fafafa] flex flex-col items-center max-w-[1660px] mx-auto">
      <ScrollAnimations />
      <Navbar />
      {/* Hero Section */}
      <section className="relative w-full min-h-[100svh] md:min-h-0 md:h-[847px] overflow-clip flex flex-col">
        {/* Background Image */}
        <div className="absolute inset-0">
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

        {/* Spacer for fixed nav */}
        <div className="h-[72px]" />

        {/* Hero Content — pushed to bottom */}
        <div className="relative w-full mt-auto px-5 md:px-8 pb-8 md:pb-12">
          {/* Name block — inline-block centers the text block, then hello aligns to its left edge */}
          <div data-hero-name className="w-full text-center">
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
          <div data-hero-desc className="w-full flex flex-col items-start md:items-end mt-4 md:mt-2">
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
      <section data-bio className="w-full overflow-clip px-4 md:px-8 py-12 md:py-[120px]">
        <div className="flex flex-col gap-6">
          {/* Top label + divider */}
          <div data-bio-line className="flex flex-col gap-3 items-end">
            <span className="font-mono text-sm uppercase text-[#1f1f1f] leading-[1.1] text-right w-full">
              [ 8+ years in industry ]
            </span>
            <div className="w-full h-px bg-[#1f1f1f]" />
          </div>

          {/* Mobile: centered, no stagger */}
          <div className="md:hidden flex flex-col items-center gap-2 uppercase font-light tracking-[-0.08em] text-black leading-[0.84] text-[32px]">
            <span data-bio-line className="font-mono text-sm tracking-normal font-normal leading-[1.1] text-[#1f1f1f]">
              001
            </span>
            <span data-bio-line className="whitespace-nowrap">A creative director &nbsp;/</span>
            <span data-bio-line>Photographer</span>
            <span data-bio-line>
              Born{" "}
              <span className="font-playfair italic font-normal">&amp;</span>
              {" "}raised
            </span>
            <span data-bio-line>on the south side</span>
            <span data-bio-line>of chicago.</span>
            <span data-bio-line className="font-mono text-sm tracking-normal font-normal leading-[1.1] text-[#1f1f1f]">
              [ creative freelancer ]
            </span>
          </div>

          {/* Desktop: staggered typography */}
          <div
            className="hidden md:flex flex-col gap-2 uppercase font-light tracking-[-0.08em] text-black leading-[0.84]"
            style={{ fontSize: "clamp(2.5rem, 6.67vw, 96px)" }}
          >
            <div data-bio-line className="flex items-start gap-3">
              <span className="whitespace-nowrap">
                A creative director &nbsp;&nbsp;/
              </span>
              <span className="font-mono text-sm tracking-normal font-normal leading-[1.1] text-[#1f1f1f] mt-1">
                001
              </span>
            </div>
            <div data-bio-line className="pl-[15.5%]">
              <span>Photographer</span>
            </div>
            <div data-bio-line className="pl-[44.3%]">
              <span>
                Born{" "}
                <span className="font-playfair italic font-normal">&amp;</span>
                {" "}raised
              </span>
            </div>
            <div data-bio-line>
              <span>on the south side</span>
            </div>
            <div data-bio-line className="relative pl-[44%]">
              <span>of chicago.</span>
              <span className="font-mono text-sm tracking-normal font-normal leading-[1.1] text-[#1f1f1f] absolute right-0 top-[26px] whitespace-nowrap">
                [ creative freelancer ]
              </span>
            </div>
          </div>
        </div>
      </section>
      {/* About Section */}
      <section data-about className="w-full overflow-clip px-4 md:px-8 py-12 md:py-20">
        <div className="flex flex-col md:flex-row items-start justify-between gap-5 md:gap-8">
          {/* Labels — on mobile: stacked 002 + [ About ]; on desktop: just [ About ] */}
          <div className="flex flex-col gap-2 shrink-0">
            <span className="md:hidden font-mono text-sm uppercase text-[#1f1f1f] leading-[1.1]">
              002
            </span>
            <span className="font-mono text-sm uppercase text-[#1f1f1f] leading-[1.1] whitespace-nowrap">
              [ About ]
            </span>
          </div>

          {/* Content area */}
          <div className="flex flex-col md:flex-row gap-5 md:gap-8 items-end w-full md:w-[983px]">
            {/* Text with bracket decorations */}
            <div data-about-text className="flex-1 flex items-stretch gap-3">
              {/* Left brackets */}
              <div className="flex flex-col justify-between w-6 shrink-0 text-[#1f1f1f]">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1 15V1H15" stroke="currentColor" strokeWidth="1.5" />
                </svg>
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1 1V15H15" stroke="currentColor" strokeWidth="1.5" />
                </svg>
              </div>

              {/* Paragraph */}
              <p className="flex-1 text-sm leading-[1.3] tracking-[-0.04em] text-[#1f1f1f] py-3">
                Placeholder paragraph one. This is where you introduce yourself
                — your background, your passion for your craft, and what drives
                you creatively. Two to three sentences work best here.
                Placeholder paragraph two. Here you can describe your technical
                approach, how you collaborate with clients, or what sets your
                work apart from others in your field.
              </p>

              {/* Right brackets */}
              <div className="flex flex-col justify-between w-6 shrink-0 text-[#1f1f1f]">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M15 15V1H1" stroke="currentColor" strokeWidth="1.5" />
                </svg>
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M15 1V15H1" stroke="currentColor" strokeWidth="1.5" />
                </svg>
              </div>
            </div>

            {/* Image + 002 label */}
            <div data-about-image className="flex gap-6 items-start shrink-0 w-full md:w-auto">
              <span className="hidden md:block font-mono text-sm uppercase text-[#1f1f1f] leading-[1.1]">
                002
              </span>
              <div className="relative w-full md:w-[436px] aspect-[422/594]">
                <Image
                  src="/pictures/about-portrait.jpg"
                  alt="Portrait"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 436px"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Full-width Photo Break */}
      <section className="w-full">
        <div data-img-reveal className="relative w-full aspect-[1440/900] md:aspect-[1440/900] overflow-clip">
          <Image
            data-img-reveal-img
            src="/pictures/deliverables-large.jpg"
            alt="Photographer with camera"
            fill
            className="object-cover"
            sizes="(max-width: 1440px) 100vw, 1440px"
          />
        </div>
      </section>
      {/* Services / Deliverables Section */}
      <section data-services data-nav-dark className="w-full bg-black text-white overflow-clip px-4 md:px-8 py-16 md:py-20">
        <div className="flex flex-col gap-10 md:gap-12">
          {/* Header */}
          <span data-services-header className="font-mono text-sm uppercase leading-[1.1]">
            [ services ]
          </span>
          <div
            data-services-header
            className="flex items-center justify-between uppercase font-light tracking-[-0.08em] leading-normal"
            style={{ fontSize: "clamp(2rem, 6.67vw, 96px)" }}
          >
            <span>[4]</span>
            <span>Deliverables</span>
          </div>

          {/* Service Items */}
          <div className="flex flex-col gap-10 md:gap-12">
            {[
              { num: 1, title: "Brand Discovery", image: "/pictures/brand-discovery.jpg" },
              { num: 2, title: "Web Design & Dev", image: "/pictures/web-design-dev.jpg" },
              { num: 3, title: "Marketing", image: "/pictures/marketing.jpg" },
              { num: 4, title: "Photography", image: "/pictures/photography.jpg" },
            ].map((service) => (
              <div key={service.num} data-service-item className="flex flex-col gap-2">
                {/* Number + divider */}
                <span className="font-mono text-sm uppercase leading-[1.1]">
                  [ {service.num} ]
                </span>
                <div className="w-full h-px bg-white/40" />

                {/* Content row */}
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 md:gap-6 mt-1">
                  {/* Title */}
                  <h3 className="text-2xl md:text-4xl font-bold italic uppercase tracking-[-0.04em] leading-[1.1] shrink-0">
                    {service.title}
                  </h3>

                  {/* Description + thumbnail */}
                  <div className="flex flex-col md:flex-row gap-4 md:gap-6 md:items-start">
                    <p className="text-sm leading-[1.3] tracking-[-0.04em] text-white md:w-[393px]">
                      Placeholder description of this service. Explain the value
                      you provide and the outcomes clients can expect. Keep it to
                      two or three sentences.
                    </p>
                    <div className="relative w-full md:w-[151px] aspect-square md:aspect-square shrink-0">
                      <Image
                        src={service.image}
                        alt={service.title}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, 151px"
                      />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Selected Work Section */}
      <section data-portfolio className="w-full overflow-clip px-4 md:px-8 py-16 md:py-20">
        <div className="flex flex-col gap-10 md:gap-[61px]">
          {/* Header */}
          <div data-portfolio-header className="flex items-center justify-between">
            <div className="flex gap-2 md:gap-[10px] items-start uppercase">
              {/* Mobile: portfolio label above */}
              <div className="flex flex-col gap-2 md:hidden">
                <span className="font-mono text-sm text-[#1f1f1f] leading-[1.1]">
                  [ portfolio ]
                </span>
                <div className="flex gap-2 items-start">
                  <h2
                    className="font-light tracking-[-0.08em] leading-[0.86]"
                    style={{ fontSize: "clamp(2.5rem, 6.67vw, 96px)" }}
                  >
                    Selected<br />Work
                  </h2>
                  <span className="font-mono text-sm text-[#1f1f1f] leading-[1.1] font-normal tracking-normal">
                    004
                  </span>
                </div>
              </div>
              {/* Desktop header */}
              <div className="hidden md:flex gap-[10px] items-start">
                <h2
                  className="font-light tracking-[-0.08em] leading-[0.86]"
                  style={{ fontSize: "clamp(2.5rem, 6.67vw, 96px)" }}
                >
                  Selected<br />Work
                </h2>
                <span className="font-mono text-sm text-[#1f1f1f] leading-[1.1] font-normal tracking-normal">
                  004
                </span>
              </div>
            </div>
            {/* Rotated portfolio label — desktop only */}
            <div className="hidden md:flex h-[110px] items-center justify-center w-[15px]">
              <span className="font-mono text-sm uppercase text-[#1f1f1f] leading-[1.1] whitespace-nowrap -rotate-90">
                [ portfolio ]
              </span>
            </div>
          </div>

          {/* Portfolio Grid */}
          {/* Mobile: single column */}
          <div className="md:hidden flex flex-col gap-8">
            {[
              { title: "Surfers Paradise", image: "/pictures/Page 1/Frame 3763.jpg", tags: ["Social Media", "Photography"] },
              { title: "Cyberpunk Caffe", image: "/pictures/Page 1/Frame 3763_2.jpg", tags: ["Social Media", "Photography"] },
              { title: "Agency 976", image: "/pictures/Page 1/Frame 3763_3.jpg", tags: ["Social Media", "Photography"] },
              { title: "Minimal Playground", image: "/pictures/Page 1/Frame 3763_4.jpg", tags: ["Social Media", "Photography"] },
            ].map((project) => (
              <div key={project.title} className="flex flex-col gap-2">
                <div className="relative w-full aspect-[3/4]">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover"
                    sizes="100vw"
                  />
                  <div className="absolute bottom-4 left-4 flex gap-3">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="backdrop-blur-[10px] bg-white/30 text-[#111] text-sm font-medium tracking-[-0.04em] px-2 py-1 rounded-full whitespace-nowrap"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-black uppercase tracking-[-0.04em] leading-[1.1]">
                    {project.title}
                  </h3>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7 17L17 7M17 7H7M17 7V17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              </div>
            ))}

            {/* CTA with brackets */}
            <div className="flex items-stretch gap-3">
              <div className="flex flex-col justify-between w-6 shrink-0 text-[#1f1f1f]">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M1 15V1H15" stroke="currentColor" strokeWidth="1.5" /></svg>
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M1 1V15H15" stroke="currentColor" strokeWidth="1.5" /></svg>
              </div>
              <div className="flex-1 flex flex-col gap-3 py-3">
                <p className="text-sm italic leading-[1.3] tracking-[-0.04em] text-[#1f1f1f]">
                  Discover how my creativity transforms ideas into impactful
                  digital experiences — schedule a call with me to get started.
                </p>
                <button className="bg-black text-white text-sm font-medium tracking-[-0.04em] px-4 py-3 rounded-full whitespace-nowrap self-start">
                  Let&apos;s talk
                </button>
              </div>
              <div className="flex flex-col justify-between w-6 shrink-0 text-[#1f1f1f]">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M15 15V1H1" stroke="currentColor" strokeWidth="1.5" /></svg>
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M15 1V15H1" stroke="currentColor" strokeWidth="1.5" /></svg>
              </div>
            </div>
          </div>

          {/* Desktop: two-column masonry */}
          <div className="hidden md:flex gap-6 items-stretch">
            {/* Left column */}
            <div className="flex-1 flex flex-col justify-between">
              {/* Project 1: Surfers Paradise */}
              <div data-portfolio-item className="flex flex-col gap-[10px]">
                <div className="relative w-full h-[744px]">
                  <Image
                    src="/pictures/Page 1/Frame 3763.jpg"
                    alt="Surfers Paradise"
                    fill
                    className="object-cover object-left"
                    sizes="50vw"
                  />
                  <div className="absolute bottom-4 left-4 flex gap-3">
                    <span className="backdrop-blur-[10px] bg-white/30 text-[#111] text-sm font-medium tracking-[-0.04em] px-2 py-1 rounded-full">Social Media</span>
                    <span className="backdrop-blur-[10px] bg-white/30 text-[#111] text-sm font-medium tracking-[-0.04em] px-2 py-1 rounded-full">Photography</span>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <h3 className="text-4xl font-black uppercase tracking-[-0.04em] leading-[1.1]">Surfers Paradise</h3>
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
                    <path d="M7 17L17 7M17 7H7M17 7V17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              </div>

              {/* Project 2: Cyberpunk Caffe */}
              <div data-portfolio-item className="flex flex-col gap-[10px]">
                <div className="relative w-full h-[699px]">
                  <Image
                    src="/pictures/Page 1/Frame 3763_2.jpg"
                    alt="Cyberpunk Caffe"
                    fill
                    className="object-cover"
                    sizes="50vw"
                  />
                  <div className="absolute bottom-4 left-4 flex gap-3">
                    <span className="backdrop-blur-[10px] bg-white/30 text-[#111] text-sm font-medium tracking-[-0.04em] px-2 py-1 rounded-full">Social Media</span>
                    <span className="backdrop-blur-[10px] bg-white/30 text-[#111] text-sm font-medium tracking-[-0.04em] px-2 py-1 rounded-full">Photography</span>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <h3 className="text-4xl font-black uppercase tracking-[-0.04em] leading-[1.1]">Cyberpunk Caffe</h3>
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
                    <path d="M7 17L17 7M17 7H7M17 7V17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              </div>

              {/* CTA with brackets */}
              <div className="w-[465px] flex items-stretch gap-3">
                <div className="flex flex-col justify-between w-6 shrink-0 text-[#1f1f1f]">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M1 15V1H15" stroke="currentColor" strokeWidth="1.5" /></svg>
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M1 1V15H15" stroke="currentColor" strokeWidth="1.5" /></svg>
                </div>
                <div className="flex-1 flex flex-col gap-[10px] py-3">
                  <p className="text-sm italic leading-[1.3] tracking-[-0.04em] text-[#1f1f1f]">
                    Discover how my creativity transforms ideas into impactful
                    digital experiences — schedule a call with me to get started.
                  </p>
                  <button className="bg-black text-white text-sm font-medium tracking-[-0.04em] px-4 py-3 rounded-full whitespace-nowrap self-start">
                    Let&apos;s talk
                  </button>
                </div>
                <div className="flex flex-col justify-between w-6 shrink-0 text-[#1f1f1f]">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M15 15V1H1" stroke="currentColor" strokeWidth="1.5" /></svg>
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M15 1V15H1" stroke="currentColor" strokeWidth="1.5" /></svg>
                </div>
              </div>
            </div>

            {/* Right column — offset down */}
            <div className="flex-1 flex flex-col gap-[117px] pt-[240px]">
              {/* Project 3: Agency 976 */}
              <div data-portfolio-item className="flex flex-col gap-[10px]">
                <div className="relative w-full h-[699px]">
                  <Image
                    src="/pictures/Page 1/Frame 3763_3.jpg"
                    alt="Agency 976"
                    fill
                    className="object-cover"
                    sizes="50vw"
                  />
                  <div className="absolute bottom-4 left-4 flex gap-3">
                    <span className="backdrop-blur-[10px] bg-white/30 text-[#111] text-sm font-medium tracking-[-0.04em] px-2 py-1 rounded-full">Social Media</span>
                    <span className="backdrop-blur-[10px] bg-white/30 text-[#111] text-sm font-medium tracking-[-0.04em] px-2 py-1 rounded-full">Photography</span>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <h3 className="text-4xl font-black uppercase tracking-[-0.04em] leading-[1.1]">Agency 976</h3>
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
                    <path d="M7 17L17 7M17 7H7M17 7V17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              </div>

              {/* Project 4: Minimal Playground */}
              <div data-portfolio-item className="flex flex-col gap-[10px]">
                <div className="relative w-full h-[744px]">
                  <Image
                    src="/pictures/Page 1/Frame 3763_4.jpg"
                    alt="Minimal Playground"
                    fill
                    className="object-cover"
                    sizes="50vw"
                  />
                  <div className="absolute bottom-4 left-4 flex gap-3">
                    <span className="backdrop-blur-[10px] bg-white/30 text-[#111] text-sm font-medium tracking-[-0.04em] px-2 py-1 rounded-full">Social Media</span>
                    <span className="backdrop-blur-[10px] bg-white/30 text-[#111] text-sm font-medium tracking-[-0.04em] px-2 py-1 rounded-full">Photography</span>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <h3 className="text-4xl font-black uppercase tracking-[-0.04em] leading-[1.1]">Minimal Playground</h3>
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
                    <path d="M7 17L17 7M17 7H7M17 7V17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Testimonials Section */}
      {/* Mobile: title + scattered overlapping cards */}
      <section data-testimonials className="md:hidden w-full py-16 overflow-clip">
        <h2
          data-testimonials-title
          className="font-medium capitalize leading-[1.1] tracking-[-0.07em] text-black px-4 mb-6"
          style={{ fontSize: "clamp(3.5rem, 13.75vw, 198px)" }}
        >
          Testimonials
        </h2>
        <div className="relative min-h-[520px] px-4">
          {/* Card 1 — Marko (large, front-left) */}
          <div className="absolute left-4 top-0 rotate-[-4deg] z-10">
            <div className="bg-[#f1f1f1] border border-[#ddd] flex flex-col gap-4 items-start p-5 rounded-[4px] w-[75vw] max-w-[300px]">
              <Image src="/pictures/logo-1.svg" alt="Logo" width={143} height={19} className="h-5 w-auto" />
              <p className="text-sm leading-[1.3] tracking-[-0.04em] text-[#1f1f1f]">
                A brilliant creative partner who transformed our vision into a
                unique, high-impact brand identity. Their ability to craft
                everything from custom mascots to polished logos is truly
                impressive.
              </p>
              <p className="text-sm font-black uppercase tracking-[-0.04em] leading-[1.1]">Marko Stojković</p>
            </div>
          </div>
          {/* Card 4 — Sofia (peeking right) */}
          <div className="absolute right-[-5%] top-[10px] rotate-[3deg] z-0">
            <div className="bg-[#f1f1f1] border border-[#ddd] flex flex-col gap-4 items-start p-5 rounded-[4px] w-[65vw] max-w-[260px]">
              <Image src="/pictures/logo-4.svg" alt="Logo" width={81} height={36} className="h-7 w-auto" />
              <p className="text-sm leading-[1.3] tracking-[-0.04em] text-[#1f1f1f]">
                An incredibly versatile designer who delivers consistent quality
                across a wide range of styles and formats.
              </p>
              <p className="text-sm font-black uppercase tracking-[-0.04em] leading-[1.1]">Sofia Martínez</p>
            </div>
          </div>
        </div>
      </section>

      {/* Desktop: scattered cards around large title */}
      <section data-testimonials className="hidden md:block w-full overflow-clip px-8 py-[120px]">
        <div className="relative h-[987px] flex items-center justify-center">
          <h2
            data-testimonials-title
            className="relative z-10 font-medium capitalize text-center leading-[1.1] tracking-[-0.07em] text-black pointer-events-none"
            style={{ fontSize: "clamp(3.5rem, 13.75vw, 198px)" }}
          >
            Testimonials
          </h2>

          {/* Card 1 — Marko (top-left) */}
          <div data-testimonial-card className="absolute left-[7%] top-[14%] rotate-[-6.85deg]">
            <div className="bg-[#f1f1f1] border border-[#ddd] flex flex-col gap-4 items-start p-6 rounded-[4px] w-[353px]">
              <Image src="/pictures/logo-1.svg" alt="Logo" width={143} height={19} className="h-[19px] w-auto" />
              <p className="text-lg leading-[1.3] tracking-[-0.04em] text-[#1f1f1f]">
                A brilliant creative partner who transformed our vision into a
                unique, high-impact brand identity. Their ability to craft
                everything from custom mascots to polished logos is truly
                impressive.
              </p>
              <p className="text-base font-black uppercase tracking-[-0.04em] leading-[1.1]">Marko Stojković</p>
            </div>
          </div>

          {/* Card 2 — Lukas (center-right, behind title) */}
          <div data-testimonial-card className="absolute left-[47%] top-[27%] rotate-[2.9deg]">
            <div className="bg-[#f1f1f1] border border-[#ddd] flex flex-col gap-4 items-start p-6 rounded-[4px] w-[353px]">
              <Image src="/pictures/logo-2.svg" alt="Logo" width={138} height={19} className="h-[19px] w-auto" />
              <p className="text-lg leading-[1.3] tracking-[-0.04em] text-[#1f1f1f]">
                Professional, precise, and incredibly fast at handling complex
                product visualizations and templates.
              </p>
              <p className="text-base font-black uppercase tracking-[-0.04em] leading-[1.1]">Lukas Weber</p>
            </div>
          </div>

          {/* Card 3 — Sarah (bottom-left) */}
          <div data-testimonial-card className="absolute left-[21%] top-[56%] rotate-[2.23deg]">
            <div className="bg-[#f1f1f1] border border-[#ddd] flex flex-col gap-4 items-start p-6 rounded-[4px] w-[353px]">
              <Image src="/pictures/logo-3.svg" alt="Logo" width={109} height={31} className="h-[31px] w-auto" />
              <p className="text-lg leading-[1.3] tracking-[-0.04em] text-[#1f1f1f]">
                A strategic partner who balances stunning aesthetics with
                high-performance UX for complex platforms. They don&apos;t just
                make things look good; they solve business problems through
                visual clarity.
              </p>
              <p className="text-base font-black uppercase tracking-[-0.04em] leading-[1.1]">Sarah Jenkins</p>
            </div>
          </div>

          {/* Card 4 — Sofia (bottom-right) */}
          <div data-testimonial-card className="absolute left-[68.5%] top-[55%] rotate-[-4.15deg]">
            <div className="bg-[#f1f1f1] border border-[#ddd] flex flex-col gap-4 items-start p-6 rounded-[4px] w-[353px]">
              <Image src="/pictures/logo-4.svg" alt="Logo" width={81} height={36} className="h-[36px] w-auto" />
              <p className="text-lg leading-[1.3] tracking-[-0.04em] text-[#1f1f1f]">
                An incredibly versatile designer who delivers consistent quality
                across a wide range of styles and formats.
              </p>
              <p className="text-base font-black uppercase tracking-[-0.04em] leading-[1.1]">Sofia Martínez</p>
            </div>
          </div>
        </div>
      </section>
      {/* News Section */}
      <section data-news className="w-full bg-[#f3f3f3] overflow-clip px-4 md:px-8 py-16 md:py-[120px]">
        {/* Mobile: horizontal title + scroll */}
        <div className="md:hidden">
          <h2 className="text-2xl font-bold uppercase tracking-[-0.04em] leading-[1.1] mb-6">
            Keep up with my latest news &amp; achievements
          </h2>
          <div className="flex gap-4 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide">
            {[
              { image: "/pictures/keepup-1.jpg", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." },
              { image: "/pictures/keepup-2.jpg", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." },
              { image: "/pictures/keepup-3.jpg", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." },
            ].map((article, i) => (
              <div key={i} className="flex flex-col gap-4 min-w-[80vw] max-w-[320px] shrink-0 snap-start">
                <div className="relative w-full aspect-[353/469]">
                  <Image src={article.image} alt="News" fill className="object-cover" sizes="80vw" />
                </div>
                <p className="text-sm leading-[1.3] tracking-[-0.04em] text-[#1f1f1f]">{article.text}</p>
                <div className="flex items-center gap-2 border-b border-black pb-1 self-start">
                  <span className="text-sm font-medium tracking-[-0.04em]">Read more</span>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                    <path d="M7 17L17 7M17 7H7M17 7V17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Desktop: rotated title + 3 cards */}
        <div className="hidden md:flex items-end justify-between">
          {/* Rotated title */}
          <div className="flex h-[706px] items-center justify-center shrink-0 w-[110px]">
            <div className="-rotate-90 whitespace-nowrap">
              <h2
                className="font-light uppercase tracking-[-0.08em] leading-[0.86]"
                style={{ fontSize: "clamp(2rem, 4.44vw, 64px)" }}
              >
                Keep up with my latest<br />news &amp; achievements
              </h2>
            </div>
          </div>

          {/* Article cards */}
          <div className="flex gap-0 items-start w-[1020px]">
            {[
              { image: "/pictures/keepup-1.jpg", offset: false },
              { image: "/pictures/keepup-2.jpg", offset: true },
              { image: "/pictures/keepup-3.jpg", offset: false },
            ].map((article, i) => (
              <div key={i} data-news-card className="flex items-start">
                {/* Divider line between cards */}
                {i > 0 && (
                  <div className="w-px self-stretch bg-[#1f1f1f]/20 mx-4 shrink-0" />
                )}
                <div className={`flex flex-col gap-4 w-[353px] shrink-0 ${article.offset ? "pt-[120px]" : "h-[581px]"}`}>
                  <div className="relative w-full h-[469px] shrink-0">
                    <Image src={article.image} alt="News" fill className="object-cover" sizes="353px" />
                  </div>
                  <p className="flex-1 text-sm leading-[1.3] tracking-[-0.04em] text-[#1f1f1f]">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  </p>
                  <div className="flex items-center gap-2 border-b border-black pb-1 self-start">
                    <span className="text-sm font-medium tracking-[-0.04em]">Read more</span>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                      <path d="M7 17L17 7M17 7H7M17 7V17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Footer */}
      <footer data-footer data-nav-dark className="w-full bg-black text-white overflow-clip px-4 md:px-8 pt-12 md:pt-12">
        <div className="flex flex-col gap-12 md:gap-[120px]">
          {/* Top area */}
          <div data-footer-content className="flex flex-col gap-8 md:gap-12">
            {/* CTA + Social links */}
            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
              {/* Have a project? */}
              <div className="flex flex-col gap-3 w-full md:w-[298px]">
                <p className="text-2xl uppercase tracking-[-0.04em] leading-[1.1] font-light italic">
                  Have a <span className="font-black not-italic">project</span> in mind?
                </p>
                <button className="border border-white text-white text-sm font-medium tracking-[-0.04em] px-4 py-3 rounded-full whitespace-nowrap self-start">
                  Let&apos;s talk
                </button>
              </div>

              {/* Social links — mobile: stacked list, desktop: two columns */}
              <div className="md:hidden flex flex-col gap-1 text-lg uppercase tracking-[-0.04em]">
                <span>Facebook</span>
                <span>Instagram</span>
                <span>x.com</span>
                <span>Linkedin</span>
              </div>

              <div className="hidden md:block text-lg text-center uppercase tracking-[-0.04em] leading-[1.1] w-[298px]">
                <p>Facebook</p>
                <p>Instagram</p>
              </div>
              <div className="hidden md:block text-lg text-right uppercase tracking-[-0.04em] leading-[1.1] w-[298px]">
                <p>x.com</p>
                <p>Linkedin</p>
              </div>
            </div>

            {/* Divider */}
            <div className="w-full h-px bg-white/30" />
          </div>

          {/* Bottom area */}
          <div className="flex flex-col-reverse md:flex-row items-start md:items-end justify-between gap-8">
            {/* Large H.Studio wordmark */}
            <div data-footer-wordmark className="relative h-[140px] md:h-[219px] w-full md:w-[1093px] overflow-clip">
              <div className="absolute left-0 top-1/2 -translate-y-[45%]">
                <span
                  className="font-semibold capitalize leading-[0.8] tracking-[-0.06em] text-white whitespace-nowrap"
                  style={{ fontSize: "clamp(8rem, 20vw, 290px)" }}
                >
                  H.Studio
                </span>
              </div>
              {/* Coded By Claude — rotated label */}
              <div className="absolute left-0 top-1/2 -translate-y-1/2 flex items-center justify-center w-[15px] h-[160px]">
                <span className="font-mono text-sm uppercase text-white leading-[1.1] whitespace-nowrap -rotate-90">
                  [ Coded By Claude ]
                </span>
              </div>
            </div>

            {/* Legal links */}
            <div className="flex gap-8 items-center pb-4 md:pb-8 text-xs uppercase tracking-[-0.04em] text-white">
              <span className="underline">Licences</span>
              <span className="underline">Privacy policy</span>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
