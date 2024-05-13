import React from "react";
import style from "./PageElement.module.css";
import gif1 from "../../assets/project2demo1.gif";
import pic2 from "../../assets/project2demo2.PNG";
import pic3 from "../../assets/project2demo3.PNG";

const Project2Page = () => {
    return (
        <div className={style.project}>
            <h2>專案介紹：線上測驗系統</h2>
            <p>
                這個專案旨在解決過去測驗只能實體進行困境，通過網頁的呈現來提供使用者更加方便參與測驗練習的方式。
            </p>

            <h3 className={style.title}>技術和工具</h3>
            <p>
                此專案採用 <b>MERN stack</b> (MongoDB, Express.js, React,
                Node.js) 主要是因為它的全棧 JavaScript
                解決方案可以簡化開發過程。MongoDB 提供靈活的數據存儲，Express.js
                和 Node.js 為後端開發提供高效率支持，而 React
                則讓前端界面動態和響應式更新更為便捷。這種技術組合有效地加快了開發速度並提高了專案的開發效率。
            </p>

            <h3 className={style.title}>主要功能</h3>
            <ul>
                <li className={style.func}>
                    <div>
                        <b>每日練習規劃：</b>
                        <div>
                            學如逆水行舟，不進則退，依照日期規劃測驗，使學生可以每日練習
                        </div>
                    </div>

                    <img className={style.gif1} src={gif1} alt="" />
                </li>
                <li className={style.func}>
                    <div>
                        <b>模擬考試環境：</b>
                        <div>
                            提供模擬真實考試環境，界面仿照考選部的考試畫面設計，讓學生能在真實模擬的環境下進行練習
                        </div>
                    </div>

                    <img src={pic2} className={style.gif1} alt="" />
                </li>
                <li className={style.func}>
                    <div>
                        <b>成績競爭激勵：</b>
                        <div>
                            實現學生間的成績排名比較，透過互相競爭，激勵學生積極學習，提升學習動力
                        </div>
                    </div>

                    <img src={pic3} className={style.gif1} alt="" />
                </li>
            </ul>

            <h3 className={style.title}>個人貢獻</h3>
            <p>
                在此專案中，我負責整體規劃、用戶諮詢、界面設計、程式開發和部署。這段經歷加深了我在全棧開發和用戶體驗設計方面的專業技能，並在項目管理領域取得顯著進步
            </p>
        </div>
    );
};

export default Project2Page;
