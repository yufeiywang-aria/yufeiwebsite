export function getLocalizedText(value, locale = "en") {
  if (typeof value === "string") return value;
  if (!value || typeof value !== "object") return "";

  const localizedValue = typeof value[locale] === "string" ? value[locale].trim() : "";
  const englishValue = typeof value.en === "string" ? value.en.trim() : "";
  const chineseValue = typeof value.zh === "string" ? value.zh.trim() : "";

  return localizedValue || englishValue || chineseValue || "";
}

export function getTextWithChinese(value, chineseValue, locale = "en") {
  const englishValue = typeof value === "string" ? value : value?.en;
  const existingChineseValue = typeof value === "object" ? value?.zh : "";
  return getLocalizedText(
    { en: englishValue || "", zh: chineseValue || existingChineseValue || "" },
    locale,
  );
}
