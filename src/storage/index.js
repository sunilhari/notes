import idb from 'idb';

const DB_NAME = 'notesdb';
const NOTES_STORE = 'notestore';
let dbPromise;
class Db {
  constructor() {
    if (!('indexedDB' in window)) {
      throw new Error('This browser doesn\'t support IndexedDB');
    }
    console.log('Init Storage');
  }
  static init = () => {
    dbPromise = idb.open(DB_NAME, 1, upgradeDb => {
      if (!upgradeDb.objectStoreNames.contains(NOTES_STORE)) {
        const notesStore = upgradeDb.createObjectStore(NOTES_STORE, {
          keyPath: 'id',
          autoIncrement: true
        });
        notesStore.createIndex('tags', 'tags', {});
        notesStore.createIndex('createdDate', 'createdDate', {});
        notesStore.createIndex('description', 'description', {});
        notesStore.createIndex('modifiedDate', 'modifiedDate', {});

      }
    });
  }
  static insert = (values) => (
    dbPromise.then(db => {
      const tx = db.transaction(NOTES_STORE, 'readwrite');
      tx.objectStore(NOTES_STORE).add(values);
      return tx.complete;
    })
  )
  static update = (values) => (
    dbPromise.then(db => {
      const tx = db.transaction(NOTES_STORE, 'readwrite');
      tx.objectStore(NOTES_STORE).put(values);
      return tx.complete;
    })
  )
  static delete = (id) => (
    dbPromise.then(db => {
      const tx = db.transaction(NOTES_STORE, 'readwrite');
      tx.objectStore(NOTES_STORE).delete(id);
      return tx.complete;
    })
  )
  static fetchById = (id) => (
    dbPromise.then(db => {
      return db.transaction(NOTES_STORE)
        .objectStore(NOTES_STORE).get(id);
    })
  )
  static getAllNotes = () => (
    dbPromise.then(db => {
      const tx = db.transaction(NOTES_STORE);
      return tx.objectStore(NOTES_STORE).getAll();
    })
  )
}
export default Db;
