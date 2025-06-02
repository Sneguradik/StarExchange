import styles from "./MainNav.module.scss";
import {BiHomeAlt2} from "react-icons/bi";
import {RiExchangeFill} from "react-icons/ri";
import {BsFillPeopleFill, BsGearWideConnected} from "react-icons/bs";
import {Link} from "react-router";

export default function MainNav() {
  return (
    <nav className={styles.container}>
      <Link to={"/"} className={styles.nav_item}>
        <BiHomeAlt2 />
        <small>Home</small>
      </Link>
      <Link to={"/exchange"} className={styles.nav_item}>
        <RiExchangeFill />
        <small>Exchange</small>
      </Link>
      <Link to={"/referrals"} className={styles.nav_item}>
        <BsFillPeopleFill />
        <small>Referrals</small>
      </Link>
      <Link to={"/settings"} className={styles.nav_item}>
        <BsGearWideConnected />
        <small>Settings</small>
      </Link>
    </nav>
  )
}