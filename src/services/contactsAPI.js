import axios from 'axios';

axios.defaults.baseURL = 'https://644bd98b17e2663b9dfa177a.mockapi.io';

export async function getContacts() {
  const { data } = await axios.get(`/contacts`);
  console.log(data);
  return data;
}

// export async function addContact() {}
// export async function deleteContacts() {}
