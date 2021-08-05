import { OptionsObject } from "notistack";

export enum SnackbarActionTypes {
  ENQUEUE_SNACKBAR = "@@snackbar/ENQUEUE_SNACKBAR",
  REMOVE_SNACKBAR = "@@snackbar/REMOVE_SNACKBAR",
}

export interface SnackbarState {
  readonly snackbars: Snackbar[];
}

export type Snackbar = {
  key?: string;
  message: string;
  options?: SnackbarOptions;
};

export interface SnackbarOptions extends OptionsObject {
  autoHideDuration?: number;
  persist?: boolean;
}
