import { CORE_VALUES } from '../data/aimadeitData';

export default function AboutSection() {
  return (
    <section
      id="about"
      className="border-b border-white/10 bg-[#0D0D0D] py-16 sm:py-24"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Top Editorial Story Split */}
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <p className="text-xs font-medium tracking-[0.16em] text-[#D99A3E] uppercase">
              About AIMADEIT
            </p>
            <h2 className="mt-3 font-display text-3xl font-semibold leading-tight tracking-tight text-[#F5F1E8] text-balance sm:text-4xl">
              Creativity Meets Artificial Intelligence.
            </h2>
            <p className="mt-5 text-base leading-relaxed text-[#F5D28A]/90">
              Imagine without limits. Create with purpose. Deliver with excellence.
            </p>
          </div>

          <div className="space-y-5 text-base leading-relaxed text-[#B9BEC7] lg:col-span-7">
            <p>
              AIMADEIT is a next-generation AI Creative Lab dedicated to
              transforming creative ideas into stunning digital experiences. We
              combine cutting-edge AI technology, creative storytelling, and
              professional design principles to help brands, businesses,
              entrepreneurs, and content creators produce high-quality visual
              content without the limitations of traditional production.
            </p>
            <p>
              Whether you are launching a product, building a personal brand, or
              developing a multi-channel marketing campaign, we bring imagination to
              life with precision and visual consistency. At AIMADEIT, we believe
              every great idea deserves to be seen.
            </p>

            {/* Mission & Vision Separated by Subtle Hairline Dividers */}
            <div className="grid grid-cols-1 gap-8 border-t border-white/10 pt-8 sm:grid-cols-2">
              <div>
                <h3 className="text-sm font-semibold tracking-wide text-[#F5F1E8] uppercase">
                  Our Mission
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-[#B9BEC7]">
                  To empower individuals and businesses with innovative AI-powered
                  creative solutions that transform ideas into impactful digital
                  content.
                </p>
              </div>
              <div>
                <h3 className="text-sm font-semibold tracking-wide text-[#F5F1E8] uppercase">
                  Our Vision
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-[#B9BEC7]">
                  To become a globally recognized AI creative agency, leading the
                  future of digital storytelling, visual communication, and
                  intelligent content production.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* 6 Core Values in Clean Hairline Grid */}
        <div className="mt-16 border-t border-white/10 pt-12">
          <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
            <div>
              <p className="text-xs font-medium tracking-[0.16em] text-[#00E5F2] uppercase">
                Core Principles
              </p>
              <h3 className="mt-2 font-display text-2xl font-semibold text-[#F5F1E8]">
                Standards Behind Every Frame
              </h3>
            </div>
            <p className="max-w-md text-sm text-[#B9BEC7]">
              Remote-based studio serving US and international B2B, B2C, and creator
              partnerships.
            </p>
          </div>

          <div className="mt-8 grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 sm:grid-cols-2 lg:grid-cols-3">
            {CORE_VALUES.map((val) => (
              <div
                key={val.number}
                className="bg-[#111111] p-6 transition-colors duration-200 hover:bg-[#161616] sm:p-7"
              >
                <span className="font-mono text-xs font-medium text-[#D99A3E] tabular-nums">
                  {val.number}
                </span>
                <h4 className="mt-3 text-lg font-semibold text-[#F5F1E8]">
                  {val.title}
                </h4>
                <p className="mt-2 text-sm leading-relaxed text-[#B9BEC7]">
                  {val.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
