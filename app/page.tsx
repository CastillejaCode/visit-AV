"use client";

import { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger, ScrollSmoother } from "gsap/all";
import Header from "./Header/index";
import Card from "./Card";

export default function Home() {
  const ref = useRef<HTMLDivElement>();
  const tl = useRef<GSAPTimeline>();
  const tl2 = useRef<GSAPTimeline>();

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    let ctx = gsap.context(() => {
      tl.current = gsap
        .timeline({ delay: 1 })
        .from(".enjoy", { opacity: 0, y: -200, duration: 0.8 })
        .from(".av", { opacity: 0 }, "<1.5");

      tl2.current = gsap
        .timeline({
          scrollTrigger: {
            trigger: ".article",
            start: "bottom 20%",
            end: "+=100",
            scrub: 1,
          },
        })
        .to(".enjoy", { x: "-100vw" })
        .to(".av", { x: "100vw" }, "<")
        .from(".things", { x: "-100vw" });
    }, ref);

    let tlCards = gsap.utils.toArray(".card");
    tlCards.forEach((card: any) => {
      gsap.from(card, {
        x: () => (tlCards.indexOf(card) % 2 ? "100vw" : "-100vw"),
        scrollTrigger: {
          trigger: card,
          start: "top bottom",
          end: "bottom bottom ",
          scrub: 1,
          markers: true,
        },
      });
    });

    return () => ctx.revert();
  }, []);

  const cards = [
    { src: "/woodland.jpg", p: "Prime Desert Woodland Preserve" },
    { src: "/blvd.jpg", p: "Museum of Art and History" },
    { src: "/indian-museum-cloudless.jpg", p: "Antelope Valley Indian Museum" },
  ];

  return (
    <div>
      <Header />
      <main
        ref={ref}
        className="relative overflow-x-hidden"
        id="smooth-content"
      >
        <section className="h-[300vh] bg-[url('../public/poppies.jpg')] bg-auto bg-fixed bg-left-top bg-no-repeat">
          <article className="article fixed left-1/2 top-14 flex h-44 w-full max-w-lg -translate-x-1/2 flex-col justify-around p-6 font-display">
            <h2 className="enjoy text-center font-display text-3xl font-medium text-gray-800 lg:text-4xl">
              Enjoy the Beauty
            </h2>
            <h1 className="av text-center text-[2.8rem] font-bold text-gray-800 lg:text-6xl">
              Antelope Valley
            </h1>
          </article>
          <h3 className="things fixed left-1/2 top-14 w-full -translate-x-1/2 p-6 font-title text-4xl text-gray-800 ">
            Things To Do
          </h3>
          <article className="cards absolute left-1/2 top-[150vh] flex w-full -translate-x-1/2 flex-col gap-8 p-6 font-title">
            {cards.map((card) => {
              return <Card src={card.src} p={card.p} key={card.src} />;
            })}
          </article>
        </section>
        <section className="h-screen"></section>
      </main>
    </div>
  );
}
