"use client";

import { useFormState } from "react-dom";
import Link from "next/link";
import { signUpCredentials } from "@/lib/actions";
import { RegisterButton } from "@/components/button";

const FormRegister = () => {
  const [state, formAction] = useFormState(signUpCredentials, null);
  return (
    <form action={formAction} className="space-y-6">
      {state?.message ? (
        <div
          className="p-4 text-sm text-red-800 rounded-lg bg-red-100 role"
          role="alert"
        >
          <span className="font-medium">{state?.message}</span>
        </div>
      ) : null}
      <div>
        <label
          htmlFor="name"
          className="block text-sm font-medium text-gray-900"
        >
          Name
        </label>
        <input
          type="text"
          name="name"
          placeholder="john doe"
          className="bg-gray-50 border border-gray-300 text-gray-900  rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
        />
        <div aria-live="polite" aria-atomic="true">
          <span className="text-sm mt-2 text-red-500">
            {state?.error?.name}
          </span>
        </div>
      </div>
      <div>
        <label
          htmlFor="email"
          className="block text-sm font-medium text-gray-900"
        >
          Email
        </label>
        <input
          type="email"
          name="email"
          placeholder="johndoe@gmail.com"
          className="bg-gray-50 border border-gray-300 text-gray-900  rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
        />
        <div aria-live="polite" aria-atomic="true">
          <span className="text-sm mt-2 text-red-500">
            {state?.error?.email}
          </span>
        </div>
      </div>
      <div>
        <label
          htmlFor="password"
          className="block text-sm font-medium text-gray-900"
        >
          Password
        </label>
        <input
          type="password"
          name="password"
          placeholder="********"
          className="bg-gray-50 border border-gray-300 text-gray-900  rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
        />
        <div aria-live="polite" aria-atomic="true">
          <span className="text-sm mt-2 text-red-500">
            {state?.error?.password}
          </span>
        </div>
      </div>
      <div>
        <label
          htmlFor="ConfirmPassword"
          className="block text-sm font-medium text-gray-900"
        >
          Confirm password
        </label>
        <input
          type="password"
          name="ConfirmPassword"
          placeholder="********"
          className="bg-gray-50 border border-gray-300 text-gray-900  rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
        />
        <div aria-live="polite" aria-atomic="true">
          <span className="text-sm mt-2 text-red-500">
            {state?.error?.ConfirmPassword}
          </span>
        </div>
      </div>
      <RegisterButton />
      <p>
        Already have an account?
        <Link href={"/login"}>
          <span className="font-medium text-blue-600 hover:text-blue-700">
            Sign in
          </span>
        </Link>
      </p>
    </form>
  );
};

export default FormRegister;
