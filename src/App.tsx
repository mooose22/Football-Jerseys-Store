import { useEffect } from "react";
import CheckoutPage from "./pages/CheckoutPage";
import JerseysPage from "./pages/JerseysPage";
import LandingPage from "./pages/LandingPage";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage />,
  },
  {
    path: "/jerseys",
    element: <JerseysPage />,
  },
  {
    path: "/checkout",
    element: <CheckoutPage />,
  },
]);

function App() {
  useEffect(() => {
    document.body.setAttribute("data-theme", "dark");
  }, []);
  return <RouterProvider router={router} />;
}

export default App;
