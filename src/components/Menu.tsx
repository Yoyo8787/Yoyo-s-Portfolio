import type { CSSProperties } from "react";
import type { MenuId, MenuItem } from "../types";
import React from "react";
import { useTranslation } from "react-i18next";
import { menuHashes } from "../constants/menu";
import { tabAnimation } from "../constants/animation";

const tabTransition = {
    transitionDuration: `${tabAnimation.duration}s`,
    transitionTimingFunction: tabAnimation.cssEase,
};

interface MenuProps {
    propstyle: CSSProperties;
    items: MenuItem[];
    selectedItem: MenuId;
    selectItem: (id: MenuId) => void;
}

const Menu = ({ propstyle, items, selectedItem, selectItem }: MenuProps) => {
    const { t } = useTranslation();
    return (
        <nav aria-label={t("navigation")} className="relative w-[90%] max-w-140 flex justify-around h-11 rounded-[1.375rem] border-2 border-solid border-primary bg-surface shadow-card" style={propstyle}>
            {items.map((item) => {
                const selected = selectedItem === item.id;
                return (
                    <a
                        key={item.id}
                        href={menuHashes[item.id]}
                        aria-current={selected ? "page" : undefined}
                        className={`w-1/4 flex gap-[0.1rem] justify-center items-center z-2 no-underline font-medium will-change-transform [backface-visibility:hidden] transition-[transform,color] hover:transform-[translateZ(0)_scale(1.1)] ${selected ? "text-on-primary transform-[translateZ(0)_scale(1.1)]" : "text-foreground transform-[translateZ(0)_scale(1)]"}`}
                        style={tabTransition}
                        onClick={(event) => {
                            event.preventDefault();
                            selectItem(item.id);
                        }}
                    >
                        {React.cloneElement(item.icon, { className: "w-4 h-4" })}
                        <span className="text-[1rem] mobile:text-sm">{item.text}</span>
                    </a>
                );
            })}
            <div
                aria-hidden
                className="bg-primary top-1 h-8 rounded-2xl w-[23%] absolute transition-[left]"
                style={{ ...tabTransition, left: `${25 * Number(selectedItem) + 1}%` }}
            ></div>
        </nav>
    );
};

export default Menu;
