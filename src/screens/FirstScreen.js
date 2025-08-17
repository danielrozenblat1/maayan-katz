import React, { useState, useEffect } from 'react';
import styles from './FirstScreen.module.css';
import Loader from '../components/loader/Loader'; // נניח שזה הנתיב הנכון לקומפוננטת Loader
import centerImage from "../images/מעיין כץ רקע ראשי.png"
import rightImage from "../images/מעיין כץ עבודות 7.png"
import leftImage from "../images/מעיין כץ עבודות 10.png"
import maayanLogo from "../images/מעיין כץ לוגו.png"
const FirstScreen = () => {
  const [imagesLoaded, setImagesLoaded] = useState(false);

  useEffect(() => {
    const imageUrls = [
    
 centerImage,
 leftImage,
 rightImage
    ];

    const loadImage = (url) => {
      return new Promise((resolve, reject) => {
        const img = new Image();
        img.src = url;
        img.onload = resolve;
        img.onerror = reject;
      });
    };

    Promise.all(imageUrls.map(loadImage))
      .then(() => setImagesLoaded(true))
      .catch((error) => {
        console.error('Error loading images:', error);
        setImagesLoaded(true); // נציג את התוכן גם אם הטעינה נכשלה
      });
  }, []);

  if (!imagesLoaded) {
    return <Loader />;
  }

  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        <div className={`${styles.backgroundImage} ${styles.leftImage}`}></div>
        <div className={`${styles.backgroundImage} ${styles.centerImage}`}></div>
        <div className={`${styles.backgroundImage} ${styles.rightImage}`}></div>
      </div>
      
      <div className={styles.topContent}>
        {/* <h2 className={styles.subtitle}>MAAYAN KATZ</h2> */}
        <div className={styles.center}><img className={styles.image} alt="מעיין כץ" src={maayanLogo}/></div>
      </div>

      <div className={styles.bottomContent}>
        <h1 className={styles.title}>
          לימודי ציפורניים || קורס ציור על ציפורניים
        </h1>
      </div>
    </div>
  );
};

export default FirstScreen;