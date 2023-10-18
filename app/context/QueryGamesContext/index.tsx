import { createContext } from "react";


interface IQueryGamesContext {
    provider: string | null;
    real: string | null;
    limit: number;
    setQueryGamesContext: (value: IQueryGamesContext) => void;
}

const GAMES_PER_PAGE = 12;

const createDefaultQueryGamesValue = () => ({
    provider: null,
    real: null,
    limit: GAMES_PER_PAGE,
    setQueryGamesContext: (value: IQueryGamesContext) => {}
});

const QueryGamesContext = createContext<IQueryGamesContext>(createDefaultQueryGamesValue());

export {
    GAMES_PER_PAGE,
    QueryGamesContext,
    createDefaultQueryGamesValue
};

    export type { IQueryGamesContext };

