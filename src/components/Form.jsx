import React, { useState } from "react";
import image from "../images/illustration-1.svg";

const Form = ({ props }) => {
  const { head, page } = props;
  const [isEmail, setIsEmail] = useState("");
  const [error, setError] = useState("");
  const handleChange = (e) => {
    setIsEmail(e.target.value);
    // console.log(e);
  };
  const handleSubmit = (e) => {
    if (!isEmail) {
      setError("This is not an email");
    } else {
      setIsEmail(() => {
        JSON.stringify(isEmail);
        setError(false);
      });
    }
    // alert(`check your email ${isEmail} to complete your registration`);
    // e.preventDefault();
  };
  return (
    <main className="grid lg:grid-cols-2 place-items-center  my-12 ">
      <img src={image} alt="image1" className=" lg:order-2" />
      <section className=" text-center lg:text-left">
        <div className="grid place-items-center ">
          <h1 className="text-3xl font-bold mb-4 w-4/5 lg:w-3/4">{head}</h1>
          <p className=" mb-4 w-3/5 lg:w-3/4 text-sm">{page}</p>
        </div>
        <div className="grid place-items-center">
          <form className="grid  gap-2 lg:block w-3/4">
            <input
              autoFocus
              type="email"
              name="email"
              value={isEmail}
              onChange={handleChange}
              placeholder="Enter your Email"
              className="border lg:mr-4 px-4 py-2 text-sm lg:w-4/6"
              required
            />
            {error && (
              <p className="text-red-600 text-[0.796rem] text-left">{error}</p>
            )}
            <button
              className="capitalize text-sm bg-blue-700 text-white px-8 py-3 lg:1/6 "
              onClick={handleSubmit}
            >
              get started
            </button>
          </form>
        </div>
      </section>
    </main>
  );
};

export default Form;
