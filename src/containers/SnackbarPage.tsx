import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import React, { FC, Fragment } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import { enqueueSnackbar } from 'store/snackbars/snackbarActions';

type AppProps = {
    enqueueSnackbar: typeof enqueueSnackbar;
};

const SnackbarPage: FC<AppProps> = props => {
    const handleButtonClick = () => {
        props.enqueueSnackbar({
            message: 'Clicked the snackbar summon button!',
            options: { variant: 'info' },
        });
    };

    return (
        <Fragment>
            <Typography variant='h3' gutterBottom align='center' color='textPrimary'>
                Notistack Redux + Redux-Saga example
            </Typography>
            <Grid container spacing={1} alignContent='center' alignItems='baseline' justify='center'>
                <Grid item xs={3}>
                    <Button variant='contained' onClick={handleButtonClick}> Display Snackbar with action </Button>
                </Grid>
            </Grid>
        </Fragment>
    );
};

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators({ enqueueSnackbar }, dispatch);

export default connect(null, mapDispatchToProps)(SnackbarPage);
