import { writeContacts } from '../utils/writeContacts.js';
import { createFakeContact } from '../utils/createFakeContact.js';
import { readContacts } from '../utils/readContacts.js';

export const addOneContact = async () => {
  try {
    const existingContacts = await readContacts();

    const newContact = [];
    newContact.push(createFakeContact());

    const updatedContacts = [...existingContacts, ...newContact];
    await writeContacts(updatedContacts);
  } catch (error) {
    console.log(error.message);
  }
};

addOneContact();
