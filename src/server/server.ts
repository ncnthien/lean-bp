import { Server } from './abstracts/server';
import { ExpressFacade, expressApp } from '../libraries/express/express';

class ServerIplm implements Server {
  private express: ExpressFacade;

  constructor(express: ExpressFacade) {
    this.express = express;
  }

  start(port: number, cb?: () => void): void {
    this.express.start(port, cb);
  }
}

export const server = new ServerIplm(expressApp);
