import "./App.css";
import Layout from "./Layout";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import Footer2 from "./Footer/Footer2";
import LandingPage from "./LandingPage/LandingPage";

import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";

function App() {
  return (
    <>
      <Header />
      <LandingPage />
      <Footer2 />
    </>
  );
}

export default App;
