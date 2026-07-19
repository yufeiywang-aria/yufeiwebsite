import React from "react";
import "../css/All.css";
import { news } from "../data/siteData";
import { useLocale } from "../i18n/useLocale";
import { newsZh, uiText } from "../data/i18nContent";
import { getLocalizedText } from "../utils/localizedText";

function renderSegments(segments) {
  return segments.map((segment, index) =>
    segment.highlight ? (
      <strong className="news-highlight" key={index}>
        {segment.text}
      </strong>
    ) : (
      <React.Fragment key={index}>{segment.text}</React.Fragment>
    )
  );
}

function News() {
  const { locale } = useLocale();
  return (
    <div className="News" id="news">
      <div className="card-title">{getLocalizedText(uiText.news, locale)}</div>
      <ul className="news-list">
        {news.map((item, index) => (
          <li key={index}>
            <div className="news-time">{item.time}</div>
            <div className="news-content">
              {renderSegments(
                locale === "zh"
                  ? newsZh[index].map(([text, highlight]) => ({ text, highlight }))
                  : item.content,
              )}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default News;
