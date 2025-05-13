import {Outlet} from "react-router";
import MainNav from "@components/MainNav";
import styles from "./MainLayout.module.scss";


export default function MainLayout() {
  return (
    <div className={styles.layout}>
      <div className={styles.content_wrapper}>
        <Outlet/>
      </div>
      <MainNav/>
    </div>
  )
}