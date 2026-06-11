import "./OrderDetailsPanel.css";
import { AddIcon } from "../../icons/AddIcon";
import { TrashIcon } from "../../icons/TrashIcon";
import { MonitorIcon } from "../../icons/MonitorIcon";
import { useDispatch } from "react-redux";
import { openModal } from "../../store/modalSlice";

export function OrderDetailsPanel({ order, onClose }) {
  const dispatch = useDispatch();
  const products = order.products || [];

  const handleDeleteProductClick = (product) => {
    dispatch(openModal({ ...product, typeToDelete: 'product', orderId: order.id }));
  };

  return (
    <div className="order-details">
      <button className="order-details__close-btn" onClick={onClose}>×</button>
      
      <h2 className="order-details__title">{order.title}</h2>
      
      <button className="order-details__add-product-btn">
        <span className="order-details__add-icon">
          <AddIcon size={10} color="white" />
        </span>
        Добавить продукт
      </button>

      <div className="order-details__products-list">
        {products.length === 0 ? (
          <div className="order-details__empty">В этом приходе пока нет продуктов</div>
        ) : (
          products.map((product) => {
            const status = product.status || "new";
            return (
              <div key={product.id} className="order-details__product-item">
                <div className={`order-details__dot order-details__dot--${status}`} />
                
                <div className="order-details__icon">
                  <MonitorIcon size={24} color="#546e7a" />
                </div>
                
                <div className="order-details__info">
                  <div className="order-details__product-name">{product.title}</div>
                  <div className="order-details__product-sn">SN-{product.serialNumber}</div>
                </div>

                <div className="order-details__status-text">
                  {status === "new" ? "Свободен" : "В ремонте"}
                </div>

                <button 
                  className="order-details__delete-btn" 
                  onClick={() => handleDeleteProductClick(product)}
                >
                  <TrashIcon size={16} color="#546e7a" />
                </button>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
}