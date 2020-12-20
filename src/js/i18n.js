import i18next from "i18next";
import commonFr from "../translations/fr/common.json";
i18next
    .init({
        interpolation: {
            // React already does escaping
            escapeValue: false
        },
        lng: "fr", // 'en' | 'es'
        // Using simple hardcoded resources for simple example
        resources: {
            fr: {
                translation: commonFr
            }
        }
    });

export default i18next;
