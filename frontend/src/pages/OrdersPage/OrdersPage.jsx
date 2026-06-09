import "./OrdersPage.css";
import { OrderCard } from "../../components/OrderCard/OrderCard";
import { useDispatch, useSelector } from "react-redux";
import { fetchOrders } from "../../store/ordersSlice";
import { AddIcon } from "../../icons/AddIcon";
import { useEffect } from "react";

export function OrdersPage() {
  const dispatch = useDispatch();

  const { items: orders, status, error } = useSelector((state) => state.orders);

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchOrders());
    }
  }, [status, dispatch]);

  if (status === "loading") {
    return <div className="container-fluid py-5 text-center">Загрузка приходов...</div>;
  }

  if (status === "failed") {
    return <div className="container-fluid py-5 text-danger">Ошибка: {error}</div>;
  }

  return (
    <section className="orders container-fluid">
      <header className="orders__header">
        <button className="orders__add-btn">
          <AddIcon size={12} color="white" />
        </button>
        <h1 className="orders__title">Приходы / {orders.length}</h1>
      </header>

      <div className="orders__content-wrapper">
        <div className="orders__list">
          {orders.map((item) => (
            <OrderCard key={item.id} order={item} />
          ))}
        </div>
      </div>
    </section>
  );
}