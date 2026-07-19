import React, { useEffect, useRef, useState } from "react";
import "../css/All.css";
import "../css/Publications.css";
import { selectedProjects } from "../data/siteData";
import { getLocalizedText, getTextWithChinese } from "../utils/localizedText";
import { withBasePath } from "../utils/paths";
import { useLocale } from "../i18n/useLocale";
import { materialLabelZh, selectedZh, uiText } from "../data/i18nContent";

const toneClass = {
  pink: "project-thumb-pink",
  blue: "project-thumb-blue",
  green: "project-thumb-green",
};

const selectedProjectFilters = [
  {
    value: "interactive",
    labelKey: "interactiveFilter",
    tags: [
      "Three.js",
      "InteractiveDesign",
      "ResearchDatabase",
      "InteractiveExperience",
      "WebInteraction",
      "InteractiveStorytelling",
    ],
  },
  {
    value: "culture",
    labelKey: "cultureFilter",
    tags: [
      "CulturalHeritage",
      "HainanCulture",
      "CulturalTourism",
      "HeritageRevival",
      "AgriculturalBranding",
      "HainanStudies",
      "MarineCulture",
    ],
  },
  {
    value: "visual",
    labelKey: "visualFilter",
    tags: [
      "AIAnimation",
      "VisualCommunication",
      "UIDesign",
      "VisualIdentity",
      "AIGC",
      "VisualExperiment",
      "MotionDesign",
      "CreativeProducts",
    ],
  },
  {
    value: "research",
    labelKey: "researchFilter",
    tags: [
      "ResearchDatabase",
      "InformationArchitecture",
      "ContentStrategy",
      "PublicPolicy",
      "BusinessAnalysis",
      "HospitalityOperations",
      "RevenueStrategy",
      "SDGs",
    ],
  },
];

const matchesSelectedProjectFilter = (project, selectedFilter) => {
  if (!selectedFilter) return true;
  const filter = selectedProjectFilters.find((item) => item.value === selectedFilter);
  return filter ? filter.tags.some((tag) => project.tags.includes(tag)) : true;
};

const getTagClassName = (tag) => {
  if (tag === "Selected") return "tag-item-show rainbow-tag-all";
  if (tag === "In Submission") return "tag-item-show submission-tag-all";
  return "tag-item-show";
};

const getLinkUrl = (link) => link?.url || link?.href || "";

const isUsableLink = (link) => {
  const url = getLinkUrl(link);
  return typeof url === "string" && url.trim() !== "" && url.trim() !== "#";
};

const getLinkProps = () => ({ target: "_blank", rel: "noopener noreferrer" });

const getProjectLinks = (project) => [
  ...(project.materials || []),
  ...(project.links || []),
].filter((link) => typeof link === "object" && isUsableLink(link));

const getHref = (href) => withBasePath(href);

function ProjectCover({ project, projectTitle, projectStatus }) {
  const videoRef = useRef(null);
  const [videoFailed, setVideoFailed] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(
    () => typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches,
  );

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const handleMotionPreference = (event) => setPrefersReducedMotion(event.matches);

    mediaQuery.addEventListener("change", handleMotionPreference);
    return () => mediaQuery.removeEventListener("change", handleMotionPreference);
  }, []);

  useEffect(() => {
    const video = videoRef.current;
    if (!video || videoFailed || prefersReducedMotion) return undefined;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          const playPromise = video.play();
          playPromise?.catch(() => undefined);
        } else {
          video.pause();
        }
      },
      { threshold: 0.25 },
    );

    observer.observe(video);
    return () => {
      observer.disconnect();
      video.pause();
    };
  }, [prefersReducedMotion, project.coverVideo, videoFailed]);

  if (project.coverVideo && !videoFailed && !prefersReducedMotion) {
    return (
      <video
        ref={videoRef}
        className="publication-image selected-project-image selected-project-cover-video"
        src={withBasePath(project.coverVideo)}
        poster={project.coverImage ? withBasePath(project.coverImage) : undefined}
        muted
        loop
        playsInline
        preload="metadata"
        aria-hidden="true"
        onError={() => setVideoFailed(true)}
      />
    );
  }

  const fallbackImage = project.coverImage || project.image;
  if (fallbackImage) {
    return (
      <img
        className="publication-image selected-project-image"
        src={withBasePath(fallbackImage)}
        alt={projectTitle}
        loading="lazy"
        decoding="async"
      />
    );
  }

  return (
    <div className={`publication-image selected-project-image project-thumb ${toneClass[project.imageTone] || ""}`}>
      <span>{projectStatus}</span>
    </div>
  );
}

