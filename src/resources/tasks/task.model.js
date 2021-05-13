const uuid = require('uuid').v4;


class Task {
  constructor({
    id = uuid(),
    title ="string",
    order = 0,
    description = "string",
    userId = "string",
    boardId = "string",
    columnId = "string"
  } = {}) {
    this.id = id
    this.title = title;
    this.order = order;
    this.description = description;
    this.userId = userId;
    this.boardId = boardId;
    this.columnId = columnId;
  }
}


module.exports = Task