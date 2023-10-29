import React from "react";
import "../App.css";
import image from "../images/illustration-2.svg";
import image2 from "../images/icon-arrow.svg";
import image3 from "../images/icon-quotes.svg";
import image4 from "../images/avatar-testimonial.jpg";

const Testimonial = () => {
  return (
    <div className="grid place-items-center lg:grid-cols-2 gap-2  Body lg:justify-start">
      <img src={image} alt="" className=" lg:order-3" />
      <section className="grid  place-items-start">
        <div className="w-9/12 mx-auto mb-8 ">
          <h2 className="font-bold text-xl my-8 text-center lg:text-left lg:text-3xl ">
            Stay productive, wherever you are
          </h2>
          <p className="mb-4">
            Never let location be an issue when accessing your files. Fylo has
            you covered for all of your file storage needs.
          </p>
          <p className="">
            Securely share files and folders with friends, family and colleagues
            for live collaboration. No email attachments required!
          </p>
        </div>
        <button
          type="button"
          className=" mb-12 mx-auto lg:mx-20 border-b border-green-600 text-green-500"
        >
          See how Fylo works <img src={image2} alt="" className="inline ml-1" />{" "}
        </button>
        <div className="grid gap-2 mx-auto place-items-start text-sm p-8 shadow-xl w-3/4">
          <img src={image3} alt="" />
          <p>
            {" "}
            Fylo has improved our team productivity by an order of magnitude.
            Since making the switch our team has become a well-oiled
            collaboration machine.
          </p>
          <div className="flex items-center gap-2">
            <img src={image4} alt="" className="rounded-3xl h-12" />
            <div>
              <h3 className="font-bold"> Kyle Burton </h3>
              <p className="text-sm">Founder & CEO, Huddle</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Testimonial;
