import { useEffect, useRef } from "react";

const ribs = Array.from({ length: 15 }, (_, index) => ({
    phaseShift: index * (Math.PI / 15),
    dy: index * 0.2,
}));
const points = Array.from({ length: 200 }, (_, index) => ({
    x: (index / 200) * 100,
    phase: (index / 200) * 4 * Math.PI,
}));
const wavePath = (index: number, offset: number) => `M ${points.map(({ x, phase }) => {
    const { phaseShift, dy } = ribs[index];
    const y = Math.sin(phase + (offset / 100) * 2 * Math.PI + phaseShift) * 3 + 50 + dy;
    return `${x},${y}`;
}).join(" L ")}`;

const Background = () => {
    const pathRefs = useRef<(SVGPathElement | null)[]>([]);

    useEffect(() => {
        let offset = 0;
        let frameId: number;
        const animate = () => {
            offset = (offset + 0.05) % 100;
            pathRefs.current.forEach((path, index) => path?.setAttribute("d", wavePath(index, offset)));
            frameId = requestAnimationFrame(animate);
        };
        frameId = requestAnimationFrame(animate);
        return () => cancelAnimationFrame(frameId);
    }, []);

    return (
        <svg style={{ position: "absolute" }} width="100vw" height="100vh"
            viewBox="0 0 100 50" preserveAspectRatio="none">
            {ribs.map((_, index) => (
                <path key={index} ref={(path) => { pathRefs.current[index] = path; }}
                    d={wavePath(index, 0)} fill="none" stroke="var(--accentcolor)" strokeWidth="0.1"
                    style={{ opacity: "0.6", transform: "rotate(24deg) translate(-5%,-110%) scale(1.2)" }} />
            ))}
        </svg>
    );
};

export default Background;
