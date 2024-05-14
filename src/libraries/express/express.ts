import express from 'express';

export class ExpressFacade {
  private app: express.Application;

  constructor() {
    this.app = express();
  }

  start(port: number, cb?: () => void): void {
    this.app.listen(port, cb);
  }

  get(path: string, cb: (req: express.Request, res: express.Response) => void): void {
    this.app.get(path, cb);
  }

  post(path: string, cb: (req: express.Request, res: express.Response) => void): void {
    this.app.post(path, cb);
  }

  put(path: string, cb: (req: express.Request, res: express.Response) => void): void {
    this.app.put(path, cb);
  }

  patch(path: string, cb: (req: express.Request, res: express.Response) => void): void {
    this.app.patch(path, cb);
  }
}

export const expressApp = new ExpressFacade();
