"use client";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import React from "react";

export const ScrollTriggerProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  // Register ScrollTrigger
  if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger);
  }

  return children;
};
