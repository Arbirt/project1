import "./App.css";
import { Navigate, Route, Routes } from "react-router-dom";
import { appRoutes } from "./config/appRoutes";

function App() {
  const routes = appRoutes();

  return (
    <>
      <Routes>
        <Route path="*" element={<Navigate to="/Services" />} />
        {routes.map((route, index) => (
          <Route key={index} path={route.path} element={route.element} />
        ))}
      </Routes>
    </>
  );
}

export default App;
