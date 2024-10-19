import React, { useState, useRef, useEffect } from 'react';
import { ChevronDown, ChevronUp, Clipboard, HandMetal, Camera, Scissors, Brush, Package } from 'lucide-react';
import styles from './Course.module.css';
import maayanWork from "../../images/מעיין כץ עבודות 1.png"
import Button from '../button/Button';
const CollapsibleSyllabus = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [height, setHeight] = useState(0);
  const contentRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      const contentEl = contentRef.current;
      setHeight(contentEl.scrollHeight);
    } else {
      setHeight(0);
    }
  }, [isOpen]);

  const getIcon = (text) => {
    if (text.includes('פיזיולוגיה') || text.includes('תופעות') || text.includes('אלרגיה')) return <Clipboard className={styles.icon} />;
    if (text.includes('ניקוי') || text.includes('הכנת')) return <HandMetal className={styles.icon} />;
    if (text.includes('צילום')) return <Camera className={styles.icon} />;
    if (text.includes('מספריים')) return <Scissors className={styles.icon} />;
    if (text.includes('מברשת') || text.includes('מכחול')) return <Brush className={styles.icon} />;
    return <Package className={styles.icon} />;
  };

  const lessons = [
    { title: "שיעור ראשון - עיוני גלנד", items: ['פיזיולוגיה של הציפורן', 'תופעות ומחלות ציפורניים', 'אלרגיה', 'ניקוי וחיטוי כלים', 'הכנת ראשי שיוף ותפקידם', 'פציעות, צורות ומצבי שיוף', 'הכנת ציפוי וחומרי עבודה'] },
    { title: "שיעור שני - עיוני ומעשי הדגמה על עצמך", items: ['הסבר עבודה עם פוליג\'ל', 'הסבר סנפיקה עבודה עם תבניות', 'הכנת ראשי שיוף ותפקידם', 'תרגול על היד שלך'] },
    { title: "שיעור שלישי - מעשי על מודליסטית", items: ['עבודה עצמאית מבנה אנטומי', 'בנייה בפוליג\'ל עם תבניות הפוכות', 'צילום טיפים וכללי יסוד', 'מינקון ידני'] },
    { title: "שיעור רביעי - מעשי על מודליסטית", items: ['עבודה עצמאית מלאה על מודליסטית', 'בנייה בפוליג\'ל על טיפ'] },
    { title: "שיעור חמישי - עיוני ומעשי הדגמה על עצמך", items: ['הסבר עבודה עם פוליג\'ל', 'הסבר סנפיקה עבודה עם תבניות', 'הכנת ראשי שיוף ותפקידם', 'תרגול על היד שלך'] },
    { title: "שיעור שישי - מעשי על מודליסטית", items: ['תרגול בנייה בפוליג\'ל', 'בנייה בפוליג\'ל עם תבניות הפוכות', 'צילום טיפים וכללי יסוד', 'מילוי טיפים וכללי יסוד'] },
    { title: "שיעור שביעי - מעשי על מודליסטית", items: ['עבודה עצמאית מלאה על מודליסטית', 'בנייה בפוליג\'ל על טיפ'] },
  ];

  const kitItems = [
    'ראש שיוף קרמי לבניית מבנה אנטומי',
    'ארבעה יהלומי מיקרון',
    'מספריים פדיקור/מניקור',
    'סטלקס exclusive',
    'דוחף עור',
    'מברשת אבק אנטי סטטי',
    'מכחול אקרילי משושה קולינסקי לעבודה עם מונה אנטומי וקישוטים',
    'מברשת ניקוי ג\'ל טופ',
    'פצירות',
    '2 בלוק לבן מרשת אבק',
    'בקבוק ואקום ריסס בילדר ג\'ל טופ'
  ];

  return <>
    <div className={styles.syllabusContainer}>
      <button
        className={styles.syllabusButton}
        onClick={() => setIsOpen(!isOpen)}
      >
        <img 
          src={maayanWork} 
          alt="מעיין כץ עבודות של תלמידות" 
          className={styles.buttonImage}
        />
        <span className={styles.buttonText}>לסילבוס המלא של קורס בנייה בלק ג'ל</span>
        {isOpen ? (
          <ChevronUp className={styles.chevronIcon} />
        ) : (
          <ChevronDown className={styles.chevronIcon} />
        )}
      </button>
      <div 
        className={styles.syllabusContent} 
        style={{ height: `${height}px` }}
      >
        <div ref={contentRef}>
          {lessons.map((lesson, index) => (
            <div key={index} className={`${styles.lessonContainer} ${styles[`lesson${index + 1}`]}`}>
              <h2 data-number={String(index + 1).padStart(2, '0')}>{lesson.title}</h2>
              <ul>
                {lesson.items.map((item, itemIndex) => (
                  <li key={itemIndex}>{getIcon(item)}{item}</li>
                ))}
              </ul>
            </div>
          ))}
          
          <div className={styles.lessonContainer}>
            <h2>מה כלול בערכה?</h2>
            <ul className={styles.kitList}>
              {kitItems.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
          <Button text="מעיין אני רוצה לשמוע עוד!"/>
        </div>
     
      </div>
    
    </div>

</>
};

export default CollapsibleSyllabus;