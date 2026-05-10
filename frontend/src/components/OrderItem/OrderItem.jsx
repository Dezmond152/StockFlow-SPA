import './OrderItem.css';
import { ListIcon } from '../../icons/ListIcon';
import { TrashIcon } from '../../icons/TrashIcon';

export function OrderItem() {
  return (
    <div className="order-item">
      <div className="order-item__title-container">
        <span className="order-item__title-text">
          Длинное предлинное длиннючее название прихода
        </span>
      </div>

      <div className="order-item__info-group">
        <div className="order-item__action">
          <button className="order-item__icon-btn">
            <ListIcon size={20} color="#455a64" />
          </button>
        </div>
        <div className="order-item__count">
          <span className="order-item__number">23</span>
          <span className="order-item__label">Products</span>
        </div>
      </div>

      <div className="order-item__date-group">
        <span className="order-item__date-short">04 / 12</span>
        <span className="order-item__date-full">06 / Apr / 2017</span>
      </div>

      <div className="order-item__price">
        <div className="order-item__price-usd">2 500 $</div>
        <div className="order-item__price-uah">
          250 000. 50 <span className="order-item__currency">UAH</span>
        </div>
      </div>

      <div className="order-item__delete">
        <button className="order-item__delete-btn">
          <TrashIcon size={18} color="#546e7a" />
        </button>
      </div>
    </div>
  );
}