export const env = {
  NODE_ENV: process.env.NODE_ENV,
  NEXT_PUBLIC_APP_URL:
    process.env.NEXT_PUBLIC_APP_URL ?? "http://localhost:3000",
} as const;
