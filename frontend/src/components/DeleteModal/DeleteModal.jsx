import React, { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { useSelector, useDispatch } from 'react-redux';
import { closeModal } from '../../store/modalSlice';
import { deleteProduct } from '../../store/productsSlice';
import { deleteOrder } from '../../store/ordersSlice';
import './DeleteModal.css';

export const DeleteModal = () => {
  const dispatch = useDispatch();
  const { isOpen, itemToDelete } = useSelector((state) => state.deleteModal);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen || !itemToDelete) return null;

  const isOrder = itemToDelete.typeToDelete === 'order';

  const handleConfirmDelete = () => {
    if (isOrder) {
      dispatch(deleteOrder(itemToDelete.id));
    } else {
      dispatch(deleteProduct(itemToDelete.id));
    }
    dispatch(closeModal());
  };

  return createPortal(
    <div className="modal-overlay" onClick={() => dispatch(closeModal())}>
      <div className="popup" onClick={(e) => e.stopPropagation()}>
        <header className="popup__header">
          <h2 className="popup__title">Подтверждение удаления</h2>
          <button className="popup__close-btn" onClick={() => dispatch(closeModal())}>×</button>
        </header>
        
        <main className="popup__content">
          <p className="popup__text font-medium text-slate-700">
            {isOrder 
              ? 'Вы уверены, что хотите удалить этот приход вместе со всеми продуктами?' 
              : 'Вы уверены, что хотите удалить этот товар?'
            }
          </p>
          <div className="popup__item-preview">
            <span className="popup__item-name">{itemToDelete.title}</span>
            {!isOrder && itemToDelete.serialNumber && (
              <span className="popup__item-sn"> (SN-{itemToDelete.serialNumber})</span>
            )}
          </div>
        </main>

        <footer className="popup__actions">
          <button className="popup__btn popup__btn--cancel" onClick={() => dispatch(closeModal())}>
            Отмена
          </button>
          <button className="popup__btn popup__btn--danger" onClick={handleConfirmDelete}>
            Удалить
          </button>
        </footer>
      </div>
    </div>,
    document.body
  );
};