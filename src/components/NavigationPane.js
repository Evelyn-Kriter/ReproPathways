import Image from "next/image";
import OfficialLogo from "../images/OfficialLogo.jpg";
import styles from "../styles/index.module.css";
import PropTypes from "prop-types";
//import { useRouter } from "next/router";

export default function NavigationPane({ active }) {
  //const router = useRouter();

  //variables to represent styles for inactive links
  let currentHome = styles.header2RightLinks;
  let currentSpotlight = styles.header2RightLinks;
  let currentAbout = styles.header2RightLinks;
  let currentExplore = styles.header2RightLinks;

  //check which link is active based on user input and adjust style accordingly
  if (active === "spotlight") {
    currentSpotlight = styles.header2RightLinksActive;
  }
  if (active === "home") {
    currentHome = styles.header2RightLinksActive;
  }
  if (active === "about") {
    currentAbout = styles.header2RightLinksActive;
  }
  if (active === "explore") {
    currentExplore = styles.header2RightLinksActive;
  }

  //router pushing
  /*   function handleAboutClick() {
    router.push("/about");
  } */

  return (
    <div className={styles.body}>
      <div className={styles.header2}>
        <nav className={styles.header2Container}>
          <div className={styles.header2ImageContainer}>
            <Image
              className={styles.header2Image}
              src={OfficialLogo}
              alt="Official Logo"
              width={185}
              height={70}
            />
          </div>
          <div className="header2MobileButton">
            <span
              style={{ float: "right" }}
              //onClick="toggleMobileNavigation()"
            />
          </div>
          <div className={styles.header2Right}>
            {/* ABOUT LINK */}
            <a
              className={currentAbout}
              href="./about"
              //onClick="toggleMobileNavigation()"
            >
              About Us
            </a>

            {/* GOALS/VISION */}
            <a
              className={styles.header2RightLinks}
              href="./#goals"
              //onClick="toggleMobileNavigation()"
            >
              Vision
            </a>

            {/* EXPLORE */}
            <a
              className={currentExplore}
              href="./explore"
              //onClick="toggleMobileNavigation()"
            >
              Explore
            </a>

            {/* SPOTLIGHTS */}
            <a
              className={currentSpotlight}
              href="./spotlights"
              //onClick="toggleMobileNavigation()"
            >
              Spotlights
            </a>

            {/* HOME */}
            <a className={currentHome} href="./">
              Home
            </a>
          </div>
        </nav>
      </div>
    </div>
  );
}

NavigationPane.propTypes = {
  active: PropTypes.string.isRequired,
};
