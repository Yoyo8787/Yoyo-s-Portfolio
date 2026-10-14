import type { CardAction, MenuId, MenuItem, Position } from "./types";
import { useEffect, useRef, useState } from "react";
import { useTheme } from "./hooks/useTheme";
import { useMobileLayout } from "./hooks/useMobileLayout";
import { cardRegistry } from "./components/box/registry";
import { menuHashes } from "./constants/menu";
import ColorButton from "./components/ColorButton";
import Menu from "./components/Menu";
import ModalLayout from "./components/modal/Layout";
import Content from "./components/modal/Content";
import Background from "./components/Background";
import Petals from "./components/Petals";
import { TbHome, TbUser, TbPresentation, TbPhone } from "react-icons/tb";

const getMenuFromHash = (): MenuId =>
    (Object.keys(menuHashes) as MenuId[]).find(
        (id) => menuHashes[id] === window.location.hash,
    ) ?? "00";

function App() {
    const appRef = useRef<HTMLDivElement>(null);
    const { isDarkMode, toggleTheme } = useTheme();
    const [contentId, setContentId] = useState<string | null>(null);
    const [selectedItem, setSelectedItem] = useState<MenuId>(getMenuFromHash);
    const isMobile = useMobileLayout();
    const position: Position = isMobile ? `${selectedItem}mobile` : selectedItem;

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

    // 連結卡（GitHub、Email）由卡片內的 <a> 直接開啟，這裡只處理詳情。
    const handleAction = (action: CardAction) => {
        if (action.type === "content") setContentId(action.contentId);
    };

    return (
        <div
            ref={appRef}
            className="App w-screen h-screen max-w-dvw max-h-dvh overflow-x-hidden overflow-y-auto bg-background"
            theme={isDarkMode ? "dark" : "light"}
        >
            <ColorButton isDarkMode={isDarkMode} toggleTheme={toggleTheme} />
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
            <div className="relative left-1/2 mt-8 grid w-[clamp(10rem,84vw,50rem)] grid-cols-4 auto-rows-[clamp(1.75rem,calc(21vw-0.75rem),11.75rem)] gap-4 pb-24 transform-[translateX(-50%)] mobile:grid-cols-2 mobile:auto-rows-[clamp(4.5rem,calc(42vw-0.5rem),24.5rem)] before:content-[''] before:w-0 before:pb-[100%] before:row-start-1 before:row-end-1 before:col-start-1 before:col-end-1 before:aspect-square bento-container">
                {cardRegistry.map(({ id, component: Card, config, action }) => {
                    const layout = config[position];
                    const disabled = Number(layout.opacity) === 0.2;
                    return <Card key={id} layout={layout} disabled={disabled}
                        actionType={action.type}
                        href={action.type === "link" ? action.url : undefined}
                        setPage={() => handleAction(action)} />;
                })}
            </div>
            <ModalLayout open={contentId !== null} onClose={() => setContentId(null)} scrollKey={contentId}>
                {contentId !== null && <Content contentId={contentId} onNavigate={setContentId} />}
            </ModalLayout>
        </div>
    );
}

export default App;
