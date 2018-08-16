export const API_BASE_URL =
  process.env.NODE_ENV === "production"
    ? "http://tulip-call4diversity-backend.bridgeschoolapp.io"
    : "http://localhost:8081";
