export interface Usecase<Input, Output> {
  excute: (input: Input) => Output;
}
