import React, { useState } from "react";

const SectionProfile = ({ text, onClick }) => {

    const iconPath = `${process.env.PUBLIC_URL}/triangle-right.svg`;

    return (
        <button className="w-[45rem] h-20 bg-slate-300 rounded-lg mb-4" onClick={onClick}>
            <div className="flex justify-between items-center">
                <p className="ml-6 text-center">{text}</p>
                <img src={iconPath} alt="icon" className="h-12 w-12" />
            </div>
        </button>
    );
}

export default SectionProfile