import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { ROUTES } from "./utils/routes.js";
import { MainLayout } from "./components/MainLayout/MainLayout.jsx";
import { Orders } from "./pages/Orders/Orders";
import { Products } from "./pages/Products/Products";

export function App() {
  return (
    <Router>
      <Routes>
        <Route path={ROUTES.HOME} element={<MainLayout />}>
          <Route index element={<Navigate to={ROUTES.ORDERS} replace />} />
          <Route path={ROUTES.ORDERS} element={<Orders />} />
          <Route path={ROUTES.PRODUCTS} element={<Products />} />
          <Route path={ROUTES.NOT_FOUND} element={<div>404</div>} />
        </Route>
      </Routes>
    </Router>
  );
}
