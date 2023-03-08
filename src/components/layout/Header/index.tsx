import styles from "./styles.module.scss";
import Image from "next/future/image";
import Logo from "../../../../public/logos/logo-nobg.png";

const Header = () => {
  return (
    <div className={styles.container}>
      <div className={styles.fixed}>
        <Image
          src={Logo}
          alt="Logo Dominations"
          className={styles.logo}
          style={{
            width: "15vw",
            maxWidth: "200px",
            height: "auto",
          }}
        />
        <div className={styles.links}>
          <p>Army</p>
          <p>Economy</p>
          <p>Other</p>
          <p>Gameplay</p>
        </div>
      </div>
    </div>
  );
};

export default Header;
