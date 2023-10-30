import useForm from "./useForm";

const Form2 = ({ props }) => {
  const { head, page } = props;
  const { email, error, successMessage, handleChange, handleSubmit } =
    useForm();
  return (
    <section className="grid lg:grid-cols-2 gap-4 py-12 col ">
      <div className="grid items-center text-center w-3/4 mx-auto lg:text-left text-slate-200">
        <h1 className="font-bold text-xl">{head}</h1>
        <p className=" mt-4 ">{page}</p>
      </div>
      <div className="grid place-items-center ">
        <form className="grid  gap-2 lg:block w-3/4">
          <input
            autoFocus
            type="email"
            name="email"
            value={email}
            onChange={handleChange}
            placeholder="Enter your Email"
            className="border-none outline-none lg:mr-4 px-4 py-2 text-sm lg:w-4/6"
            required
          />
          {error && <p className="text-blue-100 text-[0.796rem]">{error}</p>}
          {successMessage && (
            <p className="text-green-200 transition-all">{successMessage}</p>
          )}
          <button
            onClick={handleSubmit}
            className="capitalize text-sm bg-blue-700 text-white px-8 py-2 lg:block lg:mt-1 "
          >
            get started
          </button>
        </form>
      </div>
    </section>
  );
};

export default Form2;
