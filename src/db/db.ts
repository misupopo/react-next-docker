import Dexie, { Table } from "dexie";
import { nanoid } from "nanoid";

export interface IPermission {
  id: string;
  action: string;
  subject: string;
}

export interface IUser {
  id: string;
  name: string;
  phone: string;
}

export interface Test {
  id: string;
  name: string;
}

class Db extends Dexie {
  permission!: Table<IPermission>;
  user!: Table<IUser>;
  // ちなみに式中で出てくる場合の後置演算子の!は Non-Null Assertion Operator で
  // こちらはオペランドが非nullでかつ非undefinedであることを伝えています。
  test!: Table<Test>

  constructor() {
    super("db");
    this.version(1).stores({
      permission: "++id,action,subject",
      user: "++id,name,phone",
      test: "++id,name"
    });
  }
}

export const db = new Db();

