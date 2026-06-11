import "./OrderCard.css";
import { ListIcon } from "../../icons/ListIcon";
import { TrashIcon } from "../../icons/TrashIcon";
import { openModal } from "../../store/modalSlice";
import { useDispatch } from "react-redux";

export function OrderCard({ order, isCompact, isActive, onSelect }) {
  if (!order) return null;

  const dispatch = useDispatch();
  const productsCount = order.products?.length || 0;

  const totalUSD = order.products?.reduce((sum, p) => {
    const usdPrice = p.price?.find((price) => price.symbol === "USD");
    return sum + (usdPrice ? usdPrice.value : 0);
  }, 0) || 0;

  const totalUAH = order.products?.reduce((sum, p) => {
    const uahPrice = p.price?.find((price) => price.symbol === "UAH");
    return sum + (uahPrice ? uahPrice.value : 0);
  }, 0) || 0;

  const formatDateFull = (dateStr) => {
    if (!dateStr) return "";
    const months = ["Янв", "Фев", "Мар", "Апр", "Май", "Июн", "Июл", "Авг", "Сен", "Окт", "Ноя", "Дек"];
    const [datePart] = dateStr.split(" ");
    const [year, month, day] = datePart.split("-");
    return `${day} / ${months[parseInt(month, 10) - 1]} / ${year}`;
  };
  
  const formatDateShort = (dateStr) => {
    if (!dateStr) return "";
    const [datePart] = dateStr.split(" ");
    const [, month, day] = datePart.split("-");
    return `${day} / ${month}`;
  };

  const handleDeleteClick = (e) => {
    e.stopPropagation();
    dispatch(openModal({ ...order, typeToDelete: 'order' })); 
  };

  return (
    <div 
      className={`order-card ${isCompact ? "order-card--compact" : ""} ${isActive ? "order-card--active" : ""}`}
      onClick={onSelect}
    >
      {!isCompact && (
        <div className="order-card__title-container">
          <span className="order-card__title-text">
            <span className="order-card__title-inner">{order.title}</span>
          </span>
        </div>
      )}

      <div className="order-card__info-group">
        <div className="order-card__action">
          <button className="order-card__icon-btn">
            <ListIcon size={20} color="#455a64" />
          </button>
        </div>
        <div className="order-card__count">
          <span className="order-card__number">{productsCount}</span>
          <span className="order-card__label">Продукты</span>
        </div>
      </div>

      <div className="order-card__date-group">
        <span className="order-card__date-short">{formatDateShort(order.date)}</span>
        {!isCompact && <span className="order-card__date-full">{formatDateFull(order.date)}</span>}
      </div>

      {!isCompact && (
        <div className="order-card__price">
          <div className="order-card__price-usd">{totalUSD.toLocaleString()} $</div>
          <div className="order-card__price-uah">
            {totalUAH.toLocaleString()} <span className="order-card__currency">UAH</span>
          </div>
        </div>
      )}

      <div className="order-card__end-block">
        {isCompact ? (
          isActive && <div className="order-card__arrow-indicator">➔</div>
        ) : (
          <button className="order-card__delete-btn" onClick={handleDeleteClick}>
            <TrashIcon size={18} color="#546e7a" />
          </button>
        )}
      </div>
    </div>
  );
}