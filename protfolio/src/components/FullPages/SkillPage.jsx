import React from "react";
import style from "./PageElement.module.css";

const SkillPage = () => {
    return (
        <div>
            <h2>技能</h2>
            <div className={style.blocks}>
                <div className={style.block}>
                    <div className={style.blocktytle}>前端</div>
                    <ul className={style.blockcontent}>
                        <li className={style.blockitem}>HTML</li>
                        <li className={style.blockitem}>CSS</li>
                        <li className={style.blockitem}>JavaScript</li>
                        <li className={style.blockitem}>React</li>
                    </ul>
                </div>
                <div className={style.block}>
                    <div className={style.blocktytle}>後端</div>
                    <ul className={style.blockcontent}>
                        <li className={style.blockitem}>Node.js</li>
                        <li className={style.blockitem}>Express.js</li>
                        <li className={style.blockitem}>ASP.NET</li>
                    </ul>
                </div>
                <div className={style.block}>
                    <div className={style.blocktytle}>資料庫</div>
                    <ul className={style.blockcontent}>
                        <li className={style.blockitem}>MongoDB</li>
                        <li className={style.blockitem}>SQL Server</li>
                    </ul>
                </div>
                <div className={style.block}>
                    <div className={style.blocktytle}>資料分析</div>
                    <ul className={style.blockcontent}>
                        <li className={style.blockitem}>Python</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default SkillPage;
