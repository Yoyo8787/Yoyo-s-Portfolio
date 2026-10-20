export const tabAnimation = {
    duration: 0.6,
    ease: "back.out(1.2)",
    // 對應 back.out(1.2) 的 CSS 曲線，讓選單與卡片使用相同回彈。
    cssEase: "cubic-bezier(0.3333333333, 1.4, 0.6666666667, 1)",
} as const;
