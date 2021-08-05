import { withSnackbar, WithSnackbarProps } from "notistack";
import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { bindActionCreators, Dispatch } from "redux";
import { ApplicationState } from "store/rootStore";
import { removeSnackbar } from "store/snackbars/snackbarActions";
import { Snackbar, SnackbarOptions } from "store/snackbars/snackbarTypes";

export type SnackbarProps = {
  snackbars: Snackbar[];
  displayed?: string[];
  enqueueSnackbar: (message: string, options: SnackbarOptions) => void;
  removeSnackbar: (key: string) => void;
};

export class NotifiersContainer extends Component<
  SnackbarProps & WithSnackbarProps
> {
  private displayed: string[] = [];

  storeDisplayed(id: string) {
    this.displayed = [...this.displayed, id];
  }

  shouldComponentUpdate(newProps: SnackbarProps) {
    let notExists = false;

    for (const newSnackbar of newProps.snackbars) {
      if (notExists) continue;
      notExists =
        notExists ||
        !this.props.snackbars.filter(
          (notification: Snackbar) => newSnackbar.key === notification.key
        ).length;
    }
    return notExists;
  }

  componentDidUpdate() {
    this.props.snackbars.forEach((snackbar: Snackbar) => {
      if (!snackbar.key) return;

      this.props.enqueueSnackbar(snackbar.message, snackbar.options);
      this.storeDisplayed(snackbar.key);
      this.props.removeSnackbar(snackbar.key);
      this.displayed.filter((s) => s !== snackbar.key);
    });
  }

  render() {
    return <Fragment />;
  }
}

const mapStateToProps = (state: ApplicationState) => ({
  snackbars: state.notifications.snackbars,
});

const mapDispatchToProps = (dispatch: Dispatch) =>
  bindActionCreators(
    {
      removeSnackbar,
    },
    dispatch
  );

export const Notifiers = connect(
  mapStateToProps,
  mapDispatchToProps
)(withSnackbar(NotifiersContainer));
