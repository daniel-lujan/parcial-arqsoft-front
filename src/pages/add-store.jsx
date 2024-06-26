import { useState } from "react";
import styles from "../styles/add-store.module.css";
import { Input } from "../components/input";
import { AddProduct } from "../components/addProduct";
import { Button } from "../components/button";
import { CheckIcon } from "../components/check-icon";
import { useMutation } from "react-query";
import { postProduct, postStore } from "../services/api";

const Item = ({ name, price, amount }) => {
  return (
    <div className={styles.item}>
      <span
        style={{
          color: "#03e401",
        }}
      >
        <CheckIcon />
      </span>
      <span>{name}</span>
      <span>{price}</span>
      <span>{amount}</span>
    </div>
  );
};

export const AddStorePage = () => {
  const [name, setName] = useState("");
  const [location, setLocation] = useState("");
  const [phone, setPhone] = useState("");

  const { mutate, isSuccess, data } = useMutation({
    mutationFn: postStore,
    onSuccess: ({ id }) => {
      products.map(async ({ name, amount, price }) => {
        await postProduct(id, {
          name,
          amount: parseInt(amount),
          price: parseInt(price),
        });
      });
    },
  });

  const [products, setProducts] = useState([]);

  return (
    <>
      <h1 style={{ width: "100%" }}>Add store</h1>
      <form className={styles.storeForm}>
        <Input
          placeholder="Store name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        ></Input>
        <Input
          placeholder="Location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        ></Input>
        <Input
          placeholder="Phone"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        ></Input>
      </form>
      <h2>Product list</h2>
      <div className={styles.itemList}>
        {products.map((item, idx) => (
          <Item
            key={idx}
            name={item.name}
            price={item.price}
            amount={item.amount}
          ></Item>
        ))}
      </div>
      <AddProduct
        addProduct={(newProduct) => setProducts([...products, newProduct])}
      ></AddProduct>
      <div style={{ display: "flex", flexDirection: "column", gap: "30px" }}>
        {isSuccess && (
          <span
            style={{
              backgroundColor: "#03e401",
              color: "var(--background)",
              borderRadius: "12px",
              padding: "10px",
              display: "flex",
              justifyContent: "center",
              gap: "10px",
            }}
          >
            <CheckIcon />
            Added store with ID: <strong>{data.id}</strong>
          </span>
        )}
        <Button onClick={() => mutate({ name, phone, location })}>
          Add store
        </Button>
      </div>
    </>
  );
};
