import { FC, useContext } from "react";

import { ISelectOption, Select } from "@/app/components/UI/Select";

import {
  GAMES_PER_PAGE,
  QueryGamesContext,
} from "@/app/context/QueryGamesContext";
import styles from "./styles.module.scss";

interface IProps {
  providerItems: ISelectOption[];
  realItems: ISelectOption[];
}

export const GamesFilter: FC<IProps> = ({ providerItems, realItems }) => {
  const queryGamesContext = useContext(QueryGamesContext);

  const onChangeFilterByProvider = (value: string) =>
    queryGamesContext.setQueryGamesContext({
      ...queryGamesContext,
      provider: value,
      limit: GAMES_PER_PAGE,
    });

  const onChangeFilterByReal = (value: string) =>
    queryGamesContext.setQueryGamesContext({
      ...queryGamesContext,
      real: value,
      limit: GAMES_PER_PAGE,
    });

  return (
    <div className={styles.container}>
      <Select
        items={realItems}
        value={queryGamesContext.real}
        setValue={onChangeFilterByReal}
        placeholder="Валюта"
        keyExtractor={(real) => real}
      />
      <Select
        items={providerItems}
        value={queryGamesContext.provider}
        setValue={onChangeFilterByProvider}
        placeholder="Провайдер"
        keyExtractor={(provider) => provider}
      />
    </div>
  );
};
