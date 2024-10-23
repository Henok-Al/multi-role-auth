"use client";

import { useFormState } from "react-dom";

export const RegisterButton = () => {
  const { pending } = useFormState();
  return (
    <button
      type="submit"
      disabled={pending}
      className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
    >
      {pending ? "Registering..." : "Register"}
    </button>
  );
};
