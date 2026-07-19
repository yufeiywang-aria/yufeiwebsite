import React from "react";
import "../css/All.css";
import { useLocale } from "../i18n/useLocale";
import { moreText, uiText } from "../data/i18nContent";
import { getLocalizedText } from "../utils/localizedText";

export default function More() {
  const { locale } = useLocale();
  return (
    <div className="card" id="more" style={{ marginTop: "1rem" }}>
      <div className="card-title">{getLocalizedText(uiText.more, locale)}</div>
      <div className="more">
        {getLocalizedText(moreText, locale)}
      </div>
    </div>
  );
}
