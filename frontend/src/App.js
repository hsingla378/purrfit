import "./App.css";
import Layout from "./Layout";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer2";
import LandingPage from "./pages/LandingPage/LandingPage";
import Help from "./pages/Help/Help";
import Dashboard from "./pages/Dashboard/Dashboard";
import Ranks from "./pages/Dashboard/Ranks";
import Preferences from "./pages/Dashboard/Preferences";
import ActivityTracking from "./pages/Dashboard/ActivityTracking";

import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<LandingPage />} />
        <Route exact path="/help" element={<Help />} />
        <Route exact path="/dashboard" element={<Dashboard />} />
        <Route exact path="/ranks" element={<Ranks />} />
        <Route exact path="/preferences" element={<Preferences />} />
        <Route exact path="/activity" element={<ActivityTracking />} />
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
