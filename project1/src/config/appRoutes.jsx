import ServicesPage from "../pages/servivesPage";
import AboutUs from "../pages/AboutUs";
export const appRoutes = () => {
  const routes = [
    { path: "/Services", element: <ServicesPage /> },
    { path: "About", element: <AboutUs /> },
  ];
  return routes;
};
