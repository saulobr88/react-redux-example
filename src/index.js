import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';

import AppProvider from './components/AppProvider';

ReactDOM.render(
    <AppProvider />,
    document.getElementById('root')
);
registerServiceWorker();
