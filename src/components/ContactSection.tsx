import { ChangeEvent, FormEvent, useEffect, useState } from 'react';
import {
  AlertCircle,
  CheckCircle2,
  Paperclip,
  Send,
  Trash2,
} from 'lucide-react';
import {
  BUDGET_OPTIONS,
  CONTACT_EMAILS,
  OPERATING_HOURS,
  SERVICE_OPTIONS,
} from '../data/aimadeitData';

interface ContactSectionProps {
  preselectedService: string;
  preselectedBudget: string;
  preselectedNote: string;
}

interface AttachedFile {
  name: string;
  sizeLabel: string;
}

interface FormErrors {
  fullName?: string;
  email?: string;
  description?: string;
}

function formatFileSize(bytes: number): string {
  if (bytes < 1024) return `${bytes} B`;
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
  return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
}

export default function ContactSection({
  preselectedService,
  preselectedBudget,
  preselectedNote,
}: ContactSectionProps) {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [company, setCompany] = useState('');
  const [service, setService] = useState(
    preselectedService || SERVICE_OPTIONS[0]
  );
  const [budget, setBudget] = useState(
    preselectedBudget || BUDGET_OPTIONS[1]
  );
  const [deliveryDate, setDeliveryDate] = useState('');
  const [description, setDescription] = useState(preselectedNote || '');
  const [files, setFiles] = useState<AttachedFile[]>([]);
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (preselectedService) {
      setService(preselectedService);
      setSubmitted(false);
    }
  }, [preselectedService]);

  useEffect(() => {
    if (preselectedBudget) {
      setBudget(preselectedBudget);
      setSubmitted(false);
    }
  }, [preselectedBudget]);

  useEffect(() => {
    if (preselectedNote) {
      setDescription(preselectedNote);
      setSubmitted(false);
    }
  }, [preselectedNote]);

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const selected = e.target.files;
    if (!selected) return;
    const nextFiles: AttachedFile[] = Array.from(selected).map((file) => ({
      name: file.name,
      sizeLabel: formatFileSize(file.size),
    }));
    setFiles((prev) => [...prev, ...nextFiles]);
    e.target.value = '';
  };

  const removeFile = (index: number) => {
    setFiles((prev) => prev.filter((_, idx) => idx !== index));
  };

  const validate = (): FormErrors => {
    const nextErrors: FormErrors = {};
    if (!fullName.trim()) {
      nextErrors.fullName = 'Please enter your full name.';
    }
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email.trim()) {
      nextErrors.email = 'Please provide a valid email address.';
    } else if (!emailPattern.test(email.trim())) {
      nextErrors.email = 'Please enter a properly formatted email address.';
    }
    if (description.trim().length < 15) {
      nextErrors.description =
        'Please share at least a brief overview of your project (15+ characters).';
    }
    return nextErrors;
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length === 0) {
      setSubmitted(true);
    }
  };

  const handleReset = () => {
    setFullName('');
    setEmail('');
    setCompany('');
    setDeliveryDate('');
    setDescription('');
    setFiles([]);
    setErrors({});
    setSubmitted(false);
  };

  return (
    <section
      id="contact"
      className="border-b border-white/10 bg-[#090909] py-16 sm:py-24"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Final CTA Banner */}
        <div className="mb-14 border-b border-white/10 pb-12">
          <p className="text-xs font-medium tracking-[0.16em] text-[#D99A3E] uppercase">
            Start Your Project
          </p>
          <h2 className="mt-3 max-w-3xl font-display text-3xl font-semibold tracking-tight text-[#F5F1E8] text-balance sm:text-5xl">
            Let’s Create Something Extraordinary.
          </h2>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-[#B9BEC7]">
            Have an idea in mind or need a creative partner for your next
            campaign? Tell us what you want to create, and our studio will help you
            explore the possibilities.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
          {/* Left Column: Direct Studio Directory & Operating Hours */}
          <div className="space-y-10 lg:col-span-5">
            <div>
              <h3 className="text-sm font-semibold tracking-wider text-[#F5D28A] uppercase">
                Studio Contact Directory
              </h3>
              <dl className="mt-4 space-y-3.5 text-sm">
                {CONTACT_EMAILS.map((item) => (
                  <div
                    key={item.email}
                    className="flex flex-col justify-between gap-1 border-b border-white/10 pb-3 sm:flex-row sm:items-center"
                  >
                    <dt className="text-[#B9BEC7]">{item.label}</dt>
                    <dd>
                      <a
                        href={`mailto:${item.email}`}
                        className="font-mono text-xs text-[#F5F1E8] transition-colors hover:text-[#00E5F2]"
                      >
                        {item.email}
                      </a>
                    </dd>
                  </div>
                ))}
                <div className="flex flex-col justify-between gap-1 border-b border-white/10 pb-3 sm:flex-row sm:items-center">
                  <dt className="text-[#B9BEC7]">Phone</dt>
                  <dd className="font-mono text-xs text-[#F5F1E8] tabular-nums">
                    +1 (202) 555-0148
                  </dd>
                </div>
                <div className="flex flex-col justify-between gap-1 pb-1 sm:flex-row sm:items-center">
                  <dt className="text-[#B9BEC7]">Service Model</dt>
                  <dd className="text-xs text-[#F5F1E8]">
                    Remote / Online Worldwide
                  </dd>
                </div>
              </dl>
            </div>

            <div>
              <h3 className="text-sm font-semibold tracking-wider text-[#F5D28A] uppercase">
                Operating Hours (Eastern Time)
              </h3>
              <dl className="mt-4 space-y-2.5 text-sm">
                {OPERATING_HOURS.map((row) => (
                  <div
                    key={row.day}
                    className="flex items-center justify-between border-b border-white/10 pb-2.5"
                  >
                    <dt className="text-[#B9BEC7]">{row.day}</dt>
                    <dd
                      className={`font-mono text-xs tabular-nums ${
                        row.closed ? 'text-[#B9BEC7]/60' : 'text-[#F5F1E8]'
                      }`}
                    >
                      {row.hours}
                    </dd>
                  </div>
                ))}
              </dl>
              <p className="mt-3 text-xs leading-relaxed text-[#B9BEC7]/75">
                Note: All contact addresses (.example) and phone details shown
                above are demonstration placeholders for agency website preview.
              </p>
            </div>
          </div>

          {/* Right Column: Interactive Project Inquiry Form */}
          <div className="rounded-2xl border border-white/10 bg-[#141414] p-6 sm:p-8 lg:col-span-7">
            {submitted ? (
              <div className="flex min-h-[420px] flex-col items-start justify-center py-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-[#00E5F2]/30 bg-[#00E5F2]/10 text-[#00E5F2]">
                  <CheckCircle2 className="h-6 w-6" aria-hidden="true" />
                </div>

                <h3 className="mt-5 font-display text-2xl font-semibold text-[#F5F1E8]">
                  Thank You for Contacting AIMADEIT!
                </h3>
                <p className="mt-3 max-w-lg text-sm leading-relaxed text-[#B9BEC7]">
                  Your creative journey starts here. Our team will review your
                  inquiry and get back to you as soon as possible.
                </p>

                <div className="mt-6 w-full rounded-xl border border-white/10 bg-[#0D0D0D] p-5 text-sm">
                  <p className="text-xs font-semibold tracking-wider text-[#F5D28A] uppercase">
                    Submitted Brief Summary
                  </p>
                  <dl className="mt-3 space-y-2 text-xs">
                    <div className="flex justify-between gap-4">
                      <dt className="text-[#B9BEC7]">Contact</dt>
                      <dd className="text-[#F5F1E8]">
                        {fullName} ({email})
                      </dd>
                    </div>
                    <div className="flex justify-between gap-4">
                      <dt className="text-[#B9BEC7]">Service</dt>
                      <dd className="text-[#F5F1E8]">{service}</dd>
                    </div>
                    <div className="flex justify-between gap-4">
                      <dt className="text-[#B9BEC7]">Estimated Budget</dt>
                      <dd className="font-mono text-[#F5D28A]">{budget}</dd>
                    </div>
                    {deliveryDate && (
                      <div className="flex justify-between gap-4">
                        <dt className="text-[#B9BEC7]">Preferred Delivery</dt>
                        <dd className="font-mono text-[#F5F1E8]">
                          {deliveryDate}
                        </dd>
                      </div>
                    )}
                  </dl>
                </div>

                <button
                  type="button"
                  onClick={handleReset}
                  className="mt-6 inline-flex min-h-11 items-center justify-center rounded-lg border border-white/15 bg-[#090909] px-5 py-2.5 text-sm font-semibold text-[#F5F1E8] transition-colors hover:border-[#D99A3E] hover:text-[#F5D28A] cursor-pointer"
                >
                  Send Another Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="space-y-5">
                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="fullName"
                      className="block text-xs font-semibold tracking-wide text-[#F5F1E8]"
                    >
                      Full Name <span className="text-[#D99A3E]">*</span>
                    </label>
                    <input
                      id="fullName"
                      type="text"
                      required
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      placeholder="Alex Morgan"
                      className="mt-2 w-full rounded-lg border border-white/15 bg-[#090909] px-4 py-2.5 text-sm text-[#F5F1E8] placeholder:text-[#B9BEC7]/45 focus:border-[#00E5F2] focus:outline-none"
                    />
                    {errors.fullName && (
                      <p className="mt-1.5 flex items-center gap-1.5 text-xs text-rose-400">
                        <AlertCircle className="h-3.5 w-3.5 shrink-0" />
                        <span>{errors.fullName}</span>
                      </p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-xs font-semibold tracking-wide text-[#F5F1E8]"
                    >
                      Email Address <span className="text-[#D99A3E]">*</span>
                    </label>
                    <input
                      id="email"
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="you@company.com"
                      className="mt-2 w-full rounded-lg border border-white/15 bg-[#090909] px-4 py-2.5 text-sm text-[#F5F1E8] placeholder:text-[#B9BEC7]/45 focus:border-[#00E5F2] focus:outline-none"
                    />
                    {errors.email && (
                      <p className="mt-1.5 flex items-center gap-1.5 text-xs text-rose-400">
                        <AlertCircle className="h-3.5 w-3.5 shrink-0" />
                        <span>{errors.email}</span>
                      </p>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="company"
                      className="block text-xs font-semibold tracking-wide text-[#F5F1E8]"
                    >
                      Company / Brand Name
                    </label>
                    <input
                      id="company"
                      type="text"
                      value={company}
                      onChange={(e) => setCompany(e.target.value)}
                      placeholder="Optional"
                      className="mt-2 w-full rounded-lg border border-white/15 bg-[#090909] px-4 py-2.5 text-sm text-[#F5F1E8] placeholder:text-[#B9BEC7]/45 focus:border-[#00E5F2] focus:outline-none"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="deliveryDate"
                      className="block text-xs font-semibold tracking-wide text-[#F5F1E8]"
                    >
                      Preferred Delivery Date
                    </label>
                    <input
                      id="deliveryDate"
                      type="date"
                      value={deliveryDate}
                      onChange={(e) => setDeliveryDate(e.target.value)}
                      className="mt-2 w-full rounded-lg border border-white/15 bg-[#090909] px-4 py-2.5 text-sm text-[#F5F1E8] focus:border-[#00E5F2] focus:outline-none"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="service"
                      className="block text-xs font-semibold tracking-wide text-[#F5F1E8]"
                    >
                      Service Required
                    </label>
                    <select
                      id="service"
                      value={service}
                      onChange={(e) => setService(e.target.value)}
                      className="mt-2 w-full rounded-lg border border-white/15 bg-[#090909] px-4 py-2.5 text-sm text-[#F5F1E8] focus:border-[#00E5F2] focus:outline-none"
                    >
                      {SERVICE_OPTIONS.map((opt) => (
                        <option key={opt} value={opt}>
                          {opt}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label
                      htmlFor="budget"
                      className="block text-xs font-semibold tracking-wide text-[#F5F1E8]"
                    >
                      Estimated Budget
                    </label>
                    <select
                      id="budget"
                      value={budget}
                      onChange={(e) => setBudget(e.target.value)}
                      className="mt-2 w-full rounded-lg border border-white/15 bg-[#090909] px-4 py-2.5 text-sm text-[#F5F1E8] focus:border-[#00E5F2] focus:outline-none"
                    >
                      {BUDGET_OPTIONS.map((opt) => (
                        <option key={opt} value={opt}>
                          {opt}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="description"
                    className="block text-xs font-semibold tracking-wide text-[#F5F1E8]"
                  >
                    Project Description <span className="text-[#D99A3E]">*</span>
                  </label>
                  <textarea
                    id="description"
                    rows={4}
                    required
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    placeholder="Describe your creative goals, visual style, target platforms (e.g., Instagram Reels, commercial hero), and key deliverables."
                    className="mt-2 w-full rounded-lg border border-white/15 bg-[#090909] px-4 py-3 text-sm text-[#F5F1E8] placeholder:text-[#B9BEC7]/45 focus:border-[#00E5F2] focus:outline-none"
                  />
                  {errors.description && (
                    <p className="mt-1.5 flex items-center gap-1.5 text-xs text-rose-400">
                      <AlertCircle className="h-3.5 w-3.5 shrink-0" />
                      <span>{errors.description}</span>
                    </p>
                  )}
                </div>

                {/* Reference Images / Files Attachment */}
                <div>
                  <span className="block text-xs font-semibold tracking-wide text-[#F5F1E8]">
                    Reference Images or Files (Optional)
                  </span>
                  <label className="mt-2 flex min-h-11 cursor-pointer items-center justify-between rounded-lg border border-dashed border-white/20 bg-[#090909] px-4 py-3 text-xs text-[#B9BEC7] transition-colors hover:border-[#D99A3E]/60 hover:text-[#F5F1E8]">
                    <span className="flex items-center gap-2">
                      <Paperclip
                        className="h-4 w-4 text-[#D99A3E]"
                        aria-hidden="true"
                      />
                      <span>Attach moodboards, product photos, or briefs</span>
                    </span>
                    <span className="font-semibold text-[#F5D28A]">
                      Browse Files
                    </span>
                    <input
                      type="file"
                      multiple
                      accept="image/*,.pdf,.mp4,.mov"
                      onChange={handleFileChange}
                      className="sr-only"
                    />
                  </label>

                  {files.length > 0 && (
                    <ul className="mt-2.5 space-y-1.5">
                      {files.map((file, idx) => (
                        <li
                          key={`${file.name}-${idx}`}
                          className="flex items-center justify-between rounded-lg border border-white/10 bg-[#0D0D0D] px-3 py-2 text-xs"
                        >
                          <span className="truncate text-[#F5F1E8]">
                            {file.name}{' '}
                            <span className="ml-1 font-mono text-[#B9BEC7] tabular-nums">
                              ({file.sizeLabel})
                            </span>
                          </span>
                          <button
                            type="button"
                            onClick={() => removeFile(idx)}
                            aria-label={`Remove ${file.name}`}
                            className="ml-3 text-[#B9BEC7] transition-colors hover:text-rose-400 cursor-pointer"
                          >
                            <Trash2 className="h-3.5 w-3.5" />
                          </button>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-lg bg-[#D99A3E] px-6 py-3 text-sm font-semibold text-[#090909] transition-colors duration-200 hover:bg-[#F5D28A] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#00E5F2] cursor-pointer"
                  >
                    <Send className="h-4 w-4" aria-hidden="true" />
                    <span>Send Project Inquiry</span>
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
