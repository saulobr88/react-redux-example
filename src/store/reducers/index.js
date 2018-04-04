import { combineReducers } from 'redux';
import ContactsReducer from './contacts_reducer'
import ActiveContactReducer from './active_contact_reducer'

const rootReducer = combineReducers({
	contacts: ContactsReducer,
	activeContact: ActiveContactReducer
});

export default rootReducer;