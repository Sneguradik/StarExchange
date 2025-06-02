import styles from "./Exchange.module.scss";
import {cn} from "@/lib/utils.ts";
import {FaArrowDownLong, FaArrowUpLong, FaWallet} from "react-icons/fa6";
import {DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger} from "@components/ui/dropdown-menu.tsx";
import {LuEqualApproximately} from "react-icons/lu";
import { Button } from "@/components/ui/button";

export default function ExchangePage() {
  return (
    <main className={styles.container}>
      <div className={styles.exchange}>
        <div className={cn(styles.exchange_side, styles.from)}>
          <div className={styles.exchange_side_header}>
            <h6 className={cn(styles.exchange_title, styles.from)}><FaArrowUpLong />Send</h6>
            <small><FaWallet />452.23</small>
          </div>

          <input className={styles.money_input} type={"number"} placeholder={"0.00"} min={0}/>
          <div className={styles.exchange_side_header}>
            <DropdownMenu>
              <DropdownMenuTrigger className={styles.coin_picker_item}><img src={"/usdt.svg"}/> USDT</DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem className={styles.coin_picker_item}><img src={"/usdt.svg"}/> USDT</DropdownMenuItem>
                <DropdownMenuItem className={styles.coin_picker_item}><img src={"/tgStar.svg"}/> STARS</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

          </div>
        </div>
        <div>

        </div>
        <div className={cn(styles.exchange_side, styles.to)}>
          <div className={styles.exchange_side_header}>
            <h6 className={cn(styles.exchange_title, styles.to)}><FaArrowDownLong />Receive</h6>
            <small><FaWallet />452.23</small>
          </div>
          <input className={styles.money_input} type={"number"} placeholder={"0.00"} min={0}/>
          <div className={styles.exchange_side_header}>
            <DropdownMenu>
              <DropdownMenuTrigger className={styles.coin_picker_item}><img src={"/tgStar.svg"}/> STARS</DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem className={styles.coin_picker_item}><img src={"/usdt.svg"}/> USDT</DropdownMenuItem>
                <DropdownMenuItem className={styles.coin_picker_item}><img src={"/tgStar.svg"}/> STARS</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            <small className={styles.exchange_title}>1 USDT <LuEqualApproximately /> 0.43 STARS</small>
          </div>
        </div>
      </div>
      <div className={"w-full p-4"}>
        <Button className={"font-bold w-full"}>Exchange</Button>
      </div>

    </main>
  )
}