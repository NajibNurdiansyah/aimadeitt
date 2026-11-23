import { useEffect, useState } from "react";
import { ArrowUpRight, Maximize2, X } from "lucide-react";
import {
  PORTFOLIO_FILTERS,
  PORTFOLIO_PROJECTS,
  PortfolioProject,
} from "../data/aimadeitData";
import ResilientImage from "./ResilientImage";

interface PortfolioSectionProps {
  onRequestSimilar: (projectTitle: string) => void;
}
const isVideoEmbed = (url: string) => {
  return /youtube\.com|youtu\.be|vimeo\.com|drive\.google\.com|player\.|embed|\.mp4|\.webm/i.test(
    url,
  );
};

export default function PortfolioSection({
  onRequestSimilar,
}: PortfolioSectionProps) {
  const [activeFilter, setActiveFilter] = useState<string>("all");
  const [selectedProject, setSelectedProject] =
    useState<PortfolioProject | null>(null);

  const filteredProjects =
    activeFilter === "all"
      ? PORTFOLIO_PROJECTS
      : PORTFOLIO_PROJECTS.filter((p) => p.filterKey === activeFilter);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setSelectedProject(null);
      }
    };
    if (selectedProject) {
      window.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    }
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [selectedProject]);

  return (
    <section
      id="portfolio"
      className="border-b border-white/10 bg-[#0D0D0D] py-16 sm:py-24"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
          <div className="max-w-2xl">
            <p className="text-xs font-medium tracking-[0.16em] text-[#00E5F2] uppercase">
              Creative Gallery
            </p>
            <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-[#F5F1E8] text-balance sm:text-4xl">
              Ideas Made Visible.
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-[#B9BEC7] sm:text-base">
              Explore a world of creative possibilities across product
              advertising, fashion visuals, commercial video, virtual
              characters, and social media systems.
            </p>
          </div>

          <p className="max-w-xs text-xs leading-relaxed text-[#B9BEC7]/80">
            Demonstration concept projects illustrating AIMADEIT’s production
            capabilities across industries.
          </p>
        </div>

        {/* Interactive Segmented Category Filters */}
        <div
          role="tablist"
          aria-label="Portfolio Categories"
          className="mt-9 flex flex-wrap items-center gap-2 border-b border-white/10 pb-5"
        >
          {PORTFOLIO_FILTERS.map((filter) => {
            const isActive = activeFilter === filter.id;
            return (
              <button
                key={filter.id}
                role="tab"
                type="button"
                aria-selected={isActive}
                onClick={() => setActiveFilter(filter.id)}
                className={`min-h-10 rounded-lg px-4 py-2 text-xs font-semibold transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#00E5F2] whitespace-nowrap shrink-0 cursor-pointer ${
                  isActive
                    ? "bg-[#D99A3E] text-[#090909]"
                    : "border border-white/10 bg-[#141414] text-[#B9BEC7] hover:border-white/25 hover:text-[#F5F1E8]"
                }`}
              >
                {filter.label}
              </button>
            );
          })}
        </div>

        {/* Dynamic Bento Showcase Grid */}
        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-6">
          {filteredProjects.map((project, idx) => {
            const spanClass =
              activeFilter === "all"
                ? idx < 2
                  ? "lg:col-span-3"
                  : "lg:col-span-2"
                : "lg:col-span-3";

            return (
              <article
                key={project.id}
                className={`group flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-[#141414] transition-colors duration-200 hover:border-[#D99A3E]/50 ${spanClass}`}
              >
                <button
                  type="button"
                  onClick={() => setSelectedProject(project)}
                  className="relative block w-full overflow-hidden bg-[#090909] text-left focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#00E5F2] cursor-pointer"
                  aria-label={`Inspect ${project.title} details`}
                >
                  <div className="aspect-[16/10] w-full overflow-hidden">
                    {isVideoEmbed(project.image) ? (
                      <iframe
                        src={project.image}
                        title={project.title}
                        className="pointer-events-none h-full w-full border-0"
                        loading="lazy"
                        referrerPolicy="no-referrer"
                      />
                    ) : (
                      <ResilientImage
                        src={project.image}
                        alt={project.title}
                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    )}
                  </div>
                  <div
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#090909]/80 via-transparent to-transparent"
                  />
                  <span className="absolute right-4 top-4 inline-flex h-9 w-9 items-center justify-center rounded-lg border border-white/15 bg-[#090909]/80 text-[#F5F1E8] opacity-80 backdrop-blur-sm transition-opacity group-hover:opacity-100">
                    <Maximize2 className="h-4 w-4" aria-hidden="true" />
                  </span>
                </button>

                <div className="flex flex-1 flex-col justify-between p-6">
                  <div>
                    {/* Unboxed Metadata Line */}
                    <div className="flex flex-wrap items-center gap-2 text-xs text-[#B9BEC7]">
                      <span className="font-mono text-[#D99A3E] tabular-nums">
                        {project.index}
                      </span>
                      <span aria-hidden="true">/</span>
                      <span>{project.category}</span>
                    </div>

                    <h3 className="mt-2 font-display text-xl font-semibold text-[#F5F1E8]">
                      {project.title}
                    </h3>

                    <p className="mt-2.5 text-sm leading-relaxed text-[#B9BEC7]">
                      {project.concept}
                    </p>
                  </div>

                  <div className="mt-5 flex items-center justify-between gap-4 border-t border-white/10 pt-4">
                    <span className="text-xs text-[#F5D28A]/90">
                      {project.creativeStyle}
                    </span>
                    <button
                      type="button"
                      onClick={() => setSelectedProject(project)}
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#00E5F2] transition-colors hover:text-[#F5F1E8] whitespace-nowrap shrink-0 cursor-pointer"
                    >
                      <span>View Brief</span>
                      <ArrowUpRight
                        className="h-3.5 w-3.5"
                        aria-hidden="true"
                      />
                    </button>
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-4 rounded-2xl border border-white/10 bg-[#141414] p-6 sm:flex-row sm:items-center sm:p-8">
          <div>
            <h3 className="font-display text-xl font-semibold text-[#F5F1E8]">
              Have a Similar Project in Mind?
            </h3>
            <p className="mt-1 text-sm text-[#B9BEC7]">
              Share your product or campaign brief and we will tailor a visual
              direction around your brand.
            </p>
          </div>
          <button
            type="button"
            onClick={() => onRequestSimilar("Custom AI Creative Campaign")}
            className="inline-flex min-h-11 items-center justify-center rounded-lg border border-[#D99A3E]/60 bg-[#090909] px-5 py-2.5 text-sm font-semibold text-[#F5D28A] transition-colors hover:bg-[#D99A3E] hover:text-[#090909] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#00E5F2] whitespace-nowrap shrink-0 cursor-pointer"
          >
            Contact Us About a Project
          </button>
        </div>
      </div>

      {/* Fullscreen Lightbox Modal */}
      {selectedProject && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="lightbox-title"
          className="fixed inset-0 z-50 flex items-center justify-center bg-[#090909]/92 p-4 backdrop-blur-md sm:p-6"
          onClick={() => setSelectedProject(null)}
        >
          <div
            className="relative max-h-[90vh] w-full max-w-4xl overflow-y-auto rounded-2xl border border-white/15 bg-[#141414]"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setSelectedProject(null)}
              aria-label="Close project preview"
              className="absolute right-4 top-4 z-10 inline-flex h-10 w-10 items-center justify-center rounded-lg border border-white/15 bg-[#090909]/85 text-[#F5F1E8] transition-colors hover:border-[#D99A3E] hover:text-[#F5D28A] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#00E5F2] cursor-pointer"
            >
              <X className="h-5 w-5" aria-hidden="true" />
            </button>

            <div className="grid grid-cols-1 lg:grid-cols-12">
              <div className="flex items-center justify-center bg-[#090909] p-4 lg:col-span-7">
                {isVideoEmbed(selectedProject.image) ? (
                  <div className="aspect-[9/16] max-h-[520px] w-full max-w-[520px] overflow-hidden rounded-xl">
                    <iframe
                      src={selectedProject.image}
                      title={selectedProject.title}
                      className="h-full w-full border-0"
                      allow="autoplay; encrypted-media; picture-in-picture"
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                ) : (
                  <div className="flex max-h-[540px] w-full items-center justify-center overflow-hidden rounded-xl">
                    <ResilientImage
                      src={selectedProject.image}
                      alt={selectedProject.title}
                      className="max-h-[540px] w-auto object-contain"
                    />
                  </div>
                )}
              </div>

              <div className="flex flex-col justify-between p-6 sm:p-8 lg:col-span-5">
                <div>
                  <div className="flex items-center gap-2 text-xs text-[#B9BEC7]">
                    <span className="font-mono text-[#D99A3E] tabular-nums">
                      Project {selectedProject.index}
                    </span>
                    <span aria-hidden="true">·</span>
                    <span>{selectedProject.category}</span>
                  </div>

                  <h3
                    id="lightbox-title"
                    className="mt-2 font-display text-2xl font-semibold text-[#F5F1E8]"
                  >
                    {selectedProject.title}
                  </h3>

                  <p className="mt-4 text-sm leading-relaxed text-[#B9BEC7]">
                    {selectedProject.concept}
                  </p>

                  <div className="mt-6 border-t border-white/10 pt-5">
                    <h4 className="text-xs font-semibold tracking-wider text-[#F5D28A] uppercase">
                      Sample Deliverables
                    </h4>
                    <ul className="mt-3 space-y-2 text-sm text-[#F5F1E8]/90">
                      {selectedProject.deliverables.map((item) => (
                        <li key={item} className="flex items-start gap-2.5">
                          <span
                            aria-hidden="true"
                            className="mt-2 h-1 w-1 shrink-0 rounded-full bg-[#00E5F2]"
                          />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-5 border-t border-white/10 pt-4">
                    <p className="text-xs text-[#B9BEC7]">
                      Creative Style:{" "}
                      <span className="text-[#F5F1E8]">
                        {selectedProject.creativeStyle}
                      </span>
                    </p>
                  </div>
                </div>

                <div className="mt-8">
                  <button
                    type="button"
                    onClick={() => {
                      const title = selectedProject.title;
                      setSelectedProject(null);
                      onRequestSimilar(title);
                    }}
                    className="inline-flex min-h-11 w-full items-center justify-center rounded-lg bg-[#D99A3E] px-5 py-2.5 text-sm font-semibold text-[#090909] transition-colors hover:bg-[#F5D28A] cursor-pointer"
                  >
                    Request Similar Concept
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
