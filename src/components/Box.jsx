import React, { useEffect, useRef, useState } from "react";
import style from "./Box.module.css";
import { gsap } from "gsap";
import { Flip } from "gsap/Flip";

const Box = ({ children, boxstyle = {}, gridArea, onclick = () => {} }) => {
    const [key, setKey] = useState(0);
    const boxRef = useRef(null);

    useEffect(() => {
        const state = Flip.getState(boxRef.current);
        boxRef.current.style.gridArea = gridArea;
        Flip.from(state, {
            duration: 1,
            ease: "power1.inOut",
            absolute: true,
        });
    }, [gridArea]);

    useEffect(() => {
        if (key > 0) {
            const tl = gsap.timeline();
            tl.to(boxRef.current, {
                scale: 0.8,
                opacity: 0.8,
                duration: 0.1, // 假设整个动画持续时间为1秒，则这个阶段为0.1秒
                ease: "power1.inOut", // 可以根据需要调整缓动效果
            })
                .to(boxRef.current, {
                    scale: 1.5,
                    opacity: 0,
                    duration: 0.9, // 剩下的时间
                    ease: "power1.inOut",
                })
                .to(boxRef.current, {
                    scale: 1, // 恢复到原始缩放
                    opacity: 1, // 恢复到原始透明度
                    duration: 0.1, // 这个阶段的持续时间可以根据需要调整
                    ease: "power1.inOut",
                    onComplete: () => {
                        boxRef.current.style.transform = "none"; // 重置 transform
                    },
                });
        }

        return () => {};
    }, [key]);

    return (
        <div
            style={{ ...boxstyle }}
            onClick={() => {
                onclick();
                setKey((prevKey) => prevKey + 1);
            }}
            ref={boxRef}
            className={`${style.box} `}
        >
            {children}
        </div>
    );
};

export default Box;
