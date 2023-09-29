import React from "react";
import Hero from "../../components/Hero/Hero";
import Features from "../../components/Features/Features";
import Team from "../../components/Team/Team";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import { Divider } from "@chakra-ui/react";

export default function LandingPage() {
  return (
    <>
      <Header />
      <Hero />
      <Divider maxW={"80%"} m={"auto"} />
      <Features />
      {/* <Divider maxW={"80%"} m={"auto"} /> */}
      <Team />
      <Footer />
    </>
  );
}
