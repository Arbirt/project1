import "./App.css";
import { Navigate, Route, Routes, Router } from "react-router-dom";
import { appRoutes } from "./config/appRoutes";
import ServicesPage from "./pages/servivesPage";
import AboutUs from "./pages/AboutUs";
import FAQ from "./pages/FAQ";

function App() {
  const routes = appRoutes();

  return (
    <>
     
        <Routes>
          <Route path="/" element={<Navigate to="/Homepage" />} />
          <Route path="/Homepage" element={<ServicesPage />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/faq" element={<FAQ />} />
        </Routes>
      
    </>
  );
}

export default App;
