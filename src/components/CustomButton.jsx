import React from "react";

const CustomButton = ({ content, handleClick, type, borderType }) => {
  return (
    <button
      className={`p-6 w-4 h-4 border-2 border-slate-800 rounded-${borderType} flex items-center justify-center hover:bg-slate-400`}
      onClick={() => handleClick && handleClick(type)}
    >
      {content}
    </button>
  );
};

export default CustomButton;
