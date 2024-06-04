import styles from "../styles/input.module.css";

export const Input = (props) => {
  return <input {...props} className={`${styles.input} ${props.className}`} />;
};
