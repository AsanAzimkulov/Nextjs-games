import { FC, ReactNode } from "react";

import styles from "./styles.module.scss";

interface IProps {
  children?: ReactNode;
  onClick?: () => void;
}

export const Button: FC<IProps> = ({ children, onClick, ...props }) => (
  <button onClick={onClick} className={styles.button} {...props}>
    {children}
  </button>
);
