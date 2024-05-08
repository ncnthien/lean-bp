import { server } from './server/server';

server.start(3000, () => {
  console.log('Server is running on port 3000');
});
