import "./Products.css";
import { ProductCard } from "../../components/ProductCard/ProductCard";

export function Products() {
  return (
    <section className="products container-fluid">
      <header className="products__header">
        <h1 className="products__title">Продукты / 25</h1>
        <div className="products__filters">
          <div className="products__filter-group">
            <label className="products__filter-label">Тип:</label>
            <select className="products__filter-select">
              <option>Moni</option>
            </select>
          </div>

          <div className="products__filter-group">
            <label className="products__filter-label">Спецификация:</label>
            <select className="products__filter-select">
              <option>Moni</option>
            </select>
          </div>
        </div>
      </header>

      <div className="products__content-wrapper">
        <div className="products__list">
          <ProductCard status="free" />
          <ProductCard status="repair" />
          <ProductCard status="free" />
          <ProductCard status="repair" />
        </div>
      </div>
    </section>
  );
}
