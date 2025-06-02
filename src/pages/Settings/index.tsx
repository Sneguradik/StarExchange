import { useLaunchParams } from "@telegram-apps/sdk-react";
import styles from "./Settings.module.scss";
import { TbHistory } from "react-icons/tb";
import {FaQuestion} from "react-icons/fa6";
import {useTheme} from "@components/ThemeProvider";
import {IoSunny} from "react-icons/io5";
import {PiMoonStarsBold} from "react-icons/pi";
import {Switch} from "@components/ui/switch.tsx";



export default function SettingsPage() {
  const launchParams = useLaunchParams();

  const theme = useTheme();

  return (
    <main className={styles.container}>
      <div className={styles.profile}>
        <img src={launchParams!.tgWebAppData!.user!.photo_url}/>
        <h3 className={"font-bold flex items-center gap-2"}>{launchParams!.tgWebAppData!.user!.first_name}</h3>
        <small className={"text-muted-foreground"}>#{launchParams!.tgWebAppData!.user!.id}</small>
      </div>
      <hr/>
      <div className={styles.settings_list}>
        <h6 className={styles.settings_item}>History<TbHistory /></h6>
        <h6 className={styles.settings_item}>FAQ<FaQuestion /></h6>
      </div>
      <div className={styles.settings_list}>
        <div className={styles.settings_item}>
          <h6 className={"flex items-center gap-2"}>{theme.theme=="light"?<IoSunny />:<PiMoonStarsBold />}Theme</h6>
          <Switch onCheckedChange={e=>theme.setTheme(e?"dark":"light")} checked={theme.theme=="dark"}/>
        </div>
      </div>

    </main>
  )
}