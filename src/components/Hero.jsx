import React from "react";
import "../css/Hero.css";
import { profile } from "../data/siteData";
import { withBasePath } from "../utils/paths";
import { useLocale } from "../i18n/useLocale";
import { profileContent, uiText } from "../data/i18nContent";
import { getLocalizedText } from "../utils/localizedText";

const displayChineseName = profile.chineseName.includes("/")
  ? profile.chineseName.split("/").pop().trim()
  : profile.chineseName;

function Hero() {
  const { locale } = useLocale();
  const degreeLine = getLocalizedText(profileContent.degree, locale);
  const roleLines = profileContent.roles.map((role) => getLocalizedText(role, locale));
  const compactSkills = profileContent.skills.map((skill) => getLocalizedText(skill, locale));

  const handlePortfolioClick = () => {
    window.alert(getLocalizedText(uiText.portfolioAlert, locale));
  };

  return (
    <div className="hero-grid">
      <div className="hero-left">
        <img src={profile.photo} alt={`${profile.englishName} profile`} className="profile-pic" />
        <div className="hero-meta">
          <div className="meta-name">
            {profile.englishName} <span className="meta-name-cn">{displayChineseName}</span>
          </div>
          <div className="meta-degree">{degreeLine}</div>
          <div className="meta-roles">
            {roleLines.map((role) => (
              <div className="meta-role-line" key={role}>
                {role}
              </div>
            ))}
          </div>
          <div className="meta-email-line">
            {getLocalizedText(uiText.email, locale)}: <a href={`mailto:${profile.email}`}>{profile.email}</a>
          </div>
          <div className="skills-title">{getLocalizedText(uiText.skills, locale)}</div>
          <div className="skills-list">
            {compactSkills.map((line) => (
              <span className="skills-line" key={line}>
                {line}
              </span>
            ))}
          </div>
          <div className="meta-link meta-secondary-links">
            <a className="meta-linkitem" href={withBasePath("/files/yufei-wang-resume.pdf")} target="_blank" rel="noopener noreferrer">
              CV
            </a>
            <button className="meta-linkitem" type="button" onClick={handlePortfolioClick}>
              {getLocalizedText(uiText.portfolio, locale)}
            </button>
          </div>
          <div className="small-text">
            {getLocalizedText(uiText.lastUpdated, locale)}: {profile.lastUpdated}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
