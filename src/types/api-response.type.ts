export type ApiResponse<T> = {
  status: boolean;
  statusCode: number;
  data?: T;
};

export function transformError(error: any) {
  return {
    status: false,
    statusCode: error.status,
    data: error.message,
  };
}
