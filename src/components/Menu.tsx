import type { CSSProperties } from "react";
import type { MenuId, MenuItem, Position } from "../types";
import React, { useState, useEffect } from "react";
import style from "./Menu.module.css";

interface MenuProps {
    propstyle: CSSProperties;
    items: MenuItem[];
    selectItem: (position: Position) => void;
}

const Menu = ({ propstyle, items, selectItem }: MenuProps) => {
    const [selectedItem, setSelectedItem] = useState<MenuId>("00");
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    const [currSize, setCurrSize] = useState<"desktop" | "mobile">("desktop");

    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
            if (currSize === "desktop" && window.innerWidth < 650) {
                selectItem(`${selectedItem}mobile`);
                setCurrSize("mobile");
                console.log("尺寸已變更");
            } else if (currSize === "mobile" && window.innerWidth >= 650) {
                selectItem(selectedItem);
                setCurrSize("desktop");
                console.log("尺寸已變更");
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
                                selectItem(`${item.id}mobile`);
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
                style={{ left: `${25 * Number(selectedItem) + 1}%` }}
            ></div>
        </div>
    );
};

export default Menu;
