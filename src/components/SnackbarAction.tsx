import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import { withSnackbar, WithSnackbarProps } from 'notistack';
import React, { FC } from 'react';

const action: FC<WithSnackbarProps> = props => {
    return (
        <IconButton onClick={() => props.closeSnackbar()}>
            <CloseIcon />
        </IconButton>
    );
};

export default withSnackbar(action);