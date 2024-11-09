import styles from "./page.module.css";
import { Button } from "@/components/ui/button"
import Link from 'next/Link'

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <div className="flex flex-col gap-8">
        <Link href="/maitre">
          <Button variant="ghost" size="lg" className="border-pink-500 border-2">MAITRE DU JEU</Button> 
        </Link>
         <Link href="/joueur">
          <Button variant="ghost" size="lg" className="border-pink-500 border-2">JOUEUR</Button> 
         </Link>   
        </div> 
      </main>
      <footer className={styles.footer} />
    </div>
  );
}
  