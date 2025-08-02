import { apiJson } from "./axiosBase";

export const getEventList = ({ page = 1, limit = 10 } = {}) => {
  return apiJson.get(`api/Website/getAllEventList?page=${page}&limit=${limit}`);
};

export const getGalleryList = ({ page = 1, limit = 10 ,name="All"} = {}) => {
  return apiJson.get(`api/Website/getGalleryImage?page=${page}&limit=${limit}&name=${name}`);
};