import React from "react";
import style from "./PageElement.module.css";

const SchoolPage = () => {
    return (
        <div>
            <h2>學歷</h2>
            <ul className={style.timeline}>
                <li className={style.timelineevent}>
                    <label className={style.eventicon}></label>
                    <div className={style.eventtime}>2015-2018</div>
                    <div className={style.eventtitle}>台北市立建國高級中學</div>
                </li>
                <li className={style.timelineevent}>
                    <label className={style.eventicon}></label>
                    <div className={style.eventtime}>2018-2023</div>
                    <div className={style.eventtitle}>國立台灣大學</div>
                    <div className={style.eventdescription}>
                        森林環境暨資源學系
                    </div>
                </li>
                <li className={style.timelineevent}>
                    <label className={style.eventicon}></label>
                    <div className={style.eventtime}>2024-預計2025/7畢業</div>
                    <div className={style.eventtitle}>國立台灣大學</div>
                    <div className={style.eventdescription}>
                        資訊管理研究所
                        <br />
                        人機互動實驗室
                    </div>
                </li>
            </ul>
        </div>
    );
};

export default SchoolPage;
