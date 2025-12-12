export interface respuestaLogin {
  message: string;
  object: {
    email: string;
    userId: number;
    token: string;
  };
  statusCode: number;
}