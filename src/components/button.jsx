import styles from "../styles/button.module.css";

export const Button = ({ children, ...props }) => {
  return (
    <button {...props} className={`${styles.button} ${props.className}`}>
      {children}
    </button>
  );
};
