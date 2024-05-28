import { Usecase } from 'src/use-cases/abstracts/usecase';
import { ExpressFacade, expressApp } from '../libraries/express/express';
import { Server } from './abstracts/server.abstract';

class ServerIplm implements Server {
  private express: ExpressFacade;

  constructor(express: ExpressFacade) {
    this.express = express;
  }

  on<Input, Output>(path: string, method: string, usecase: Usecase<Input, Output>): void {
    if (method === 'get') {
      this.express.get(path, usecase.excute);
      return;
    }

    if (method === 'post') {
      this.express.get(path, usecase.excute);
      return;
    }

    if (method === 'put') {
      this.express.get(path, usecase.excute);
      return;
    }

    if (method === 'patch') {
      this.express.get(path, usecase.excute);
      return;
    }
  }

  start(port: number, cb?: () => void): void {
    this.express.start(port, cb);
  }
}

export const server = new ServerIplm(expressApp);
