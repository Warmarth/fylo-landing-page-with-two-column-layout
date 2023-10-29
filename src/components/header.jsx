import React from "react";
import "../App.css";
import Logo from "../Assets/logo.svg";

const Header = () => {
  const menu = ["feature", "team", "sign in"];
  return (
    <header>
      <div
        className="h-28 flex justify-between 
      items-center 
      w-11/12 mx-auto
      "
      >
        <img src={Logo} alt="logo" className="ml-4 h-8 " />
        <nav className="">
          <ul className="flex  gap-8 ">
            {menu.map((item, index) => {
             return <li key={index}>{item}</li>;
            })}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
