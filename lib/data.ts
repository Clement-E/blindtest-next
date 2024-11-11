import { sql } from '@vercel/postgres';
import {
  Games,
} from './definitions';

export default async function fetchGames() {
  try {
    const data = await sql<Games>`SELECT * FROM games`;
    return data.rows;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch revenue data.');
  }
}