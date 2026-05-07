export const PROMO_CODE = "FRESH10";
export const PROMO_DISCOUNT_RATE = 0.1;
export const FREE_DELIVERY_MINIMUM = 8000;
export const DELIVERY_FEE = 250;

export const getCartSubtotal = (cart) => {
  return cart.reduce((total, item) => total + item.price * item.quantity, 0);
};

export const getDeliveryFee = (subtotal) => {
  if (subtotal === 0 || subtotal >= FREE_DELIVERY_MINIMUM) return 0;

  return DELIVERY_FEE;
};

export const getDiscount = (subtotal, promoCode) => {
  const isPromoValid = promoCode.trim().toUpperCase() === PROMO_CODE;

  return isPromoValid ? Math.round(subtotal * PROMO_DISCOUNT_RATE) : 0;
};

export const getCartTotal = ({ subtotal, deliveryFee, discount }) => {
  return subtotal + deliveryFee - discount;
};
