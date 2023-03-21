import styles from "./styles.module.scss";
import Image from "next/future/image";
import Logo from "../../../../public/logos/logo-empty.png";
import { useEffect, useRef, useState } from "react";
import useIntersected from "../../../../tools/hooks/useScroll";
import img from "/public/bg/headerBg.png";

const Header = () => {
  const ref = useRef<HTMLDivElement | null>(null);
  const intersectTop = useIntersected({
    trackedNode: ref,
    threshold: 0,
  });
  const styling = {
    backgroundImage: `url('${img.src}')`,
    // backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundAttachment: "fixed",
    width: "100%",
    height: "400px",
  };

  return (
    <div className={styles.container}>
      <div className={styles.fixed}>
        <div className={styles.img} style={styling}>
          <div className={styles.logoWrapper}>
            <Image
              src={Logo}
              alt="Logo Dominations"
              className={styles.logo}
              // style={{
              //   width: "15vw",
              //   maxWidth: "200px",
              // }}
            />
            <div className={styles.domi}>
              <h1>
                <b>D</b>omi
              </h1>
              <h1>
                <b>N</b>ations&nbsp;
              </h1>
              <h1>
                <b>T</b>ime
              </h1>
            </div>
          </div>
        </div>
        <div ref={ref} />
        <div className={`${styles.links} ${!intersectTop ? styles.fix : ""}`}>
          <p>ArMy</p>
          <p>BuilDings</p>
          <p>TacTics</p>
          <p>OtHer</p>
          <p>GamePlay</p>
        </div>
      </div>
    </div>
  );
};

export default Header;
