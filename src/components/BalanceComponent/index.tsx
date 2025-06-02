import styles from "./BalanceComponent.module.scss";
import TgStarLogo from "@/assets/tgStar.tsx";
import {GoDotFill} from "react-icons/go";

import {LuEqualApproximately} from "react-icons/lu";
import {PiCurrencyCircleDollarFill} from "react-icons/pi";



export interface BalanceComponentProps {
  
}

export default function BalanceComponent() {
  return (
    <div className={styles.container}>
      <div className={styles.coin_logo}>
        <TgStarLogo/>
      </div>
      <div className={styles.coin_value}>
        <div className={"flex items-baseline gap-2 font-bold"}>
          <h5>345.21</h5>
          <span>STARS</span>
        </div>

        <div className={styles.labels}>
          <small>3.45 <PiCurrencyCircleDollarFill /></small>
          <GoDotFill />
          <small><LuEqualApproximately /> 1190.97 <PiCurrencyCircleDollarFill /></small>
        </div>
      </div>
    </div>
  )
}