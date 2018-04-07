import { createStore, applyMiddleware } from 'redux';
import reducers from './reducers';
import contacts from './data';

/*
    This approach is for to use some Middleware in the future.
    I also use preloadedState with createStore, 
    to load some Data at startup
*/
const createStoreWithMiddleware = applyMiddleware()(createStore);
const Store = createStoreWithMiddleware(reducers, {contacts});

/* Just for tests
const Store = createStore(reducers, {contacts});
*/
export default Store;