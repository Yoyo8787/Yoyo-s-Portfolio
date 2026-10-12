import React from "react";

const SchoolPage = () => {
    return (
        <div>
            <h2>學歷</h2>
            <ul className="list-none p-0">
                <li className="border-l-[3px] [border-left-style:solid] border-secondary my-[10px] p-[20px] relative">
                    <label className="w-[15px] h-[15px] bg-secondary rounded-full absolute left-[-8px] top-[20px]"></label>
                    <div className="mb-[5px] font-bold text-foreground">2015-2018</div>
                    <div className="mb-[5px] text-[18px] font-bold">台北市立建國高級中學</div>
                </li>
                <li className="border-l-[3px] [border-left-style:solid] border-secondary my-[10px] p-[20px] relative">
                    <label className="w-[15px] h-[15px] bg-secondary rounded-full absolute left-[-8px] top-[20px]"></label>
                    <div className="mb-[5px] font-bold text-foreground">2018-2023</div>
                    <div className="mb-[5px] text-[18px] font-bold">國立台灣大學</div>
                    <div className="text-[16px] text-foreground">
                        森林環境暨資源學系
                    </div>
                </li>
                <li className="border-l-[3px] [border-left-style:solid] border-secondary my-[10px] p-[20px] relative">
                    <label className="w-[15px] h-[15px] bg-secondary rounded-full absolute left-[-8px] top-[20px]"></label>
                    <div className="mb-[5px] font-bold text-foreground">2024-預計2025/7畢業</div>
                    <div className="mb-[5px] text-[18px] font-bold">國立台灣大學</div>
                    <div className="text-[16px] text-foreground">
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
