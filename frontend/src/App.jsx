import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Orders } from "./pages/Orders/Orders";
import { Products } from "./pages/Products/Products";

export function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/orders" />} />
        
        <Route path="/orders" element={<Orders />} />
        <Route path="/products" element={<Products />} />
        
        <Route path="*" element={<div>Page Not Found</div>} />
      </Routes>
    </Router>
  );
}
