import React from 'react';
import { Provider } from 'react-redux';

import Store from '../store';
import App from '../views/App';

const AppProvider = () => {
    return(
        <Provider store={Store} >
            <App />
        </Provider>
    );
}

export default AppProvider;
