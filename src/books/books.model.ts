import { Column, Model, Table } from 'sequelize-typescript';

@Table
export class UserBook extends Model {
 /* static getBooks(): UserBook[] | PromiseLike<UserBook[]> {
      throw new Error('Method not implemented.');
  }
  static getAllBooks(): UserBook[] | PromiseLike<UserBook[]> {
      throw new Error('Method not implemented.');
  }*/

  @Column({autoIncrement:true, primaryKey:true})
  id:number;

  @Column/*({ allowNull: false })*/
  bookName: string;

  @Column/*({ allowNull: false })*/
  authorName: string;

  @Column
  year: number;
}