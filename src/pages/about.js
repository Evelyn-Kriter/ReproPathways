import UserHeader from "../components/UserHeader";
import NavigationPane from "../components/NavigationPane";
import Footer from "../components/Footer";
import Contact from "../components/Contact";
import styles from "../styles/index3.module.css";
import React from "react";
import EveyK from "../images/about/EveyKriter.jpg";
import CarolinaG from "../images/about/Carolina.jpg";
import FranchescaB from "../images/about/FranchescaBelisle.jpg";
import CatherineC from "../images/about/Catherine.jpg";
import CorinneL from "../images/about/Corinne.jpg";
import Image from "next/image";

export default function About({}) {
  return (
    <div className={styles.body}>
      {/* USER HEADER */}
      <UserHeader />

      {/* NAVIGATION */}
      <NavigationPane active={"about"} />

      {/* ABOUT US */}
      <h2 className={styles.h2About}>Meet The Team</h2>
      <div className={styles.introsContainer}>
        {/* Professor Combelles */}
        <div className={styles.introsBox}>
          <div className={styles.profileContainer}>
            <div className={styles.picContainer}>
              <Image src={CatherineC} alt="Catherine Combelles" />
            </div>
            <div className={styles.introHeadingContainer}>
              <h3>Catherine Combelles</h3>
              <h4>
                <u>Project Director</u>
              </h4>
              <h6>
                Hometown:<i> Toulouse, France</i>
              </h6>
            </div>
          </div>
          <div className={styles.textContainer}>
            <p>
              <b>Where you can find me in the summer:</b> <br />
              When not working, you can find me at a hockey rink or baseball
              field watching my boys play, or taking in the beauties that Nature
              has to offer, or enjoying every moment with the family and our
              furry companions.
            </p>
            <p>
              <b>What initially drew me to the initiative:</b> <br />
              As a reproductive biologist in a faculty position at an
              undergraduate institution, I am passionate about teaching,
              mentoring, and the field of reproduction. Across areas of study
              and life forms, reproduction is a field with many standing and
              critical challenges that only increased and broadened
              participation will help address. Also close to my heart is the
              need to focus on exposure and early engagement. The opportunities
              are grand, and I couldn’t be more excited for what is ahead!
            </p>
          </div>
        </div>

        {/* Franchesca */}
        <div className={styles.introsBox}>
          <div className={styles.profileContainer}>
            <div className={styles.picContainer}>
              <Image src={FranchescaB} alt="Franchesca Beslisle" />
            </div>
            <div className={styles.introHeadingContainer}>
              <h3>Franchesca Belisle</h3>
              <h4>Undergraduate Student</h4>
              <h6>
                Hometown:<i> Los Angeles, CA</i>
              </h6>
            </div>
          </div>
          <div className={styles.textContainer}>
            <p>
              <b>Where you can find me in the summer:</b> <br />
              In my downtime, I love exploring various parts of the LA area.
              From trying new dessert shops with friends or adventuring to
              dog-friendly beaches, there is always something to do in the warm
              weather. I’m also an avid reader, and you will often find me
              engrossed in a good romance book during weekends.
            </p>
            <p>
              <b>What initially drew me to the initiative:</b> <br />
              As a Jamaican-Belizean woman, the healthcare system and its
              failings to provide Black women effective and fair treatment has
              always stuck with me, particularly when it comes to maternal and
              infant mortality. ReproPathways is an opportunity for me to learn
              more about potential careers within reproductive science, all
              while connecting with other undergraduates students and
              professionals in the field.
            </p>
          </div>
        </div>

        {/* Carolina */}
        <div className={styles.introsBox}>
          <div className={styles.profileContainer}>
            <div className={styles.picContainer}>
              <Image src={CarolinaG} alt="Carolina Garcia" />
            </div>
            <div className={styles.introHeadingContainer}>
              <h3>Carolina Garcia</h3>
              <h4>Undergraduate Student</h4>
              <h6>
                Hometown:<i> Barrington, RI</i>
              </h6>
            </div>
          </div>
          <div className={styles.textContainer}>
            <p>
              <b>Where you can find me in the summer:</b> <br />
              When I’m not working during the summer you can find me at the
              beach reading a book, kayaking or paddle boarding, or playing with
              my dog.
            </p>
            <p>
              <b>What initially drew me to the initiative:</b> <br />I felt
              drawn to the mission of the ReproPathways initiative. Through
              various projects and experiences I have contributed to, I have
              seen the urgent need for more accessible career exploration and
              mentorship platforms that inspire and engage diverse audiences to
              pursue careers in science and medicine. A representative
              reproductive science and medicine workforce is essential for
              providing quality care to all communities. I am excited to see our
              ReproPathways community grow!
            </p>
          </div>
        </div>

        {/* Evey */}
        <div className={styles.introsBox}>
          <div className={styles.profileContainer}>
            <div className={styles.picContainer}>
              <Image src={EveyK} alt="Evelyn Kriter" />
            </div>
            <div className={styles.introHeadingContainer}>
              <h3>Evelyn Kriter</h3>
              <h4>Undergraduate Student</h4>
              <h6>
                Hometown:<i> Tampa, FL</i>
              </h6>
            </div>
          </div>
          <div className={styles.textContainer}>
            <p>
              <b>Where you can find me in the summer:</b> <br />
              During the summer I thrive on outdoor adventures and soaking up
              the sun. If I’m not curled up outside in a hammock under the shade
              with a good book, then I’m experimenting with new and old recipes
              in the kitchen. My weaknesses are cats and bubble tea.
            </p>
            <p>
              <b>What initially drew me to the initiative:</b> <br />
              If there is one thing I’ve learned from this initiative, it’s that
              no matter what your passions and skills are in this world, there
              is a way to apply it to reproductive health and sciences. This
              project was the perfect opportunity for me to contribute my coding
              skills to make a difference for many people. The endless
              challenges and barriers to access in healthcare and the repro
              field can be daunting for one person to tackle. But with
              ReproPathways, the answer to this impossible question becomes
              clear—we overcome this together.
            </p>
          </div>
        </div>

        {/* Corinne */}
        <div className={styles.introsBox}>
          <div className={styles.profileContainer}>
            <div className={styles.picContainer}>
              <Image src={CorinneL} alt="Corinne Lowmanstone" />
            </div>
            <div className={styles.introHeadingContainer}>
              <h3>Corinne Lowmanstone</h3>
              <h4>Undergraduate Student</h4>
              <h6>
                Hometown:<i> Golden Valley, MN</i>
              </h6>
            </div>
          </div>
          <div className={styles.textContainer}>
            <p>
              <b>Where you can find me in the summer:</b> <br />
              You can find me taking nature photographs, reading, or following
              fish at the bottom of a lake.
            </p>
            <p>
              <b>What initially drew me to the initiative:</b> <br />I was
              inspired by the ReproPathways mission and the chance to combine my
              passions my passions for global health and marketing. As an
              African American and Queer woman who studies biology and
              environmental studies, I am all too familiar with healthcare
              disparities and barriers to entry in fields that lack diversity
              but painfully need it!
            </p>
          </div>
        </div>
      </div>

      {/* CONTACT */}
      <Contact />

      {/* FOOTER */}
      <Footer />
    </div>
  );
}
