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
import PhoneBox from "./components/Boxes/PhoneBox";
import EmailBox from "./components/Boxes/EmailBox";

import PersonalPage from "./components/FullPages/PersonalPage";
import SchoolPage from "./components/FullPages/SchoolPage";
import SkillPage from "./components/FullPages/SkillPage";
import Project1Page from "./components/FullPages/Project1Page";
import Project2Page from "./components/FullPages/Project2Page";
import Project3Page from "./components/FullPages/Project3Page";
import ProjectBox4 from "./components/Boxes/ProjectBox4";
import Project4Page from "./components/FullPages/Project4Page";
import ProjectBox5 from "./components/Boxes/ProjectBox5";
import Project5Page from "./components/FullPages/Project5Page";

import { gsap } from "gsap";
import { Flip } from "gsap/Flip";
import GithubBox from "./components/Boxes/GithubBox";
import JobBox from "./components/Boxes/JobBox";
import JobPage from "./components/FullPages/JobPage";
import MurmurBox from "./components/Boxes/MurmurBox";

gsap.registerPlugin(Flip);

function App() {
    const { isDarkMode, setIsDarkMode } = useTheme();
    const [isCopied, setIsCopied] = useState(false);
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

    const handleCopyText = (textToCopy) => {
        navigator.clipboard
            .writeText(textToCopy)
            .then(() => {
                setIsCopied(true);
            })
            .catch((err) => {
                console.error("Failed to copy text: ", err);
            });
    };
    const handleLink = (link) => {
        window.open(link, "_blank");
    };

    return (
        <div
            className={`${style.main} App`}
            theme={isDarkMode ? "dark" : "light"}
        >
            <ColorButton setIsDarkMode={setIsDarkMode} />
            <DynamicRibbon />
            <div className={`${style.bentocontainer} bento-container`}>
                <ProjectBox5
                    setPage={() => setOpen(<Project5Page />)}
                    position={position}
                />
                <ProjectBox4
                    setPage={() => setOpen(<Project4Page />)}
                    position={position}
                />
                <ProjectBox3
                    setPage={() => setOpen(<Project3Page />)}
                    position={position}
                />
                <ProjectBox2
                    setPage={() => setOpen(<Project2Page />)}
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
                <PhoneBox
                    setPage={() => {
                        setOpen(null);
                        handleCopyText("0918887333");
                    }}
                    position={position}
                />
                <EmailBox
                    setPage={() => {
                        setOpen(null);
                        handleCopyText("yoyo0918887333@gmail.com");
                    }}
                    position={position}
                />
                <GithubBox
                    setPage={() => {
                        setOpen(null);
                        handleLink("https://github.com/Yoyo8787");
                    }}
                    position={position}
                />
                <JobBox
                    setPage={() => {
                        setOpen(<JobPage />);
                    }}
                    position={position}
                />
                <MurmurBox
                    setPage={() => {
                        setOpen(null);
                    }}
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
            {isCopied && (
                <span
                    className={`${style.alerttxt} ${style.fadeIn}`}
                    onAnimationEnd={() => setIsCopied(false)}
                >
                    已複製
                </span>
            )}
        </div>
    );
}

export default App;
