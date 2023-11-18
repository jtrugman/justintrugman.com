"use client";

import { useState, useRef } from "react";

const EmailSignUp = () => {
  const inputRef = useRef(null);
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isDisabled, setIsDisabled] = useState(false);

  const handleSubmit = async (e) => {
    e?.preventDefault();

    setIsLoading(true);
    try {

      window.location.href = `https://magic.beehiiv.com/v1/c17643dd-fb77-48fc-bf3d-bbab96a6b576?email=${email}`;

      inputRef.current.blur();
      setEmail("");
      setIsDisabled(true);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };
  return (
<form
  className="w-full max-w-xs md:max-w-lg flex flex-col md:flex-row items-center space-y-3 md:space-y-0 md:space-x-3 justify-center"
  onSubmit={handleSubmit}
>
  <input
    required
    type="email"
    value={email}
    ref={inputRef}
    autoComplete="email"
    placeholder="justin@timberlake.com"
    className="input input-bordered w-full md:w-auto md:flex-grow placeholder:opacity-60"
    onChange={(e) => setEmail(e.target.value)}
  />

  <button
    className="btn btn-info"
    type="submit"
    disabled={isDisabled}
  >
      Sign Up
      {isLoading ? (
        <span className="loading loading-spinner loading-xs"></span>
      ) : (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          className="w-5 h-5"
        >
          <path
            fillRule="evenodd"
            d="M5 10a.75.75 0 01.75-.75h6.638L10.23 7.29a.75.75 0 111.04-1.08l3.5 3.25a.75.75 0 010 1.08l-3.5 3.25a.75.75 0 11-1.04-1.08l2.158-1.96H5.75A.75.75 0 015 10z"
            clipRule="evenodd"
          />
        </svg>
      )}
    </button>
  </form>
  
  );
};

export default EmailSignUp;
