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
            text: "個人資訊",
            icon: <TbUser />,
        },
        {
            id: "02",
            text: "歷史專案",
            icon: <TbPresentation />,
        },
        {
            id: "03",
            text: "聯絡方法",
            icon: <TbPhone />,
        },
    ];

    return (
        <div className="App" theme={isDarkMode ? "dark" : "light"}>
            <ColorButton setIsDarkMode={setIsDarkMode} />
            <Menu items={menuitems} />
        </div>
    );
}

export default App;
