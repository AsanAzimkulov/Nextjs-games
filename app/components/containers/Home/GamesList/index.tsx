import { FC } from "react";

import { GameCard } from "@/app/components/UI/GameCard";
import { IGame } from "@/app/services/types";
import styles from "./styles.module.scss";

interface IProps {
  list: IGame[];
}

export const GamesList: FC<IProps> = ({ list }) => (
  <div className={styles.container}>
    {list.map((game) => (
      <GameCard key={game.id} title={game.title} gameId={game.id} />
    ))}
  </div>
);
