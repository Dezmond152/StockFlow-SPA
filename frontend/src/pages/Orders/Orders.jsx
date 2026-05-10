import "./Orders.css";
import { OrderCard } from "../../components/OrderCard/OrderCard";
import { AddIcon } from '../../icons/AddIcon';

export function Orders() {
  return (
    <section className="orders container-fluid">
      <header className="orders__header">
        <button className="orders__add-btn">
          <AddIcon size={20} color="white" />
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