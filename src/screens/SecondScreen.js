
import React, { useEffect, useRef } from 'react';
import { ChevronDown } from 'lucide-react';
import styles from "./SecondScreen.module.css";
import course from "../images/מעיין כץ קורס תמונה ראשית.png"
const SecondScreen = () => {
  const presentationRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const element = presentationRef.current;
      if (element) {
        const rect = element.getBoundingClientRect();
        const scrollPercentage = 1 - (rect.top / window.innerHeight);
        if (scrollPercentage > 0 && scrollPercentage <= 1) {
          element.style.setProperty('--scroll', scrollPercentage);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check initial state

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.quate}>
        <div>"הפכתי מאחת עם שתי ידיים שמאליות בכל מה שנוגע לציור</div>
        <div className={styles.specialEffect}>
          לאחת שיכולה לצייר את כל מה שהלקוחות שלי מדמיינות"
        </div>
      </div>
      
      <div className={styles.title}>
        ועכשיו.. תורי ללמד אותך איך עושים את זה!
      </div>
      
      <div className={styles.wrapper}>
        <div ref={presentationRef} className={styles.presentationEffect}>DRAW LIKE A PRO</div>
      </div>
  
      <div className={styles.title}>
        קורס דיגיטלי לציור על ציפורניים
      </div>
      
      <img src={course} className={styles.imagePlaceholder}></img>
      
      <div className={styles.subTitle}>
        אבל לפני שנרחיב על כל מה שאת עומדת לקבל, חשוב לי שתביני כמה דברים קטנים קודם..
      </div>
      
      <div className={styles.iconWrapper}>
        <ChevronDown size={48} />
      </div>
    </div>
  );
};

export default SecondScreen;

