import api from "./axios";

export const saveTrip = (data) => api.post("/api/trips/save", data);
export const getMyTrips = () => api.get("/api/trips/my");
export const deleteTrip = (id) => api.delete(`/api/trips/${id}`);
