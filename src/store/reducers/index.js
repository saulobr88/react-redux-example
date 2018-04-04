import { combineReducers } from 'redux';
import ContactsReducer from './contacts_reducer'
import ActiveContactReducer from './active_contact_reducer'
import todos, {visibilityFilter} from './todos';

const rootReducer = combineReducers({
	contacts: ContactsReducer,
	activeContact: ActiveContactReducer,
	todos,
	visibilityFilter
});

export default rootReducer;