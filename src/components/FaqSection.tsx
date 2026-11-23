import { useState } from 'react';
import { Minus, Plus } from 'lucide-react';
import { FAQS } from '../data/aimadeitData';

export default function FaqSection() {
  const [openId, setOpenId] = useState<string | null>(FAQS[0].id);

  const toggleFaq = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section
      id="faq"
      className="border-b border-white/10 bg-[#0D0D0D] py-16 sm:py-24"
    >
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="text-xs font-medium tracking-[0.16em] text-[#00E5F2] uppercase">
            Frequently Asked Questions
          </p>
          <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-[#F5F1E8] sm:text-4xl">
            Production Clarity Before You Start.
          </h2>
        </div>

        <div className="mt-12 divide-y divide-white/10 border-y border-white/10">
          {FAQS.map((faq) => {
            const isOpen = openId === faq.id;
            return (
              <div key={faq.id}>
                <button
                  type="button"
                  aria-expanded={isOpen}
                  onClick={() => toggleFaq(faq.id)}
                  className="flex min-h-14 w-full items-center justify-between gap-4 py-5 text-left transition-colors hover:text-[#F5D28A] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#00E5F2] cursor-pointer"
                >
                  <span className="text-base font-medium text-[#F5F1E8]">
                    {faq.question}
                  </span>
                  <span className="shrink-0 text-[#D99A3E]">
                    {isOpen ? (
                      <Minus className="h-4 w-4" aria-hidden="true" />
                    ) : (
                      <Plus className="h-4 w-4" aria-hidden="true" />
                    )}
                  </span>
                </button>
                {isOpen && (
                  <div className="pb-5 pr-8 text-sm leading-relaxed text-[#B9BEC7]">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
