import api from "./axios";

export const addToWishlist = (data) => api.post("/api/wishlist/add", data);
export const getMyWishlist = () => api.get("/api/wishlist/my");
export const removeFromWishlist = (id) => api.delete(`/api/wishlist/${id}`);
