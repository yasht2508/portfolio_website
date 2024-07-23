import React from "react";
import { useState,useEffect } from "react";
import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
    const [displayText, setDisplayText] = useState('');
    const textArray = [
      'Passionate Full Stack Developer.',
      'Creating dynamic and responsive web applications.',
      'Expertise in front-end and back-end technologies.',
      'Delivering seamless user experiences.',
      'Committed to continuous learning and innovation.'
    ];
  
    useEffect(() => {
      let currentTextIndex = 0;
      let currentCharIndex = 0;
      let currentText = '';
      const typingSpeed = 100; // Adjust typing speed here (smaller number for faster typing)
      const pauseTime = 1000; // Pause time between lines in milliseconds
  
      const type = () => {
        if (currentCharIndex < textArray[currentTextIndex].length) {
          currentText += textArray[currentTextIndex].charAt(currentCharIndex);
          setDisplayText(currentText);
          currentCharIndex++;
          setTimeout(type, typingSpeed);
        } else {
          currentTextIndex = (currentTextIndex + 1) % textArray.length;
          currentCharIndex = 0;
          currentText = '';
          setTimeout(type, pauseTime);
        }
      };
  
      type();
    }, []);
  
  

  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Yash Tiwari</h1>
        <div className={styles.description}>
          <p className="typewriter">
            {displayText}
            <span className="cursor"></span>
          </p>
        </div>
        <a href="mailto:yashtiwari2508@gmail.com" className={styles.contactBtn}>
          Contact Me
        </a>
      </div>
      <img
        src={getImageUrl("hero/heroImage.png")}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
