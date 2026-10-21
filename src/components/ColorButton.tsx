import { TbSun, TbMoon } from "react-icons/tb";
import { useTranslation } from "react-i18next";

interface ColorButtonProps {
    isDarkMode: boolean;
    toggleTheme: () => void;
}

const ColorButton = ({ isDarkMode, toggleTheme }: ColorButtonProps) => {
    const { t } = useTranslation();
    return (
        <button
            type="button"
            aria-label={t(isDarkMode ? "theme.light" : "theme.dark")}
            aria-pressed={isDarkMode}
            className="w-11 h-11 grid place-items-center rounded-xl border-2 border-solid border-primary bg-surface shadow-card cursor-pointer [&_svg]:w-5 [&_svg]:h-5 text-foreground"
            onClick={toggleTheme}
        >
            {isDarkMode ? <TbMoon aria-hidden="true" /> : <TbSun aria-hidden="true" />}
        </button>
    );
};

export default ColorButton;
