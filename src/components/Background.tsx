const wavePaths = Array.from({ length: 15 }, (_, index) => {
    const points = Array.from({ length: 401 }, (_, point) => {
        const x = point / 2;
        const y = Math.sin((x / 100) * 4 * Math.PI + index * (Math.PI / 15)) * 3 + 25 + index * 0.2;
        return `${x},${y}`;
    });
    return `M ${points.join(" L ")}`;
});

const Background = () => (
    <svg aria-hidden="true" className="fixed inset-0 w-full h-full pointer-events-none"
        viewBox="0 0 100 50" preserveAspectRatio="none">
        <g transform="rotate(24 50 25) translate(-10 -5) scale(1.2)">
            <g className="background-waves">
                {wavePaths.map((path, index) => (
                    <path key={index} d={path} fill="none"
                        stroke={index % 2 === 0 ? "var(--accentcolor)" : "var(--secondarycolor)"}
                        strokeWidth="0.12" opacity="0.7" />
                ))}
            </g>
        </g>
    </svg>
);

export default Background;
