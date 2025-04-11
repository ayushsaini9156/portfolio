import React from 'react'
// import { getImageUrl } from '../../utils';
import styles from './Hero.module.css';
export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>        
        <h1 className={styles.title}>Hii I'm Ayush Saini </h1>
        <p className={styles.description}>
          I'm a full-stack developer and learning web development using React and
          NodeJS. Reach out if you'd like to learn more!
        </p>
        <a href="mailto:ayushsaini16703@gmail.com" className={styles.contactBtn}>Contact Me</a>

      </div>
      <img src="/assets/hero/heroImage.png" alt="Hero Image" />
      <div className={StyleSheet.topBlur}/>
      <div className={StyleSheet.bottomBlur}/>
    </section>
  );
}

export default Hero