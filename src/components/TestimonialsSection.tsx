import { TESTIMONIALS } from '../data/aimadeitData';

export default function TestimonialsSection() {
  return (
    <section
      id="testimonials"
      className="border-b border-white/10 bg-[#090909] py-16 sm:py-20"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <p className="text-xs font-medium tracking-[0.16em] text-[#D99A3E] uppercase">
              Client Perspectives
            </p>
            <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-[#F5F1E8] sm:text-4xl">
              Trusted Creative Direction.
            </h2>
          </div>
          <p className="max-w-sm text-xs text-[#B9BEC7]/80">
            Sample client testimonials presented for agency layout demonstration.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2">
          {TESTIMONIALS.map((item) => (
            <blockquote
              key={item.id}
              className="flex flex-col justify-between rounded-2xl border border-white/10 bg-[#141414] p-7"
            >
              <p className="text-base leading-relaxed text-[#F5F1E8]/90">
                “{item.quote}”
              </p>

              <footer className="mt-6 border-t border-white/10 pt-4">
                <p className="text-sm font-semibold text-[#F5D28A]">
                  {item.name}
                </p>
                <p className="mt-0.5 text-xs text-[#B9BEC7]">{item.role}</p>
              </footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}
