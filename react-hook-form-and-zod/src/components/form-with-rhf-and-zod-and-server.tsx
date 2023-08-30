"use client";

import { SignUpFormValues, signUpSchema } from "@/lib/types";
import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

export default function FormWithReactHookFormAndZodAndServer() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<SignUpFormValues>({
    resolver: zodResolver(signUpSchema as any),
  });

  const onSubmit = async (data: SignUpFormValues) => {
    const res = await fetch("/api/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    const resData = await res.json();
    if (!res.ok) {
      return alert("Submiting form failed");
    }

    if (resData.errors) {
      // handle errors here
    }

    reset();
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col gap-3 items-start text-black"
    >
      <input {...register("name")} type="text" placeholder="Name" />
      {errors.name && <p className="text-white">{errors.name.message}</p>}
      <input {...register("email")} type="email" placeholder="Email" />
      {errors.email && <p className="text-white">{errors.email.message}</p>}
      <input {...register("password")} type="password" placeholder="Password" />
      {errors.password && (
        <p className="text-white">{errors.password.message}</p>
      )}
      <input
        {...register("passwordConfirmation")}
        type="password"
        placeholder="Confirm Password"
      />
      {errors.passwordConfirmation && (
        <p className="text-white">{errors.passwordConfirmation.message}</p>
      )}
      <button
        disabled={isSubmitting}
        type="submit"
        className="disabled:bg-slate-500 bg-white p-3"
      >
        Submit
      </button>
    </form>
  );
}
