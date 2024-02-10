import styles from "../styles/index.module.css";

export default function Footer({}) {
  return (
    <div className="w3-highway-blue w3-padding-large" id="footer">
      <p className="w3-center logo">
        © 2023 - Repro<span className={styles.span}>Pathways</span> - All rights
        reserved
      </p>
    </div>
  );
}
