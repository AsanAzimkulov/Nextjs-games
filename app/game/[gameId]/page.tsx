import Link from "next/link";
import { notFound } from "next/navigation";

import { Button } from "@/app/components/UI/Button";
import { getGameById, getGameList } from "@/app/services/api";

import { unescapeGameId } from "@/app/util/url";
import styles from "./styles.module.scss";

export const revalidate = 86400;

type Props = {
  params: {
    gameId: string;
  };
};

export async function generateStaticParams() {
  const games = await getGameList(); //deduped!

  if (!games) return [];

  return games.map((game) => ({
    gameId: game.id,
  }));
}

export async function generateMetadata({ params: { gameId } }: Props) {
  const game = await getGameById(unescapeGameId(gameId));

  if (!game) {
    return {
      title: "Game Not Found",
    };
  }

  return {
    title: game.title,
    description: `Play ${game.title} right now!`,
  };
}

export default async function GamePage({ params: { gameId } }: Props) {
  const game = await getGameById(unescapeGameId(gameId));

  if (!game) notFound();

  return (
    <div className={styles.container}>
      <div className={styles.topBar}>
        <Link href="/">
          <Button>На главную</Button>
        </Link>
      </div>
      <h1 className={styles.title}>{game.title}</h1>
    </div>
  );
}
