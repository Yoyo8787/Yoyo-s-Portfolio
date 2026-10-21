import type { DetailDefinition, MenuId, MenuItem, Position } from "./types";
import { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { useTheme } from "./hooks/useTheme";
import { useMobileLayout } from "./hooks/useMobileLayout";
import { useCardRegistry, getCardInteraction } from "./components/registry";
import { menuHashes } from "./constants/menu";
import ColorButton from "./components/ColorButton";
import LanguageToggle from "./components/LanguageToggle";
import Menu from "./components/Menu";
import BentoCard from "./components/box/BentoCard";
import DetailDialog from "./components/modal/DetailDialog";
import Background from "./components/Background";
import Petals from "./components/Petals";
import { TbHome, TbUser, TbPresentation, TbPhone } from "react-icons/tb";

const getMenuFromHash = (): MenuId =>
    (Object.keys(menuHashes) as MenuId[]).find(
        (id) => menuHashes[id] === window.location.hash,
    ) ?? "00";

function App() {
    const { t, i18n } = useTranslation();
    const cardRegistry = useCardRegistry();
    const appRef = useRef<HTMLDivElement>(null);
    const { isDarkMode, toggleTheme } = useTheme();
    const [detail, setDetail] = useState<DetailDefinition | null>(null);
    const [selectedItem, setSelectedItem] = useState<MenuId>(getMenuFromHash);
    const isMobile = useMobileLayout();
    const position: Position = isMobile ? `${selectedItem}mobile` : selectedItem;

    useEffect(() => {
        document.documentElement.lang = i18n.resolvedLanguage ?? "en";
    }, [i18n.resolvedLanguage]);

    useEffect(() => {
        const handleHashChange = () => {
            setSelectedItem(getMenuFromHash());
            appRef.current?.scrollTo({ top: 0 });
        };
        window.addEventListener("hashchange", handleHashChange);
        return () => window.removeEventListener("hashchange", handleHashChange);
    }, []);

    const menuitems: MenuItem[] = [
        {
            id: "00",
            text: t("menu.home"),
            icon: <TbHome />,
        },
        {
            id: "01",
            text: t("menu.personal"),
            icon: <TbUser />,
        },
        {
            id: "02",
            text: t("menu.projects"),
            icon: <TbPresentation />,
        },
        {
            id: "03",
            text: t("menu.contact"),
            icon: <TbPhone />,
        },
    ];

    return (
        <div
            ref={appRef}
            className="App w-screen h-screen max-w-dvw max-h-dvh overflow-x-hidden overflow-y-auto bg-background"
            theme={isDarkMode ? "dark" : "light"}
        >
            <div className="fixed top-4 right-4 z-99 flex items-center gap-3">
                <LanguageToggle />
                <ColorButton isDarkMode={isDarkMode} toggleTheme={toggleTheme} />
            </div>
            <Background />
            <Petals />
            <Menu
                items={menuitems}
                selectedItem={selectedItem}
                selectItem={(id) => {
                    window.location.hash = menuHashes[id];
                    setSelectedItem(id);
                    appRef.current?.scrollTo({ top: 0 });
                }}
                propstyle={{
                    position: "fixed",
                    bottom: "2rem",
                    left: "50%",
                    transform: "translate(-50%,0%)",
                    zIndex: 30,
                }}
            />
            <main className="relative left-1/2 mt-20 grid w-[clamp(10rem,84vw,50rem)] grid-cols-4 auto-rows-[clamp(1.75rem,calc(21vw-0.75rem),11.75rem)] gap-4 pb-24 transform-[translateX(-50%)] tablet:grid-cols-2 tablet:auto-rows-[clamp(4.5rem,calc(42vw-0.5rem),24.5rem)] before:content-[''] before:w-0 before:pb-[100%] before:row-start-1 before:row-end-1 before:col-start-1 before:col-end-1 before:aspect-square bento-container">
                {cardRegistry.map(({ id, content, config, action, tone }) => (
                    <BentoCard key={id} titleId={`card-${id}-title`} placement={config[position]} interaction={getCardInteraction(action, setDetail)} tone={tone}>
                        {content}
                    </BentoCard>
                ))}
            </main>
            <DetailDialog open={detail !== null} onClose={() => setDetail(null)} scrollKey={detail?.id}
                size={detail?.size ?? "lg"} labelledBy={detail?.titleId}>
                {detail?.render(setDetail)}
            </DetailDialog>
        </div>
    );
}

export default App;
