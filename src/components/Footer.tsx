import { useEffect, useState } from 'react';
import { X } from 'lucide-react';
import {
  POLICY_CONTENT,
  SERVICES,
  SOCIAL_HANDLES,
} from '../data/aimadeitData';

type PolicyKey = 'privacy' | 'terms' | 'refund';

interface FooterProps {
  onSelectService: (serviceName: string) => void;
}

export default function Footer({ onSelectService }: FooterProps) {
  const [activePolicy, setActivePolicy] = useState<PolicyKey | null>(null);

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setActivePolicy(null);
    };
    if (activePolicy) {
      window.addEventListener('keydown', handleEsc);
    }
    return () => window.removeEventListener('keydown', handleEsc);
  }, [activePolicy]);

  return (
    <footer className="bg-[#090909] py-14 text-sm text-[#B9BEC7]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 border-b border-white/10 pb-12 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand Summary */}
          <div>
            <p className="font-display text-xl font-semibold tracking-[0.14em] text-[#F5D28A]">
              AIMADEIT
            </p>
            <p className="mt-1 text-xs font-medium tracking-[0.16em] text-[#00E5F2] uppercase">
              AI Creative Lab
            </p>
            <p className="mt-4 text-sm leading-relaxed text-[#B9BEC7]">
              Imagine It. Create It. AIMADEIT. Transforming ideas into
              extraordinary digital experiences through AI-powered creativity.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xs font-semibold tracking-wider text-[#F5F1E8] uppercase">
              Quick Links
            </h3>
            <ul className="mt-4 space-y-2.5">
              {[
                { label: 'Home', href: '#top' },
                { label: 'About Us', href: '#about' },
                { label: 'Services', href: '#services' },
                { label: 'Portfolio', href: '#portfolio' },
                { label: 'Pricing', href: '#pricing' },
                { label: 'Contact', href: '#contact' },
              ].map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="transition-colors hover:text-[#F5D28A]"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Our Services */}
          <div>
            <h3 className="text-xs font-semibold tracking-wider text-[#F5F1E8] uppercase">
              Our Services
            </h3>
            <ul className="mt-4 space-y-2.5">
              {SERVICES.map((svc) => (
                <li key={svc.id}>
                  <button
                    type="button"
                    onClick={() => onSelectService(svc.inquiryValue)}
                    className="text-left transition-colors hover:text-[#F5D28A] cursor-pointer"
                  >
                    {svc.title}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Social Channels */}
          <div>
            <h3 className="text-xs font-semibold tracking-wider text-[#F5F1E8] uppercase">
              Connect
            </h3>
            <ul className="mt-4 space-y-2 text-xs">
              <li>
                <a
                  href="mailto:hello@aimadeit.example"
                  className="font-mono text-[#F5F1E8] hover:text-[#00E5F2]"
                >
                  hello@aimadeit.example
                </a>
              </li>
              <li className="font-mono text-[#B9BEC7]">www.aimadeit.example</li>
            </ul>

            <h4 className="mt-6 text-xs font-semibold tracking-wider text-[#F5F1E8] uppercase">
              Social Channels
            </h4>
            <ul className="mt-3 space-y-1.5 text-xs">
              {SOCIAL_HANDLES.map((item) => (
                <li key={item.platform} className="flex justify-between gap-2">
                  <span className="text-[#B9BEC7]">{item.platform}</span>
                  <span className="text-[#F5F1E8]/85">{item.handle}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Copyright & Policies */}
        <div className="mt-8 flex flex-col items-start justify-between gap-4 text-xs text-[#B9BEC7]/80 sm:flex-row sm:items-center">
          <p>© 2026 AIMADEIT AI Creative Lab. All rights reserved.</p>
          <div className="flex flex-wrap items-center gap-5">
            <button
              type="button"
              onClick={() => setActivePolicy('privacy')}
              className="transition-colors hover:text-[#F5D28A] cursor-pointer"
            >
              Privacy Policy
            </button>
            <button
              type="button"
              onClick={() => setActivePolicy('terms')}
              className="transition-colors hover:text-[#F5D28A] cursor-pointer"
            >
              Terms & Conditions
            </button>
            <button
              type="button"
              onClick={() => setActivePolicy('refund')}
              className="transition-colors hover:text-[#F5D28A] cursor-pointer"
            >
              Refund Policy
            </button>
          </div>
        </div>
      </div>

      {/* Policy Modal */}
      {activePolicy && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="policy-title"
          className="fixed inset-0 z-50 flex items-center justify-center bg-[#090909]/85 p-4 backdrop-blur-sm"
          onClick={() => setActivePolicy(null)}
        >
          <div
            className="relative w-full max-w-lg rounded-2xl border border-white/15 bg-[#141414] p-6 sm:p-8"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setActivePolicy(null)}
              aria-label="Close policy dialog"
              className="absolute right-4 top-4 inline-flex h-9 w-9 items-center justify-center rounded-lg border border-white/15 bg-[#090909] text-[#F5F1E8] hover:border-[#D99A3E] cursor-pointer"
            >
              <X className="h-4 w-4" aria-hidden="true" />
            </button>

            <h3
              id="policy-title"
              className="font-display text-2xl font-semibold text-[#F5F1E8]"
            >
              {POLICY_CONTENT[activePolicy].title}
            </h3>
            <div className="mt-4 space-y-3 text-sm leading-relaxed text-[#B9BEC7]">
              {POLICY_CONTENT[activePolicy].body.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </div>
        </div>
      )}
    </footer>
  );
}
