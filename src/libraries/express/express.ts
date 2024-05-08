import express from 'express';

export class ExpressFacade {
  private app: express.Application;

  constructor() {
    this.app = express();
  }

  start(port: number, cb?: () => void): void {
    this.app.listen(port, cb);
  }
}

export const expressApp = new ExpressFacade();
