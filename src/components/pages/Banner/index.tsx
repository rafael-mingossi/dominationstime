import styles from "./styles.module.scss";
import up1 from "../../../../public/updates/update11-7.jpeg";
import up2 from "../../../../public/updates/up-sm1.jpeg";
import Image from "next/future/image";
import { SmallCards } from "@/components";

const Banner = () => {
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <Image src={up1} alt="Update 11-7" className={styles.coverImg} />
        <div className={styles.text}>
          <h1>Drone Age Upgrades</h1>
          <p>
            DomiNations Update 11.7 adds an additional upgrade level to the
            following buildings for Drone Age
          </p>
        </div>
      </div>
      <div className={styles.right}>
        <h2>Latest Updates</h2>
        <SmallCards img={up2} title={"SM Card Title 1"} sub={"SM Card Sub 1"} />
        <SmallCards img={up2} title={"SM Card Title 1"} sub={"SM Card Sub 1"} />
        <SmallCards img={up2} title={"SM Card Title 1"} sub={"SM Card Sub 1"} />
        <SmallCards img={up2} title={"SM Card Title 1"} sub={"SM Card Sub 1"} />
      </div>
    </div>
  );
};

export default Banner;
