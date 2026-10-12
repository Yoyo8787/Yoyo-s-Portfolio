import React from "react";
import style from "./PageElement.module.css";

const JobPage = () => {
    return (
        <div>
            <h2>工作經歷</h2>
            <ul className={style.timeline}>
                <li className={style.timelineevent}>
                    <label className={style.eventicon}></label>
                    <div className={style.eventtime}>2021-2022</div>
                    <div className={style.eventtitle}>台北市補教協會</div>
                    <div className={style.eventdescription}>
                        連鎖安親班課程負責人
                    </div>
                </li>
                <li className={style.timelineevent}>
                    <label className={style.eventicon}></label>
                    <div className={style.eventtime}>2020-2024</div>
                    <div className={style.eventtitle}>三元及第文教機構</div>
                    <div className={style.eventdescription}>資訊部實習</div>
                </li>
                <li className={style.timelineevent}>
                    <label className={style.eventicon}></label>
                    <div className={style.eventtime}>2024-2024</div>
                    <div className={style.eventtitle}>
                        DeepQ 奧啓迪科技股份有限公司
                    </div>
                    <div className={style.eventdescription}>研發部門實習</div>
                </li>
            </ul>
        </div>
    );
};

export default JobPage;
