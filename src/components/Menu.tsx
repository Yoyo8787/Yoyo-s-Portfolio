import type { CSSProperties } from "react";
import type { MenuId, MenuItem, Position } from "../types";
import React, { useState, useEffect } from "react";

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
        <div className="relative w-[90%] max-w-[35rem] flex justify-around h-11 rounded-[1.375rem] border border-solid border-primary bg-background" style={propstyle}>
            {items.map((item) => {
                return (
                    <div
                        key={item.id}
                        className="w-1/4 flex gap-[0.1rem] cursor-pointer justify-center items-center z-2 transition-all duration-[1s] ease-[ease] hover:[transform:scale(1.1)]"
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
                            className: `w-4 h-4 ${
                                selectedItem === item.id ? "text-background" : "text-foreground"
                            } `,
                        })}
                        <div
                            className={`text-[1rem] ${
                                selectedItem === item.id ? "text-background" : "text-foreground"
                            }`}
                        >
                            {item.text}
                        </div>
                    </div>
                );
            })}
            <div
                className="bg-primary top-[0.3rem] h-8 rounded-[1rem] w-[23%] absolute transition-all duration-500 ease-[ease]"
                style={{ left: `${25 * Number(selectedItem) + 1}%` }}
            ></div>
        </div>
    );
};

export default Menu;
