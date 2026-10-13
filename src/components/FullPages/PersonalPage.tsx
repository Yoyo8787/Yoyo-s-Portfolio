import React from "react";
import img from "../../assets/person.jpg";

const PersonalPage = () => {
    return (
        <div className="grid grid-cols-2 items-center gap-8 max-w-2xl mobile:flex mobile:flex-col mobile:items-stretch mobile:gap-6">
            <img className="order-2 w-full rounded-sm mobile:order-0" src={img} alt="徐天祐個人照片" />
            <div className="min-w-0">
                <h2 className="text-3xl font-semibold">徐天祐</h2>
                <p className="mt-2 text-sm tracking-wide opacity-70">前端工程師</p>
                <p className="mt-6 leading-relaxed">
                    專注前端開發，具備後端開發能力。
                </p>
                <p className="mt-3 leading-relaxed">
                    工作之餘，透過 Side Project 探索想法與技術。
                </p>
            </div>
        </div>
    );
};

export default PersonalPage;
