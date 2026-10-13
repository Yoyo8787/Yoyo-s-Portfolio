import type { Project } from "../types";
import dailyPractice from "../assets/online-exam/daily-practice.webp";
import mockExam from "../assets/online-exam/mock-exam.webp";
import ranking from "../assets/online-exam/ranking.webp";
import onlineExamCover from "../assets/online-exam/cover.webp";

export const projects: Record<string, Project> = {
    project2: {
        title: "線上測驗系統",
        cardTitle: ["線上測驗系統"],
        organization: "三元及第文教機構",
        cover: onlineExamCover,
        introduction: [{ text: "這個專案旨在解決過去測驗只能實體進行困境，通過網頁的呈現來提供使用者更加方便參與測驗練習的方式。" }],
        technology: [{ text: "此專案採用 " }, { text: "MERN stack", strong: true }, { text: " (MongoDB, Express.js, React, Node.js) 主要是因為它的全棧 JavaScript 解決方案可以簡化開發過程。MongoDB 提供靈活的數據存儲，Express.js 和 Node.js 為後端開發提供高效率支持，而 React 則讓前端界面動態和響應式更新更為便捷。這種技術組合有效地加快了開發速度並提高了專案的開發效率。" }],
        features: [
            { title: "每日練習規劃：", description: "學如逆水行舟，不進則退，依照日期規劃測驗，使學生可以每日練習", image: dailyPractice, alt: "" },
            { title: "模擬考試環境：", description: "提供模擬真實考試環境，界面仿照考選部的考試畫面設計，讓學生能在真實模擬的環境下進行練習", image: mockExam, alt: "" },
            { title: "成績競爭激勵：", description: "實現學生間的成績排名比較，透過互相競爭，激勵學生積極學習，提升學習動力", image: ranking, alt: "" },
        ],
        contribution: [{ text: "在此專案中，我負責整體規劃、用戶諮詢、界面設計、程式開發和部署。這段經歷加深了我在全棧開發和用戶體驗設計方面的專業技能，並在項目管理領域取得顯著進步" }],
    },
    project5: {
        title: "聊天機器人配置編輯器",
        cardTitle: ["聊天機器人", "     配置編輯器"],
        organization: "DeepQ",
        introduction: [{ text: "配置編輯器是一個內部系統，允許企業自定義和管理聊天機器人的基本配置，包含了問候語、電話地址等紀錄。 這個平台是為了解決系統配置的頻繁更新需求，實現無需代碼更改即可快速更新配置，提升了系統的靈活性和可維護性。" }],
        technology: [{ text: "此專案使用 React 作為前端框架，並使用 Fastify 作為後端框架。數據儲存在 Google FireStore 中，並使用 Redis 作為緩存，以確保高效的數據讀取速度。部署在 Google Cloud Platform 上，提供穩定和可擴展的雲端環境。" }],
        features: [
            { title: "配置管理：", description: "使用者可以創建、編輯和刪除配置項，並根據需要對配置進行分組，以便更靈活的管理。系統自動同步至多台伺服器，確保配置的即時更新。" },
            { title: "高效數據讀取：", description: "利用 Redis 進行快取處理，確保配置讀取速度，使聊天機器人能夠不用通過FireStore存儲，特別適用於高頻讀取的場景。同時，結合 FireStore 作為持久化儲存，達到高效與穩定的平衡。" },
        ],
        contribution: [{ text: "在此專案中，我主導了前後端的整合，並負責了整體系統架構設計、快取和資料庫的設置。 由於該專案是內部使用，因此我進行了用戶需求訪談，並根據他們的實際需求調整了系統功能，並且同時為了配合主要服務的聊天機器人做了緩存等不同程度的調整。 此專案使我對於大規模數據存取和高效配置管理的系統以及雲端的部屬有了更深入的理解。" }],
    },
};
