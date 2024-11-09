import "./AddPlayer.css";
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

function AddPlayer() {

  return ( 
    <div className="px-4 flex flex-col gap-4 justify-center h-full">
      <div className="flex gap-4 justify-end items-center">
        <span className="text-myplayer text-2xl">Here comes a new challenger!</span>
      </div>
      <div className="flex gap-2">
        <Input className="dark:bg-transparent border-solid dark:border-myplayer"/>
        <Button variant="outline" className="dark:bg-myplayer dark:text-black dark:hover:bg-cyan-500 dark:hover:text-black">OK</Button>
      </div>
    </div>
  );

}

export default AddPlayer;
