export const snackbarHideDuration = 3000;

export const isDevEnv = () => {
    const env = process.env.NODE_ENV;
    return env === 'development' ? true : env === 'test';
};