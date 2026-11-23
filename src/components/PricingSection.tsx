import { useState } from 'react';
import { Check } from 'lucide-react';
import {
  INDIVIDUAL_RATES,
  MONTHLY_PLANS,
  PROJECT_PACKAGES,
} from '../data/aimadeitData';

interface PricingSectionProps {
  onSelectPlan: (service: string, budget: string) => void;
}

type PricingTab = 'packages' | 'monthly' | 'individual';

export default function PricingSection({ onSelectPlan }: PricingSectionProps) {
  const [activeTab, setActiveTab] = useState<PricingTab>('packages');

  return (
    <section
      id="pricing"
      className="border-b border-white/10 bg-[#0D0D0D] py-16 sm:py-24"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
          <div className="max-w-2xl">
            <p className="text-xs font-medium tracking-[0.16em] text-[#D99A3E] uppercase">
              Pricing & Packages
            </p>
            <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-[#F5F1E8] text-balance sm:text-4xl">
              The Right Creative Package for Your Vision.
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-[#B9BEC7] sm:text-base">
              All prices are listed in USD. Choose a structured project package,
              subscribe for recurring content, or start with an individual rate
              from $25.
            </p>
          </div>

          {/* Segmented Pricing Mode Switcher */}
          <div
            role="tablist"
            aria-label="Pricing Views"
            className="inline-flex rounded-xl border border-white/10 bg-[#141414] p-1 self-start lg:self-auto"
          >
            <button
              role="tab"
              type="button"
              aria-selected={activeTab === 'packages'}
              onClick={() => setActiveTab('packages')}
              className={`min-h-10 rounded-lg px-4 py-2 text-xs font-semibold transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                activeTab === 'packages'
                  ? 'bg-[#D99A3E] text-[#090909]'
                  : 'text-[#B9BEC7] hover:text-[#F5F1E8]'
              }`}
            >
              Project Packages
            </button>
            <button
              role="tab"
              type="button"
              aria-selected={activeTab === 'monthly'}
              onClick={() => setActiveTab('monthly')}
              className={`min-h-10 rounded-lg px-4 py-2 text-xs font-semibold transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                activeTab === 'monthly'
                  ? 'bg-[#D99A3E] text-[#090909]'
                  : 'text-[#B9BEC7] hover:text-[#F5F1E8]'
              }`}
            >
              Monthly Plans
            </button>
            <button
              role="tab"
              type="button"
              aria-selected={activeTab === 'individual'}
              onClick={() => setActiveTab('individual')}
              className={`min-h-10 rounded-lg px-4 py-2 text-xs font-semibold transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                activeTab === 'individual'
                  ? 'bg-[#D99A3E] text-[#090909]'
                  : 'text-[#B9BEC7] hover:text-[#F5F1E8]'
              }`}
            >
              Individual Rates
            </button>
          </div>
        </div>

        {/* View 1: 4 Project Packages */}
        {activeTab === 'packages' && (
          <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4">
            {PROJECT_PACKAGES.map((pkg) => (
              <article
                key={pkg.id}
                className={`flex flex-col justify-between rounded-2xl border p-7 ${
                  pkg.highlighted
                    ? 'border-[#D99A3E] bg-[#161410]'
                    : 'border-white/10 bg-[#141414]'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between gap-2">
                    <h3 className="font-display text-xl font-semibold text-[#F5F1E8]">
                      {pkg.name}
                    </h3>
                    {pkg.highlighted && (
                      <span className="text-xs font-semibold tracking-wider text-[#F5D28A] uppercase">
                        Most Complete
                      </span>
                    )}
                  </div>

                  <div className="mt-4 flex items-baseline gap-1.5 border-b border-white/10 pb-5">
                    <span className="font-mono text-3xl font-semibold text-[#F5D28A] tabular-nums">
                      {pkg.price}
                    </span>
                    <span className="text-xs text-[#B9BEC7]">{pkg.cadence}</span>
                  </div>

                  <p className="mt-4 text-sm leading-relaxed text-[#B9BEC7]">
                    {pkg.audience}
                  </p>

                  <p className="mt-4 text-xs text-[#00E5F2]">
                    Estimated delivery: {pkg.delivery}
                  </p>

                  <ul className="mt-5 space-y-2.5 text-sm text-[#F5F1E8]/90">
                    {pkg.features.map((feat) => (
                      <li key={feat} className="flex items-start gap-2.5">
                        <Check
                          className="mt-0.5 h-4 w-4 shrink-0 text-[#D99A3E]"
                          aria-hidden="true"
                        />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-8 pt-2">
                  <button
                    type="button"
                    onClick={() =>
                      onSelectPlan(pkg.inquiryService, pkg.inquiryBudget)
                    }
                    className={`inline-flex min-h-11 w-full items-center justify-center rounded-lg px-4 py-2.5 text-sm font-semibold transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#00E5F2] whitespace-nowrap shrink-0 cursor-pointer ${
                      pkg.highlighted
                        ? 'bg-[#D99A3E] text-[#090909] hover:bg-[#F5D28A]'
                        : 'border border-white/15 bg-[#090909] text-[#F5F1E8] hover:border-[#D99A3E] hover:text-[#F5D28A]'
                    }`}
                  >
                    Choose {pkg.name}
                  </button>
                </div>
              </article>
            ))}
          </div>
        )}

        {/* View 2: Monthly Subscription Plans */}
        {activeTab === 'monthly' && (
          <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
            {MONTHLY_PLANS.map((plan) => (
              <article
                key={plan.id}
                className={`flex flex-col justify-between rounded-2xl border p-7 ${
                  plan.highlighted
                    ? 'border-[#D99A3E] bg-[#161410]'
                    : 'border-white/10 bg-[#141414]'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between gap-2">
                    <h3 className="font-display text-xl font-semibold text-[#F5F1E8]">
                      {plan.name}
                    </h3>
                    {plan.highlighted && (
                      <span className="text-xs font-semibold tracking-wider text-[#F5D28A] uppercase">
                        Popular Retainer
                      </span>
                    )}
                  </div>

                  <div className="mt-4 flex items-baseline gap-1.5 border-b border-white/10 pb-5">
                    <span className="font-mono text-3xl font-semibold text-[#F5D28A] tabular-nums">
                      {plan.price}
                    </span>
                    <span className="text-xs text-[#B9BEC7]">/ month</span>
                  </div>

                  <p className="mt-4 text-sm font-medium text-[#00E5F2]">
                    {plan.deliverablesSummary}
                  </p>

                  <ul className="mt-5 space-y-2.5 text-sm text-[#F5F1E8]/90">
                    {plan.features.map((feat) => (
                      <li key={feat} className="flex items-start gap-2.5">
                        <Check
                          className="mt-0.5 h-4 w-4 shrink-0 text-[#D99A3E]"
                          aria-hidden="true"
                        />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-8 pt-2">
                  <button
                    type="button"
                    onClick={() =>
                      onSelectPlan(
                        'Social Media Content Creation',
                        plan.inquiryBudget
                      )
                    }
                    className={`inline-flex min-h-11 w-full items-center justify-center rounded-lg px-4 py-2.5 text-sm font-semibold transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                      plan.highlighted
                        ? 'bg-[#D99A3E] text-[#090909] hover:bg-[#F5D28A]'
                        : 'border border-white/15 bg-[#090909] text-[#F5F1E8] hover:border-[#D99A3E] hover:text-[#F5D28A]'
                    }`}
                  >
                    Select {plan.name} Plan
                  </button>
                </div>
              </article>
            ))}
          </div>
        )}

        {/* View 3: Individual Service Rates Table */}
        {activeTab === 'individual' && (
          <div className="mt-10 overflow-hidden rounded-2xl border border-white/10 bg-[#141414]">
            <div className="overflow-x-auto">
              <table className="w-full border-collapse text-left text-sm">
                <thead>
                  <tr className="border-b border-white/10 bg-[#111111] text-xs font-semibold tracking-wider text-[#B9BEC7] uppercase">
                    <th className="px-6 py-4">Service</th>
                    <th className="px-6 py-4">Starting Price</th>
                    <th className="px-6 py-4">Scope Notes</th>
                    <th className="px-6 py-4 text-right">Action</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/10">
                  {INDIVIDUAL_RATES.map((row) => (
                    <tr
                      key={row.service}
                      className="transition-colors hover:bg-[#191919]"
                    >
                      <td className="px-6 py-4 font-medium text-[#F5F1E8]">
                        {row.service}
                      </td>
                      <td className="px-6 py-4 font-mono font-medium text-[#F5D28A] tabular-nums">
                        {row.startingPrice}
                      </td>
                      <td className="px-6 py-4 text-[#B9BEC7]">{row.notes}</td>
                      <td className="px-6 py-4 text-right">
                        <button
                          type="button"
                          onClick={() =>
                            onSelectPlan(
                              row.service === 'AI Product Photography'
                                ? 'AI Image Generation'
                                : row.service === 'AI Product Promotional Video'
                                  ? 'Product Promotional Videos'
                                  : row.service === 'Social Media Content Package'
                                    ? 'Social Media Content Creation'
                                    : row.service,
                              'Under $150 (Single Image / Micro Project)'
                            )
                          }
                          className="text-xs font-semibold text-[#00E5F2] transition-colors hover:text-[#F5F1E8] whitespace-nowrap cursor-pointer"
                        >
                          Request Quote
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* Transparent Terms & Add-On Details */}
        <div className="mt-10 grid grid-cols-1 gap-6 rounded-2xl border border-white/10 bg-[#111111] p-6 text-sm text-[#B9BEC7] sm:p-7 lg:grid-cols-3">
          <div>
            <h4 className="font-semibold text-[#F5F1E8]">Add-On Options</h4>
            <p className="mt-1.5 leading-relaxed">
              Additional revisions ($25–$75), express delivery (+25%–50%), extra
              short videos (from $75), and extra AI images (from $10).
            </p>
          </div>
          <div>
            <h4 className="font-semibold text-[#F5F1E8]">Payment Terms</h4>
            <p className="mt-1.5 leading-relaxed">
              50% deposit before production and 50% upon final approval. Monthly
              subscriptions are billed in advance.
            </p>
          </div>
          <div className="flex flex-col justify-between gap-3 sm:flex-row lg:flex-col lg:items-start">
            <div>
              <h4 className="font-semibold text-[#F5F1E8]">
                Need Custom Licensing or Scope?
              </h4>
              <p className="mt-1 text-xs text-[#B9BEC7]">
                Final quotes reflect duration, revisions, and commercial rights.
              </p>
            </div>
            <button
              type="button"
              onClick={() =>
                onSelectPlan(
                  'Custom AI Creative Campaign',
                  '$1,500+ (Enterprise)'
                )
              }
              className="text-xs font-semibold text-[#F5D28A] underline-offset-4 hover:underline whitespace-nowrap cursor-pointer"
            >
              Request Custom Pricing
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
