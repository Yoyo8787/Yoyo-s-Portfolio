import { useState } from "react";
import { useTheme } from "./hooks/useTheme";
import ColorButton from "./components/ColorButton";
import Menu from "./components/Menu";
import FullPage from "./components/FullPage";
import DynamicRibbon from "./components/Ribbon";
import style from "./App.module.css";
import { TbHome, TbUser, TbPresentation, TbPhone } from "react-icons/tb";

import PersonalBox from "./components/Boxes/PersonalBox";
import SkillBox from "./components/Boxes/SkillBox";
import SchoolBox from "./components/Boxes/SchoolBox";
import LanguageBox from "./components/Boxes/LanguageBox";
import ProjectBox1 from "./components/Boxes/ProjectBox1";
import ProjectBox2 from "./components/Boxes/ProjectBox2";
import ProjectBox3 from "./components/Boxes/ProjectBox3";

import PersonalPage from "./components/FullPages/PersonalPage";
import SchoolPage from "./components/FullPages/SchoolPage";
import SkillPage from "./components/FullPages/SkillPage";
import Project1Page from "./components/FullPages/Project1Page";

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
        <div
            className={`${style.main} App`}
            theme={isDarkMode ? "dark" : "light"}
        >
            <ColorButton setIsDarkMode={setIsDarkMode} />
            <DynamicRibbon />
            <div className={`${style.bentocontainer} bento-container`}>
                <ProjectBox3
                    setPage={() => setOpen(<Project1Page />)}
                    position={position}
                />
                <ProjectBox2
                    setPage={() => setOpen(<Project1Page />)}
                    position={position}
                />
                <ProjectBox1
                    setPage={() => setOpen(<Project1Page />)}
                    position={position}
                />
                <LanguageBox
                    setPage={() => setOpen(null)}
                    position={position}
                />
                <SchoolBox
                    setPage={() => setOpen(<SchoolPage />)}
                    position={position}
                />
                <PersonalBox
                    setPage={() => setOpen(<PersonalPage />)}
                    position={position}
                />
                <SkillBox
                    setPage={() => setOpen(<SkillPage />)}
                    position={position}
                />
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
