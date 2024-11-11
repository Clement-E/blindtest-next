"use client"
import "./AddSpotify.css";
import spotify from '@/public/ico-spotify.svg'
import Image from 'next/image'
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import {useState} from 'react'
import { createPlaylist } from "@/lib/actions";

function AddSpotify() {

  const [playlist, setPlaylist] = useState('');
  const handleChange = (e) => {
    console.log(e.target.value);
    setPlaylist(e.target.value)
  }
  const handleSubmit = () => {
    console.log(playlist);
    createPlaylist(playlist)
  }


  return (
    <div className="px-4 flex flex-col gap-4 justify-center h-full">
      <div className="flex gap-4 justify-end items-center">
        <span className="text-myspotify text-2xl">Add Spotify playlist</span>
        <Image src={spotify} className="size-6" alt="" />  
      </div>
      <div className="flex gap-2">
        <Input onChange={() => handleChange(event)} className="dark:bg-transparent border-solid dark:border-myspotify"/>
        <Button onClick={handleSubmit} variant="outline" className="dark:bg-myspotify dark:text-black dark:hover:bg-yellow-300 dark:hover:text-black">OK</Button>
      </div>
    </div>
  );
}

export default AddSpotify;
