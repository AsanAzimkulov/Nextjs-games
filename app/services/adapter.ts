import { IGame, IGamesServerResponse } from "./types";

export const adaptGames = (games: IGamesServerResponse): IGame[] => Object.keys(games).map(key => ({...games[key], id: key}));