import * as idb from 'idb'

type DoggoEntry = {
  name: string
  imageUrl: string
}

interface DogSchema extends idb.DBSchema {
  Doggos: {
    key: string
    value: DoggoEntry
  }
}

/**
 * Get instance of the Database
 * @return IDBDatabase
 */
function getDBInstance() {
  return idb.openDB<DogSchema>('Doggobase', 1, {
    upgrade(database, oldVersion, newVersion, transaction) {
      switch (oldVersion) {
        case 0:
          database.createObjectStore('Doggos', {
            keyPath: 'imageUrl',
          })
      }
    },
  })
}

export { getDBInstance, DoggoEntry }
