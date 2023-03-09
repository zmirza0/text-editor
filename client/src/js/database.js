import { openDB } from "idb";

const initdb = async () =>
  // creates 'jate' db using version 1
  openDB("jate", 1, {
    // logic to add db schema if it doesn't already exist
    upgrade(db) {
      if (db.objectStoreNames.contains("jate")) {
        console.log("jate database already exists");
        return;
      }
      // Creates new object to store data, key name 'id', auto-increments
      db.createObjectStore("jate", { keyPath: "id", autoIncrement: true });
      console.log("jate database created");
    },
  });

// TODO: Add logic to a method that accepts some content and adds it to the database
export const putDb = async (content) => {
  console.error("putDb not implemented");
  // console logs successful function execution
  console.log("PUT to the database");
  // sets variables for opening DB as version 1, in readwrite and sets an object storage
  const jateDB = await openDB("jate", 1);
  const tx = jateDB.transaction("jate", "readwrite");
  const store = tx.objectStore("jate");
  // sets request variable and uses the .put method to update data
  const request = store.put({ id: 1, value: content });
  // confirms the request
  const result = await request;
  console.log("🚀 - data saved to the database", result);
};

// TODO: Add logic for a method that gets all the content from the database
export const getDb = async () => {
  console.error("getDb not implemented");
  console.log("GET all from the database");
  // sets variables for opening DB as version 1, in readonly and sets an object storage
  const jateDb = await openDB("jate", 1);
  const tx = jateDb.transaction("jate", "readonly");
  const store = tx.objectStore("jate");
  // sets request variable and uses the .getAll method to view all data
  const request = store.getAll();
  // confirms the request
  const result = await request;
  // gives console.log options for data retrieved or not retrieved
  result
    ? console.log("Data retrieved from database")
    : console.log("Data not found in the database.");

  return result?.value;
};

initdb();
