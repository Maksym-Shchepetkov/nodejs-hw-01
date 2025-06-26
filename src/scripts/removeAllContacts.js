import { writeContacts } from '../utils/writeContacts.js';

export const removeAllContacts = async () => {
  try {
    const deleteContacts = await writeContacts([]);
    return deleteContacts;
  } catch (error) {
    console.log(error.message);
  }
};

removeAllContacts();
