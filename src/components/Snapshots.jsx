import React from "react";
import "../css/All.css";
import { snapshots } from "../data/siteData";
import { withBasePath } from "../utils/paths";
import { useLocale } from "../i18n/useLocale";
import { snapshotsZh, uiText } from "../data/i18nContent";
import { getLocalizedText, getTextWithChinese } from "../utils/localizedText";

export default function Snapshots() {
  const { locale } = useLocale();
  return (
    <div className="card snapshots-card" id="snapshots" style={{ marginTop: "1rem" }}>
      <div className="card-title">{getLocalizedText(uiText.snapshots, locale)}</div>
      <div className="snapshots-wall">
        {snapshots.map((snapshot, index) => (
          <figure className="snapshot-polaroid" key={snapshot.image}>
            <div className="snapshot-photo-box">
              <img
                className="snapshot-photo"
                src={withBasePath(`${snapshot.image}?v=20260705`)}
                alt={getTextWithChinese(snapshot.caption, snapshotsZh[index], locale)}
                loading={index > 1 ? "lazy" : "eager"}
                decoding="async"
              />
            </div>
            <figcaption className="snapshot-caption">
              {getTextWithChinese(snapshot.caption, snapshotsZh[index], locale)}
            </figcaption>
          </figure>
        ))}
      </div>
    </div>
  );
}
