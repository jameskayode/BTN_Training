// cartActions.js

// Action Types
const FETCH_CART_DATA = 'FETCH_CART_DATA';
const SET_CART_DATA = 'SET_CART_DATA';

// Action Creators
export const fetchCartData = () => {
  // Your fetch logic here, you might use Thunk for asynchronous actions
  return async (dispatch) => {
    try {
      const response = await fetch('https://dummyjson.com/products');
      const data = await response.json();
      dispatch(setCartData(data)); // Dispatch the action to update the state
    } catch (error) {
      console.error('Error fetching cart data:', error);
    }
  };
};

export const setCartData = (data) => ({
  type: SET_CART_DATA,
  payload: data,
});
