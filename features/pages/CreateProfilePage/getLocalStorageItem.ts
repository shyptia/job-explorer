export function getLocalStorageItem(key: string) {
  if (typeof window === "undefined") return "";

  return localStorage.getItem(key) || "";
}
