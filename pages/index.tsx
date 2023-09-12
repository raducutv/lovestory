// pages/subscribe.tsx
import React from "react";
import type { InferGetStaticPropsType, GetStaticProps } from "next";
import { Quotes } from "@/models/Quotes";
import Link from "next/link";

type Quote = {
  name: string;
  text: string;
  createdAt: string;
};

export const getStaticProps = (async (context) => {
  const res = await fetch("http://localhost:3000/api/subscribe");
  const quotes = await res.json();
  return { props: { quotes } };
}) satisfies GetStaticProps<{
  quotes: Quote;
}>;

export default function Page({
  quotes,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <div className="text-center">
      <p className="text-xl text-center mt-8 ">
        <span className="text-red-500">👧🏻 Nicoleta</span> <span>&</span>{" "}
        <span className="text-blue-500">Radu 👦🏻</span>
      </p>
      <h1 className="text-l text-center m-2 italic">
        Aici incepe povestea nostra ... ❤️
      </h1>
      <Link
        className="mt-8 font-bold bg-red-400 rounded px-5 py-2"
        href={"/post"}
      >
        Posteaza ceva
      </Link>
      {quotes.map((quote: Quote, index: any) => (
        <div className="shadow-xl m-5 p-3 bg-red-400 rounded-xl" key={index}>
          <h2>{quote.name}</h2>
          <p className="border-dashed rounded-xl font-semibold border-red-600 border-2 m-5 p-5 h-32">
            {quote.text}
          </p>
          <div className="flex justify-between">
            <p></p>
            <p>{quote.createdAt.split("T")[0]}</p>
          </div>
        </div>
      ))}
      <h1 className="text-l italic text-center pb-2 ">
        Momentan pana aici am ajuns!❤️
      </h1>
    </div>
  );
}
