import ServicesPage from "../pages/servivesPage";
import AboutUs from "../pages/AboutUs";
import FAQ from "../pages/FAQ";
export const appRoutes = () => {
  const routes = [
    { path: "/Services", element: <ServicesPage /> },
    { path: "/About", element: <AboutUs /> },
    { path: "/FAQ", element: <FAQ /> },
  ];
  return routes;
};
