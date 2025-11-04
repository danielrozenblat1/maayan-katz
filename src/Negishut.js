import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import styles from './Negishut.module.css';

const Negishut = () => {
    const navigate = useNavigate();

    return (
        <div className={styles.container}>
            <button 
                onClick={() => navigate('/')} 
                className={styles.backButton}
                aria-label="חזרה לעמוד הראשי"
            >
                <ArrowRight size={20} />
                <span>חזרה לעמוד הראשי</span>
            </button>

            <div className={styles.content}>
                <h1 className={styles.mainTitle}>הצהרת נגישות</h1>

                <section className={styles.section}>
                    <p className={styles.text}>
                        <strong>Maayan's studio</strong>, אחראית על הקמת והפעלת אתר: <a href="https://maayankatz.co.il" className={styles.link}>https://maayankatz.co.il</a>. אנו רואים חשיבות רבה במתן שירות שוויוני לכלל האזרחים ובשיפור השירות הניתן לאזרחים עם מוגבלות. אנו משקיעים משאבים רבים בהנגשת האתר והנכסים הדיגיטליים שלנו על מנת להפוך את שירותי החברה לזמינים יותר עבור אנשים עם מוגבלות.
                    </p>
                    <p className={styles.text}>
                        במדינת ישראל כ-20 אחוזים מקרב האוכלוסייה הינם אנשים עם מוגבלות הזקוקים לנגישות דיגיטלית, על מנת לצרוך מידע ושירותים כללים. הנגשת האתר של <strong>Maayan's studio</strong>, נועדה להפוך אותו לזמין, ידידותי ונוח יותר לשימוש עבור אוכלוסיות עם צרכים מיוחדים, הנובעים בין היתר ממוגבלויות מוטוריות שונות, לקויות קוגניטיביות, קוצר רואי, עיוורון או עיוורון צבעים, לקויות שמיעה וכן אוכלוסייה הנמנית על בני הגיל השלישי.
                    </p>
                    <p className={styles.text}>
                        הנגשת אתר זה בוצעה על ידי חברת הנגשת האתרים <strong>"Vee הנגשת אתרים"</strong>.
                    </p>
                </section>

                <section className={styles.section}>
                    <h2 className={styles.subtitle}>רמת הנגישות באתר - AA</h2>
                    <p className={styles.text}>
                        חברת "Vee", התאימה את נגישות האתר לדפדפנים הנפוצים ולשימוש בטלפון הסלולרי ככל הניתן, והשתמשה בבדיקותיה בקוראי מסך מסוג Jaws ו- NVDA.
                    </p>
                    <p className={styles.text}>
                        מקפידה על עמידה בדרישות תקנות שוויון זכויות לאנשים עם מוגבלות 5568 התשע"ג 2013 ברמת AA. וכן, מיישמת את המלצות מסמך WCAG2.2 מאת ארגון W3C.
                    </p>
                    <p className={styles.text}>
                        בעברית: הנחיות לנגישות תכנים באינטרנט<br />
                        באנגלית: Web Content Accessibility Guidelines (WCAG) 2.0
                    </p>
                    <p className={styles.text}>
                        הנגשת האתר בוצעה בהתאם להנחיות רשות התקשוב להנגשת יישומים בדפדפני אינטרנט.
                    </p>
                </section>

                <section className={styles.section}>
                    <h2 className={styles.subtitle}>כיצד עוברים למצב נגיש?</h2>
                    <p className={styles.text}>
                        באתר מוצב אייקון נגישות (בד"כ בדפנות האתר). לחיצה על האייקון מאפשרת פתיחת של תפריט הנגישות. לאחר בחירת הפונקציה המתאימה בתפריט יש להמתין לטעינת הדף ולשינוי הרצוי בתצוגה (במידת הצורך).
                    </p>
                    <p className={styles.text}>
                        במידה ומעוניינים לבטל את הפעולה, יש ללחוץ על הפונקציה בתפריט פעם שניה. בכל מצב, ניתן לאפס הגדרות נגישות.
                    </p>
                    <p className={styles.text}>
                        התוכנה פועלת בדפדפנים הפופולריים: Chrome, Firefox, Safari, Opera בכפוף (תנאי יצרן) הגלישה במצב נגישות מומלצת בדפדפן כרום.
                    </p>
                    <p className={styles.text}>
                        האתר מספק מבנה סמנטי עבור טכנולוגיות מסייעות ותמיכה בדפוס השימוש המקובל להפעלה עם מקלדת בעזרת מקשי החיצים, Enter ו- Esc ליציאה מתפריטים וחלונות.
                    </p>
                    <p className={styles.text}>
                        לצורך קבלת חווית גלישה מיטבית עם תוכנת הקראת מסך, אנו ממליצים לשימוש בתוכנת NVDA העדכנית ביותר.
                    </p>
                </section>

                <section className={styles.section}>
                    <h2 className={styles.subtitle}>תיקונים והתאמות שבוצעו באתר:</h2>
                    <p className={styles.text}>
                        התאמה לקורא מסך - התאמת האתר עבור טכנולוגיות מסייעות כגון NVDA, JAWS. אמצעי הניווט באתר פשוטים וברורים. תכני האתר כתובים באופן ברור, מסודר והיררכי. האתר מותאם לצפייה בדפדפנים מודרניים. התאמת האתר לתצוגה תואמת מגוון מסכים ורזולוציות. כל הדפים באתר בעלי מבנה קבוע (H1/H2/H3 וכו'). לכל התמונות באתר יש הסבר טקסטואלי חלופי (alt).
                    </p>
                </section>

                <section className={styles.section}>
                    <h2 className={styles.subtitle}>פונקציונליות תוכנת נגישות:</h2>
                    <ul className={styles.list}>
                        <li>התאמה לקורא מסך - התאמת האתר עבור טכנולוגיות מסייעות כגון NVDA, JAWS</li>
                        <li>עצירת הבהובים - עצירת אלמנטים נעים וחסימת אנימציות</li>
                        <li>דילוג ישיר לתוכן - דילוג על התפריט הראשי ישירות אל התוכן</li>
                        <li>התאמה לניווט מקלדת</li>
                        <li>הגדלה / הקטנה של טקסט</li>
                        <li>ריווח בין אותיות / מילים / שורות</li>
                        <li>ניגודיות וצבע - גבוהה, הפוכה, שחור לבן</li>
                        <li>גופן קריא</li>
                        <li>הדגשת קישורים</li>
                        <li>מדריך קריאה</li>
                        <li>שינוי אייקון סמן עכבר</li>
                        <li>תיאור לתמונות</li>
                    </ul>
                </section>

                <section className={styles.section}>
                    <h2 className={styles.subtitle}>החרגות</h2>
                    <p className={styles.text}>
                        חשוב לציין, כי למרות מאמצינו להנגיש את כלל הדפים והאלמנטים באתר, ייתכן שיתגלו חלקים או יכולות שלא הונגשו כראוי או שטרם הונגשו.
                    </p>
                    <p className={styles.text}>
                        אנו פועלים לשפר את נגישות האתר שלנו כל העת, כחלק ממחויבותנו לאפשר לכלל האוכלוסייה להשתמש בו, כולל אנשים עם מוגבלות.
                    </p>
                </section>

                <section className={styles.section}>
                    <h2 className={styles.subtitle}>יצירת קשר בנושא נגישות</h2>
                    <p className={styles.text}>
                        במידה ונתקלתם בבעיה בנושא נגישות באתר, נשמח לקבל הערות ובקשות באמצעות פנייה לרכז הנגישות שלנו:
                    </p>
                    <p className={styles.text}>
                        על מנת שנוכל לטפל בבעיה בדרך הטובה ביותר, אנו ממליצים מאוד לצרף פרטים מלאים ככל שניתן:
                    </p>
                    <ul className={styles.list}>
                        <li>תיאור הבעיה</li>
                        <li>מהי הפעולה שניסיתם לבצע</li>
                        <li>קישור לדף שבו גלשתם</li>
                        <li>סוג הדפדפן וגרסתו</li>
                        <li>מערכת הפעלה</li>
                        <li>סוג הטכנולוגיה המסייעת (במידה והשתמשתם)</li>
                    </ul>
                    <p className={styles.text}>
                        <strong>Maayan's studio</strong> תעשה ככל יכולתה על מנת להנגיש את האתר בצורה המיטבית ולענות לפניות בצורה המקצועית והמהירה ביותר.
                    </p>
                </section>

                <section className={styles.contactSection}>
                    <h2 className={styles.subtitle}>רכז נגישות:</h2>
                    <p className={styles.contactText}>
                        <strong>מעיין כץ</strong><br />
                        <a href="tel:0526814224" className={styles.link}>0526814224</a><br />
                        <a href="mailto:Maayanel1611@gmail.com" className={styles.link}>Maayanel1611@gmail.com</a>
                    </p>
                    <p className={styles.updateDate}>
                        תאריך עדכון הצהרת נגישות: 30-10-2024
                    </p>
                </section>
            </div>
        </div>
    );
};

export default Negishut;