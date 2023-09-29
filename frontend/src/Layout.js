import React from "react";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Footer2 from "./components/Footer/Footer2";

export default function Layout({ children }) {
  return (
    <div>
      <Header />
      {children}
      <Footer2 />
    </div>
  );
}
