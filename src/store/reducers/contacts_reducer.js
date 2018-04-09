/* I don't use ContactsReducer anymore,
 * just ContactsCrud, all initial information comes from
 * store/data.js
 */
const ContactsReducer = () => {
	return [{
		"id": "1",
		"name": "Miguel",
		"phone": "123456789",
	},{
		"id": "2",
		"name": "Peter",
		"phone": "883292300348",
	},{
		"id": "3",
		"name": "Jessica",
		"phone": "8743847638473",
	},{
		"id": "4",
		"name": "Michael",
		"phone": "0988765553",
	}];
}

const ContactsCrud = (state = [], action) => {
	switch(action.type) {
		case 'ADD_CONTACT':
			return [...state, action.payload];

		case 'DELETE_CONTACT':
			function updateContacts(contact) {
				if(contact.id !== action.payload.id) {
					return contact;
				}
			}
			return state.filter(updateContacts);
		
		case 'UPDATE_CONTACT':
			/* another way to cycle through the list
			 * ref.: https://hackernoon.com/redux-patterns-add-edit-remove-objects-in-an-array-6ee70cab2456
			 */
			const updatedItems = state.map(item => {
				if(item.id === action.payload.id){
				  return { ...item, ...action.payload }
				}
				return item;
			  });
			  return updatedItems;

		default: 
			return state;
	}
}

export default ContactsReducer;
export { ContactsCrud };