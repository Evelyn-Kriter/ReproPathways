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
      <div className={styles.boxContainer}>
        <div className={styles.box1}>
          <h1 className={styles.title1}>Explore Content Coming Soon!</h1>
          <b className={styles.text1}>
            Come visit this page again soon for more information about Careers
            in Reproduction!
          </b>
        </div>
        <div className={styles.box2}>
          <h1 className={styles.title2}>Be a part of the change!</h1>
          <b className={styles.text2}>
            We invite you to participate in our official survey
          </b>
          <br />
          <br />
          <br />
          <a
            className={styles.qualtricsButton}
            href="https://middlebury.qualtrics.com/jfe/form/SV_8cf5CugyrxurA8u"
            target="_blank"
            rel="noopener noreferrer"
          >
            Take the Survey
          </a>
        </div>
      </div>

      {/* CONTACT */}
      <Contact />

      {/* FOOTER */}
      <Footer />
    </div>
  );
}
