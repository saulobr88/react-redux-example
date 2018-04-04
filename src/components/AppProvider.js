import React from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

import App from '../views/App';
import reducers from '../store/reducers';
const createStoreWithMiddleware = applyMiddleware()(createStore);

const AppProvider = () => {
    return(
        <Provider store={createStoreWithMiddleware(reducers)} >
            <App />
        </Provider>
    );
}

export default AppProvider;
