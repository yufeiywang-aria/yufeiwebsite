import React from "react";
import "../css/All.css";
import { certificates } from "../data/siteData";

export default function Certificates() {
  return (
    <div className="card" id="certificates" style={{ marginTop: "1rem" }}>
      <div className="card-title">Certificates</div>
      <div className="simple-list">
        {certificates.map((certificate) => (
          <div className="simple-list-item" key={certificate.name}>
            <div>
              <strong>{certificate.name}</strong>
              <div className="simple-muted">{certificate.issuer}</div>
            </div>
            <div className="simple-date">{certificate.date}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
