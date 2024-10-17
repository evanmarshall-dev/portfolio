"use client";

import React from "react";
import { useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";

export default function Form() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const sendEmail = (params) => {
    // e.preventDefault();

    emailjs
      .send(
        process.env.NEXT_PUBLIC_SERVICE_ID,
        process.env.NEXT_PUBLIC_TEMPLATE_ID,
        params,
        {
          publicKey: process.env.NEXT_PUBLIC_PUBLIC_KEY,
          limitRate: {
            throttle: 5000, // You cannot send more than one email per 5 seconds using this API.
          },
        }
      )
      .then(
        () => {
          console.log("SUCCESS!");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  const onSubmit = (data) => {
    const templateParams = {
      to_name: "evanmarshall.dev",
      from_name: data.name,
      reply_to: data.email,
      message: data.message,
    };

    sendEmail(templateParams);
  };
  console.log(errors);

  return (
    <form
      className="max-w-md w-full flex flex-col items-center justify-center space-y-4"
      onSubmit={handleSubmit(onSubmit)}
    >
      <input
        className="w-full p-2 rounded-md shadow-lg text-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 custom-bg"
        type="text"
        placeholder="name"
        {...register("name", { required: true, maxLength: 80 })}
      />
      <input
        className="w-full p-2 rounded-md shadow-lg text-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 custom-bg"
        type="email"
        placeholder="email"
        {...register("email", { required: true, pattern: /^\S+@\S+$/i })}
      />
      <textarea
        className="w-full p-2 rounded-md shadow-lg text-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 custom-bg"
        placeholder="message"
        {...register("message", { required: true, max: 256, min: 50 })}
      />

      <input
        value="Send your post!"
        className="px-10 py-4 rounded-md shadow-lg bg-background border border-accent/30 border-solid hover:shadow-glass-sm backdrop-blur-sm text-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 cursor-pointer capitalize"
        type="submit"
      />
    </form>
  );
}
