import { FC } from "react";

import { escapeGameId } from "@/app/util/url";
import Link from "next/link";
import { CustomImage } from "../CustomImage";
import styles from "./styles.module.scss";

interface IProps {
  title: string;
  gameId: string;
}

export const GameCard: FC<IProps> = ({ title, gameId }) => (
  <Link href={`/game/${escapeGameId(gameId)}`} className={styles.container}>
    <CustomImage
      imageId={gameId}
      width={183}
      height={183}
      style={{ objectFit: "cover" }}
      priority
      alt={`${title} preview image`}
    />
    <h4 className={styles.title}>{title}</h4>
  </Link>
);
