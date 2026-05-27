import "./ProductCard.css";
import { TrashIcon } from "../../icons/TrashIcon";
import { MonitorIcon } from "../../icons/MonitorIcon";

export function ProductCard({ product, onDelete }) {
  if (!product) return null;

  const priceUSD = product.price.find((p) => p.symbol === "USD");
  const priceUAH = product.price.find((p) => p.symbol === "UAH");

  const formatDate = (dateStr) => {
    if (!dateStr) return "";
    return dateStr.split(" ")[0].split("-").reverse().join(" / ");
  };

  const status = product.isNew ? "free" : "repair";

  return (
    <div className="product-card">
      <div className={`product-card__status-dot product-card__status-dot--${status}`} />

      <div className="product-card__image-box">
        <MonitorIcon size={35} color="#546e7a" />
      </div>

      <div className="product-card__col product-card__col--main">
        <div className="product-card__name">{product.title}</div>
        <div className="product-card__sn">SN-{product.serialNumber}</div>
      </div>

      <div className="product-card__col product-card__col--status">
        <span className={`product-card__status-text product-card__status-text--${status}`}>
          {status === "free" ? "свободен" : "в ремонте"}
        </span>
      </div>

      <div className="product-card__col product-card__col--dates">
        <div className="product-card__date-row">
          <span>с</span> {formatDate(product.guarantee?.start)}
        </div>
        <div className="product-card__date-row">
          <span>по</span> {formatDate(product.guarantee?.end)}
        </div>
      </div>

      <div className="product-card__col product-card__col--condition">{product.isNew ? "новый" : "б/у"}</div>

      <div className="product-card__col product-card__col--price">
        <div className="product-card__price-usd">{priceUSD?.value} $</div>
        <div className="product-card__price-uah">
          {priceUAH?.value} <span className="product-card__currency">UAH</span>
        </div>
      </div>

      <div className="product-card__col product-card__col--group">
        <span className="product-card__link-text">{product.type}</span>
      </div>

      <div className="product-card__col product-card__col--user">
        <span className="product-card__link-text">{product.specification}</span>
      </div>

      <div className="product-card__col product-card__col--order">
        <span className="product-card__link-text">{product.title}</span>
      </div>

      <div className="product-card__col product-card__col--end">
        <div className="product-card__order-date">
          <div className="product-card__order-date-short">
            {product.date ? product.date.split(" ")[0].split("-").slice(1, 3).reverse().join(" / ") : ""}
          </div>
          <div className="product-card__order-date-full">{formatDate(product.date)}</div>
        </div>
        <button className="product-card__delete-btn" onClick={() => onDelete(product.id)}>
          <TrashIcon size={18} color="#546e7a" />
        </button>
      </div>
    </div>
  );
}
