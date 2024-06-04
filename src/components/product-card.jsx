import styles from "../styles/product-card.module.css";

export const ProductCard = ({ name, amount, price }) => {
  const priceFormatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  });

  return (
    <div className={styles.productCard}>
      <span className={styles.productName}>{name}</span>
      <span>Amount: {amount}</span>
      <span className={styles.productPrice}>
        {priceFormatter.format(price)}
      </span>
    </div>
  );
};
