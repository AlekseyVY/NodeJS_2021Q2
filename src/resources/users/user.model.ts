export {}
const uuid = require('uuid').v4;

export interface IUser {
  id: String;
  name: String;
  login: String;
  password: String;
}
/**
 * User class
 */
class User {
  public id: String;

  public name: String;

  public login: String;

  public password: String;

  /**
   * @param id {string} Id of a User
   * @param name {string} Name of a user
   * @param login {string} login of a user
   * @param password {string} password of a user
   */
  constructor({
    id = uuid(),
    name = 'USER',
    login = 'user',
    password = 'P@55w0rd'
  }: IUser) {
    /**
     * @property id {string} Id of a User
     * @property name {string} Name of a user
     * @property login {string} login of a user
     * @property password {string} password of a user
     */
    this.id = id;
    this.name = name;
    this.login = login;
    this.password = password;
  }

  /**
   * static method that returns only valid properties
   * @static
   * @param user {Object} User object
   * @returns {{name, id, login}} Name, Id and login of a user
   */
  static toResponse(user: User) {
    const { id, name, login } = user;
    return { id, name, login };
  }
}

module.exports = User;
