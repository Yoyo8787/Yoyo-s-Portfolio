import React from "react";
import style from "./PageElement.module.css";
import pic1 from "../../assets/project1demo1.PNG";
import pic2 from "../../assets/project1demo2.gif";
import pic3 from "../../assets/project1demo3.PNG";

const Project1Page = () => {
    return (
        <div className={style.project}>
            <h2>專案介紹：學習診斷系統</h2>
            <p>
                這個專案旨在轉變過去測驗練習只能透過考卷書寫的方式，通過響應式網頁來為使用者打造隨時隨地都能練習的環境。
            </p>

            <h3 className={style.title}>技術和工具</h3>
            <p>
                在這個專案中，我選擇使用 MongoDB, Express.js 和 Node.js
                來構建後端，而前端則是採用純 HTML 結合
                CSS。選擇這種技術方案的主要原因是專案的頁面較少，且需求直接。使用純
                HTML 和 CSS
                不僅可以保持開發的輕量化和靈活性，還可以快速實現界面的開發和部署。避免引入過於複雜的框架來簡化了開發流程，加快了載入速度，並使維護成本更低。
            </p>

            <h3 className={style.title}>主要功能</h3>
            <ul>
                <li className={style.func}>
                    <div>
                        <b>學習診斷報告：</b>
                        <div>
                            我們提供深度學習診斷報告，進行全面分析涵蓋各科目和章節，並詳細展示學生的學習狀態，使學生能清晰認識到自身的學習進展和領域需加強的部分。
                        </div>
                    </div>

                    <img className={style.gif1} src={pic1} alt="" />
                </li>
                <li className={style.func}>
                    <div>
                        <b>複習備忘：</b>
                        <div>
                            支持複習備忘功能，學生在作答過程中能夠儲存答案，便於未來回顧或重新練習，有效地加強學習記憶和理解。
                        </div>
                    </div>

                    <img src={pic2} className={style.gif1} alt="" />
                </li>
                <li className={style.func}>
                    <div>
                        <b>分科測驗：</b>
                        <div>
                            分科測驗涵蓋所有學科及其相應章節，提供最全面的複習資源，幫助學生對知識點進行精確測試和深入理解，從而達到全面的學習效果。
                        </div>
                    </div>

                    <img src={pic3} className={style.gif1} alt="" />
                </li>
            </ul>

            <h3 className={style.title}>個人貢獻</h3>
            <p>
                此項目中，我主導了從構想到實現的全過程。這包括項目的初步規劃、用戶界面設計、後端及前端開發，以及最終的部署和用戶支持。我與用戶進行了深入的交流，以確保我們的解決方案完全符合他們的需求和期望。這一系列工作不僅提升了我的跨領域技術技能，也加深了我對用戶中心設計思維的理解。
            </p>
        </div>
    );
};

export default Project1Page;
