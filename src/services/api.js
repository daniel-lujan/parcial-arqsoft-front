import axios from "axios";

const fetcher = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  headers: {
    "API-Version": "1",
  },
});

export const getProductsByStore = async (storeId) => {
  const data = (await fetcher.get(`/stores/${storeId}/products`)).data;
  return data;
};

export const postStore = async (data) => {
  const res = (await fetcher.post(`/stores`, data)).data;
  return res;
};

export const postProduct = async (storeId, data) => {
  await fetcher.post(`/stores/${storeId}/products`, data);
};
