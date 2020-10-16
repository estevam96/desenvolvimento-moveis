import { SQLError, SQLResultSet, SQLResultSetRowList } from 'expo-sqlite';
import Hero from '@models/Hero';
import { db } from "@/database/Connection";

const table = 'hero';

const executeSql = async (sql: string, params: any[]): Promise<SQLResultSetRowList> => {
  return new Promise((resolve, reject) => db.transaction(tx => {
    return tx.executeSql(
      sql,
      params,
      (_, { rows }) => resolve(rows),
      (_, { message }) => reject(message));
  }))
}
export default {
  addHero: async (hero: Hero) => {
    console.log(hero)
    return await executeSql(`INSERT INTO ${table} (name, urlImage, description) values(?,?,?)`,
      [hero.name, hero.urlImage, hero.description])
  },
  deleteHero: async (id: number) => await executeSql(`DELETE FROM ${table} WHERE id = ?;`,
    [id]),
  updateHero: async (hero: Hero) => await executeSql(
    `UPDATE ${table} SET name = ?, urlImage = ?, description = ? WHERE id = ?`,
    [hero.name, hero.urlImage, hero.description, hero.id]),
  findById: async (id: number) => await executeSql(`SELECT * FROM ${table} WHERE id = ?`,
    [id]),
  findAll: async () => await executeSql(`SELECT * FROM ${table};`,
    [])
}