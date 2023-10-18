"use client";

import { FC, useMemo, useState } from "react";

import {
  GAMES_PER_PAGE,
  IQueryGamesContext,
  QueryGamesContext,
  createDefaultQueryGamesValue,
} from "@/app/context/QueryGamesContext";
import { IGame } from "@/app/services/types";

import { Button } from "../../UI/Button";
import { ISelectOption } from "../../UI/Select";
import { GamesFilter } from "./GamesFilters";
import { GamesList } from "./GamesList";
import styles from "./styles.module.scss";

interface IProps {
  gameList: IGame[];
  providerOptions: ISelectOption[];
  realOptions: ISelectOption[];
}

// Приложение маленькое, поэтому контекст использую просто
// для примера. Поэтому здесь и пропсы и контекст использую.

const Home: FC<IProps> = ({ gameList, providerOptions, realOptions }) => {
  const [queryGamesValue, setQueryGamesValue] = useState<IQueryGamesContext>(
    createDefaultQueryGamesValue()
  );
  const queryGamesContextValue = useMemo(
    () => ({ ...queryGamesValue, setQueryGamesContext: setQueryGamesValue }),
    [queryGamesValue]
  );

  const { preparedGameList, preparedGameListTotal } = useMemo(() => {
    const { limit } = queryGamesValue;

    const list = gameList.filter((game) => {
      const realPass =
        !queryGamesValue.real?.length ||
        Object.keys(game.real).includes(queryGamesValue.real);
      const providerPass =
        !queryGamesValue.provider?.length ||
        game.provider === queryGamesValue.provider;

      return realPass && providerPass;
    });

    return {
      preparedGameList: list.slice(0, limit),
      preparedGameListTotal: list.length,
    };
  }, [queryGamesValue]);

  const showMoreGames = () => {
    const allGamesIsShown = gameList.length < queryGamesValue.limit;

    if (!allGamesIsShown) {
      setQueryGamesValue({
        ...queryGamesValue,
        limit: queryGamesValue.limit + GAMES_PER_PAGE,
      });
    }
  };

  return (
    <QueryGamesContext.Provider value={queryGamesContextValue}>
      <div className={styles.container}>
        <GamesFilter providerItems={providerOptions} realItems={realOptions} />
        <GamesList list={preparedGameList} />
        {preparedGameListTotal > queryGamesValue.limit && (
          <Button onClick={showMoreGames}>Показать ещё</Button>
        )}
      </div>
    </QueryGamesContext.Provider>
  );
};

export default Home;
