import { useState } from "react";

const useForm = () => {
  const [Email, setEmail] = useState("");
  const [error, setError] = useState(null);
  const [successMessage, setSuccessMessage] = useState(null);

  const handleChange = (e) => {
    setEmail(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!Email.includes("@")) {
      setError("This is not an email");
    } else {
      setError(false);
      setSuccessMessage("Success! Your form was submitted.");
      setTimeout(() => {
        window.scrollTo(0, 0);
        window.location.reload();
      }, 2000);
    }
  };
  return {
    Email,
    error,
    successMessage,
    handleChange,
    handleSubmit,
  };
};

export default useForm;
