import { FC } from "react";

import styles from "./styles.module.scss";

export interface ISelectOption {
  value: any;
  label: string;
}

export interface ISelectProps {
  items: ISelectOption[];
  keyExtractor?: (value: any) => string;
  value: any;
  setValue: (value: any) => void;
  label?: string;
  placeholder?: string;
}

export const Select: FC<ISelectProps> = ({
  items,
  value,
  setValue,
  keyExtractor = (value) => value,
  placeholder,
}) => (
  <select
    className={styles.select}
    value={value && keyExtractor(value)}
    onChange={(e) =>
      setValue(
        items.find((item) => keyExtractor(item.value) === e.target.value)?.value
      )
    }
  >
    <option defaultChecked>{placeholder || "Выберите"}</option>
    {items.map((item) => (
      <option
        value={keyExtractor(item.value)}
        className={styles.option}
        key={keyExtractor(item.value)}
      >
        {item.label}
      </option>
    ))}
  </select>
);
