"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Image from "next/image";
import { useMaskSettings } from "../../../constants/index";
import ComingSoon from "./ComingSoon";

const Hero = () => {
  const { initialMaskPos, initialMaskSize, maskSize } = useMaskSettings();

  useGSAP(() => {
    gsap.set(".mask-wrapper", {
      maskPosition: initialMaskPos,
      maskSize: initialMaskSize,
    });

    gsap.set(".mask-logo", {
      marginTop: "-100vh",
      opacity: 0,
    });

    gsap.set(".entrance-message", {
      marginTop: "0vh",
    });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".hero-section",
        start: "top top",
        scrub: 2.5,
        end: "+=200%",
        pin: true,
      },
    });

    gsap.to(".scroll-arrow", {
      y: -8,
      duration: 0.8,
      repeat: -1,
      yoyo: true,
      repeatDelay: 0.3,
      ease: "power1.out",
    });

    tl.to(".fade-out", { opacity: 0, ease: "power1.inOut" })
      .to(".scale-out", { scale: 1, ease: "power1.inOut" })
      .to(".mask-wrapper", { maskSize, ease: "power1.inOut" }, "<")
      .to(".mask-wrapper", { opacity: 0 })
      .to(
        ".overlay-logo",
        {
          opacity: 1,
          onComplete: () => {
            gsap.to(".overlay-logo", { opacity: 0 });
          },
        },
        "<"
      )
      .to(
        ".entrance-message",
        {
          duration: 1,
          ease: "power1.inOut",
          maskImage:
            "radial-gradient(circle at 50% 0vh, black 50%,transparent 100%)",
        },
        "<"
      );
  });

  return (
    <section className="hero-section">
      <div className="size-full mask-wrapper">
        <Image
          width={3560}
          height={1826}
          src="/images/hero-bg.webp"
          alt="background"
          className="scale-out"
        />
        <Image
          width={3560}
          height={1826}
          src="/images/hero-text.webp"
          alt="hero-logo"
          className="title-logo fade-out"
        />
        <Image
          width={250}
          height={250}
          src="/images/watch-trailer.png"
          alt="trailer"
          className="trailer-logo fade-out"
        />
        <Image
          width={32}
          height={12}
          src="/images/scroll-arrow.svg"
          alt="ping scroll arrow"
          className="trailer-logo scroll-arrow fade-out w-8 h-3 bottom-1"
        />
        <div className="play-img fade-out">
          <Image
            width={64}
            height={64}
            src="/images/play.svg"
            alt="play"
            className="w-9 ml-1"
          />
        </div>
      </div>
      <div>
        <Image
          width={224}
          height={150}
          src="/images/big-hero-text.svg"
          alt="logo"
          className="size-full object-cover mask-logo"
        />
      </div>

      <div className="fake-logo-wrapper">
        <Image
          width={224}
          height={150}
          src="/images/big-hero-text.svg"
          className="overlay-logo"
          alt=""
        />
      </div>

      <ComingSoon />
    </section>
  );
};

export default Hero;
