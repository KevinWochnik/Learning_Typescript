let userInput: unknown;

let generateError = (message: string, code: number): never => {
  throw { message, errorCode: code };
};
generateError('error',500)
