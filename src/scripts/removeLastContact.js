import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';

export const removeLastContact = async () => {
  try {
    const deleteContact = await readContacts();
    deleteContact.pop();
    const results = await writeContacts(deleteContact);
    return results;
  } catch (error) {
    console.log(error.message);
  }
};

removeLastContact();
