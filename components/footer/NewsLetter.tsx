"use client";

import React from "react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { ChevronRight } from "lucide-react";
import Link from "next/link";
import { isValid } from "zod";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Inputs, InputsSchema } from "@/lib/newsletterschema";

const NewsLetter = () => {
  const {
    register,
    handleSubmit,
    reset,

    formState: { errors, isSubmitting },
  } = useForm<Inputs>({
    resolver: zodResolver(InputsSchema),
  });

  const submitForm: SubmitHandler<Inputs> = (data) => {
    console.log(data);
    reset();
  };

  return (
    <form
      onSubmit={handleSubmit(submitForm)}
      className="w-full max-w-[26rem] px-4"
    >
      <h4 className="font-medium text-lg sm:text-xl leading-loose tracking-tight text-deepblue mb-1.5">
        Stay update on our newsletter
      </h4>

      <div className="flex flex-col sm:flex-row w-full items-stretch sm:items-center gap-4 sm:gap-5">
        <Input
          {...register("email")}
          className="bg-darkblue text-center w-full sm:w-64 h-14 border-0 rounded-lg sm:rounded-none sm:rounded-l-lg text-sm text-white placeholder:text-secblue"
          type="email"
          placeholder="Enter your email address"
        />
        <Button
          className="w-full sm:w-32 h-14 text-center border-0 border-b outline-0 border-b-brigtblue text-brigtblue font-medium tracking-tight text-base leading-relaxed rounded-none"
          type="submit"
          variant="outline"
          disabled={isSubmitting || !isValid}
        >
          <span className="pr-2">Subscribe</span>
          <ChevronRight className="inline" />
        </Button>
      </div>

      {errors.email && (
        <p className="text-red-500 font-bold text-sm mt-1">
          {errors.email.message}
        </p>
      )}

      <br />

      <div className="flex flex-wrap justify-between gap-3 text-sm sm:text-base font-normal text-secblue">
        <Link href="" className="block">
          Instagram
        </Link>
        <Link href="" className="block">
          Facebook
        </Link>
        <Link href="" className="block">
          Linkedin
        </Link>
        <Link href="" className="block">
          Twitter
        </Link>
      </div>
    </form>
  );
};

export default NewsLetter;
