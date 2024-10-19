import React from 'react';
import styles from './DrawCourse.module.css';
import result1 from "../../images/תוצאות 1.png"
import result2 from "../../images/תוצאות 2.png"
import result3 from "../../images/תוצאות 3.png"
import result4 from "../../images/תוצאות 4.png"
const DrawCourse = () => {
  return (
    <div className={styles.container} dir="rtl">
      <div className={styles.header}>
     
      </div>

      <div className={styles.mainContent}>
        <h1 className={styles.title}>ולרגע האמת!</h1>


      
        {/* <div className={styles.header}>
     בקורס תלמדי איך לצייר
     </div> */}
        {/* <section className={styles.coursesInfo}>
          <div className={styles.courseType}>
            <h3>ציורים טרנדים חמים</h3>
            <p>פרחים</p>
            <p>פרפרים</p>
            <p>עלים</p>
            <p>פירות באפקט של 3D</p>
            <p>אומברה</p>
            <p>הדפסי חיות</p>
            <p>להבות</p>
            <p>משבצות</p>
            <p>ציורים בצבעי מים</p>
            <p>ציורים צבעוניים</p>
          </div>

        </section> */}
      </div>
      <div className={styles.header}>
כדי להוציא לקוחות עם ציפורניים כאלה
     </div>
      <div className={styles.footer}>
 
        <div className={styles.footerItem}>
          <img src={result1}  className={styles.footerImage} />
        </div>
        <div className={styles.footerItem}>
          <img src={result2}  className={styles.footerImage} />
        </div>
        <div className={styles.footerItem}>
          <img src={result3} className={styles.footerImage} />
        </div>
        <div className={styles.footerItem}>
          <img src={result4} className={styles.footerImage} />
        </div>
    
    
      </div>
      <div className={styles.header}>
כל מה שתצטרכי זה מחשב,מחברת ועט! (ואת הציוד המתאים 😉 )
     </div>
     <div className={styles.header}>
כי ככה זה הולך לעבוד:
     </div>
    </div>
  );
};

export default DrawCourse;