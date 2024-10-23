import React from 'react';
import styles from './Me.module.css';
import sharon from "../../images/מעיין כץ.png"
import Works from '../recommends/Works';
import Students from '../recommends/Students';
import Recommends from '../recommends/Recommends';

const AboutMe = () => {
  return <>
      <div className={styles.header} id="מי אני">קצת עלי</div>
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        <img src={sharon} alt="מעיין כץ" className={styles.image} />
      </div>
      <div className={styles.content}>
        <h1 className={styles.title}>מעיין כץ</h1>
<div className={styles.subtitle}>"רק עבודה חכמה,יעילה והתמדה תביא אותך לתוצאות שאת חולמת עליהן"</div>
        <p className={styles.description}>אני מעיין, בונת ציפורניים מעל ל5 שנים ומדריכה מוסמכת שמכשירה מקצועיות עם תשוקה ללמוד את התחום.</p>
        <p className={styles.description}>תמיד האמנתי בלהתמיד,להשתפר ולתרגל גם כשהיומן שלי היה מלא</p>
        <p className={styles.description}>תמיד אהבתי דיוק ותמיד הסתכלתי על עולם הציור על הציפורן כשירות שאני חייבת להוסיף אבל פחדתי! אפשר לומר שהיו לי שתי ידיים שמאליות ולא ידעתי איך אני אוציא מישהי מרוצה ממני כשלוקח לי המון זמן לצייר ולדייק</p>

        <p className={styles.description} style={{fontWeight:700}}>עד שלמדתי וחקרתי בעצמי את הטכניקה שהפכה לי את כל עולם הציור לנגיש ומושך יותר</p>
        <p className={styles.description}>למדתי טכניקה! לא למדתי להעתיק! וזה מה שגם את תלמדי! בעזרת הטכניקה הזו את תוכלי לצייר כל מה שהלקוחות ידמיינו במינימום זמן , מקסימום טכניקה ומקסימום יכולת!</p>
      </div>
 
    </div>
<Works/> 
<Recommends/>
    </>
};

export default AboutMe;