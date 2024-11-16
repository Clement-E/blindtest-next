"use client"
import "./AddPlayer.css";
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { v4 as uuidv4 } from 'uuid';
import { useParams } from 'next/navigation';
import { createPlayer } from '@/lib/actions'
import React, { useState } from 'react'

function AddPlayer() {

  const [player, setPlayer] = useState('');
  const urlParams = useParams();
  const id = uuidv4();

  const handleChange = (e) => {
    console.log(e.target.value);
    setPlayer(e.target.value)
  }
  const handleSubmit = () => {
    createPlayer(
      {
        id:id,
        name:player,
        score: 0,
        game_id:urlParams.id
      }
    );
    setPlayer(''); // TODO: marche pas...
  }

  return ( 
    <div className="px-4 flex flex-col gap-4 justify-center h-full">
      <div className="flex gap-4 justify-end items-center">
        <span className="text-myplayer text-2xl">Here comes a new challenger!</span>
      </div>
      <div className="flex gap-2">
        <Input onChange={handleChange} value={player} className="dark:bg-transparent border-solid dark:border-myplayer"/>
        <Button onClick={handleSubmit} variant="outline" className="dark:bg-myplayer dark:text-black dark:hover:bg-cyan-500 dark:hover:text-black">OK</Button>
      </div>
    </div>
  );

}

export default AddPlayer;
