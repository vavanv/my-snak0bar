import { HomeActions } from "./homeTypes";
import { action } from "typesafe-actions";

export const increment = (amount: number) =>
  action(HomeActions.INCREMENT, amount);
export const decrement = (amount: number) =>
  action(HomeActions.DECREMENT, amount);
export const incrementSaga = (amount: number) =>
  action(HomeActions.INCREMENT_SAGA, amount);
export const decrementSaga = (amount: number) =>
  action(HomeActions.DECREMENT_SAGA, amount);
