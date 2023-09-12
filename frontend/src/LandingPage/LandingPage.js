import React from "react";
import Hero from "./Hero/Hero";
import Features from "./Features/Features";
import Team from "./Team/Team";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Footer2 from "../Footer/Footer2";

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
