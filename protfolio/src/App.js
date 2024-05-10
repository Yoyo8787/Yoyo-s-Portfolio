import "./App.css";
import { useTheme } from "./hooks/useTheme";
import ColorButton from "./components/ColorButton";
import Menu from "./components/Menu";
import { TbHome, TbUser, TbPresentation, TbPhone } from "react-icons/tb";

function App() {
    const { isDarkMode, setIsDarkMode } = useTheme();

    const menuitems = [
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

    return (
        <div className="App" theme={isDarkMode ? "dark" : "light"}>
            <ColorButton setIsDarkMode={setIsDarkMode} />
            <Menu
                items={menuitems}
                selectItem={() => {}}
                propstyle={{
                    position: "fixed",
                    bottom: "2rem",
                    left: "50%",
                    transform: "translate(-50%,0%)",
                }}
            />
        </div>
    );
}

export default App;
