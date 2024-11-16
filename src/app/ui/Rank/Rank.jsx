import "./Rank.css";
import { fetchPlayersByRank } from "@/lib/actions";
import React from 'react'

async function Rank() {
  
  const players = await fetchPlayersByRank();

  return (
    <div className="p-4 flex flex-col gap-4 justify-start h-full">
      <div className="flex gap-4 justify-end items-center">
        <span className="text-myrank text-2xl">Leaderboard</span>
      </div>
      <div className="flex flex-col gap-1 overflow-y-auto">      
          {players.map((rank, index) => {
            return (
              <div key={rank+index} className="flex justify-between w-full pr-1 gap-2 flex-nowrap">
                  <div className="flex gap-4"> 
                      <span className="text-myrank">{index + 1}</span>
                      <span className="text-ellipsis">{rank.name}</span>
                    </div>
                  <div> {rank.score} </div> 
              </div>
            ) 
          })}       
      </div>
    </div>
  );
}

export default Rank;
