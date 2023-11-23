import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const InformationText = ({title, text}) => {
	
	return (
		<p>
            <span className="text-xl text-[#FD9200] font-bold drop-shadow-md">{title}</span>
            {text}
        </p>
	);
};

export default InformationText;
