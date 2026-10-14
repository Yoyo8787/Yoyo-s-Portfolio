// 背景緩慢飄落的花瓣，只做裝飾。
const petals = [
    { left: "8%", top: "18%", size: "1.1rem", color: "var(--primarycolor)", delay: "0s" },
    { left: "90%", top: "42%", size: "0.8rem", color: "var(--secondarycolor)", delay: "-3s" },
    { left: "5%", top: "70%", size: "1.3rem", color: "var(--primarycolor)", delay: "-6s" },
    { left: "93%", top: "85%", size: "0.9rem", color: "var(--surface2color)", delay: "-2s" },
];

const Petals = () => (
    <div aria-hidden className="fixed inset-0 pointer-events-none mobile:hidden">
        {petals.map((petal) => (
            <svg key={petal.left + petal.top} viewBox="0 0 24 24"
                className="absolute animate-drift motion-reduce:animate-none"
                style={{ left: petal.left, top: petal.top, width: petal.size, height: petal.size, animationDelay: petal.delay }}>
                <path d="M12 2c4 4 6 9 0 20C6 11 8 6 12 2z" fill={petal.color} />
            </svg>
        ))}
    </div>
);

export default Petals;
