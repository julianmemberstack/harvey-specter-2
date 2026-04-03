import Image from "next/image";
import Link from "next/link";

const navLinks = [
  { label: "About", href: "#" },
  { label: "Services", href: "#" },
  { label: "Projects", href: "#" },
  { label: "News", href: "#" },
  { label: "Contact", href: "#" },
];

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative h-screen w-full overflow-hidden bg-[#c8c4bc]">
        {/* Background Image */}
        <Image
          src="/pictures/hero-background-image.jpg"
          alt="Harvey Specter"
          fill
          priority
          className="object-cover object-[center_20%] scale-125"
        />

        {/* Bottom blur/fade overlay — above image, below content */}
        <div className="absolute inset-x-0 bottom-0 z-[5] h-[55%] bg-gradient-to-t from-black/30 via-black/10 to-transparent backdrop-blur-[2px] [mask-image:linear-gradient(to_top,black_30%,transparent)]" />

        {/* Navbar */}
        <nav className="relative z-30 flex items-center justify-between px-8 py-6 lg:px-12">
          <Link href="/" className="text-lg font-semibold text-black">
            H.Studio
          </Link>

          <ul className="hidden gap-10 md:flex">
            {navLinks.map((link) => (
              <li key={link.label}>
                <Link
                  href={link.href}
                  className="text-sm font-semibold text-black transition-opacity hover:opacity-60"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          <Link
            href="#"
            className="rounded-full bg-black px-6 py-2.5 text-sm font-medium tracking-tight text-white transition-opacity hover:opacity-80"
          >
            Let&apos;s talk
          </Link>
        </nav>

        {/* Name overlay — no z-index so mix-blend-overlay works against the image */}
        <div className="absolute inset-0 flex flex-col justify-end pb-16 lg:pb-24">
          <p className="mb-4 px-8 font-mono text-xs tracking-[0.2em] text-white/80 uppercase lg:px-12">
            [ Hello I&apos;m ]
          </p>

          <h1
            className="w-full px-8 text-[clamp(4rem,15.5vw,198px)] font-medium leading-[1.1] tracking-[-0.07em] text-white mix-blend-overlay lg:px-12"
          >
            Harvey Specter
          </h1>

          {/* Spacer to match description height below */}
          <div className="mt-8 max-w-md lg:mt-12">
            <p className="invisible text-xs leading-relaxed uppercase">placeholder</p>
            <span className="invisible mt-6 inline-block py-3 text-sm">placeholder</span>
          </div>
        </div>

        {/* Description — above blur overlay */}
        <div className="absolute inset-0 z-10 flex flex-col justify-end pb-16 pointer-events-none lg:pb-24">
          {/* Invisible spacers for subtitle + name */}
          <p className="invisible mb-4 px-8 text-xs lg:px-12">spacer</p>
          <p className="invisible px-8 text-[clamp(4rem,15.5vw,198px)] leading-[1.1] lg:px-12">spacer</p>

          <div className="mt-8 ml-auto max-w-md px-8 pointer-events-auto lg:mt-12 lg:px-12">
            <p className="text-xs italic leading-relaxed text-black uppercase">
              <span className="font-bold">H.Studio is a</span>{" "}
              <span className="font-normal">full-service</span>{" "}
              <span className="font-bold">
                creative studio creating beautiful digital experiences and
                products.
              </span>{" "}
              <span className="font-normal">We are an award winning</span>{" "}
              <span className="font-bold">
                design and art group specializing in branding, web design and
                engineering.
              </span>
            </p>

            <Link
              href="#"
              className="mt-6 inline-block rounded-full bg-black px-7 py-3 text-sm font-medium tracking-tight text-white transition-opacity hover:opacity-80"
            >
              Let&apos;s talk
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
