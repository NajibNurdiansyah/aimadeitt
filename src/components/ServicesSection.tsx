import { ArrowUpRight } from 'lucide-react';
import { ADDITIONAL_CAPABILITIES, SERVICES } from '../data/aimadeitData';

interface ServicesSectionProps {
  onSelectService: (serviceName: string) => void;
}

export default function ServicesSection({
  onSelectService,
}: ServicesSectionProps) {
  return (
    <section
      id="services"
      className="border-b border-white/10 bg-[#090909] py-16 sm:py-24"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
          <div className="max-w-2xl">
            <p className="text-xs font-medium tracking-[0.16em] text-[#D99A3E] uppercase">
              Creative Capabilities
            </p>
            <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-[#F5F1E8] text-balance sm:text-4xl">
              Your Ideas. Our Creative Technology.
            </h2>
          </div>
          <p className="max-w-md text-sm leading-relaxed text-[#B9BEC7]">
            From AI-generated visuals to cinematic promotional videos, every project
            begins with your vision and ends with polished digital assets ready for
            deployment.
          </p>
        </div>

        {/* Asymmetric Bento Grid */}
        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((service) => (
            <article
              key={service.id}
              className={`group flex flex-col justify-between rounded-2xl border border-white/10 bg-[#141414] p-7 transition-colors duration-200 hover:border-[#D99A3E]/50 ${
                service.featured ? 'lg:col-span-2' : 'lg:col-span-1'
              }`}
            >
              <div>
                <div className="flex items-baseline justify-between gap-4 border-b border-white/10 pb-4">
                  <span className="font-mono text-xs font-medium text-[#00E5F2] tabular-nums">
                    {service.index}. Service
                  </span>
                  <div className="text-right">
                    <span className="font-mono text-lg font-medium text-[#F5D28A] tabular-nums">
                      {service.startingPrice}
                    </span>
                    <span className="ml-1.5 text-xs text-[#B9BEC7]">
                      {service.priceUnit}
                    </span>
                  </div>
                </div>

                <h3 className="mt-5 font-display text-2xl font-semibold text-[#F5F1E8]">
                  {service.title}
                </h3>

                <p className="mt-3 text-sm leading-relaxed text-[#B9BEC7]">
                  {service.summary}
                </p>

                <ul
                  className={`mt-6 grid gap-2.5 text-sm text-[#F5F1E8]/85 ${
                    service.featured ? 'sm:grid-cols-2' : 'grid-cols-1'
                  }`}
                >
                  {service.deliverables.map((item) => (
                    <li key={item} className="flex items-start gap-2.5">
                      <span
                        aria-hidden="true"
                        className="mt-2 h-1 w-1 shrink-0 rounded-full bg-[#D99A3E]"
                      />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-8 pt-2">
                <button
                  type="button"
                  onClick={() => onSelectService(service.inquiryValue)}
                  className="inline-flex min-h-10 items-center gap-2 rounded-lg border border-white/15 bg-[#090909] px-4 py-2 text-xs font-semibold text-[#F5F1E8] transition-colors duration-200 hover:border-[#D99A3E] hover:text-[#F5D28A] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#00E5F2] whitespace-nowrap shrink-0 cursor-pointer"
                >
                  <span>Request This Service</span>
                  <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
                </button>
              </div>
            </article>
          ))}
        </div>

        {/* Additional Creative Services Strip */}
        <div className="mt-10 flex flex-col justify-between gap-6 rounded-2xl border border-white/10 bg-[#121212] p-6 sm:p-8 lg:flex-row lg:items-center">
          <div>
            <h3 className="text-base font-semibold text-[#F5F1E8]">
              Additional Creative Services & Custom Workflows
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-[#B9BEC7]">
              {ADDITIONAL_CAPABILITIES.join(' · ')}
            </p>
          </div>
          <button
            type="button"
            onClick={() => onSelectService('Custom AI Creative Campaign')}
            className="inline-flex min-h-11 items-center justify-center rounded-lg bg-[#D99A3E] px-5 py-2.5 text-sm font-semibold text-[#090909] transition-colors hover:bg-[#F5D28A] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#00E5F2] whitespace-nowrap shrink-0 cursor-pointer"
          >
            Request Custom Quote
          </button>
        </div>
      </div>
    </section>
  );
}
