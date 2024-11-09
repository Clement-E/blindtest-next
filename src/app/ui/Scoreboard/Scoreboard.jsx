import "./Scoreboard.css";
import { Button } from "@/components/ui/button"


function Scoreboard() {

  const mockScoreboard = [
    {name: "Clement"},
    {name: "Olivia"},
    {name: "Nils"},
    {name: "Rose"},
    {name: "Flo"},
    {name: "Céline"},
    {name: "Damien"},
    {name: "Julien"},
    {name: "Amandine"},
    {name: "Nathalie"},
    {name: "Doud"},
    {name: "Tox"},
    {name: "Olivia"},
    {name: "Nils"},
    {name: "Rose"},
    {name: "Flo"},
    {name: "Céline"},
    {name: "Damien"},
    {name: "Julien"},
    {name: "Amandine"},
    {name: "Nathalie"},
    {name: "Doud"},
    {name: "Tox"},
  ]

  return (
    <div className="px-4 flex flex-col gap-4 justify-center h-full">
      <div className="flex gap-4 justify-end items-center">
        <span className="text-myscoreboard text-2xl">Scoreboard</span>
      </div>
      <div className="flex flex-col overflow-y-auto gap-2">
      {mockScoreboard.map((score, index )=> (
        <div key={score + index} className="flex gap-1 justify-end items-center">
          <span> {score.name} </span>
          <Button variant="outline" size="sm" className="dark:bg-myscoreboard dark:text-black dark:hover:bg-myscoreboard-foreground dark:hover:text-black">+1</Button>
          <Button variant="outline" size="sm" className="dark:bg-myscoreboard opacity-30 dark:text-black dark:hover:bg-myscoreboard-foreground dark:hover:text-black">+1/2</Button>
          <Button variant="outline" size="sm" className="dark:bg-transparent border-white dark:text-white dark:hover:bg-zinc-900 dark:hover:text-white">-1</Button>
        </div>
      ))}
      </div>
      
      
    </div>
  );
}

export default Scoreboard;
