import { Snackbar, SnackbarActionTypes } from "./snackbarTypes";
import { action } from "typesafe-actions";

export const enqueueSnackbar = (snackbar: Snackbar) =>
  action(SnackbarActionTypes.ENQUEUE_SNACKBAR, {
    key: (new Date().getTime() + Math.random()).toString(),
    ...snackbar,
  });
export const removeSnackbar = (key: string) =>
  action(SnackbarActionTypes.REMOVE_SNACKBAR, key);
