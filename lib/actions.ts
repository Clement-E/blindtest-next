"use server";

import { sql } from "@vercel/postgres";
import { revalidatePath } from "next/cache";
import { Player, Playlist } from "./definitions";

export async function createPlaylist(playlist: Playlist) {
    try {
      await sql`
        INSERT INTO playlist (id, url, game_id)
        VALUES (${playlist.id}, ${playlist.url}, ${playlist.game_id})
        ON CONFLICT (id) DO UPDATE SET url = ${playlist.url};
      `;
    } catch (error) {
      return {
        message: 'Database Error: Failed to Create Invoice.',
      };
    }
    revalidatePath('src/app/ui/AddSpotify');
}

export async function createPlayer(player: Player) {
    try {
      await sql`
        INSERT INTO players (id, name, score, game_id)
        VALUES (${player.id}, ${player.name}, ${player.score}, ${player.game_id})
      `;
    } catch (error) {
      return {
        message: 'Database Error: Failed to Create Invoice.',
      };
    }
    revalidatePath('src/app/ui/AddPlayer');
}

export async function fetchPlayers() {
    try {
        const data = await sql<Player>`SELECT * FROM players`;
        return data.rows;
    } catch (error) {
      console.error('Database Error:', error);
      throw new Error('Failed to fetch revenue data.');
    }
}

export async function fetchPlayersByRank() {
    try {
        const data = await sql<Player>`
        SELECT * FROM players
        ORDER BY players.score DESC`;
        return data.rows;
    } catch (error) {
      console.error('Database Error:', error);
      throw new Error('Failed to fetch revenue data.');
    }
}

export async function updatePlayerScore(id: string, oldScore: number, modifier: string) {
    if (modifier === '+1') {
        try {
            await sql`
                UPDATE players
                SET score = ${oldScore + 1}
                WHERE id = ${id}
              `;
          } catch (error) {
            return { message: 'Database Error: Failed to Update Players.' };
          }
    } else if (modifier === '+0.5') {
        try {
            await sql`
                UPDATE players
                SET score = ${oldScore + 0.5}
                WHERE id = ${id}
              `;
          } catch (error) {
            return { message: 'Database Error: Failed to Update Players.' };
          }
    }
    else {
        try {
            await sql`
                UPDATE players
                SET score = ${oldScore - 1}
                WHERE id = ${id}
              `;
          } catch (error) {
            return { message: 'Database Error: Failed to Update Players.' };
          }
    }
    revalidatePath('/maitre/rank');
}