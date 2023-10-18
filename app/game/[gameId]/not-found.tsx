import Link from "next/link";

import { Button } from "@/app/components/UI/Button";
import styles from "./notFound.module.scss";

export default function NotFound() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
        К сожалению, запрашиваемая игра не существует.
      </h1>
      <Link href="/">
        <Button>На главную</Button>
      </Link>
    </div>
  );
}
