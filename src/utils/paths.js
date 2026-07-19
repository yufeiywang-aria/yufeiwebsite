export function withBasePath(path) {
  if (!path || typeof path !== "string") return path;

  if (
    path.startsWith("http://") ||
    path.startsWith("https://") ||
    path.startsWith("mailto:") ||
    path.startsWith("#") ||
    path.startsWith("data:")
  ) {
    return path;
  }

  if (!path.startsWith("/")) return path;

  const base = import.meta.env.BASE_URL || "/";
  const normalizedBase = base.endsWith("/") ? base : `${base}/`;
  return `${normalizedBase}${path.slice(1)}`;
}
