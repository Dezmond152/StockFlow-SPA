import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../../store/productsSlice";
import { ProductCard } from "../../components/ProductCard/ProductCard";
import "./Products.css";

export function Products() {
  const dispatch = useDispatch();

  const {
    items: products,
    status,
    error,
  } = useSelector((state) => state.products);

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchProducts());
    }
  }, [status, dispatch]);

  if (status === "loading") {
    return (
      <div className="container-fluid py-5 text-center">
        Загрузка продуктов...
      </div>
    );
  }

  if (status === "failed") {
    return (
      <div className="container-fluid py-5 text-danger">Ошибка: {error}</div>
    );
  }

  return (
    <section className="products container-fluid">
      <header className="products__header">
        <h1 className="products__title">Продукты / {products.length}</h1>

        <div className="products__filters">
          <div className="products__filter-group">
            <label className="products__filter-label">Тип:</label>
            <select className="products__filter-select">
              <option>Все</option>
              <option>Monitors</option>
            </select>
          </div>

          <div className="products__filter-group">
            <label className="products__filter-label">Спецификация:</label>
            <select className="products__filter-select">
              <option>Все</option>
            </select>
          </div>
        </div>
      </header>

      <div className="products__content-wrapper">
        <div className="products__list">
          {products.map((item) => (
            <ProductCard
              key={item.id}
              product={item}
              onDelete={(id) => dispatch(deleteProduct(id))}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
