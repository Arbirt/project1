import "./App.css";
import React, { useEffect, useState } from "react";
import { Navigate, Route, Routes, Router } from "react-router-dom";
import { appRoutes } from "./config/appRoutes";
import ServicesPage from "./pages/servivesPage";
import { useNavigate } from "react-router-dom";
import AboutUs from "./pages/AboutUs";
import FAQ from "./pages/FAQ";
import NotFound from "./components/404";
import SignIn from "./components/SignIn";

function App() {
  const routes = appRoutes();
  // const [path, setPath] = useState(window.location.pathname);
  // const navigate = useNavigate();

  // useEffect(() => {
  //   if (path == "/index.html") {
  //     navigate("/Homepage");s
  //   }
  // }, [window.location.pathname]);

  return (
    <>
      <Routes>
        <Route path="/" element={<Navigate to="/Homepage" />} />
        <Route path="/Homepage" element={<ServicesPage />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/notFound" element={<NotFound />} />
        {/* <Route path="/signin" element={<SignIn />} /> */}
      </Routes>
    </>
  );
}

export default App;
