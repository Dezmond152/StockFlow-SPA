import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { MainLayout } from './components/MainLayout/MainLayout.jsx';
import { Orders } from './pages/Orders/Orders';
import { Products } from './pages/Products/Products';

export function App() {
  return (
    <Router>

      <MainLayout>
        <Routes>
          <Route path="/" element={<Navigate to="/orders" />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/products" element={<Products />} />
          <Route path="*" element={<div>404 - Страница не найдена</div>} />
        </Routes>
      </MainLayout>
    </Router>
  );
}
 