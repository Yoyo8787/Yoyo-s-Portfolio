import React from "react";

const JobPage = () => {
    return (
        <div>
            <h2>工作經歷</h2>
            <ul className="list-none p-0">
                <li className="border-l-[3px] [border-left-style:solid] border-secondary my-[10px] p-[20px] relative">
                    <label className="w-[15px] h-[15px] bg-secondary rounded-full absolute left-[-8px] top-[20px]"></label>
                    <div className="mb-[5px] font-bold text-foreground">2021-2022</div>
                    <div className="mb-[5px] text-[18px] font-bold">台北市補教協會</div>
                    <div className="text-[16px] text-foreground">
                        連鎖安親班課程負責人
                    </div>
                </li>
                <li className="border-l-[3px] [border-left-style:solid] border-secondary my-[10px] p-[20px] relative">
                    <label className="w-[15px] h-[15px] bg-secondary rounded-full absolute left-[-8px] top-[20px]"></label>
                    <div className="mb-[5px] font-bold text-foreground">2020-2024</div>
                    <div className="mb-[5px] text-[18px] font-bold">三元及第文教機構</div>
                    <div className="text-[16px] text-foreground">資訊部實習</div>
                </li>
                <li className="border-l-[3px] [border-left-style:solid] border-secondary my-[10px] p-[20px] relative">
                    <label className="w-[15px] h-[15px] bg-secondary rounded-full absolute left-[-8px] top-[20px]"></label>
                    <div className="mb-[5px] font-bold text-foreground">2024-2024</div>
                    <div className="mb-[5px] text-[18px] font-bold">
                        DeepQ 奧啓迪科技股份有限公司
                    </div>
                    <div className="text-[16px] text-foreground">研發部門實習</div>
                </li>
            </ul>
        </div>
    );
};

export default JobPage;
