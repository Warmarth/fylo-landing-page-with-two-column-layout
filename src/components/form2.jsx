import { useState } from "react";

const Form2 = (props) => {
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
      });
    }
    // alert(`check your email ${isEmail} to complete your registration`);
    // e.preventDefault();
  };
  return (
    <section className="grid lg:grid-cols-2 gap-4 py-12 col ">
      <div className="grid items-center text-center w-3/4 mx-auto lg:text-left text-slate-200">
        <h1 className="font-bold text-xl">{head}</h1>
        <p className=" mt-4 ">{page}</p>
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
            className="border-none outline-none lg:mr-4 px-4 py-2 text-sm lg:w-4/6"
            required
          />
          {error && <p className="text-blue-100 text-[0.796rem]">{error}</p>}
          <button
            onClick={handleSubmit}
            className="capitalize text-sm bg-blue-700 text-white px-8 py-3 lg:block "
          >
            get started
          </button>
        </form>
      </div>
    </section>
  );
};

export default Form2;
