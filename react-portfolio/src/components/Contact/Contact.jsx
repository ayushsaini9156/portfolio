import React from "react";
import styles from "./Contact.module.css";
import { getImageUrl } from "../../utils";

export const Contact = () => {
  return (
    <footer id="contact" className={styles.container}>
      <div className={styles.text}>
        <h2>Contact</h2>
        <p>Feel free to reach out</p>
      </div>
      <ul className={styles.links}>
        <li className={styles.link}>
          <img src="assets/contact/emailIcon.png" alt="Email icon" />
          <a href="mailto:ayushsaini16703@gmail.com">
            Gmail
          </a>
        </li>
        <li className={styles.link}>
          <img src="assets/contact/linkedinIcon.png" alt="Linkedin icon" />
          <a href="https://www.linkedin.com/in/ayush-saini-69bb01212/">Linkedin </a>
        </li>
        <li className={styles.link}>
          <img src="assets/contact/githubIcon.png" alt="Github icon" />
          <a href="https://github.com/ayushsaini9156">Github</a>
        </li>
      </ul>
    </footer>
  );
};
