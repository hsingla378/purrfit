import React from "react";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import Footer2 from "./Footer/Footer2";

export default function Layout({ children }) {
  return (
    <div>
      <Header />
      {children}
      <Footer2 />
    </div>
  );
}
