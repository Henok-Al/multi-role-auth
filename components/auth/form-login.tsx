"use client";

import { useFormState } from "react-dom";
import Link from "next/link";
import { signInCredentials } from "@/lib/actions";
import { LoginButton } from "@/components/button";

const FormLogin = () => {
  const [state, formAction] = useFormState(signInCredentials, null);
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
      <LoginButton />
      <p>
        Don&apos;t have an account yet?
        <Link href={"/register"}>
          <span className="font-medium text-blue-600 hover:text-blue-700">
            Sign Up here
          </span>
        </Link>
      </p>
    </form>
  );
};

export default FormLogin;
