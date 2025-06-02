import {useLaunchParams} from "@telegram-apps/sdk-react";

import styles from "./Home.module.scss";
import { FaArrowDownLong, FaArrowUpLong, FaDollarSign} from "react-icons/fa6";

import BalanceComponent from "@components/BalanceComponent";

import {TbArrowsExchange2, TbCoins} from "react-icons/tb";




export default function HomePage() {
  //const params = useLaunchParams();



  return (
    <main className={styles.container}>
      <div className={styles.wallet}>
        <small className={"text-muted-foreground"}>Total assets</small>
        <h1 className={"font-bold flex items-center gap-1 "}><FaDollarSign />234 213.11</h1>
      </div>

      <div className={"w-full flex justify-center"}>
        <div className={styles.operations}>
          <div className={styles.operation_btn}>
            <h5><FaArrowDownLong /></h5>
            <span>Receive</span>
          </div>
          <div className={styles.operation_btn}>
            <h5><FaArrowUpLong /></h5>
            <span>Send</span>
          </div>
          <div className={styles.operation_btn}>
            <h5><TbArrowsExchange2 /></h5>
            <span>Exchange</span>
          </div>
        </div>
      </div>
      <hr/>
      <div className={styles.wallets}>
        <BalanceComponent/>
        <BalanceComponent/>
        <BalanceComponent/>
        <BalanceComponent/>
        <BalanceComponent/>
        <BalanceComponent/>
      </div>
    </main>
  )
}