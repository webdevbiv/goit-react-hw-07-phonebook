export const selectFilter = state => state.filter.value;
export const selectContacts = state => {
  const contacts = state.contacts.list;
  const filter = state.filter.value;
  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );
  return filteredContacts;
};
