import './OrderCard.css';
import { ListIcon } from '../../icons/ListIcon';
import { TrashIcon } from '../../icons/TrashIcon';

export function OrderCard() {
  return (
    <div className="order-card">
      <div className="order-card__title-container">
        <span className="order-card__title-text">
          Длинное предлинное длиннючее название прихода
        </span>
      </div>

      <div className="order-card__info-group">
        <div className="order-card__action">
          <button className="order-card__icon-btn">
            <ListIcon size={20} color="#455a64" />
          </button>
        </div>
        <div className="order-card__count">
          <span className="order-card__number">23</span>
          <span className="order-card__label">Products</span>
        </div>
      </div>

      <div className="order-card__date-group">
        <span className="order-card__date-short">04 / 12</span>
        <span className="order-card__date-full">06 / Apr / 2017</span>
      </div>

      <div className="order-card__price">
        <div className="order-card__price-usd">2 500 $</div>
        <div className="order-card__price-uah">
          250 000. 50 <span className="order-card__currency">UAH</span>
        </div>
      </div>

      <div className="order-card__delete">
        <button className="order-card__delete-btn">
          <TrashIcon size={18} color="#546e7a" />
        </button>
      </div>
    </div>
  );
}