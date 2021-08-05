import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import React, { FC, Fragment } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import { decrementSaga, incrementSaga } from 'store/home/homeActions';
import { HomeState } from 'store/home/homeTypes';
import { ApplicationState } from 'store/rootStore';

type CounterPageProps = {
    count: HomeState['count'];
    incrementSaga: typeof incrementSaga;
    decrementSaga: typeof decrementSaga;
};

const CounterPage: FC<CounterPageProps> = props => {
    return (
        <Fragment>
            <Typography variant='h3' gutterBottom align='center' color='textPrimary'>
                Amount counted: {props.count}
            </Typography>
            <Grid container spacing={1} alignContent='center' alignItems='baseline' justify='center'>
                <Grid item xs={3}>
                    <Button variant='contained' color='primary' onClick={() => props.incrementSaga(1)}>Snackbar & Increment Saga</Button>
                </Grid>
                <Grid item xs={3}>
                    <Button variant='contained' color='primary' onClick={() => props.decrementSaga(1)}>Snackbar & Decrement Saga</Button>
                </Grid>
            </Grid>
        </Fragment>
    );
};

const mapStateToProps = (state: ApplicationState) => ({ count: state.home.count });
const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators({ incrementSaga, decrementSaga }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(CounterPage);