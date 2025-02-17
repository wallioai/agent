export type ApiResponse<T> = {
  status: boolean;
  path?: string;
  statusCode: number;
  data?: T;
};

export function transformError(error: any) {
  return {
    status: false,
    statusCode: error.status,
    path: error.path,
    data: error.message,
  };
}
