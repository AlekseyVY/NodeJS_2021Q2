export {}
const uuid = require('uuid').v4;

export interface IBoard {
  id: String;
  title: String;
  columns: Array<Object>
}

/**
 * Board class
 */
class Board {

  public id: String;

  public title: String;

  public columns: Array<Object>

  /**
   * @param id {string} id of a board
   * @param title {string} title of a board
   * @param columns {Array} columns of a board
   */
  constructor({
    id = uuid(),
    title = "Board",
    columns = []
  }: IBoard) {
    /**
     * @property id {string} id of a board
     * @property title {string} title of a board
     * @property columns {Array} columns of a board
     */
    this.id = id;
    this.title = title;
    this.columns = columns;
  }
}

module.exports = Board;