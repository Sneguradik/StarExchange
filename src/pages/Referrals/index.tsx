import styles from "./Referrals.module.scss";

import {FiLink2} from "react-icons/fi";
import {Button} from "@components/ui/button.tsx";
import { LuCopy } from "react-icons/lu";
import {cn} from "@/lib/utils.ts";

export default function ReferralsPage() {
  return (
    <main className={styles.container}>
      <h3 className={"font-bold "}>Referrals</h3>
      <div className={styles.ref_section}>
        <h5 className={"flex items-center gap-2"}><FiLink2 />Link</h5>
        <small className={"text-muted-foreground"}>Share your link to earn bonuses.</small>
        <Button className={cn("flex items-center gap-2", styles.copy_btn)}><LuCopy />Copy link</Button>
      </div>
    </main>
  )
}