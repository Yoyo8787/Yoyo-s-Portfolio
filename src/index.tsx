import React from "react";
import ReactDOM from "react-dom/client";
import { I18nextProvider } from "react-i18next";
import "./index.css";
import App from "./App";
import { ThemeProvider } from "./hooks/useTheme";
import { createI18n } from "./i18n";

const i18n = createI18n();

ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
        <I18nextProvider i18n={i18n}>
            <ThemeProvider>
                <App />
            </ThemeProvider>
        </I18nextProvider>
    </React.StrictMode>,
);
