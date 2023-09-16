import React from "react";
import Header from "./Header/Header";
import Footer from "./Footer/Footer2";
import Footer2 from "./Footer/Footer";

export default function Layout({ children }) {
  return (
    <div>
      <Header />
      {children}
      <Footer2 />
    </div>
  );
}
