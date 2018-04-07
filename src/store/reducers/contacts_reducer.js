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
		default: 
			return state;
	}
}

export default ContactsReducer;
export { ContactsCrud };