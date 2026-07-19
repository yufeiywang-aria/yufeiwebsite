import React from "react";
import "../css/All.css";
import { useLocale } from "../i18n/useLocale";
import { aboutContent } from "../data/i18nContent";

function renderSegments(segments, sectionIndex) {
  return segments.map(([text, highlighted], index) =>
    highlighted ? (
      <span className="pink" key={`${sectionIndex}-${index}`}>{text}</span>
    ) : (
      <React.Fragment key={`${sectionIndex}-${index}`}>{text}</React.Fragment>
    ),
  );
}

function About() {
  const { locale } = useLocale();
  return (
    <div className="about" id="about">
      <div className="intro-text">
        {aboutContent.map((section, index) => {
          const content = renderSegments(section[locale], index);
          return section.type === "callout" ? (
            <div className="callout" key={section.type}>{content}</div>
          ) : (
            <p key={`${section.type}-${index}`}>{content}</p>
          );
        })}
      </div>
    </div>
  );
}

export default About;
