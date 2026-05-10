import "./Orders.css";
import { OrderItem } from "../../components/OrderItem/OrderItem";
import { AddIcon } from '../../icons/AddIcon';

export function Orders() {
  return (
    <section className="orders container orders--centered">
      
      <header className="orders__header">
        <button className="orders__add-btn">
          <AddIcon size={20} color="white" />
        </button>
        <h1 className="orders__title">Orders / 25</h1>
      </header>

      <div className="orders__list">
        <OrderItem />
        <OrderItem />
        <OrderItem />
        <OrderItem />
      </div>
      
    </section>
  );
}