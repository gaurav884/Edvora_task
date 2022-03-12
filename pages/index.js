import styles from '../styles/Home.module.css'
import { useEffect } from "react";
import { useRouter } from "next/router"


export default function Home() {


  const router = useRouter();

  useEffect(() => {
    router.push("/NearestRide")
  })

  return (<>
    <div className={styles.container}>

    </div>
  </>
  )
}
