import React from "react";

const Box = ({ children, onClick }) => {
    return <div onClick={onClick}>{children}</div>;
};

export default Box;
