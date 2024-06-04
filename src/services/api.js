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
  //   return [
  //     {
  //       id: 0,
  //       name: "TV",
  //       amount: 2,
  //       storeId: 1,
  //       price: 1324,
  //     },
  //     {
  //       id: 1,
  //       name: "Labtop",
  //       amount: 5,
  //       storeId: 1,
  //       price: 3584,
  //     },
  //     {
  //       id: 2,
  //       name: "Smartphone",
  //       amount: 53,
  //       storeId: 1,
  //       price: 2465,
  //     },
  //   ];
};

export const postStore = async (data) => {
  const res = (await fetcher.post(`/stores`, data)).data;
  return res;
  // console.log("posting store", data.name);
  // return { id: 1 };
};

export const postProduct = async (storeId, data) => {
  await fetcher.post(`/stores/${storeId}/products`, data);
  // console.log("posting", data.name, "on", storeId);
};
