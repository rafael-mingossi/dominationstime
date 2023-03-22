import styles from "./styles.module.scss";
import Image from "next/future/image";

interface Props {
  img: string | any;
  title: string;
  sub: string;
}

const SmallCards = ({ img, title, sub }: Props) => {
  return (
    <div className={styles.smallCards}>
      <Image src={img} alt={"Small card update"} className={styles.smImg} />
      <div className={styles.smallTxt}>
        <h3>{title}</h3>
        <p>{sub}</p>
      </div>
    </div>
  );
};

export default SmallCards;
