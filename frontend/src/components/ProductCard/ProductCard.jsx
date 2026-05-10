import "./ProductCard.css";
import { TrashIcon } from "../../icons/TrashIcon";
import { MonitorIcon } from "../../icons/MonitorIcon";

export function ProductCard({ status = "free" }) {
  return (
    <div className="product-card">
      <div className={`product-card__status-dot product-card__status-dot--${status}`} />

      <div className="product-card__image-box">
        <MonitorIcon size={35} color="#546e7a" />
      </div>

      <div className="product-card__col product-card__col--main">
        <div className="product-card__name">
          Gigabyte Technology X58-USB3 (Socket 1366) 6 X58-USB3
        </div>
        <div className="product-card__sn">SN-123456789</div>
      </div>

      <div className="product-card__col product-card__col--status">
        <span className={`product-card__status-text product-card__status-text--${status}`}>
          {status === "free" ? "свободен" : "В ремонте"}
        </span>
      </div>

      <div className="product-card__col product-card__col--dates">
        <div className="product-card__date-row">
          <span>с</span> 06 / 04 / 2017
        </div>
        <div className="product-card__date-row">
          <span>по</span> 06 / 08 / 2025
        </div>
      </div>

      <div className="product-card__col product-card__col--condition">
        новый
      </div>

      <div className="product-card__col product-card__col--price">
        <div className="product-card__price-usd">2 500 $</div>
        <div className="product-card__price-uah">
          250 000. 50 <span className="product-card__currency">UAH</span>
        </div>
      </div>

      <div className="product-card__col product-card__col--group">
        <span className="product-card__link-text">Длинное предлинное длиннючее название группы</span>
      </div>

      <div className="product-card__col product-card__col--user">
        <span className="product-card__link-text">Христорождественский Александр</span>
      </div>

      <div className="product-card__col product-card__col--order">
        <span className="product-card__link-text">Длинное предлинное длиннючее название прихода</span>
      </div>

      <div className="product-card__col product-card__col--end">
        <div className="product-card__order-date">
          <div className="product-card__order-date-short">06 / 12</div>
          <div className="product-card__order-date-full">06 / Сен / 2017</div>
        </div>
        <button className="product-card__delete-btn">
          <TrashIcon size={18} color="#546e7a" />
        </button>
      </div>
    </div>
  );
}