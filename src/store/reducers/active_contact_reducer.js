export default function(state = null, action) {
	switch (action.type) {
		case 'CONTACT_SELECTED': 
			console.log('CONTACT_SELECTED: ', action.payload);
			return action.payload
		default:
		
	}
	return state;
}