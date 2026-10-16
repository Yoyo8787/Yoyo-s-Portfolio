import { createInstance } from "i18next";
import { initReactI18next } from "react-i18next";
import zhTW from "./locales/zh-TW.json";
import en from "./locales/en.json";

export const resources = {
    "zh-TW": { translation: zhTW satisfies Partial<typeof en> },
    en: { translation: en satisfies Record<string, string> },
};

const languageStorageKey = "language";

export const createI18n = () => {
    const instance = createInstance();
    const storedLanguage = localStorage.getItem(languageStorageKey);
    instance.on("languageChanged", (language) => localStorage.setItem(languageStorageKey, language));
    // 翻譯已隨專案載入，直接在瀏覽器同步初始化。
    void instance.use(initReactI18next).init({
        resources,
        lng: storedLanguage && storedLanguage in resources ? storedLanguage : "en",
        supportedLngs: Object.keys(resources),
        fallbackLng: "en",
        load: "currentOnly",
        defaultNS: "translation",
        ns: ["translation"],
        initAsync: false,
        keySeparator: false,
        returnObjects: false,
        interpolation: { escapeValue: false },
        react: { useSuspense: false },
    });
    return instance;
};

declare module "i18next" {
    interface CustomTypeOptions {
        defaultNS: "translation";
        resources: (typeof resources)["en"];
        keySeparator: false;
        strictKeyChecks: true;
    }
}
