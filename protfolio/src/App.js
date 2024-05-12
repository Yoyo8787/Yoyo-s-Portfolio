import { useState } from "react";
import { useTheme } from "./hooks/useTheme";
import ColorButton from "./components/ColorButton";
import Menu from "./components/Menu";
import FullPage from "./components/FullPage";
import style from "./App.module.css";
import { TbHome, TbUser, TbPresentation, TbPhone } from "react-icons/tb";

import PersonalBox from "./components/Boxes/PersonalBox";
import SkillBox from "./components/Boxes/SkillBox";
import SchoolBox from "./components/Boxes/SchoolBox";
import LanguageBox from "./components/Boxes/LanguageBox";
import ProjectBox1 from "./components/Boxes/ProjectBox1";
import ProjectBox2 from "./components/Boxes/ProjectBox2";
import ProjectBox3 from "./components/Boxes/ProjectBox3";

import { gsap } from "gsap";
import { Flip } from "gsap/Flip";
gsap.registerPlugin(Flip);

function App() {
    const { isDarkMode, setIsDarkMode } = useTheme();
    const [open, setOpen] = useState(false);
    const [position, setPosition] = useState("00");

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
            <div className={`${style.bentocontainer} bento-container`}>
                <ProjectBox3
                    setPage={() => setOpen(true)}
                    position={position}
                />
                <ProjectBox2
                    setPage={() => setOpen(true)}
                    position={position}
                />
                <ProjectBox1
                    setPage={() => setOpen(true)}
                    position={position}
                />
                <LanguageBox
                    setPage={() => setOpen(true)}
                    position={position}
                />
                <SchoolBox setPage={() => setOpen(true)} position={position} />
                <PersonalBox
                    setPage={() => setOpen(true)}
                    position={position}
                />
                <SkillBox setPage={() => setOpen(true)} position={position} />
            </div>
            <Menu
                items={menuitems}
                selectItem={setPosition}
                propstyle={{
                    position: "fixed",
                    bottom: "2rem",
                    left: "50%",
                    transform: "translate(-50%,0%)",
                }}
            />
            <FullPage open={open} setOpen={setOpen}>
                PersonalBox#FULL
            </FullPage>
        </div>
    );
}

export default App;
