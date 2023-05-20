"use client";

import { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";

import Header from "./Header/index";

export default function Home() {
  const ref = useRef<HTMLDivElement>();
  const tl = useRef<GSAPTimeline>();

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      tl.current = gsap
        .timeline({ delay: 1 })
        .from(".enjoy", { opacity: 0, y: -200, duration: 0.8 })
        .from(".av", { opacity: 0 }, "<1.5");
    }, ref);

    return () => ctx.revert();
  }, []);

  return (
    <>
      <Header />
      <main ref={ref}>
        <section className="h-screen bg-[url('../public/poppies.jpg')] bg-auto bg-scroll bg-left-top">
          <article className="absolute left-1/2 top-14 flex h-44 w-full max-w-lg -translate-x-1/2 flex-col justify-around p-6 font-display">
            <h2 className="enjoy text-center text-3xl font-medium text-gray-800 lg:text-4xl">
              Enjoy the Beauty
            </h2>
            <h1 className="av text-center text-[2.8rem] font-bold text-gray-800 lg:text-6xl">
              Antelope Valley
            </h1>
          </article>
        </section>
        <section className="h-screen"></section>
      </main>
    </>
  );
}
