import CheckoutPage from "./components/CheckoutPage";
import JerseysPage from "./components/JerseysPage";
import LandingPage from "./components/LandingPage";
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
  return <RouterProvider router={router} />;
}

export default App;
