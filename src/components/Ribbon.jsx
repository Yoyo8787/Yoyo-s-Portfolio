import React, { useState, useEffect } from "react";

const DynamicRibbon = () => {
    const [offset, setOffset] = useState(0);
    const numberOfRibs = 15;

    useEffect(() => {
        const animate = () => {
            setOffset((prevOffset) => (prevOffset + 0.05) % 100); // 增加 offset 来实现波浪前进的效果
            requestAnimationFrame(animate);
        };
        requestAnimationFrame(animate);
        return () => cancelAnimationFrame(animate);
    }, []);

    const paths = Array.from({ length: numberOfRibs }).map((_, index) => {
        const phaseShift = index * (Math.PI / numberOfRibs); // 每条波浪的相位偏移
        const dy = index * 0.2; // 每条波浪在 y 方向的偏移
        const wavePath = `M ${Array.from({ length: 200 }, (_, i) => {
            const x = (i / 200) * 100;
            const y =
                Math.sin(
                    (x / 100) * 4 * Math.PI +
                        (offset / 100) * 2 * Math.PI +
                        phaseShift
                ) *
                    3 +
                50 +
                dy;
            return `${x},${y}`;
        }).join(" L ")}`;

        return (
            <path
                key={index}
                d={wavePath}
                fill="none"
                stroke="var(--accentcolor)"
                strokeWidth="0.1"
                style={{
                    opacity: "0.6",
                    transform: "rotate(24deg) translate(-5%,-110%) scale(1.2)",
                }}
            />
        );
    });

    return (
        <svg
            style={{ position: "absolute" }}
            width="100vw"
            height="100vh"
            viewBox="0 0 100 50"
            preserveAspectRatio="none"
        >
            {paths}
        </svg>
    );
};

export default DynamicRibbon;
