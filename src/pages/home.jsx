import { useQuery } from "react-query";
import { Button } from "../components/button";
import { Input } from "../components/input";
import { ProductCard } from "../components/product-card";
import styles from "../styles/home.module.css";
import { getProductsByStore } from "../services/api";
import { useState } from "react";
import { useNavigate } from "react-router";

export const HomePage = () => {
  const [searchValue, setSearchValue] = useState("");

  const navigate = useNavigate();

  const { data, isSuccess } = useQuery({
    queryFn: () => getProductsByStore(searchValue),
    queryKey: searchValue,
    enabled: searchValue.length > 1,
  });

  return (
    <>
      <h1>FRONTEND APP | PARCIAL ARQSOFT</h1>
      <div className={styles.searchBarContainer}>
        <Input
          placeholder="Search store ID"
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
        />
        <Button
          style={{
            textWrap: "nowrap",
          }}
          onClick={() => navigate("/add-store")}
        >
          Add store
        </Button>
      </div>
      <div className={styles.productList}>
        {isSuccess &&
          data.map((product) => {
            return (
              <ProductCard
                key={product.id}
                name={product.name}
                amount={product.amount}
                price={product.price}
              />
            );
          })}
      </div>
      {!data && <span>Please, enter a store ID to show products</span>}
    </>
  );
};
