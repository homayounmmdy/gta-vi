"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Image from "next/image";
import GameConsolesIcon from "../components/GameConsolesIcon";
import GradientComingDate from "../components/GradientComingDate";

const Outro = () => {
  useGSAP(() => {
    gsap.set(".final-message", {
      marginTop: "-100vh",
      opacity: 0,
    });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".final-message",
        start: "top 30%",
        end: "top 10%",
        scrub: true,
      },
    });

    tl.to(".final-content", {
      opacity: 0,
      duration: 1,
      ease: "power1.inOut",
    });
    tl.to(".final-message", {
      opacity: 1,
      duration: 1,
      ease: "power1.inOut",
    });
  });
  return (
    <section className="final-message">
      <div className="h-full col-center gap-10">
        <Image
          width={198}
          height={132}
          src="/images/logo.webp"
          alt="logo"
          className="entrance-logo"
        />

        <div>
          <GradientComingDate />
        </div>

        <GameConsolesIcon />
      </div>
    </section>
  );
};

export default Outro;
