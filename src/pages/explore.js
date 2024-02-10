import UserHeader from "../components/UserHeader";
import NavigationPane from "../components/NavigationPane";
import Footer from "../components/Footer";
import Contact from "../components/Contact";
import styles from "../styles/index2.module.css";
import Image from "next/image";
import React from "react";
import WelcomeGraphic3 from "../images/explore/WelcomeGraphic3.jpg";

export default function Explore({}) {
  return (
    <div className={styles.body}>
      {/* USER HEADER */}
      <UserHeader />

      {/* NAVIGATION */}
      <NavigationPane active={"explore"} />

      {/* WELCOME GRAPHIC */}
      <div className={styles.WelcomeGraphic2Container}>
        <Image src={WelcomeGraphic3} alt="Welcome Graphic" quality={100} />
      </div>

      {/* Explore */}
      <div className={styles.box1}>
        <h1 className={styles.title1}>Explore Content Coming Soon!</h1>
        <b className={styles.text1}>
          Come visit this page again soon for more information about Careers in
          Reproduction!
        </b>
      </div>

      {/* CONTACT */}
      <Contact />

      {/* FOOTER */}
      <Footer />
    </div>
  );
}
