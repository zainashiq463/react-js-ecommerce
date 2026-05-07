export default function CartItem({ item, onIncrease, onDecrease, onRemove }) {
  return (
    <div className="cart-item">
      <div>
        <p className="product-name">{item.name}</p>
        <p className="cart-item-price">
          Rs {item.price} x {item.quantity} = Rs {item.price * item.quantity}
        </p>
        <p className="cart-item-category">{item.category}</p>
      </div>

      <div className="cart-actions">
        <button className="quantity-button" onClick={() => onDecrease(item.id)}>-</button>
        <span className="quantity-value"> {item.quantity} </span>
        <button className="quantity-button" onClick={() => onIncrease(item.id)}>+</button>
        <button className="remove-button" onClick={() => onRemove(item.id)}>
          Remove
        </button>
      </div>
    </div>
  );
}
