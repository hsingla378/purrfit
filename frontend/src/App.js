import "./App.css";
import Layout from "./Layout";
import Header from "./Header/Header";
import Footer from "./Footer/Footer2";
import LandingPage from "./LandingPage/LandingPage";
import Help from "./Help/Help";

import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<LandingPage />} />
        <Route exact path="/help" element={<Help />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

{
  /* <Route path="/" element={<Layout />}>
<Route index element={<LandingPage />} />
</Route> */
}
