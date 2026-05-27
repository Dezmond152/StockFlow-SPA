import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { ROUTES } from "./utils/routes.js";
import { MainLayout } from "./components/MainLayout/MainLayout.jsx";
import { OrdersPage } from "./pages/OrdersPage/OrdersPage.jsx";
import { ProductsPage } from "./pages/ProductsPage/ProductsPage.jsx";

export function App() {
  return (
    <Router>
      <Routes>
        <Route path={ROUTES.HOME} element={<MainLayout />}>
          <Route index element={<Navigate to={ROUTES.ORDERS} replace />} />
          <Route path={ROUTES.ORDERS} element={<OrdersPage />} />
          <Route path={ROUTES.PRODUCTS} element={<ProductsPage />} />
          <Route path={ROUTES.NOT_FOUND} element={<div>404</div>} />
        </Route>
      </Routes>
    </Router>
  );
}
