import "./Playlist.css";
import { CirclePlay } from 'lucide-react';

function Playlist() {

  const mockPlaylist = [
    {
      song: 'song name here',
      artist: 'artist name'
    },
    {
      song: 'song name here',
      artist: 'artist name'
    },
    {
      song: 'song name here',
      artist: 'artist name'
    },
    {
      song: 'song name here',
      artist: 'artist name'
    },
    {
      song: 'song name here',
      artist: 'artist name'
    },
    {
      song: 'song name here',
      artist: 'artist name'
    },
    {
      song: 'song name here',
      artist: 'artist name'
    },
    {
      song: 'song name here',
      artist: 'artist name'
    },
    {
      song: 'song name here',
      artist: 'artist name'
    },
    {
      song: 'song name here',
      artist: 'artist name'
    },
    {
      song: 'song name here',
      artist: 'artist name'
    },
    {
      song: 'song name here',
      artist: 'artist name'
    },
    {
      song: 'song name here',
      artist: 'artist name'
    },
    {
      song: 'song name here',
      artist: 'artist name'
    },
    {
      song: 'song name here',
      artist: 'artist name'
    },
    {
      song: 'song name here',
      artist: 'artist name'
    },
    {
      song: 'song name here',
      artist: 'artist name'
    }
  ]
  return (
    <div className="px-4 flex flex-col gap-4 justify-center h-full py-1">
      <div className="flex flex-col overflow-y-scroll text-sm gap-1">
        {
          mockPlaylist.map(song => (
            <div key={song.song} className="flex gap-2 items-center">
              <CirclePlay className="text-myplaylist w-4 dark:hover:text-purple-800"/>
              <span>{song.song}</span>
              <span> - </span>
              <span>{song.artist}</span>
            </div>
          ))
        }
      </div>
    </div>
  );
}

export default Playlist;
