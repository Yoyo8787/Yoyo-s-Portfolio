import React from "react";
import style from "./PageElement.module.css";

const SkillPage = () => {
    return (
        <div>
            <h2>技能</h2>
            <div className={style.blocks}>
                <div className={style.block}>
                    <div className={style.blocktytle}>程式語言</div>
                    <ul className={style.blockcontent}>
                        <li className={style.blockitem}>JavaScript</li>
                        <li className={style.blockitem}>C#</li>
                        <li className={style.blockitem}>Python</li>
                    </ul>
                </div>
                <div className={style.block}>
                    <div className={style.blocktytle}>前端</div>
                    <ul className={style.blockcontent}>
                        <li className={style.blockitem}>
                            HTML, CSS, JavaScript
                        </li>
                        <li className={style.blockitem}>React (Next.js)</li>
                        <li className={style.blockitem}>Blazor (Razor)</li>
                        <li className={style.blockitem}>Tailwind, Bootstrap</li>
                        <li className={style.blockitem}>RWD, Figma</li>
                    </ul>
                </div>
                <div className={style.block}>
                    <div className={style.blocktytle}>後端</div>
                    <ul className={style.blockcontent}>
                        <li className={style.blockitem}>
                            Node.js (Express, Fastify)
                        </li>
                        <li className={style.blockitem}>
                            ASP.NET (WebForm, Blazor)
                        </li>
                    </ul>
                </div>
                <div className={style.block}>
                    <div className={style.blocktytle}>資料庫</div>
                    <ul className={style.blockcontent}>
                        <li className={style.blockitem}>MongoDB</li>
                        <li className={style.blockitem}>SQL Server</li>
                        <li className={style.blockitem}>
                            FireStore form Firebase
                        </li>
                        <li className={style.blockitem}>Redis</li>
                    </ul>
                </div>
                <div className={style.block}>
                    <div className={style.blocktytle}>雲端環境</div>
                    <ul className={style.blockcontent}>
                        <li className={style.blockitem}>GCP (GKE)</li>
                        <li className={style.blockitem}>
                            AWS (EC2, S3 Bucket)
                        </li>
                    </ul>
                </div>
                <div className={style.block}>
                    <div className={style.blocktytle}>開發環境與工具</div>
                    <ul className={style.blockcontent}>
                        <li className={style.blockitem}>VSCode</li>
                        <li className={style.blockitem}>Unity</li>
                        <li className={style.blockitem}>Git/Github</li>
                        <li className={style.blockitem}>
                            CI/CD (Github Action)
                        </li>
                    </ul>
                </div>
                <div className={style.block}>
                    <div className={style.blocktytle}>資料分析與機器學習</div>
                    <ul className={style.blockcontent}>
                        <li className={style.blockitem}>
                            scikit-learn, XGBoost
                        </li>
                        <li className={style.blockitem}>TensorFlow, PyTorch</li>
                        <li className={style.blockitem}>Pandas, NumPy</li>
                        <li className={style.blockitem}>Matplotlib</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default SkillPage;
