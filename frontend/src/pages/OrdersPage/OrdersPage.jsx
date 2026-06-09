import "./OrdersPage.css";
import { OrderCard } from "../../components/OrderCard/OrderCard";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../../store/productsSlice";
import { AddIcon } from "../../icons/AddIcon";

export function OrdersPage() {
  return (
    <section className="orders container-fluid">
      <header className="orders__header">
        <button className="orders__add-btn">
          <AddIcon size={12} color="white" />
        </button>
        <h1 className="orders__title">Приходы / 25</h1>
      </header>

      <div className="orders__content-wrapper">
        <div className="orders__list">
          <OrderCard />
          <OrderCard />
          <OrderCard />
          <OrderCard />
        </div>
      </div>
    </section>
  );
}
