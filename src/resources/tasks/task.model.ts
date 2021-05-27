export {}
const uuid = require('uuid').v4;

interface ITask {
   id: String;
   title: String;
   order: Number;
   userId: String;
   boardId: String;
   columnId: String;
   description: String;
}
/**
 * Task class
 */
class Task {
  public id: String;

  public title: String;

  public order: Number;

  public description: String;

  public userId: String;

  public boardId: String;

  public columnId: String;

  /**
   *
   * @param id {string} Id of a task
   * @param title {string} Title of a task
   * @param order {number} order of a task
   * @param description {string} description of a task
   * @param userId {string} Id of a user who assigned to task
   * @param boardId {string} Id of a board on which task is located.
   * @param columnId {string} Id of a column in which task is located.
   */
  constructor({
    id = uuid(),
    title ="string",
    order = 0,
    description = "string",
    userId = "string",
    boardId = "string",
    columnId = "string"
  }: ITask) {
    /**
     *
     * @property id {string} Id of a task
     * @property title {string} Title of a task
     * @property order {number} order of a task
     * @property description {string} description of a task
     * @property userId {string} Id of a user who assigned to task
     * @property boardId {string} Id of a board on which task is located.
     * @property columnId {string} Id of a column in which task is located.
     */
    this.id = id;
    this.title = title;
    this.order = order;
    this.description = description;
    this.userId = userId;
    this.boardId = boardId;
    this.columnId = columnId;
  }
}

module.exports = Task;