"use server";

import { sql } from "@vercel/postgres";
import { revalidatePath } from "next/cache";

export async function createPlaylist(playlist: string) {
    try {
      await sql`
        INSERT INTO playlist (id, url)
        VALUES ('410544b2-4001-4271-9855-fec4b6111111', ${playlist})
      `;
    } catch (error) {
      return {
        message: 'Database Error: Failed to Create Invoice.',
      };
    }
   
    revalidatePath('src/app/ui/AddSpotify');
  }