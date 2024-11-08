import React from "react";
import img from "../../assets/person.jpg";
import style from "./PageElement.module.css";

const PersonalPage = () => {
    return (
        <div className={style.personalgrid}>
            <img className={style.personalimg} src={img} alt="" />
            <div className={style.personaltxt}>
                <h2>簡介</h2>
                <div className={style.m_top}>
                    我是<b>徐天祐</b>
                    ，來自台灣大學資訊管理研究所人機互動實驗室，目前就讀碩士二年級。
                    我的興趣和專長主要在網頁全端開發，尤其擅長前端設計與編程，實驗室研究主題也圍繞前端設計與使用者互動模式，使我能夠從使用者的角度出發提供更直觀、易用的產品和服務。
                    此外，我曾在補教業的資訊部門進行實習，負責維運伺服器和更新舊版網頁，同時也獨自開發了多個小型專案，這段經驗不僅提升了我的編程的技術，還培養了我的解決問題的能力。
                    我認為這些經歷使我成為一名更全面的開發者，能夠在不同情境下迅速適應並提供解決方案。
                </div>
            </div>
        </div>
    );
};

export default PersonalPage;
