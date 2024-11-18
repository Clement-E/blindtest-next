export type Games = {
    id: string;
    playerlist_id: string;
    playlist_id: string;
    scorebard_id: string;
};

export type Playlist = {
    id: string;
    url: string;
    game_id: string;
}

export type Player = {
    id: string;
    name: string;
    score: number;
    game_id: string;
}