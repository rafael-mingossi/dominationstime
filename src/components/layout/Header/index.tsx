import styles from "./styles.module.scss";
import Image from "next/future/image";
import Logo from "../../../../public/logos/logo-nobg.png";
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
          {/*<Image*/}
          {/*  src={Logo}*/}
          {/*  alt="Logo Dominations"*/}
          {/*  className={styles.logo}*/}
          {/*  // style={{*/}
          {/*  //   width: "15vw",*/}
          {/*  //   maxWidth: "200px",*/}
          {/*  // }}*/}
          {/*/>*/}
          <h1>Nations</h1>
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
