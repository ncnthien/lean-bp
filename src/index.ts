import { database } from './database/database';
import { server } from './server/server';

server.start(3000, () => {
  database.connect();
});
