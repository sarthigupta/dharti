// API base URL — in production, points to the Render backend.
// In development, Vite proxy handles /api routes, so it stays empty.
export const API_URL = import.meta.env.VITE_API_URL || '';
