import { db } from '@/database/Connection';
import { WebSQLDatabase } from 'expo-sqlite';

/* let db = null;
export default class DatabaseInit {
  constructor() {
    db = DatabaseConnection.getConnection();
    db.exec([{ sql: 'PRAGMA foreign_keys = ON;', args: [] }], false, () =>
      console.log('Foreign keys turned on')
    );

    this.InitDb();
  }

  
} */

function InitDb(db: WebSQLDatabase) {
  var sql = [
    `CREATE TABLE IF NOT EXISTS hero (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name text,
      urlImage text,
      description text
    )`,
  ];

  db.transaction(
    tx => {
      tx.executeSql(`CREATE TABLE IF NOT EXISTS hero (
          id INTEGER PRIMARY KEY AUTOINCREMENT,
          name text,
          urlImage text,
          description text
        )`)
    }, (error) => {
      console.log("error call back : " + JSON.stringify(error));
      console.log(error);
    }, () => {
      console.log("transaction complete call back ");
    }
  );
}

export function Init(): void {
  db.exec([{ sql: 'PRAGMA foreign_keys = ON;', args: [] }], false, () =>
    console.log('Foreign keys turned on')
  );
  InitDb(db);
}