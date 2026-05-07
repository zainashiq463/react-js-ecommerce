import { useState } from "react";
import { useCart } from "../context/useCart";
import CartItem from "./CartItem";
import OrderSummary from "./OrderSummary";
import {
  PROMO_CODE,
  getCartSubtotal,
  getCartTotal,
  getDeliveryFee,
  getDiscount
} from "../utils/cartUtils";

export default function Cart() {
  const [promoCode, setPromoCode] = useState("");
  const [isOrderPlaced, setIsOrderPlaced] = useState(false);
  const { cart, increaseQty, decreaseQty, removeFromCart, clearCart } = useCart();

  const subtotal = getCartSubtotal(cart);
  const deliveryFee = getDeliveryFee(subtotal);
  const discount = getDiscount(subtotal, promoCode);
  const totalAmount = getCartTotal({ subtotal, deliveryFee, discount });

  const handleCheckout = () => {
    if (cart.length === 0) return;

    setIsOrderPlaced(true);
    clearCart();
  };

  return (
    <div className="cart-page">
      <div className="cart-panel">
        <div className="cart-header">
          <p className="eyebrow">Checkout</p>
          <h2>My Cart</h2>
          <p className="cart-helper">
            Use promo code <strong>{PROMO_CODE}</strong> for 10% off.
          </p>
        </div>

        {isOrderPlaced ? (
          <div className="success-card">
            <h3>Order placed successfully</h3>
            <p>Your cart has been cleared. This demo shows checkout flow, cart state, and localStorage persistence.</p>
          </div>
        ) : cart.length === 0 ? (
          <p className="empty-state">Cart is empty</p>
        ) : (
          <>
            <div className="cart-list">
              {cart.map((item) => (
                <CartItem
                  key={item.id}
                  item={item}
                  onIncrease={increaseQty}
                  onDecrease={decreaseQty}
                  onRemove={removeFromCart}
                />
              ))}
            </div>

            <OrderSummary
              promoCode={promoCode}
              subtotal={subtotal}
              deliveryFee={deliveryFee}
              discount={discount}
              totalAmount={totalAmount}
              onPromoCodeChange={setPromoCode}
              onApplyPromo={() => setPromoCode(PROMO_CODE)}
              onCheckout={handleCheckout}
              onClearCart={clearCart}
            />
          </>
        )}
      </div>
    </div>
  );
}
