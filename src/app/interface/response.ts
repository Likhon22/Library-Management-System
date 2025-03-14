export type TResponse<T> = {
  message: string;
  data: T;
  statusCode: number;
  success: boolean;
};
