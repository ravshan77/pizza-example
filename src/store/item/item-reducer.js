import { ITEM_TYPE } from "./item-type";

const initialState = {
  item: 0,
};

const cardData = (state = initialState, action) => {
  switch (action.type) {
    case ITEM_TYPE.SUM_OF_TWO_NUMBERS:
      return {
        ...state,
        item: state.item + 1,
      };
    case ITEM_TYPE.MINUS_OF_TWO_NUMBERS:
      return {
        ...state,
        item: state.item - 1,
      };
    default:
      return state;
  }
};
export default cardData;
