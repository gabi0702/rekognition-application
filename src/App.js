import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";

import Home from "./pages/Home";
import Places from "./pages/Places";
import Customers from "./pages/Customers";
import NotFound from "./pages/NotFound";
import "./App.css";
import RekognitionPage from "./pages/RekognitionPage";

const routeDefinitions = createRoutesFromElements(
  <Route>
    <Route path="/" element={<Home />} />
    <Route path="/places" element={<Places />} />
    <Route path="/customers" element={<Customers />} />
    <Route path="/rekognition" element={<RekognitionPage />} />

    <Route path="*" element={<NotFound />} />
  </Route>
);

const router = createBrowserRouter(routeDefinitions);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
