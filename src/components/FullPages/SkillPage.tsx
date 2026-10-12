import React from "react";

const SkillPage = () => {
    return (
        <div>
            <h2>技能</h2>
            <div className="w-[20rem] max-w-[80vw] mt-4 grid grid-cols-1 gap-8">
                <div className="w-[18rem]">
                    <div className="text-[1.25rem] font-bold">程式語言</div>
                    <ul className="pl-4 pt-1">
                        <li className="pt-[0.1rem]">
                            JavaScript (TypeScript)
                        </li>
                        <li className="pt-[0.1rem]">C#</li>
                        <li className="pt-[0.1rem]">Python</li>
                    </ul>
                </div>
                <div className="w-[18rem]">
                    <div className="text-[1.25rem] font-bold">前端</div>
                    <ul className="pl-4 pt-1">
                        <li className="pt-[0.1rem]">
                            HTML, CSS, JavaScript
                        </li>
                        <li className="pt-[0.1rem]">React (Next.js)</li>
                        <li className="pt-[0.1rem]">Blazor (Razor)</li>
                        <li className="pt-[0.1rem]">Tailwind, Bootstrap</li>
                        <li className="pt-[0.1rem]">RWD, Figma</li>
                    </ul>
                </div>
                <div className="w-[18rem]">
                    <div className="text-[1.25rem] font-bold">後端</div>
                    <ul className="pl-4 pt-1">
                        <li className="pt-[0.1rem]">
                            Node.js (Express, Fastify)
                        </li>
                        <li className="pt-[0.1rem]">
                            ASP.NET (WebForm, Blazor)
                        </li>
                    </ul>
                </div>
                <div className="w-[18rem]">
                    <div className="text-[1.25rem] font-bold">資料庫</div>
                    <ul className="pl-4 pt-1">
                        <li className="pt-[0.1rem]">MongoDB</li>
                        <li className="pt-[0.1rem]">SQL Server</li>
                        <li className="pt-[0.1rem]">
                            FireStore form Firebase
                        </li>
                        <li className="pt-[0.1rem]">Redis</li>
                    </ul>
                </div>
                <div className="w-[18rem]">
                    <div className="text-[1.25rem] font-bold">雲端環境</div>
                    <ul className="pl-4 pt-1">
                        <li className="pt-[0.1rem]">GCP (GKE)</li>
                        <li className="pt-[0.1rem]">
                            AWS (EC2, S3 Bucket)
                        </li>
                    </ul>
                </div>
                <div className="w-[18rem]">
                    <div className="text-[1.25rem] font-bold">開發環境與工具</div>
                    <ul className="pl-4 pt-1">
                        <li className="pt-[0.1rem]">VSCode</li>
                        <li className="pt-[0.1rem]">Unity</li>
                        <li className="pt-[0.1rem]">Git/Github</li>
                        <li className="pt-[0.1rem]">
                            CI/CD (Github Action)
                        </li>
                        <li className="pt-[0.1rem]">Docker, Kubernetes</li>
                    </ul>
                </div>
                <div className="w-[18rem]">
                    <div className="text-[1.25rem] font-bold">資料分析與機器學習</div>
                    <ul className="pl-4 pt-1">
                        <li className="pt-[0.1rem]">
                            scikit-learn, XGBoost
                        </li>
                        <li className="pt-[0.1rem]">TensorFlow, PyTorch</li>
                        <li className="pt-[0.1rem]">Pandas, NumPy</li>
                        <li className="pt-[0.1rem]">Matplotlib</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default SkillPage;
