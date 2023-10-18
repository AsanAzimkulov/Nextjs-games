import { ISelectOption } from "./components/UI/Select";
import Home from "./components/containers/Home";
import { getGameList } from "./services/api";
import { IGame } from "./services/types";

const generateOptionsFromGames = (gameList: IGame[]) => {
  const providersSet = new Set<string>();
  const realsSet = new Set<string>();

  gameList.forEach((game) => {
    // Provider
    providersSet.add(game.provider);

    // Real
    // Здесь я так понял, что фильтровать нужно именно по названию валюту,
    // а id внутри валюты не имеет значения(Много дубликатов вышло среди названий валют)
    Object.keys(game.real).forEach((realKey) => realsSet.add(realKey));
  });

  const providerOptions: ISelectOption[] = Array.from(providersSet).map(
    (provider) => ({
      value: provider,
      label: provider,
    })
  );

  const realOptions: ISelectOption[] = Array.from(realsSet).map((real) => ({
    value: real,
    label: real,
  }));

  return {
    providerOptions,
    realOptions,
  };
};

export default async function HomePage() {
  const gameList = await getGameList();
  const { providerOptions, realOptions } = generateOptionsFromGames(gameList);

  return (
    <Home
      gameList={gameList}
      providerOptions={providerOptions}
      realOptions={realOptions}
    />
  );
}
