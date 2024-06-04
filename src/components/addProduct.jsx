import { Button } from "./button";
import { Input } from "./input";
import { useState } from "react";
import styles from "../styles/add-store.module.css";

export const AddProduct = ({ addProduct }) => {
  const [inputValue, setInputValue] = useState("");
  const [inputPrice, setInputPrice] = useState("");
  const [inputAmount, setInputAmount] = useState("");

  const onIpuntChange = (e) => {
    setInputValue(e.target.value);
  };

  const onSubmit = () => {
    const sending = {
      name: inputValue,
      price: inputPrice,
      amount: inputAmount,
    };
    addProduct(sending);
  };

  return (
    <div className={styles.addProductContainer}>
      <form className={styles.addProduct}>
        <Input
          type="text"
          placeholder="Product name"
          value={inputValue}
          onChange={onIpuntChange}
        />
        <Input
          type="text"
          placeholder="Price"
          value={inputPrice}
          onChange={(e) => setInputPrice(e.target.value)}
        />
        <Input
          type="text"
          placeholder="Amount"
          value={inputAmount}
          onChange={(e) => setInputAmount(e.target.value)}
        />
      </form>
      <Button onClick={onSubmit}>Add product to store</Button>
    </div>
  );
};
