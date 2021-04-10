import { ITEM_TYPE } from "./item-type";

export const addTwoNumbers = () => ({
  type: ITEM_TYPE.SUM_OF_TWO_NUMBERS,
});

export const minusTwoNumbers = () => ({
  type: ITEM_TYPE.MINUS_OF_TWO_NUMBERS,
});
