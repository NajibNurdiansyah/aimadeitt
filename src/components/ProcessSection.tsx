import { PROCESS_STEPS, WHY_CHOOSE_ITEMS } from '../data/aimadeitData';

export default function ProcessSection() {
  return (
    <section
      id="process"
      className="border-b border-white/10 bg-[#090909] py-16 sm:py-24"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* How We Work: 5-Step Production Workflow */}
        <div className="max-w-2xl">
          <p className="text-xs font-medium tracking-[0.16em] text-[#D99A3E] uppercase">
            How We Work
          </p>
          <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-[#F5F1E8] text-balance sm:text-4xl">
            Simple, Transparent, and Built for Speed.
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-[#B9BEC7] sm:text-base">
            Every engagement follows a structured five-stage creative workflow so
            you always know what comes next.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-5">
          {PROCESS_STEPS.map((step) => (
            <div
              key={step.number}
              className="flex flex-col justify-between rounded-2xl border border-white/10 bg-[#141414] p-6"
            >
              <div>
                <span className="font-mono text-sm font-medium text-[#00E5F2] tabular-nums">
                  Step {step.number}
                </span>
                <h3 className="mt-3 font-display text-xl font-semibold text-[#F5F1E8]">
                  {step.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-[#B9BEC7]">
                  {step.description}
                </p>
              </div>
              <div
                aria-hidden="true"
                className="mt-6 h-px w-10 bg-[#D99A3E]/60"
              />
            </div>
          ))}
        </div>

        {/* Why Choose AIMADEIT */}
        <div className="mt-16 border-t border-white/10 pt-14">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-12">
            <div className="lg:col-span-4">
              <p className="text-xs font-medium tracking-[0.16em] text-[#00E5F2] uppercase">
                Why Choose AIMADEIT
              </p>
              <h3 className="mt-3 font-display text-2xl font-semibold text-[#F5F1E8] sm:text-3xl">
                Built as a Modern AI Production Studio.
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-[#B9BEC7]">
                We pair generative speed with disciplined human art direction so
                every deliverable stays cohesive and on-brand.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:col-span-8">
              {WHY_CHOOSE_ITEMS.map((item) => (
                <div
                  key={item.title}
                  className="border-t border-white/10 pt-4"
                >
                  <h4 className="text-base font-semibold text-[#F5D28A]">
                    {item.title}
                  </h4>
                  <p className="mt-1.5 text-sm leading-relaxed text-[#B9BEC7]">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
