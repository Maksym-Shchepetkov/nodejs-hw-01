import * as fs from 'node:fs/promises';
import { PATH_DB } from '../constants/contacts.js';

export const writeContacts = async (updatedContacts) => {
  const updatedData = await fs.writeFile(
    PATH_DB,
    JSON.stringify(updatedContacts),
    'utf-8',
  );
  return updatedData;
};
