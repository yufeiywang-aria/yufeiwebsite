import React, { useState } from "react";
import "../css/Header.css";
import { navItems } from "../data/siteData";
import { withBasePath } from "../utils/paths";
import { useLocale } from "../i18n/useLocale";
import { uiText } from "../data/i18nContent";
import { getLocalizedText } from "../utils/localizedText";

const navLabelKeys = {
  about: "about",
  news: "news",
  "research-projects": "researchProjects",
  "selected-projects": "selectedProjects",
  experience: "experience",
};

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { locale, setLocale } = useLocale();
  const primaryNavIds = new Set([
    "about",
    "news",
    "research-projects",
    "selected-projects",
    "experience",
  ]);
  const visibleNavItems = navItems.filter((item) => primaryNavIds.has(item.id));

  const handleClick = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    setMenuOpen(false);
  };

  return (
    <header className={`header-wrapper ${menuOpen ? "menu-open" : ""}`}>
      <div className="header-container">
        <div className="nav-brand">
          <img className="nav-logo" src={withBasePath("/logo.png")} alt="Yufei Wang logo" />
          <div className="header-name nav-name">
            <div className="name-main">
              Yuf<span className="fancy-i">e</span>i Wang
            </div>
          </div>
        </div>

        <button
          className={`hamburger ${menuOpen ? "open" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={getLocalizedText(menuOpen ? uiText.closeMenu : uiText.openMenu, locale)}
          aria-expanded={menuOpen}
        >
          <span className="bar bar1" />
          <span className="bar bar2" />
          <span className="bar bar3" />
        </button>

        <nav className={`header-nav ${menuOpen ? "show" : ""}`}>
          {visibleNavItems.map((item) => (
            <button key={item.id} className="nav-item" onClick={() => handleClick(item.id)}>
              {getLocalizedText(uiText[navLabelKeys[item.id]] || item.label, locale)}
            </button>
          ))}
        </nav>

        <div className="language-toggle" role="group" aria-label={locale === "en" ? "Language" : "语言"}>
          <button
            type="button"
            className={locale === "en" ? "active" : ""}
            onClick={() => setLocale("en")}
            aria-pressed={locale === "en"}
          >
            EN
          </button>
          <span aria-hidden="true">/</span>
          <button
            type="button"
            className={locale === "zh" ? "active" : ""}
            onClick={() => setLocale("zh")}
            aria-pressed={locale === "zh"}
          >
            中文
          </button>
        </div>
      </div>
    </header>
  );
}
