import React from "react";
import { Link } from "react-router-dom";

const Button = ({ className, text, icon, link = "", onClick }) => {
  if (link)
    return (
      <Link
        className={`flex flex-nowrap items-center justify-center gap-4 rounded-lg bg-black px-6 py-4 text-white ${className}`}
        to={link}
      >
        <p className="font-bold">{text}</p>
        <span className="material-symbols-outlined">{icon}</span>
      </Link>
    );
  else
    return (
      <button
        className={`flex flex-nowrap items-center justify-center gap-4 rounded-lg bg-black px-6 py-4 text-white ${className}`}
        type="button"
        onClick={onClick}
      >
        <p className="font-bold">{text}</p>
        <span className="material-symbols-outlined">{icon}</span>
      </button>
    );
};

export default Button;
