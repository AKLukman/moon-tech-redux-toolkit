import { addToCart } from "../features/cart/cartSlice";

// Currying function
const cartCounter = (store) => (next) => (action) => {
  const state = store.getState();
  const cart = state.cart;

  if (action.type === addToCart) {
    const newAction = {
      ...action,
      payload: { ...action.payload, cartPosition: cart.length },
    };
    return next(newAction);
  }
  return next(action);
};

export default cartCounter;
