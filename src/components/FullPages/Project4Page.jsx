import React from "react";
import style from "./PageElement.module.css";
import pic1 from "../../assets/project4demo1.PNG";

const Project4Page = () => {
    return (
        <div className={style.project}>
            <h2>專案介紹：出貨單 CRUD 平台</h2>
            <h4>三元及第文教機構</h4>
            <p>
                此專案是一個緊急需求需要兩天內開發的出貨單管理系統，讓使用者能輕鬆進行出貨單的新增、刪除、修改和查詢（CRUD）。該平台適合中小型企業進行出貨單管理，提升了效率並減少了手動處理的錯誤。
            </p>

            <h3 className={style.title}>技術和工具</h3>
            <p>
                使用 .NET WebForm 技術構建後端，採用 SQL Server
                進行數據儲存。選擇這種技術是因為 WebForm
                支持快速構建表單應用，並具有穩定和可靠的性能，非常適合此類需要快速交付的項目。SQL
                Server 作為後端數據庫，能夠保證數據的完整性和快速查詢。
            </p>

            <h3 className={style.title}>主要功能</h3>
            <ul>
                <li className={style.func} style={{ maxWidth: "90%" }}>
                    <img
                        className={style.gif1}
                        style={{ width: "100%" }}
                        src={pic1}
                        alt="出貨單管理示例"
                    />
                </li>
                <li className={style.func}>
                    <div>
                        <b>出貨單管理：</b>
                        <div>
                            支持出貨單的 CRUD
                            操作，讓使用者可以方便地新增、更新和刪除出貨單，並且查詢歷史出貨記錄。
                        </div>
                    </div>
                </li>
                <li className={style.func}>
                    <div>
                        <b>資料驗證：</b>
                        <div>
                            平台內置資料驗證，確保輸入的出貨單資訊符合規範，減少數據錯誤，提升出貨單管理的精確度。
                        </div>
                    </div>
                </li>
            </ul>

            <h3 className={style.title}>個人貢獻</h3>
            <p>
                在此專案中，我負責了整體系統的設計和開發，包括後端架構的搭建、數據庫設計和
                WebForm
                前端表單的構建。此外，我也進行了測試和調試，確保平台的穩定性和易用性，並與使用者進行了反覆溝通，根據他們的反饋進行了系統優化。
            </p>
        </div>
    );
};

export default Project4Page;
