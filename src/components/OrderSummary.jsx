import { PROMO_CODE } from "../utils/cartUtils";

export default function OrderSummary({
  promoCode,
  subtotal,
  deliveryFee,
  discount,
  totalAmount,
  onPromoCodeChange,
  onApplyPromo,
  onCheckout,
  onClearCart
}) {
  return (
    <div className="checkout-card">
      <label htmlFor="promo-code">Promo code</label>
      <div className="promo-row">
        <input
          id="promo-code"
          className="search-box"
          placeholder={`Try ${PROMO_CODE}`}
          value={promoCode}
          onChange={(event) => onPromoCodeChange(event.target.value)}
        />
        <button className="secondary-button" type="button" onClick={onApplyPromo}>
          Apply
        </button>
      </div>

      <div className="summary-row">
        <span>Subtotal</span>
        <strong>Rs {subtotal}</strong>
      </div>
      <div className="summary-row">
        <span>Delivery</span>
        <strong>{deliveryFee === 0 ? "Free" : `Rs ${deliveryFee}`}</strong>
      </div>
      <div className="summary-row">
        <span>Discount</span>
        <strong>- Rs {discount}</strong>
      </div>
      <div className="cart-total">
        <span>Total</span>
        <strong>Rs {totalAmount}</strong>
      </div>

      <div className="checkout-actions">
        <button className="button" type="button" onClick={onCheckout}>
          Place order
        </button>
        <button className="remove-button" type="button" onClick={onClearCart}>
          Clear cart
        </button>
      </div>
    </div>
  );
}