export default function SelectedProjects() {
  const [expandedProjectId, setExpandedProjectId] = useState(null);
  const [selectedFilter, setSelectedFilter] = useState("");
  const { locale } = useLocale();

  const filteredProjects = selectedProjects.filter((project) =>
    matchesSelectedProjectFilter(project, selectedFilter),
  );

  const handleTitleClick = (projectId) => {
    setExpandedProjectId((currentId) => (currentId === projectId ? null : projectId));
  };

  const handleFilterChange = (event) => {
    setSelectedFilter(event.target.value);
    setExpandedProjectId(null);
  };

  return (
    <div className="publications selected-projects" id="selected-projects" style={{ marginTop: "1rem" }}>
      <div className="publications-select">
        <div className="card-title">{getLocalizedText(uiText.selectedProjects, locale)}</div>
        <select
          className="tag-select-filter"
          value={selectedFilter}
          onChange={handleFilterChange}
          aria-label={getLocalizedText(uiText.filterProjects, locale)}
        >
          <option value="">{getLocalizedText(uiText.all, locale)}</option>
          {selectedProjectFilters.map((filter) => (
            <option key={filter.value} value={filter.value}>
              {getLocalizedText(uiText[filter.labelKey], locale)}
            </option>
          ))}
        </select>
      </div>

      <div className="publications-list selected-projects-list">
        {filteredProjects.map((project) => {
          const projectLinks = getProjectLinks(project);
          const isExpanded = expandedProjectId === project.id;
          const translation = selectedZh[project.id] || [];
          const projectTitle = getTextWithChinese(project.title, translation[0], locale);
          const projectStatus = getTextWithChinese(project.status, translation[1], locale);
          const projectDescription = getTextWithChinese(project.description, translation[2], locale);
          const projectAchievement = getTextWithChinese(project.achievement, translation[3], locale);

          return (
            <div className="publication-card selected-project-card" id={project.id} key={project.id}>
              <ProjectCover
                project={project}
                projectTitle={projectTitle}
                projectStatus={projectStatus}
              />

              <div className="publication-content selected-project-content">
                <div className="publication-venue">
                  <span className="venue-tag workshop">{projectStatus}</span>
                  {projectAchievement && (
                    <span className="venue-tag conference">{projectAchievement}</span>
                  )}
                </div>

                <button
                  type="button"
                  className="publication-title selected-project-title-button"
                  onClick={() => handleTitleClick(project.id)}
                  aria-expanded={isExpanded}
                  aria-controls={`${project.id}-details`}
                >
                  {projectTitle}
                </button>

                <div className="publication-tags">
                  {project.tags.map((tag) => (
                    <span className={getTagClassName(tag)} key={tag}>
                      #{tag}
                    </span>
                  ))}
                </div>

                <div className="selected-project-summary">{projectDescription}</div>

                {isExpanded && (
                  <div className="selected-project-details" id={`${project.id}-details`}>
                    <div className="selected-project-details-label">
                      {getLocalizedText(uiText.materials, locale)}
                    </div>
                    <div className="publication-links selected-project-detail-links">
                      {projectLinks.length > 0 ? (
                        projectLinks.map((link) => (
                          <a
                            key={`${project.id}-${getLinkUrl(link)}-details`}
                            href={getHref(getLinkUrl(link))}
                            {...getLinkProps()}
                          >
                            {getTextWithChinese(
                              link.label,
                              materialLabelZh[getLocalizedText(link.label, "en")],
                              locale,
                            )}
                          </a>
                        ))
                      ) : (
                        <div className="publications-msg">
                          {getLocalizedText(uiText.materialsComingSoon, locale)}
                        </div>
                      )}
                    </div>
                  </div>
                )}

                <div className="publication-links">
                  {projectLinks.length > 0 ? (
                    projectLinks.map((link) => (
                      <a
                        key={`${project.id}-${getLinkUrl(link)}`}
                        href={getHref(getLinkUrl(link))}
                        {...getLinkProps()}
                      >
                        {getTextWithChinese(
                          link.label,
                          materialLabelZh[getLocalizedText(link.label, "en")],
                          locale,
                        )}
                      </a>
                    ))
                  ) : (
                    <div className="publications-msg">
                      {getLocalizedText(uiText.materialsComingSoon, locale)}
                    </div>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
