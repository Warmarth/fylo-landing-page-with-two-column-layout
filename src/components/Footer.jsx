import React from "react";
import email from "../images/icon-email.svg";
import phone from "../images/icon-phone.svg";
import logo from "../Assets/logo.svg";

const Footer = () => {
  const listItems = ["About Us", "Jobs", "Press", "Blog"];
  const listItems2 = ["Contact Us", "Terms", "Privacy"];
  return (
    <footer className="col-1 text-slate-200 grid p-12 gap-8 items-center">
      <img src={logo} alt="logo" className="logo" />
      <section
        className="flex flex-col lg:flex-row 
      transition gap-12 lg:justify-between"
      >
        <article
          className=" flex flex-col
       gap-4  "
        >
          <div className="flex gap-x-6">
            <img src={phone} alt="phone" className="w-6" />{" "}
            <p>Phone: +1-543-123-4567 </p>
          </div>
          <div className="flex gap-x-6">
            <img src={email} alt="email" className="w-6" />
            <p>example@fylo.com</p>
          </div>
        </article>
        <ul className="grid gap-y-4 col-2  ">
          {listItems.map((item, index) => {
            return <li key={index}>{item}</li>;
          })}
        </ul>
        <ul className="grid gap-y-4 col-2 ">
          {listItems2.map((item, index) => {
            return <li key={index}>{item}</li>;
          })}
        </ul>

        <div className="flex gap-6 justify-center ">
          <img src="" alt="facebook" />
          <img src="" alt="twitter" />
          <img src="" alt="instagram" />
        </div>
      </section>
    </footer>
  );
};
/**http://localhost:3000/?email=godsonibeaka%40gmail.com */

export default Footer;
