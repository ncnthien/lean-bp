export interface Server {
  start(port: number, cb: () => void): void;
}
