import React, { useState, useEffect } from "react";
import style from "./Menu.module.css";

const Menu = ({ propstyle, items, selectItem }) => {
    const [selectedItem, setSelectedItem] = useState("00");
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    const [currSize, setCurrSize] = useState("desktop");

    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
            if (currSize === "desktop" && window.innerWidth < 650) {
                selectItem(selectedItem + "mobile");
                setCurrSize("mobile");
                console.log("size changed");
            } else if (currSize === "mobile" && window.innerWidth >= 650) {
                selectItem(selectedItem);
                setCurrSize("desktop");
                console.log("size changed");
            }
        };

        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, [currSize, selectedItem, selectItem]);

    useEffect(() => {
        if (window.innerWidth < 650) {
            selectItem("00mobile");
        } else {
            selectItem("00");
        }

        return () => {};
    }, [selectItem]);

    return (
        <div className={style.menu} style={propstyle}>
            {items.map((item) => {
                return (
                    <div
                        key={item.id}
                        className={`${style.menuitem} `}
                        onClick={() => {
                            if (windowWidth < 650) {
                                selectItem(item.id + "mobile");
                            } else {
                                selectItem(item.id);
                            }
                            setSelectedItem(item.id);
                        }}
                    >
                        {React.cloneElement(item.icon, {
                            className: `${style.menuicon} ${
                                selectedItem === item.id ? style.selected : null
                            } `,
                        })}
                        <div
                            className={`${style.menutxt} ${
                                selectedItem === item.id ? style.selected : null
                            }`}
                        >
                            {item.text}
                        </div>
                    </div>
                );
            })}
            <div
                className={style.selectedBack}
                style={{ left: `${25 * selectedItem + 1}%` }}
            ></div>
        </div>
    );
};

export default Menu;
