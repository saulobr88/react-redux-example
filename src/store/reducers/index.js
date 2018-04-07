import { combineReducers } from 'redux';
import { ContactsCrud } from './contacts_reducer';
import ActiveContactReducer from './active_contact_reducer';
import todos, {visibilityFilter} from './todos';

const rootReducer = combineReducers({
	contacts: ContactsCrud,
	activeContact: ActiveContactReducer,
	todos,
	visibilityFilter
});

export default rootReducer;