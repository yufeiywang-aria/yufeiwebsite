import React from "react";
import "../css/All.css";
import { education } from "../data/siteData";
import hainanLogo from "../assets/hainan-university-logo.png";
import asuLogo from "../assets/asu-logo.png";
import { useLocale } from "../i18n/useLocale";
import { educationZh, uiText } from "../data/i18nContent";
import { getLocalizedText, getTextWithChinese } from "../utils/localizedText";

export default function Education() {
  const { locale } = useLocale();
  return (
    <div className="card" id="education" style={{ marginTop: "1rem" }}>
      <div className="card-title">{getLocalizedText(uiText.education, locale)}</div>
      <div className="education-list">
        {education.map((edu, index) => (
          <div key={index} className="education-item">
            <div className="education-header">
              <div className="education-school">
                <div className="education-logos">
                  <img src={hainanLogo} alt="Hainan University logo" />
                  <img src={asuLogo} alt="Arizona State University logo" />
                </div>
                <h3 className="education-university">
                  {getTextWithChinese(edu.university, educationZh.university, locale)}
                </h3>
              </div>
              <div className="education-period">
                {edu.period}
                <div className="education-location">
                  {getTextWithChinese(edu.location, educationZh.location, locale)}
                </div>
              </div>
            </div>

            <div className="education-details">
              <p className="education-degree">
                {getTextWithChinese(edu.degree, educationZh.degree, locale)}
              </p>
            </div>

            {edu.courses && edu.courses.length > 0 && (
              <div className="education-courses">
                <div>{getLocalizedText(uiText.courses, locale)}:</div>
                <ul>
                  {edu.courses.map((course, courseIndex) => (
                    <li key={course}>{getTextWithChinese(course, educationZh.courses[courseIndex], locale)}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
