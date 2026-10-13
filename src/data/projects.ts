import type { Project } from "../types";
import project1pic1 from "../assets/project1demo1.png";
import project1pic2 from "../assets/project1demo2.gif";
import project1pic3 from "../assets/project1demo3.png";
import project1Cover from "../assets/project1_main2.png";
import project2gif1 from "../assets/project2demo1.gif";
import project2pic2 from "../assets/project2demo2.png";
import project2pic3 from "../assets/project2demo3.png";
import project2Cover from "../assets/project2_main.png";
import project3gif1 from "../assets/project3demo1.png";
import project3pic2 from "../assets/project3demo2.png";
import project3Cover from "../assets/project3_main.png";
import project4pic1 from "../assets/project4demo1.png";
import project4Cover from "../assets/project4_main.png";

export const projects: Record<string, Project> = {
    project1: {
        title: "學習診斷系統",
        cardTitle: ["學習診斷系統"],
        organization: "三元及第文教機構",
        cover: project1Cover,
        introduction: [{ text: "這個專案旨在轉變過去測驗練習只能透過考卷書寫的方式，通過響應式網頁來為使用者打造隨時隨地都能練習的環境。" }],
        technology: [{ text: "在這個專案中，我選擇使用 MongoDB, Express.js 和 Node.js 來構建後端，而前端則是採用純 HTML 結合 CSS。選擇這種技術方案的主要原因是專案的頁面較少，且需求直接。使用純 HTML 和 CSS 不僅可以保持開發的輕量化和靈活性，還可以快速實現界面的開發和部署。避免引入過於複雜的框架來簡化了開發流程，加快了載入速度，並使維護成本更低。" }],
        features: [
            { title: "學習診斷報告：", description: "我們提供深度學習診斷報告，進行全面分析涵蓋各科目和章節，並詳細展示學生的學習狀態，使學生能清晰認識到自身的學習進展和領域需加強的部分。", image: project1pic1, alt: "" },
            { title: "複習備忘：", description: "支持複習備忘功能，學生在作答過程中能夠儲存答案，便於未來回顧或重新練習，有效地加強學習記憶和理解。", image: project1pic2, alt: "" },
            { title: "分科測驗：", description: "分科測驗涵蓋所有學科及其相應章節，提供最全面的複習資源，幫助學生對知識點進行精確測試和深入理解，從而達到全面的學習效果。", image: project1pic3, alt: "" },
        ],
        contribution: [{ text: "此項目中，我主導了從構想到實現的全過程。這包括項目的初步規劃、用戶界面設計、後端及前端開發，以及最終的部署和用戶支持。我與用戶進行了深入的交流，以確保我們的解決方案完全符合他們的需求和期望。這一系列工作不僅提升了我的跨領域技術技能，也加深了我對用戶中心設計思維的理解。" }],
    },
    project2: {
        title: "線上測驗系統",
        cardTitle: ["線上測驗系統"],
        organization: "三元及第文教機構",
        cover: project2Cover,
        introduction: [{ text: "這個專案旨在解決過去測驗只能實體進行困境，通過網頁的呈現來提供使用者更加方便參與測驗練習的方式。" }],
        technology: [{ text: "此專案採用 " }, { text: "MERN stack", strong: true }, { text: " (MongoDB, Express.js, React, Node.js) 主要是因為它的全棧 JavaScript 解決方案可以簡化開發過程。MongoDB 提供靈活的數據存儲，Express.js 和 Node.js 為後端開發提供高效率支持，而 React 則讓前端界面動態和響應式更新更為便捷。這種技術組合有效地加快了開發速度並提高了專案的開發效率。" }],
        features: [
            { title: "每日練習規劃：", description: "學如逆水行舟，不進則退，依照日期規劃測驗，使學生可以每日練習", image: project2gif1, alt: "" },
            { title: "模擬考試環境：", description: "提供模擬真實考試環境，界面仿照考選部的考試畫面設計，讓學生能在真實模擬的環境下進行練習", image: project2pic2, alt: "" },
            { title: "成績競爭激勵：", description: "實現學生間的成績排名比較，透過互相競爭，激勵學生積極學習，提升學習動力", image: project2pic3, alt: "" },
        ],
        contribution: [{ text: "在此專案中，我負責整體規劃、用戶諮詢、界面設計、程式開發和部署。這段經歷加深了我在全棧開發和用戶體驗設計方面的專業技能，並在項目管理領域取得顯著進步" }],
    },
    project3: {
        title: "木質構造建築暨結構查詢資料庫",
        cardTitle: ["木質構造建築暨結構查詢資料庫"],
        organization: "台灣大學森林環境暨資源學系",
        cover: project3Cover,
        introduction: [{ text: "這個計畫致力於創建全球首個專注於木構造建築的綜合資料庫，旨在為工程師提供一個便捷的查詢平台，以便於他們查閱和應用相關數據，進而推廣和擴展木材建築的使用。這項創新性的資源庫意在促進永續建築實踐，並引領木材建築的全球趨勢。" }],
        technology: [{ text: "在這個專案中，我選擇使用 React 結合 Bootstrap 進行前端開發。這樣的技術組合使我們能夠利用 React 的組件化特性和 Bootstrap 的響應式設計框架，快速且高效地構建出一個用戶友好和視覺吸引力的界面。 後端方面，我採用了 Firebase 作為我們的資料庫和主機服務。Firebase 提供的免費方案不僅減輕了專案的財務壓力，還因其簡便的設置和管理、實時數據處理能力以及優秀的擴展性，而成為學術和小型專案的理想選擇。" }],
        features: [
            { title: "查詢功能: ", description: "專案提供全面的查詢功能，允許使用者依據建築名稱或特定的木構造工法進行精確搜索。界面上還會展示一個清晰的工法分類，使得查詢過程更加直觀和高效。", image: project3gif1, alt: "" },
            { title: "新增功能: ", description: "為了方便使用者快速地擴充資料庫，我們設計了一個用戶友好的新增頁面。這個頁面不僅操作簡便，還能夠讓使用者無需復雜步驟即可迅速上傳和整合新的木構造資料。", image: project3pic2, alt: "" },
        ],
        contribution: [{ text: "在此專案中，我的主要責任是與委託人——老師進行密切溝通，從而精確地理解和釐清項目需求。我負責整體的設計與架構規劃，並在有限的預算範圍內創造性地尋找並實施最適合的解決方案。此外，我也親自參與了程式碼的撰寫和網頁的部署工作，確保從概念到實際運行的每一步都符合項目目標和質量標準。" }],
    },
    project4: {
        title: "出貨單 CRUD 平台",
        cardTitle: ["出貨單 CRUD 平台"],
        organization: "三元及第文教機構",
        cover: project4Cover,
        introduction: [{ text: "此專案是一個緊急需求需要兩天內開發的出貨單管理系統，讓使用者能輕鬆進行出貨單的新增、刪除、修改和查詢（CRUD）。該平台適合中小型企業進行出貨單管理，提升了效率並減少了手動處理的錯誤。" }],
        technology: [{ text: "使用 .NET WebForm 技術構建後端，採用 SQL Server 進行數據儲存。選擇這種技術是因為 WebForm 支持快速構建表單應用，並具有穩定和可靠的性能，非常適合此類需要快速交付的項目。SQL Server 作為後端數據庫，能夠保證數據的完整性和快速查詢。" }],
        features: [
            { image: project4pic1, alt: "出貨單管理示例", fullWidth: true },
            { title: "出貨單管理：", description: "支持出貨單的 CRUD 操作，讓使用者可以方便地新增、更新和刪除出貨單，並且查詢歷史出貨記錄。" },
            { title: "資料驗證：", description: "平台內置資料驗證，確保輸入的出貨單資訊符合規範，減少數據錯誤，提升出貨單管理的精確度。" },
        ],
        contribution: [{ text: "在此專案中，我負責了整體系統的設計和開發，包括後端架構的搭建、數據庫設計和 WebForm 前端表單的構建。此外，我也進行了測試和調試，確保平台的穩定性和易用性，並與使用者進行了反覆溝通，根據他們的反饋進行了系統優化。" }],
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
