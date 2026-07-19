import React from "react";
import "../css/All.css";
import { awards } from "../data/siteData";
import { useLocale } from "../i18n/useLocale";
import { awardsZh, uiText } from "../data/i18nContent";
import { getLocalizedText, getTextWithChinese } from "../utils/localizedText";

export default function SelectedAwards() {
  const { locale } = useLocale();
  return (
    <div className="card" id="awards" style={{ marginTop: "1rem" }}>
      <div className="card-title">{getLocalizedText(uiText.awards, locale)}</div>
      <div className="awards-list">
        {awards.map((award, index) => (
          <div key={index} className="award-item">
            <span className="award-icon">{"\u2726"}</span>
            <span className="award-text">
              <span className="award-main">
                [{award.year}] {getTextWithChinese(award.title, awardsZh[index]?.[0], locale)}
              </span>
              <span className="award-result"> ({getTextWithChinese(award.result, awardsZh[index]?.[1], locale)})</span>
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
