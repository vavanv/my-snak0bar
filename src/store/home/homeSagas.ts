import {
  decrement,
  decrementSaga,
  increment,
  incrementSaga,
} from "./homeActions";
import { HomeActions } from "./homeTypes";
import { all, put, takeEvery } from "redux-saga/effects";
import { enqueueSnackbar } from "store/snackbars/snackbarActions";

function* handleIncrement(action: ReturnType<typeof incrementSaga>) {
  yield all([
    put(increment(action.payload)),
    // Enabling the following line will cause a crash because it cannot handle this type of including an action
    // put(enqueueSnackbar({message: 'Incremented the counter', options: { variant: 'success', action: snackbarAction}})),
    put(
      enqueueSnackbar({
        message: "Incremented the counter",
        options: { variant: "success" },
      })
    ),
  ]);
}

function* handleDecrement(action: ReturnType<typeof decrementSaga>) {
  yield all([
    put(decrement(action.payload)),
    put(
      enqueueSnackbar({
        message: "Decremented the counter",
        options: { variant: "error" },
      })
    ),
  ]);
}

function* HomeSaga() {
  yield all([
    takeEvery(HomeActions.INCREMENT_SAGA, handleIncrement),
    takeEvery(HomeActions.DECREMENT_SAGA, handleDecrement),
  ]);
}

export default HomeSaga;
