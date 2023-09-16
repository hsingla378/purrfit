import React from "react";
import Hero from "./Hero/Hero";
import Features from "./Features/Features";
import Team from "./Team/Team";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

export default function LandingPage() {
  return (
    <>
      <Header />
      <Hero />
      <hr />
      <Features />
      <hr />
      <Team />
      <Footer />
    </>
  );
}
