import React from "react";
import style from "./Menu.module.css";

const menu = ({ items }) => {
    return (
        <div className={style.menu}>
            {items.map((item) => {
                return (
                    <div key={item.id} className={style.menuitem}>
                        {React.cloneElement(item.icon, {
                            className: `${style.menuicon} ${style.selected}`,
                        })}
                        <div className={`${style.menutxt} ${style.selected}`}>
                            {item.text}
                        </div>
                    </div>
                );
            })}
        </div>
    );
};

export default menu;
