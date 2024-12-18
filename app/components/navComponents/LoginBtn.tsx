"use client";

import { useState } from "react";
import { IoLogInOutline } from "react-icons/io5";
export default function LoginBtn() {
  const [FormOpen, setFormOpen] = useState(false);
  const toggleLoginForm = () => setFormOpen(!FormOpen);

  return (
    <>
      <button
        role="button"
        className="bg-transparent text-2xl font-semibold text-slate-100"
        onClick={toggleLoginForm}
      >
        <div className="flex">
          <label htmlFor="" className="me-2 hidden md:flex">
            Login
          </label>
          <IoLogInOutline size={38} />
        </div>
      </button>
      {/* <FormControl FormOpen={FormOpen} setFormOpen={setFormOpen} /> */}
    </>
  );
}
