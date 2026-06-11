import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../../store/productsSlice";
import { ProductCard } from "../../components/ProductCard/ProductCard";
import "./ProductsPage.css";
import { useState } from "react";

export function ProductsPage() {
  const dispatch = useDispatch();
  const [filter, setFilter] = useState("Все");
  
  const { items: products, status, error } = useSelector((state) => state.products);

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchProducts());
    }
  }, [status, dispatch]);

  if (status === "loading") {
    return <div className="container-fluid py-5 text-center">Загрузка продуктов...</div>;
  }

  if (status === "failed") {
    return <div className="container-fluid py-5 text-danger">Ошибка: {error}</div>;
  }

  const allTypes = products.map((item) => item?.type);
  const validTypes = allTypes.filter((type) => type !== undefined);
  const productTypeArr = [...new Set(validTypes)];

  const handleChange = (event) => {
    const selectedTypeIndex = event.target.options.selectedIndex;
    const selectedType = event.target.options[selectedTypeIndex].text;
    setFilter(selectedType);
  };

  const filteredProducts = filter === "Все" ? products : products.filter((item) => item.type === filter);

  return (
    <section className="products container-fluid">
      <header className="products__header">
        <h1 className="products__title">Продукты / {filteredProducts.length}</h1>

        <div className="products__filters">
          <div className="products__filter-group">
            <label className="products__filter-label">Тип:</label>
            <select className="products__filter-select" onChange={handleChange}>
              <option>Все</option>
              {productTypeArr.map((item) => (
                <option key={item}>{item}</option>
              ))}
            </select>
          </div>
        </div>
      </header>

      <div className="products__content-wrapper">
        <div className="products__list">
          {filteredProducts.map((item) => (
            <ProductCard key={item.id} product={item} />
          ))}
        </div>
      </div>
    </section>
  );
}
