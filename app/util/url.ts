export const escapeGameId = (gameId: string) => gameId.replaceAll('/', '-');
export const unescapeGameId = (gameId: string) => gameId.replaceAll('-', '/');