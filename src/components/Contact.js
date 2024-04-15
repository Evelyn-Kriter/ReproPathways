import styles from "../styles/index.module.css";

export default function Contact({}) {
  return (
    <div className={styles.body}>
      <div className={styles.contactContainer} id="contact">
        <div className={styles.shortContact}>
          <h2 className={styles.h2Contact}>Stay in touch!</h2>
          <p className="w3-xlarge">Be the first to hear from us.</p>
          <div className="w3-large w3-margin-top contact-info">
            <i className="fa fa-envelope-o" />
            <span className={styles.spanContact}>
              <a href="mailto:info@repropathways.org">info@repropathways.org</a>
            </span>
          </div>
          <div className="w3-large w3-margin-top contact-info">
            <i className="fa fa-instagram" />
            <span className={styles.spanContact}>
              <a
                className={styles.spanContactA}
                href="https://www.instagram.com/repropathways.ig/"
                target="_blank"
                rel="noreferrer"
              >
                - Instagram
              </a>
            </span>
          </div>
        </div>
        <div className="form w3-margin-top">
          <div
            //className={`w3-round-xlarge${styles.contactFormContainer}`}
            className={styles.contactFormContainer}
            //className="w3-round-xlarge"
            //className={`w3-round-xlarge${styles.contactFormContainer}`}
          >
            <form
              //className={`w3-highway-blue w3-padding-large w3-round-large${styles.contactFormContainerForm}`}
              //className={styles.contactFormContainerForm}
              className="w3-highway-blue w3-padding-large w3-round-large"
            >
              <label htmlFor="fname">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Your name"
                className={styles.contactInputText}
              />

              <label htmlFor="lname">Email</label>
              <input
                type="text"
                id="email"
                name="email"
                placeholder="Your email"
                className={styles.contactInputText}
              />

              <p>
                By submitting this form, you agree to our{" "}
                <a href="privacy-policy.html" target="_blank">
                  privacy policy.
                </a>
              </p>
              <br />
              <input
                //className="w3-metro-blue"
                type="button"
                value="Submit"
                id="submit"
                className={styles.contactInputSubmit}
                //className={`w3-metro-blue${styles.contactInputSubmit}`}
              />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
