import axios from 'axios';

axios.defaults.baseURL = 'https://644bd98b17e2663b9dfa177a.mockapi.io';

export async function getContacts() {
  const { data } = await axios.get(`/contacts`);
  return data;
}

export async function addContact(data) {
  const res = await axios.post(`/contacts`, data);
  return res.data;
}

export async function deleteContact(id) {
  console.log(id);
  const res = await axios.delete(`/contacts/${id}`);
  console.log(res.data.id);
  return res.data.id;
}

// const user = { name: 'igor', phone: '12314123', id: '6' };
// console.log(addContact(user));
// export async function deleteContacts() {}
