import Divider from "@material-ui/core/Divider";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import classnames from "classnames";
import ConnectedCounterPage from "containers/CounterPage";
import ConnectedSnackbarPage from "containers/SnackbarPage";
import React, { FC, Fragment } from "react";
import css from "../styles/home.module.css";

const Home: FC = () => (
  <Fragment>
    <Grid
      container
      alignContent="center"
      alignItems="center"
      justify="center"
      spacing={10}
      className={classnames(css.setHeight)}
    >
      <Grid item xs={8}>
        <Paper elevation={4} className={classnames(css.setPaperSize)}>
          <ConnectedSnackbarPage />
        </Paper>
      </Grid>
      <Divider />
      <Grid item xs={8}>
        <Paper elevation={4} className={classnames(css.setPaperSize)}>
          <ConnectedCounterPage />
        </Paper>
      </Grid>
    </Grid>
  </Fragment>
);

export default Home;
