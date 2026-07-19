import React, { useMemo, useState } from "react";
import "../css/Publications.css";
import { researchProjects } from "../data/siteData";
import { getLocalizedText } from "../utils/localizedText";
import { getTextWithChinese } from "../utils/localizedText";
import { withBasePath } from "../utils/paths";
import { useLocale } from "../i18n/useLocale";
import { materialLabelZh, researchZh, uiText } from "../data/i18nContent";

const toneClass = {
  pink: "project-thumb-pink",
  blue: "project-thumb-blue",
  green: "project-thumb-green",
};

const getTagClassName = (tag) => {
  if (tag === "Selected") return "tag-item-show rainbow-tag-all";
  if (tag === "In Submission") return "tag-item-show submission-tag-all";
  return "tag-item-show";
};

const getLinkProps = (href) =>
  href?.startsWith("#") ? {} : { target: "_blank", rel: "noopener noreferrer" };

const getProjectLinks = (project) => [
  ...(project.materials || []).filter((material) => typeof material === "object" && material.href),
  ...(project.links || []),
];

const getHref = (href) => withBasePath(href);

export default function Publications() {
  const [selectedTag, setSelectedTag] = useState("");
  const { locale } = useLocale();
  const tags = useMemo(
    () => [...new Set(researchProjects.flatMap((project) => project.tags))],
    [],
  );

  const filteredProjects = selectedTag
    ? researchProjects.filter((project) => project.tags.includes(selectedTag))
    : researchProjects;

  return (
    <div className="publications" id="research-projects" style={{ marginTop: "1rem" }}>
      <div className="publications-select">
        <div className="card-title">{getLocalizedText(uiText.researchProjects, locale)}</div>
        <select
          className="tag-select-filter"
          value={selectedTag}
          onChange={(event) => setSelectedTag(event.target.value)}
        >
          <option value="">{getLocalizedText(uiText.all, locale)}</option>
          {tags.map((tag) => (
            <option key={tag} value={tag}>
              {tag}
            </option>
          ))}
        </select>
      </div>

      <div className="publications-info">
        <div className="publications-info-small">
          {getLocalizedText(uiText.projectDetailsHint, locale)}
        </div>
      </div>

      <div className="publications-list">
        {filteredProjects.map((project) => {
          const projectLinks = getProjectLinks(project);
          const translation = researchZh[project.id] || {};
          const projectTitle = getTextWithChinese(project.title, translation.title, locale);
          const projectStatus = getTextWithChinese(project.status, translation.status, locale);
          const projectAbstract = getTextWithChinese(project.abstract, translation.abstract, locale);
          const projectDescription = getTextWithChinese(project.description, translation.description, locale) || projectAbstract;

          return (
            <div key={project.id} className="publication-card" id={project.id}>
              {project.image ? (
                <img
                  className="publication-image"
                  src={withBasePath(project.image)}
                  alt={projectTitle}
                  loading="lazy"
                  decoding="async"
                />
              ) : (
                <div className={`publication-image project-thumb ${toneClass[project.imageTone] || ""}`}>
                  <span>{projectStatus}</span>
                </div>
              )}

              <div className="publication-content">
                <div className="publication-venue">
                  <span className="venue-tag workshop">{projectStatus}</span>
                </div>

                <div className="publication-title-wrapper">
                  <div className="publication-title">{projectTitle}</div>
                  <div className="abstract-popup">{projectAbstract}</div>
                </div>

                <div className="selected-project-summary">{projectDescription}</div>

                {project.subResults?.length > 0 && (
                  <div className="selected-project-summary">
                    {project.subResults.map((result, index) => (
                      <div key={`${project.id}-sub-result-${index}`}>
                        {getTextWithChinese(result, translation.subResults?.[index], locale)}
                      </div>
                    ))}
                  </div>
                )}

                <div className="publication-tags">
                  {project.tags.map((tag) => (
                    <span key={tag} className={getTagClassName(tag)}>
                      #{tag}
                    </span>
                  ))}
                </div>

                <div className="publication-links">
                  {projectLinks.length > 0 ? (
                    projectLinks.map((link) => (
                      <a
                        key={`${project.id}-${link.href}`}
                        href={getHref(link.href)}
                        {...getLinkProps(link.href)}
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
