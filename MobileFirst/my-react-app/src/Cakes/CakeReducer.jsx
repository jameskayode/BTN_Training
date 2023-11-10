import { Buy } from "./CakeType";

const initialState = {
  Num_cake: 10,
};

const CakeRuducer = (state = initialState, action) => {
  switch (action.type) {
    case "INCREASE":
      return {
        Num_cake: state.Num_cake + 1,
      };
    case Buy:
      return {
        ...state,
        Num_cake: state.Num_cake - 1,
      };
    default:
      return state;
  }
};
