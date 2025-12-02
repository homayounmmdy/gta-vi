"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const JasonInfo = () => {
  useGSAP(() => {
    gsap.set(".jason", {
      marginTop: "-80vh",
    });

    // Create a timeline with ScrollTrigger
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".jason",
        start: "top 90%",
        end: "10% center",
        scrub: 2,
      },
    });

    // Add animations to the timeline
    tl.to(".first-vd", { opacity: 0, duration: 1, ease: "power1.inOut" })
     .to(".jason .img-box", {
        y: -300,
        duration: 1,
        ease: "power1.inOut",
      }, "<"); // The "<" positions this animation to start at the same time as the previous one

    // Alternative: If you want separate ScrollTriggers for each animation
    // gsap.to(".first-vd", {
    //   opacity: 0,
    //   duration: 1,
    //   ease: "power1.inOut",
    //   scrollTrigger: {
    //     trigger: ".jason",
    //     start: "top 90%",
    //     end: "10% center",
    //     scrub: 2,
    //   },
    // });
    // 
    // gsap.to(".jason .img-box", {
    //   y: -300,
    //   duration: 1,
    //   ease: "power1.inOut",
    //   scrollTrigger: {
    //     trigger: ".jason",
    //     start: "top center",
    //     end: "80% center",
    //     scrub: 2,
    //   },
    // });
  });
  
  return (
    <section className="jason">
      <div className="max-w-lg jason-content">
        <h1>Jason Duval</h1>
        <h2>Jason wants an easy life, but things just keep getting harder.</h2>
        <p>
          Jason grew up around grifters and crooks. After a stint in the Army
          trying to shake off his troubled teens, he found himself in the Keys
          doing what he knows best, working for local drug runners. It might be
          time to try something new.
        </p>
        <div className="jason-2">
          <Image
            src="/images/jason-2.webp"
            width="3840"
            height="2160"
            alt="jason sitting on his motor and a gun on his hand"
          />
        </div>
      </div>
      <div className="space-y-5 mt-96 img-box">
        <div className="jason-1">
          <Image
            src="/images/jason-1.webp"
            width="3840"
            height="2160"
            alt="jason sitting in car driving and looking outside"
          />
        </div>
        <div className="jason-3">
          <Image
            src="/images/jason-3.webp"
            width="3840"
            height="2160"
            alt="jason and his friend sitting in the bar and drinking"
          />
        </div>
      </div>
    </section>
  );
};

export default JasonInfo;