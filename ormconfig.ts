import { User } from './src/entity/User';
import { Board } from './src/entity/Board';
import { Task } from './src/entity/Task';

module.exports = {
   type: process.env['DB_TYPE'],
   host: process.env['DB_HOST'],
   port: process.env['DB_PORT'],
   username: process.env['DB_USERNAME'],
   password: process.env['DB_PASSWORD'],
   database: process.env['DB_NAME'],
   entities: [
      User, Board, Task
   ],
   synchronize: false,
   logging: false,
   migrations: [
      "src/migration/**/*.ts"
   ],
   cli: {
      "entitiesDir": "src/entity",
      "migrationsDir": "src/migration",
      "subscribersDir": "src/subscriber"
   }
}