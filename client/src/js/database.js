import { openDB } from 'idb';

const initdb = async () =>
  openDB('jate', 1, {
    upgrade(db) {
      if (db.objectStoreNames.contains('jate')) {
        console.log('jate database already exists');
        return;
      }
      db.createObjectStore('jate', { keyPath: 'id', autoIncrement: true });
      console.log('jate database created');
    },
  });

export const putDb = async (content) => {
  console.log('PUT to the database');
  const jateDb = await openDB('jate', 1);
  const tx = jateDb.transaction('jate', 'readwrite');
  const store = tx.objectStore('jate');
  //*worked on the following with tutor*
  //add id of 1 so that's it just overwrites when new content is added, rather than add a new object each time
  //Also will ensure offline data saves, since it's all referring back to the same content  
  const request = store.put({ id: 1, content });
  const result = await request;
  console.log('🚀 - data saved to the database', result);
};
ß
export const getDb = async () => {
  console.log('GET all from the database');
  const jateDb = await openDB('jate', 1);
  const tx = jateDb.transaction('jate', 'readonly');
  const store = tx.objectStore('jate');  
  const request = store.getAll();
  const result = await request;
  console.log('result.value', result);
  //*with tutor* added .content so that it will load database data and local storage data without an error 
  //message referring to .split, since that will only work on strings
  //added the ? promise so we won't get an error message if there isn't already data in the database
  return result?.content;
};

initdb();
