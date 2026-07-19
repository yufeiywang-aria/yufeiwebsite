import React from "react";
import "../css/All.css";
import { downloads } from "../data/siteData";
import { withBasePath } from "../utils/paths";

export default function Downloads() {
  return (
    <div className="card" id="downloads" style={{ marginTop: "1rem" }}>
      <div className="card-title">Downloads</div>
      <div className="simple-list">
        {downloads.map((download) => (
          <div className="simple-list-item" key={download.label}>
            <div>
              <strong>{download.label}</strong>
              <div className="simple-muted">{download.description}</div>
            </div>
            {download.href ? (
              <a href={withBasePath(download.href)} target="_blank" rel="noopener noreferrer">
                Open
              </a>
            ) : (
              <span className="simple-date">Coming soon</span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
