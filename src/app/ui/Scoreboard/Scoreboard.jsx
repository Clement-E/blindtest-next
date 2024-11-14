"use client"

import "./Scoreboard.css";
import { Button } from "@/components/ui/button"
import { fetchPlayersByRank, updatePlayerScore } from "@/lib/actions";


async function Scoreboard() {

  const players = await fetchPlayersByRank();

  const handleUpdatePoints = (playerId , oldScore, modifier, points) => {
    updatePlayerScore(playerId, oldScore, modifier, points);
    // console.log('YOLO', points)
  }

  return (
    <div className="px-4 pt-4 flex flex-col gap-4 justify-start h-full">
      <div className="flex gap-4 justify-end items-center">
        <span className="text-myscoreboard text-2xl">Scoreboard</span>
      </div>
      <div className="flex flex-col overflow-y-auto gap-2">
      {players.map((score, index )=> (
        <div key={score + index} className="flex gap-1 justify-end items-center">
          <span> {score.name} </span>
          <Button variant="outline" onClick={() => handleUpdatePoints(score.id, score.score, '+1', 1)} size="sm" className="cursor-pointer dark:bg-myscoreboard dark:text-black dark:hover:bg-myscoreboard-foreground dark:hover:text-black">+1</Button>
          <Button variant="outline" onClick={() => handleUpdatePoints(score.id, score.score, '+0.5', 1)} size="sm" className="cursor-pointer dark:bg-myscoreboard opacity-30 dark:text-black dark:hover:bg-myscoreboard-foreground dark:hover:text-black">+1/2</Button>
          <Button variant="outline" onClick={() => handleUpdatePoints(score.id, score.score, '-1', 1)} size="sm" className="cursor-pointer dark:bg-transparent border-white dark:text-white dark:hover:bg-zinc-900 dark:hover:text-white">-1</Button>
        </div>
      ))}
      </div>
      
      
    </div>
  );
}

export default Scoreboard;
