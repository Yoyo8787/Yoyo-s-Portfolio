import type { CSSProperties } from "react";
import type { MenuId, MenuItem } from "../types";
import React from "react";

interface MenuProps {
    propstyle: CSSProperties;
    items: MenuItem[];
    selectedItem: MenuId;
    selectItem: (id: MenuId) => void;
}

const Menu = ({ propstyle, items, selectedItem, selectItem }: MenuProps) => {
    return (
        <div className="relative w-[90%] max-w-140 flex justify-around h-11 rounded-[1.375rem] border border-solid border-primary bg-background" style={propstyle}>
            {items.map((item) => {
                return (
                    <div
                        key={item.id}
                        className="w-1/4 flex gap-[0.1rem] cursor-pointer justify-center items-center z-2 transition-all duration-1000 ease-[ease] hover:transform-[scale(1.1)]"
                        onClick={() => selectItem(item.id)}
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
                className="bg-primary top-[0.3rem] h-8 rounded-2xl w-[23%] absolute transition-all duration-500 ease-[ease]"
                style={{ left: `${25 * Number(selectedItem) + 1}%` }}
            ></div>
        </div>
    );
};

export default Menu;
