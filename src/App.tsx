import type { CardAction, MenuId, MenuItem, Position } from "./types";
import { useState } from "react";
import { useTheme } from "./hooks/useTheme";
import { useMobileLayout } from "./hooks/useMobileLayout";
import { cards } from "./data/cards";
import ColorButton from "./components/ColorButton";
import Menu from "./components/Menu";
import FullPage from "./components/FullPage";
import PageContent from "./components/PageContent";
import DynamicRibbon from "./components/Ribbon";
import { TbHome, TbUser, TbPresentation, TbPhone } from "react-icons/tb";

function App() {
    const { isDarkMode, toggleTheme } = useTheme();
    const [isCopied, setIsCopied] = useState(false);
    const [contentId, setContentId] = useState<string | null>(null);
    const [selectedItem, setSelectedItem] = useState<MenuId>("00");
    const isMobile = useMobileLayout();
    const position: Position = isMobile ? `${selectedItem}mobile` : selectedItem;

    const menuitems: MenuItem[] = [
        {
            id: "00",
            text: "首頁",
            icon: <TbHome />,
        },
        {
            id: "01",
            text: "個人",
            icon: <TbUser />,
        },
        {
            id: "02",
            text: "專案",
            icon: <TbPresentation />,
        },
        {
            id: "03",
            text: "聯絡",
            icon: <TbPhone />,
        },
    ];

    const handleCopyText = (textToCopy: string) => {
        navigator.clipboard
            .writeText(textToCopy)
            .then(() => {
                setIsCopied(true);
            })
            .catch((err) => {
                console.error("複製文字失敗：", err);
            });
    };
    const handleLink = (link: string) => {
        window.open(link, "_blank");
    };

    const handleAction = (action: CardAction) => {
        if (action.type === "content") {
            setContentId(action.contentId);
            return;
        }
        setContentId(null);
        if (action.type === "copy") handleCopyText(action.text);
        if (action.type === "link") handleLink(action.url);
    };

    return (
        <div
            className="App w-screen h-screen max-w-dvw max-h-dvh overflow-x-hidden overflow-y-auto bg-background"
            theme={isDarkMode ? "dark" : "light"}
        >
            <ColorButton toggleTheme={toggleTheme} />
            <DynamicRibbon />
            <div className="relative left-1/2 mt-8 grid w-[clamp(10rem,84vw,50rem)] grid-cols-4 auto-rows-[clamp(1.75rem,calc(21vw-0.75rem),11.75rem)] gap-4 pb-24 transform-[translateX(-50%)] mobile:grid-cols-2 mobile:auto-rows-[clamp(4.5rem,calc(42vw-0.5rem),24.5rem)] before:content-[''] before:w-0 before:pb-[100%] before:row-start-1 before:row-end-1 before:col-start-1 before:col-end-1 before:aspect-square bento-container">
                {cards.map(({ id, component: Card, config, action }) => {
                    const layout = config[position];
                    const disabled = Number(layout.opacity) === 0.2;
                    return <Card key={id} layout={layout} disabled={disabled}
                        setPage={() => handleAction(action)} />;
                })}
            </div>
            <Menu
                items={menuitems}
                selectedItem={selectedItem}
                selectItem={setSelectedItem}
                propstyle={{
                    position: "fixed",
                    bottom: "2rem",
                    left: "50%",
                    transform: "translate(-50%,0%)",
                }}
            />
            <FullPage open={contentId !== null} onClose={() => setContentId(null)}>
                {contentId !== null && <PageContent contentId={contentId} />}
            </FullPage>
            {isCopied && (
                <span
                    className="absolute left-1/2 bottom-[20%] transform-[translateX(-50%)] bg-[color-mix(in_srgb,var(--fontcolor)_90%,var(--backgroundcolor))] px-4 py-2 rounded-lg text-background animate-copy"
                    onAnimationEnd={() => setIsCopied(false)}
                >
                    已複製
                </span>
            )}
        </div>
    );
}

export default App;
