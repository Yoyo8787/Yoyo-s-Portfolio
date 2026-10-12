import React from "react";

const Project5Page = () => {
    return (
        <div className="w-[35rem] max-w-[80vw] [&>h4]:mb-3 [&>p]:mt-1">
            <h2>專案介紹：聊天機器人配置編輯器</h2>
            <h4>DeepQ</h4>
            <p>
                配置編輯器是一個內部系統，允許企業自定義和管理聊天機器人的基本配置，包含了問候語、電話地址等紀錄。
                這個平台是為了解決系統配置的頻繁更新需求，實現無需代碼更改即可快速更新配置，提升了系統的靈活性和可維護性。
            </p>

            <h3 className="mt-6">技術和工具</h3>
            <p>
                此專案使用 React 作為前端框架，並使用 Fastify
                作為後端框架。數據儲存在 Google FireStore 中，並使用 Redis
                作為緩存，以確保高效的數據讀取速度。部署在 Google Cloud Platform
                上，提供穩定和可擴展的雲端環境。
            </p>

            <h3 className="mt-6">主要功能</h3>
            <ul>
                <li className="flex gap-4 mt-2 items-center [&>img]:w-[10rem] [&>img]:rounded-lg">
                    <div>
                        <b>配置管理：</b>
                        <div>
                            使用者可以創建、編輯和刪除配置項，並根據需要對配置進行分組，以便更靈活的管理。系統自動同步至多台伺服器，確保配置的即時更新。
                        </div>
                    </div>
                </li>
                <li className="flex gap-4 mt-2 items-center [&>img]:w-[10rem] [&>img]:rounded-lg">
                    <div>
                        <b>高效數據讀取：</b>
                        <div>
                            利用 Redis
                            進行快取處理，確保配置讀取速度，使聊天機器人能夠不用通過FireStore存儲，特別適用於高頻讀取的場景。同時，結合
                            FireStore 作為持久化儲存，達到高效與穩定的平衡。
                        </div>
                    </div>
                </li>
            </ul>

            <h3 className="mt-6">個人貢獻</h3>
            <p>
                在此專案中，我主導了前後端的整合，並負責了整體系統架構設計、快取和資料庫的設置。
                由於該專案是內部使用，因此我進行了用戶需求訪談，並根據他們的實際需求調整了系統功能，並且同時為了配合主要服務的聊天機器人做了緩存等不同程度的調整。
                此專案使我對於大規模數據存取和高效配置管理的系統以及雲端的部屬有了更深入的理解。
            </p>
        </div>
    );
};

export default Project5Page;
