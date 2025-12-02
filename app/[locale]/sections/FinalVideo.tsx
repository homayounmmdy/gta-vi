"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";

const FinalVideo = () => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useGSAP(() => {
    gsap.set(".final-content", {
      opacity: 0,
    });

    gsap.timeline({
      scrollTrigger: {
        trigger: ".final",
        start: "top top",
        end: "90% top",
        scrub: true,
        pin: true,
      },
    });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".final",
        start: "top 80%",
        end: "90% top",
        scrub: true,
      },
    });

    tl.to(".final-content", {
      opacity: 1,
      duration: 1,
      scale: 1,
      ease: "power1.inOut",
    });

    const videoElement = videoRef.current;
    if (videoElement) {
      videoElement.onloadedmetadata = () => {
        tl.to(
          videoElement,
          {
            currentTime: videoElement.duration,
            duration: 3,
            ease: "power1.inOut",
          },
          "<"
        );
      };
    }
  });

  return (
    <section className="final">
      <div className="final-content size-full">
        <video
          ref={videoRef}
          muted
          playsInline
          preload="auto"
          src="/videos/final-vd.mp4"
          className="size-full object-cover"
        />
      </div>
    </section>
  );
};

export default FinalVideo;
