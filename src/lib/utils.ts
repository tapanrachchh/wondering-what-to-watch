import { ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function trimText(text: string, length: number) {
  if (text.length > length) {
    return text.substring(0, length) + "...";
  }
  return text;
}

export function getLanguageName(code: string): string {
  const languages: {
    [key: string]: string;
  } = {
    en: "English",
    es: "Spanish",
    fr: "French",
    de: "German",
    zh: "Chinese",
    ja: "Japanese",
    ru: "Russian",
    ar: "Arabic",
    pt: "Portuguese",
    hi: "Hindi",
    it: "Italian",
    ko: "Korean",
    nl: "Dutch",
    sv: "Swedish",
    no: "Norwegian",
    da: "Danish",
    fi: "Finnish",
    pl: "Polish",
    tr: "Turkish",
    el: "Greek",
    he: "Hebrew",
    th: "Thai",
    cs: "Czech",
    hu: "Hungarian",
    uk: "Ukrainian",
    ro: "Romanian",
    sk: "Slovak",
    bg: "Bulgarian",
    hr: "Croatian",
    sr: "Serbian",
    ms: "Malay",
    id: "Indonesian",
    vi: "Vietnamese",
  };

  return languages[code] || "-";
}
