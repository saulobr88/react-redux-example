function addContact(contact) {
    return {
      type: 'ADD_CONTACT',
      payload: contact
    }
}

function updateContact(contact) {
  return {
    type: 'UPDATE_CONTACT',
    payload: contact
  }
}

function deleteContact(contact) {
  return {
    type: 'DELETE_CONTACT',
    payload: contact
  }
}

export { addContact };
export { updateContact };
export { deleteContact };