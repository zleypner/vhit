export type ApiResponse<T> = {
  data: T;
  success: boolean;
  message?: string;
};

export type Nullable<T> = T | null;
