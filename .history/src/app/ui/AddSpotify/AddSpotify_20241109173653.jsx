import "./AddSpotify.css";
import spotify from '@/public/ico-spotify.svg'
import Image from 'next/image'
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

function AddSpotify() {

  return (
    <div className="px-4 flex flex-col gap-4 justify-center h-full">
      <div className="flex gap-4 justify-end items-center">
        <span className="text-myspotify text-2xl">Add Spotify playlist</span>
        <Image src={spotify} className="size-6" alt="" />  
      </div>
      <div className="flex gap-2">
        <Input className="dark:bg-transparent border-solid dark:border-myspotify"/>
        <Button variant="outline" className="dark:bg-myspotify dark:text-black dark:hover:bg-myspotify-foreground dark:hover:text-black">OK</Button>
      </div>
    </div>
  );
}

export default AddSpotify;
