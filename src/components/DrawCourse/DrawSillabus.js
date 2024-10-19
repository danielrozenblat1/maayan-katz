import React from 'react';
import styles from './DrawSillabus.module.css';
import PinkButton from '../SellButton/SellButton';

const DrawSyllabus = () => {
  const chapters = [
    {
      title: 'פרק 1: הסבר מקיף על הקורס',
      lessons: [
        ' הסבר קליל על הפרקים ומה צפוי לך בהמשך הקורס.',
      ]
    },
    {
      title: 'פרק 2',
      lessons: [
        'היכרות עם החומרים השונים איתם נעבוד, איך ומה חשוב לזכור כשמתחילים לצייר?',
        'בפרק הזה צירפתי לך קובץ עם המוצרים שהצגתי'
      ]
    },
    {
      title: 'פרק 3: עולם המכחולים - כל מה שרצית לדעת',
      lessons: [
        ' מה ההבדל בין מכחול סינטטי לטבעי, איזה מכחול מתאים לאיזה ציור?',
        ' איך לשמור על המכחול,איך לאחסן מכחול נכון.',
        ' איך אני משפצרת מכחול קיים?',
        ' מענה על שאלות נפוצות שכל אחת נתקלה בהן ורוצה לדעת את התשובה עליהן'
      ]
    },
    {
      title: 'פרק 4: אימון ותרגול - מהם הדגשים שחשוב לדעת',
      lessons: [
        ' איך להחזיק מכחול בהתאם לתנועת יד, מה הדרך הנכונה לעבוד עם גלים לציור',
        ' איך נבצע הצללות והארות בצורה נכונה כדי לתת עומק לציור שלנו ',
        ' טעויות נפוצות ואיך להמנע מהן כדי לצייר ברמה גבוהה',
      
      ]
    },
    {
      title: 'פרק 5: הדפסי חיות הגרסה המשודרגת',
      lessons: [
        'גירפה בטקסטורה מיוחדת',
        'המזובר הקלאסי שכולן אוהבות',
        'טיגריס בקו נקי',
        'מנומר רטרו'
      ]
    },
    {
      title: 'פרק 6: פירות מטורפים בטכניקת 3D',
      lessons: [
        'לימון',
        'אבטיח',
        'תפוז',
        'תות'
      ]
    },
    {
      title: 'פרק 7: דוגמאות שכל מניקוריסטית חייבת לדעת',
      lessons: [
        'איך לצייר פרנץ? הטיפים שיקלו עלייך כשלקוחה מבקשת פרנץ סימטרי',
        'פיסול פםיון בתלת מימד',
        'פרח מהיר בתחת מימד',
        'אומברה זריז ללא מכחול וספוגית!',

      ]
    },
    {
      title: 'פרק 8 - ציורי דמויות מורכבים',
      lessons: [
        'לימוד פירוק הציור לשלבים',
        'לימוד טכניקת השרטוט, איך נדע לצייר על הציפורן כל ציור שנבחר',
        'צביעה וקווי מתאר פו הדוב',
        'איך נזהה הארות והצללות בתמונה שלקחנו מהגוגל או מפינטרסט כדי שנוכל ליצור עומק וחיות בציור',
        'מיקי מאוס',
        'באגס באני',
        'טוויטי',
        'בונוס! צירפתי לך PDF עם דפי תרגול להורדה כדי שתוכלי להתחיל להתאמן!',
      ]
    },

  ];

  return <>
    <div className={styles.container}>
      <h1 className={styles.title}>תוכנית הקורס</h1>
      <div className={styles.chaptersContainer}>
        {chapters.map((chapter, chapterIndex) => (
          <div key={chapterIndex} className={styles.chapter}>
            <h2 className={styles.chapterTitle}>{chapter.title}</h2>
            {chapter.lessons && (
              <ul className={styles.lessonList}>
                {chapter.lessons.map((lesson, lessonIndex) => (
                  <li key={lessonIndex} className={styles.lessonItem}>
                    <span className={styles.lessonNumber}>שיעור {lessonIndex + 1}</span>
                    <span className={styles.lessonText}>{lesson}</span>
                  </li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>
    </div>
    <PinkButton text="מעיין, אני רוצה את הקורס!"/>
   </>
};

export default DrawSyllabus;