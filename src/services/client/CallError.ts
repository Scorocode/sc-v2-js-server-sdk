export default class CallError {
  constructor(
    public httpCode: number,
    public apiCode: string,
    public message: string
  ) {}
}
