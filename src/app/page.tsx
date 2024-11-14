"use client"

import styles from "./page.module.css";
import { Button } from "@/components/ui/button"
import Link from 'next/Link'
import { useRouter } from "next/navigation";
import { v4 as uuidv4 } from 'uuid';

export default function Home() {

  const router = useRouter();

  const handleRedirectMaster = () => {
    const randomUUID = uuidv4();
    console.log('%c ', 'background: #1ed186; color: black', randomUUID);
    router.push(`/maitre/${randomUUID}`)
  }

  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <div className="flex flex-col gap-8">
          <Button onClick={handleRedirectMaster} variant="ghost" size="lg" className="border-pink-500 border-2">MAITRE DU JEU</Button> 
         <Link href="/joueur">
          <Button onClick={handleRedirectMaster}  variant="ghost" size="lg" className="border-pink-500 border-2">JOUEUR</Button> 
         </Link>   
        </div> 
      </main>
      <footer className={styles.footer} />
    </div>
  );
}
  