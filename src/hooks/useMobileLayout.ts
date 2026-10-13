import { useEffect, useState } from "react";

const mobileQuery = "(max-width: 650px)";

export const useMobileLayout = () => {
    const [isMobile, setIsMobile] = useState(() => window.matchMedia(mobileQuery).matches);

    useEffect(() => {
        const query = window.matchMedia(mobileQuery);
        const update = () => setIsMobile(query.matches);
        update();
        query.addEventListener("change", update);
        return () => query.removeEventListener("change", update);
    }, []);

    return isMobile;
};
