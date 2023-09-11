import React from "react";
import Hero from "./Hero/Hero";
import Features from "./Features/Features";
import Team from "./Team/Team";

export default function LandingPage() {
  return (
    <>
      <Hero />
      <hr />
      <Features />
      <hr />
      <Team />
    </>
  );
}
