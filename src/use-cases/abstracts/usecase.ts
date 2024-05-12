export interface Usecase<Input, Output> {
  excute: (input: Input) => Promise<Output>;
}
