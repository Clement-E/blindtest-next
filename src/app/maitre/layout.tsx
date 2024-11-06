import AddSpotify from '@/src/app/ui/AddSpotify/AddSpotify'
import AddPlayer from '@/src/app/ui/AddPlayer/AddPlayer'
import Rank from '@/src/app/ui/Rank/Rank'
import Scoreboard from '@/src/app/ui/Scoreboard/Scoreboard'
import MediaPlayer from '@/src/app/ui/MediaPlayer/MediaPlayer'
import Playlist from '@/src/app/ui/Playlist/Playlist'
import styles from "./layout.module.css";

export default function Layout({children}: { children: React.ReactNode }) {
    return (
    <div className={`${styles.grid} p-8 h-screen`}>
        <div className={styles.addspotify}><AddSpotify /></div>
        <div className={styles.addplayer}><AddPlayer /></div>
        <div className={styles.rank}><Rank /></div>
        <div className={styles.scoreboard}><Scoreboard /></div>
        <div className={styles.mediaplayer}><MediaPlayer /></div>
        <div className={styles.playlist}><Playlist /></div>
    </div>
    
    )
}