export enum EGameCollectionName {
    Novelty = "novelty",
    Popularity = "popularity",
    Slots = "slots",
    All = "all",
    _hd = "_hd",
    New = "new",
    Books = "books",
    Btcgames = "btcgames",
    Ltcgames = "ltcgames",
    DogeGames = "dogegames",
    Xrpgames = "xrpgames",
    EthGames = "ethgames",
    UsdtGames = "usdtgames",
    FreeSlots = "free-slots",
    FreeSpins = "free-spins",
    StackedSymbols = "stacked-symbols",
    ScatterPays = "scatter-pays",
    Retrigger = "retrigger",
    TurboSpin = "turbo-spin",
    FruitSlots = "fruit-slots",
}

export enum EGameRealCurrencyName {
    DOG = "DOG",
    LTC = "LTC",
    USDT = "USDT",
    BTC = "BTC",
    XRP = "XRP",
    ETH = "ETH",
}

export interface IGame {
    id: string;
    title: string;
    provider: string;
    collections: {
      [key in EGameCollectionName]?: number;
    };
    real: {
     [key in EGameRealCurrencyName]?: {
        id: number
     }
    };
    demo: string;
}

type GameIdType = string;

export interface IGamesServerResponse {
    [key: GameIdType]: Omit<IGame, "id">
}