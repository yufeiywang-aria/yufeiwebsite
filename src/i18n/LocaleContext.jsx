import { useEffect, useMemo, useState } from "react";
import { LocaleContext } from "./localeContext";

const STORAGE_KEY = "yufei-portfolio-locale";
const getInitialLocale = () => {
  if (typeof window === "undefined") return "en";
  const storedLocale = window.localStorage.getItem(STORAGE_KEY);
  return storedLocale === "zh" || storedLocale === "en" ? storedLocale : "en";
};

export function LocaleProvider({ children }) {
  const [locale, setLocale] = useState(getInitialLocale);

  useEffect(() => {
    window.localStorage.setItem(STORAGE_KEY, locale);
    document.documentElement.lang = locale === "zh" ? "zh-CN" : "en";
    document.title = locale === "zh" ? "王钰霏｜研究与作品集" : "Yufei Wang | Research & Portfolio";
  }, [locale]);

  const value = useMemo(
    () => ({
      locale,
      setLocale,
      toggleLocale: () => setLocale((current) => (current === "en" ? "zh" : "en")),
    }),
    [locale],
  );

  return <LocaleContext.Provider value={value}>{children}</LocaleContext.Provider>;
}
