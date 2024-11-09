import "./MediaPlayer.css";
import { CircleArrowRight, CircleArrowLeft, CirclePause, CirclePlay } from 'lucide-react';

function MediaPlayer() {

  const mockMeta = [{artist: 'The strokes', track: 'The end has no end', year:'2018'}];

  return (
    <div className="flex flex-col items-center py-8 gap-6">
      <div className="picture border-mymedia bg-gray-700 w-72 aspect-square"></div>
      <div className="actions flex justify-center gap-4 text-mymedia">
      <CircleArrowLeft className="size-10 hover:text-pink-800" />
      <CirclePlay className="size-10 hover:text-pink-800" />
      <CircleArrowRight className="size-10 hover:text-pink-800" />  
      </div>
      <div className="meta flex flex-col w-72">
        <div className="flex gap-4">
          <span className="text-mymedia">Artist: </span>
          <span className="text-white">{mockMeta[0].artist}</span>
        </div>
        <div className="flex gap-4">
          <span className="text-mymedia">Track: </span>
          <span className="text-white">{mockMeta[0].track}</span>
        </div>
        <div className="flex gap-4">
          <span className="text-mymedia">Year: </span>
          <span className="text-white">{mockMeta[0].year}</span>
        </div>
      </div>
    </div>
  );
}

export default MediaPlayer;
