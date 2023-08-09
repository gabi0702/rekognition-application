import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";

import Home from "./pages/Home";
import Products from "./pages/Products";
import Categories from "./pages/Categories";
import NotFound from "./pages/NotFound";
import "./App.css";
import RekognitionPage from "./pages/RekognitionPage";

const routeDefinitions = createRoutesFromElements(
  <Route>
    <Route path="/" element={<Home />} />
    <Route path="/products" element={<Products />} />
    <Route path="/categories" element={<Categories />} />
    <Route path="/rekognition" element={<RekognitionPage />} />

    <Route path="*" element={<NotFound />} />
  </Route>
);

const router = createBrowserRouter(routeDefinitions);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
