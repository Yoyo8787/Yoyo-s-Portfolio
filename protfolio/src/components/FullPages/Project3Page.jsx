import React from "react";
import style from "./PageElement.module.css";
import gif1 from "../../assets/project3demo1.PNG";
import pic2 from "../../assets/project3demo2.PNG";

const Project3Page = () => {
    return (
        <div className={style.project}>
            <h2>專案介紹：木質構造建築暨結構查詢資料庫</h2>
            <p>
                這個計畫致力於創建全球首個專注於木構造建築的綜合資料庫，旨在為工程師提供一個便捷的查詢平台，以便於他們查閱和應用相關數據，進而推廣和擴展木材建築的使用。這項創新性的資源庫意在促進永續建築實踐，並引領木材建築的全球趨勢。
            </p>

            <h3 className={style.title}>技術和工具</h3>
            <p>
                在這個專案中，我選擇使用 React 結合 Bootstrap
                進行前端開發。這樣的技術組合使我們能夠利用 React 的組件化特性和
                Bootstrap
                的響應式設計框架，快速且高效地構建出一個用戶友好和視覺吸引力的界面。
                後端方面，我採用了 Firebase 作為我們的資料庫和主機服務。Firebase
                提供的免費方案不僅減輕了專案的財務壓力，還因其簡便的設置和管理、實時數據處理能力以及優秀的擴展性，而成為學術和小型專案的理想選擇。
            </p>

            <h3 className={style.title}>主要功能</h3>
            <ul>
                <li className={style.func}>
                    <div>
                        <b>查詢功能: </b>
                        <div>
                            專案提供全面的查詢功能，允許使用者依據建築名稱或特定的木構造工法進行精確搜索。界面上還會展示一個清晰的工法分類，使得查詢過程更加直觀和高效。
                        </div>
                    </div>

                    <img className={style.gif1} src={gif1} alt="" />
                </li>
                <li className={style.func}>
                    <div>
                        <b>新增功能: </b>
                        <div>
                            為了方便使用者快速地擴充資料庫，我們設計了一個用戶友好的新增頁面。這個頁面不僅操作簡便，還能夠讓使用者無需復雜步驟即可迅速上傳和整合新的木構造資料。
                        </div>
                    </div>

                    <img src={pic2} className={style.gif1} alt="" />
                </li>
            </ul>

            <h3 className={style.title}>個人貢獻</h3>
            <p>
                在此專案中，我的主要責任是與委託人——老師進行密切溝通，從而精確地理解和釐清項目需求。我負責整體的設計與架構規劃，並在有限的預算範圍內創造性地尋找並實施最適合的解決方案。此外，我也親自參與了程式碼的撰寫和網頁的部署工作，確保從概念到實際運行的每一步都符合項目目標和質量標準。
            </p>
        </div>
    );
};

export default Project3Page;
