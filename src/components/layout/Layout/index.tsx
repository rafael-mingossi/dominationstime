import styles from "./styles.module.scss";
import { ReactNode } from "react";
import Header from "../Header";
import Footer from "../Footer";

interface Props {
  children: ReactNode;
}

//REACT NODE: union of all the kinds of things React accepts as children: string | number |
// boolean | ReactElement<any, string JSXElementConstructor<any>> | ReactFragment | ReactPortal | null | undefined.

const Layout = ({ children }: Props) => {
  return (
    <div className={styles.container}>
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
