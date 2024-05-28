export interface Usecase {
  excute: <Input, Output>(input: Input, output: Output) => void;
}
