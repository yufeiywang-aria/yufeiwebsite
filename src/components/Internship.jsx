import React, { useState } from "react";
import "../css/Internship.css";
import { experience } from "../data/siteData";
import { withBasePath } from "../utils/paths";
import { useLocale } from "../i18n/useLocale";
import { experienceZh, uiText } from "../data/i18nContent";
import { getLocalizedText, getTextWithChinese } from "../utils/localizedText";

export default function Internship() {
  const [activeExperience, setActiveExperience] = useState(null);
  const { locale } = useLocale();

  const openPhotos = (exp, index) => {
    setActiveExperience({ exp, index });
  };

  const closePhotos = () => {
    setActiveExperience(null);
  };

  return (
    <div className="card" id="experience" style={{ marginTop: "1rem" }}>
      <div className="card-title">{getLocalizedText(uiText.experience, locale)}</div>

      <div className="timeline-container">
        {experience.map((exp, index) => {
          const experienceId = `${exp.organization}-${index}`;
          const hasImages = Array.isArray(exp.images) && exp.images.length > 0;
          const translation = experienceZh[index] || {};

          return (
          <div key={experienceId} className="timeline-item">
            <div className="timeline-label">
              <div className="exp-type">{getTextWithChinese(exp.category, translation.category, locale)}</div>
              <div className="timeline-period-label">{exp.dateLeft}</div>
            </div>

            <div className="timeline-content">
              <div className="experience-logo" aria-hidden="true">
                {exp.logo ? (
                  <img className={exp.logoClass || ""} src={withBasePath(exp.logo)} alt="" />
                ) : (
                  <span className="experience-logo-text">{exp.logoText}</span>
                )}
              </div>

              <div className="exp-container">
                <div className="timeline-header">
                  <div className="exp-organization">
                    <div className="exp-title-row">
                      <div className="exp-organization-name">
                        {getTextWithChinese(exp.organization, translation.organization, locale)}
                      </div>
                      {hasImages && (
                        <button
                          type="button"
                          className="view-photos-button"
                          onClick={() => openPhotos(exp, index)}
                        >
                          {getLocalizedText(uiText.viewPhotos, locale)}
                        </button>
                      )}
                    </div>
                    <div className="exp-role">{getTextWithChinese(exp.title, translation.title, locale)}</div>
                    <div className="exp-meta">{getTextWithChinese(exp.meta, translation.meta, locale)}</div>
                  </div>
                </div>

                <ul className="exp-details">
                  {exp.bullets.map((bullet, bulletIndex) => (
                    <li key={bullet}>{getTextWithChinese(bullet, translation.bullets?.[bulletIndex], locale)}</li>
                  ))}
                </ul>

                <div className="experience-tags">
                  {exp.tags.map((tag) => (
                    <span key={tag} className="role-tag">
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
          );
        })}
      </div>

      {activeExperience && (
        <div
          className="experience-modal-backdrop"
          onClick={closePhotos}
          role="presentation"
        >
          <div
            className="experience-modal"
            role="dialog"
            aria-modal="true"
            aria-label={`${getTextWithChinese(activeExperience.exp.organization, experienceZh[activeExperience.index]?.organization, locale)} ${getLocalizedText(uiText.viewPhotos, locale)}`}
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              className="experience-modal-close"
              onClick={closePhotos}
              aria-label={getLocalizedText(uiText.closePhotos, locale)}
            >
              X
            </button>
            <div className="experience-modal-title">
              {getTextWithChinese(activeExperience.exp.organization, experienceZh[activeExperience.index]?.organization, locale)}
            </div>
            <div className="experience-modal-grid">
              {activeExperience.exp.images.map((image) => (
                <img
                  key={image}
                  className="experience-modal-image"
                  src={withBasePath(image)}
                  alt={`${getTextWithChinese(activeExperience.exp.organization, experienceZh[activeExperience.index]?.organization, locale)} ${locale === "zh" ? "照片" : "photo"}`}
                  loading="lazy"
                  decoding="async"
                />
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
