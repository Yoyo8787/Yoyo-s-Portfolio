import React, { useState } from "react";
import style from "./Menu.module.css";

const Menu = ({ propstyle, items, selectItem }) => {
    const [selectedItem, setSelectedItem] = useState(0);
    return (
        <div className={style.menu} style={propstyle}>
            {items.map((item, i) => {
                return (
                    <div
                        key={item.id}
                        className={`${style.menuitem} `}
                        onClick={() => {
                            selectItem(item.id);
                            setSelectedItem(i);
                        }}
                    >
                        {React.cloneElement(item.icon, {
                            className: `${style.menuicon} ${
                                selectedItem === i ? style.selected : null
                            } `,
                        })}
                        <div
                            className={`${style.menutxt} ${
                                selectedItem === i ? style.selected : null
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
