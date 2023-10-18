import { adaptGames } from "./adapter";
import { IGame } from "./types";

const getGameList = async (): Promise<IGame[]> => {
    // У Google drive нужен апи ключ, насколько я понял. Я решил загрузить файл на другой хостинг файлов(Drop Box),
    // чтобы получить прямую ссылку к файлу
    const games = await fetch('https://dl.dropboxusercontent.com/scl/fi/btro40dbx951xdn474hjp/games.json?rlkey=sue5h3glri2stu6g47vzczg8d&dl=0',{
        method: 'GET'
    }).then(response => response.json());
    
    const gameList = adaptGames(games);
    const sortedGameList = gameList.sort(
        (a, b) => (a.collections.popularity as number) - (b.collections.popularity as number)
        );

    return sortedGameList;
}

const getGameById  = async (gameId: string): Promise<IGame | undefined> => {
    const gameList = await getGameList();
    const game = gameList.find(game => game.id === gameId);
    return game;
}

export { getGameById, getGameList };

