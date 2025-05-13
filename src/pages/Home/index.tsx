import {useLaunchParams} from "@telegram-apps/sdk-react";
import {Button} from "@components/ui/button.tsx";
import styles from "./Home.module.scss";


export default function Home() {
  const params = useLaunchParams();



  return (
    <main>
      <div className={styles.wallet}>
        <h3 className={"font-bold"}>Wallet</h3>
        <h1 >234,213,11</h1>
      </div>

    </main>
  )
}