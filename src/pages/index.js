/* Homepage */

import styles from "../styles/index.module.css";
//import { useRouter } from "next/router";
//import PropTypes from "prop-types";
import UserHeader from "../components/UserHeader";
import Image from "next/image";
import reprohealth from "../images/Reproductive+Health.jpg";
//import { Main } from "next/document";
//import Link from "next/link";

export default function HomePage({}) {
  //const router = useRouter();

  return (
    <div className={styles.container}>
      <UserHeader />
      <Image src={reprohealth} fill alt="Illustration by Callie Yiu" />
      <main className={styles.round1}>
        <h1 className={styles.title}>ReproPathways</h1>
        <b className={styles.text}>
          ReproPathways is a dynamic resource hub dedicated to inspiring and
          supporting diverse minds in pursuing careers in reproductive health
          and sciences.ReproPathways is a dynamic resource hub dedicated to
          inspiring and supporting diverse minds in pursuing careers in
          reproductive health and sciences.ReproPathways is a dynamic resource
          hub dedicated to inspiring and supporting diverse minds in pursuing
          careers in reproductive health and sciences.ReproPathways is a dynamic
          resource hub dedicated to inspiring and supporting diverse minds in
          pursuing careers in reproductive health and sciences.
        </b>
      </main>
      <main className={styles.round2}>
        <h1 color="#fefefe" className={styles.title}>
          Change the way you learn about your body, your sexual wellness, and
          about reproductive science.
        </h1>
        <h2 className={styles.text}>Get Started</h2>
        <h3 className={styles.text}>I am a...</h3>
      </main>
      <footer>Middlebury College</footer>
    </div>
  );
}
