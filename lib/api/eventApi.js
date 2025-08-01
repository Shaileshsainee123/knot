import { apiJson } from "./axiosBase";

export const getEventList = () => {
  return apiJson.get("api/Website/getAllEventList");
};

export const getGalleryList = () => {
  return apiJson.get(`api/Website/getGalleryImage`);
};