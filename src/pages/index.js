/* Homepage */

import styles from "../styles/index.module.css";
import Head from "next/head";
import Image from "next/image";
import React from "react";
//import next from "next/types";
import UserHeader from "../components/UserHeader";
import NavigationPane from "../components/NavigationPane";
import Footer from "../components/Footer";
import Contact from "../components/Contact";
import RPHubGraphic from "../images/home/RPHubGraphic.jpg";
import ReproPathwaysRoadmap from "../images/home/ReproPathwaysRoadmap.jpg";
import WelcomeGraphic from "../images/home/WelcomeGraphicv3.jpg";
import MissionBanner from "../images/home/MissionBanner.jpg";

//import { Main } from "next/document";
//import Link from "next/link";
import { useRouter } from "next/router";
//import PropTypes from "prop-types";

/*
function toggleMobileNavigation() {
  const mobileNavigation = document.getElementById("mobile-sidenav");
  mobileNavigation.classList.toggle("mobile-links-active");
}
*/

export default function HomePage({}) {
  const router = useRouter();

  function handleAboutClick() {
    router.push("/about");
  }

  return (
    <div className={styles.body}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta charSet="UTF-8" />
        <title>ReproPathways</title>
      </Head>

      {/* USER HEADER */}
      <UserHeader />

      {/* NAVIGATION */}
      <NavigationPane active={"home"} />

      {/* WELCOME GRAPHIC */}
      <Image
        src={WelcomeGraphic}
        alt="Welcome Graphic"
        quality={100}
        priority
      />

      {/* ARROW */}
      <div className={styles.arrowContainer}>
        <button className={styles.arrowButton} type="button">
          <a href="#careers">
            <h2 className={styles.arrowButtonText}>Get Started Now!</h2>
          </a>
        </button>
      </div>
      <br />

      {/* MISSION */}
      <div className={styles.missionBannerContainer}>
        <Image src={MissionBanner} alt="Mission Banner" quality={100} />
      </div>
      <h3 className={styles.h3Mission}>
        ReproPathways is a community-centered, dynamic resource hub that
        promotes early engagement in- career exploration, effective mentorship,
        and personal growth. Our initiative strives to increase representation
        in the many career possibilities offered by the fields of reproduction.
      </h3>

      {/* REPROPATHWAYS ROADMAP */}
      <div className={styles.RoadmapImage}>
        <div className="w3-card-4 ">
          <Image src={ReproPathwaysRoadmap} alt="ReproPathways Roadmap" />
        </div>
      </div>

      {/* ABOUT/VISION */}
      <div className={styles.aboutVisionContainer} id="about">
        <div className={styles.aboutContainer}>
          <h2 className={styles.h2AboutVision}>About Us</h2>
          <p className={styles.aboutVisionText}>
            We are a passionate group of professionals and undergraduate
            students who share a common goal: to expand access to career
            opportunities in the field of reproduction. Our mission is rooted in
            the belief that everyone should have equal access to meaningful and
            rewarding careers, particularly in an area as vital and impactful as
            reproduction. We understand the immense importance of this field and
            recognize that it requires a diverse and dedicated workforce to
            address the various challenges and advancements. With a commitment
            to creating an inclusive and supportive community, we strive to
            bridge the gap between aspiring individuals and the opportunities
            available in reproductive careers. Through various initiatives,
            resources, mentorship programs, and networking events, we aim to
            equip aspiring professionals with the knowledge, skills, and
            connections necessary to thrive in this evolving landscape. Whether
            you are a student looking to explore career options or a
            professional seeking to make a meaningful impact, we warmly welcome
            you to join our growing community.
          </p>
        </div>
        <div className={styles.visionContainer}>
          <h2 className={styles.h2AboutVision}>Our Vision</h2>
          <p className={styles.aboutVisionText}>
            At ReproPathways, we are committed to fostering a more inclusive and
            diverse reproductive workforce through the creation dynamic resource
            hub that champions effective mentorship and accessible career
            exploration. Our mission is to revolutionize the reproductive field
            by empowering individuals from all backgrounds to pursue and excel
            in wide range of roles within the sector.
            <br /> We recognize the critical importance of ensuring equal
            opportunities and representation within the reproductive workforce,
            and we also believe in the need to inspire students to pursue
            careers they might have never known were possible. Our initiative
            seeks to break down barriers by providing comprehensive resources,
            support, and mentorship to aspiring professionals- irrespective of
            their race, ethnicity, gender identity, sexual orientation,
            socioeconomic background, or other defining factors. Although this
            initiative is only in its beginning stages, we hope you will join
            our efforts and help more students discover and embark on the path
            towards a career in reproduction.
          </p>
        </div>
      </div>
      {/* ABOUT/VISION SUBMIT BUTTONS */}
      <div className={styles.submitContainer}>
        <input
          className={styles.AboutVisionSubmit}
          type="button"
          value="See More"
          onClick={handleAboutClick}
        />
      </div>

      {/* BANNER */}
      <div className={styles.bannerContainer}>
        <h2 className={styles.bannerText}>
          The Field of Reproduction Needs YOU!
        </h2>
      </div>

      {/* THE PATHWAYs INTO REPRO */}
      <h2 className={styles.h2Careers} id="goals">
        The Pathways Into Repro
      </h2>
      <div className={styles.RPHubGraphicImage}>
        <Image src={RPHubGraphic} alt="ReproPathways Hub Graphic" />
      </div>

      {/* CAREERS */}
      <h2 className={styles.h2Careers} id="careers">
        I am a ...
      </h2>
      <div className={styles.careersContainer}>
        {/* I am a ... STUDENT */}
        {/* <div className="cards w3-padding-large w3-margin-top"> */}
        <div className={styles.careersCardsCardStudent}>
          <div className="card w3-card-4">
            <header className="w3-container w3-highway-blue">
              <h3 className={styles.h3Careers}>Student</h3>
            </header>
            <div className={styles.careersCardsCardContent}>
              <div className="content w3-container">
                <div className={styles.careersCardsCardCardText}>
                  {/* there was card-text here */}
                  <h4 className={styles.h4Careers}>I want to</h4>
                  <ul className={styles.careersCardsCardCardUL}>
                    <li>Learn more about careers in reproduction</li>
                    <li>Find opportunities</li>
                    <li>Get support and be given a chance to grow</li>
                    <li>
                      Connect with others like me who want to make a difference
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <footer
              className={styles.careersCardsCardFooter}
              //className="w3-container"
              //style={"w3-container"}
            >
              <a
                className="w3-button w3-highway-blue w3-hover-blue"
                style={{ width: "100%" }}
                href="https://forms.gle/H4MkJiHbNKLFLGMBA"
                target="_blank"
                rel="noopener noreferrer"
              >
                Start
              </a>
            </footer>
          </div>
        </div>
        {/* </div> */}

        {/* I am a ... PROFESSIONAL */}
        {/* <div className="cards w3-padding-large w3-margin-top"> */}
        <div className={styles.careersCardsCardProfessional}>
          <div className="card w3-card-4 w3-round-large">
            <header className="w3-container w3-highway-blue">
              <h3 className={styles.h3Careers}>Professional</h3>
            </header>
            <div className={styles.careersCardsCardContent}>
              <div className="content w3-container">
                <div className={styles.careersCardsCardCardText}>
                  <h4 className={styles.h4Careers}>I want to</h4>
                  <ul className={styles.careersCardsCardCardUL}>
                    <li>
                      Help raise awareness of the many options in reproduction
                      for all
                    </li>
                    <li>Support diverse minds and talents</li>
                    <li>Connect and engage with students early on</li>
                    <li>
                      Provide young students a chance to make an impact that
                      matters to them
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <footer
              className={styles.careersCardsCardFooter}
              //className="w3-container"
              //style={"w3-container"}
            >
              <a
                className="w3-button w3-highway-blue w3-hover-blue"
                style={{ width: "100%" }}
                href="https://forms.gle/MDnXF3joELsryHpF9"
                target="_blank"
                rel="noopener noreferrer"
              >
                Start
              </a>
            </footer>
          </div>
        </div>
        {/* </div> */}

        {/* I am a ... SUPPORTER */}
        {/* <div className="cards w3-padding-large w3-margin-top"> */}
        <div className={styles.careersCardsCardSupporter}>
          <div className="card w3-card-4 w3-round-large">
            <header className="w3-container w3-highway-blue">
              <h3 className={styles.h3Careers}>Supporter</h3>
            </header>
            <div className={styles.careersCardsCardContent}>
              <div className="content w3-container">
                <div className={styles.careersCardsCardCardText}>
                  <h4 className={styles.h4Careers}>I want to</h4>
                  <ul className={styles.careersCardsCardCardUL}>
                    <li>Contribute to the cause</li>
                    <li>
                      Advance diversity, equity, inclusion, and accessibility in
                      reproduction
                    </li>
                    <li>
                      Help create new resources and maximize the value of
                      existing ones
                    </li>
                    <li>
                      Ensure that current knowledge gaps and challenges are
                      addressed
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <footer
              className={styles.careersCardsCardFooter}
              //className="w3-container"
              //style={"w3-container"}
            >
              <a
                className="w3-button w3-highway-blue w3-hover-blue"
                style={{ width: "100%" }}
                href="https://forms.gle/HM6k1oNhqJXxgbsa9"
                target="_blank"
                rel="noopener noreferrer"
              >
                Start
              </a>
            </footer>
          </div>
        </div>
        {/*</div> */}
      </div>

      {/* CONTACT */}
      <Contact />

      {/* FOOTER */}
      <Footer />
    </div>
  );
}
