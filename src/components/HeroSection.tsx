import { ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';
import ResilientImage from './ResilientImage';

interface HeroSectionProps {
  onStartProject: () => void;
}

const STUDIO_HIGHLIGHTS = [
  { value: '6', label: 'Core AI Creative Disciplines' },
  { value: '3–12 Days', label: 'Standard Production Window' },
  { value: 'From $25', label: 'Accessible Entry Pricing' },
  { value: 'Worldwide', label: 'Remote Creative Studio' },
];

export default function HeroSection({ onStartProject }: HeroSectionProps) {
  return (
    <section
      id="top"
      className="relative overflow-hidden border-b border-white/10 bg-[#090909]"
    >
      {/* Subtle studio ambient glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-40 right-0 h-96 w-96 rounded-full bg-[#D99A3E]/8 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 left-1/4 h-72 w-72 rounded-full bg-[#00E5F2]/6 blur-3xl"
      />

      <div className="mx-auto max-w-7xl px-4 pb-14 pt-12 sm:px-6 lg:px-8 lg:pb-20 lg:pt-16">
        {/* Balanced 2-Column Split */}
        <div className="grid grid-cols-1 items-stretch gap-10 lg:grid-cols-12 lg:gap-12">
          {/* Left Column: Brand Kicker, Display Headline, Value Prop, CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col justify-center lg:col-span-6"
          >
            <p className="text-xs font-medium tracking-[0.18em] text-[#00E5F2] uppercase">
              AI Creative Lab · Imagine It. Create It. AIMADEIT.
            </p>

            <h1 className="mt-4 max-w-2xl font-display text-[clamp(2.25rem,4vw,3.75rem)] font-semibold leading-[1.08] tracking-tight text-[#F5F1E8] text-balance">
              Turn Your Imagination Into Reality.
            </h1>

            <p className="mt-5 max-w-xl text-base leading-relaxed text-[#B9BEC7] sm:text-lg">
              AI-powered creativity, professional visual storytelling, and limitless
              production possibilities. AIMADEIT crafts AI-generated videos,
              photorealistic imagery, digital advertisements, virtual characters, and
              social media campaigns built for modern brands.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <button
                type="button"
                onClick={onStartProject}
                className="inline-flex min-h-12 items-center gap-2.5 rounded-lg bg-[#D99A3E] px-7 py-3 text-sm font-semibold text-[#090909] transition-colors duration-200 hover:bg-[#F5D28A] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#00E5F2] whitespace-nowrap shrink-0 cursor-pointer"
              >
                <span>Start Your Project</span>
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </button>

              <a
                href="#portfolio"
                className="inline-flex min-h-12 items-center justify-center rounded-lg border border-white/15 bg-[#141414] px-6 py-3 text-sm font-medium text-[#F5F1E8] transition-colors duration-200 hover:border-[#D99A3E]/60 hover:text-[#F5D28A] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#00E5F2] whitespace-nowrap shrink-0"
              >
                Explore Our Work
              </a>
            </div>
          </motion.div>

          {/* Right Column: Dominant 16:9 / Full-Height Studio Showcase */}
          <motion.div
            initial={{ opacity: 0, scale: 0.985 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.55, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6"
          >
            <div className="relative h-full min-h-[300px] overflow-hidden rounded-2xl border border-white/10 bg-[#141414] sm:min-h-[380px] lg:min-h-[460px]">
              <ResilientImage
                src="/src/assets/images/hero_creative_lab_1795415107588.jpg"
                alt="AIMADEIT dark obsidian creative studio with metallic gold monolith and cinema lighting"
                title="AIMADEIT AI Creative Lab Studio"
                className="h-full w-full object-cover lg:h-full"
                containerClassName="h-full w-full min-h-[300px]"
              />
              {/* Measured Contrast Scrim */}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#090909]/90 via-[#090909]/25 to-transparent"
              />
              <div className="absolute inset-x-0 bottom-0 p-6 sm:p-7">
                <p className="text-xs font-medium tracking-[0.14em] text-[#F5D28A] uppercase">
                  Where Imagination Becomes Creation
                </p>
                <p className="mt-1.5 max-w-md text-sm leading-relaxed text-[#F5F1E8]/90">
                  Cinematic AI video direction, commercial product renders, and
                  consistent brand characters delivered from our remote studio.
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Full-Width 4-Column Studio Highlights Strip Below Hero Split */}
        <div className="mt-12 grid grid-cols-2 gap-6 border-t border-white/10 pt-8 md:grid-cols-4 md:gap-8">
          {STUDIO_HIGHLIGHTS.map((item) => (
            <div key={item.label}>
              <p className="font-mono text-xl font-medium tracking-tight text-[#F5D28A] tabular-nums sm:text-2xl">
                {item.value}
              </p>
              <p className="mt-1 text-sm text-[#B9BEC7]">{item.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
