import { routerMiddleware } from 'connected-react-router';
import history from './history';
import { AnyAction, applyMiddleware, createStore, Middleware, Store } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';
import { createLogger } from 'redux-logger';
import createSagaMiddleware, { SagaMiddleware } from 'redux-saga';
import createRootReducer, { ApplicationState, rootSaga } from 'store/rootStore';
import { isDevEnv } from 'utils/constants';

interface HotNodeModule extends NodeModule {
    hot: any;
}

export default (initialState: ApplicationState): Store<ApplicationState> => {
    const sagaMiddleware = createSagaMiddleware();
    const middlewares: (SagaMiddleware | Middleware)[] = [sagaMiddleware, routerMiddleware(history)];
    const logger = createLogger({
        collapsed: (getState: () => any, action: AnyAction, logEntry: any) => !logEntry.error,
    });

    if (isDevEnv()) {
        middlewares.push(logger);
    }

    const store = createStore(
        createRootReducer(history),
        initialState,
        composeWithDevTools(applyMiddleware(...middlewares))
    );

    // Hot reloading in development
    if ((module as HotNodeModule).hot) {
        (module as HotNodeModule).hot.accept('../App.tsx', () => {
            store.replaceReducer(createRootReducer(history));
        });
    }

    sagaMiddleware.run(rootSaga);
    return store;
};
