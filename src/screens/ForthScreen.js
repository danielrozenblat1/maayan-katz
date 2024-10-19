import styles from "./ForthScreen.module.css"
import practice from "../images/תרגול.png"
import wait from "../images/סבלנות.png"
import always from "../images/התמדה.png"
const ForthScreen=()=>{
    const what = [
        { text: "לתרגל את המשימות שאת מקבלת לאורך הקורס - כשרון לא מגיע ברגע, הוא נבנה עם הזמן ועם התרגול של הדברים", image: practice },
        { text: "להתמיד ולא לוותר גם כשקשה לך ופחות הולך", image: wait},
        { text: "סבלנות ואמונה בתהליך - לפעמים קשה לנו לתפוס דברים בהתחלה - תתני לעצמך את הזמן והרוגע שדרושים להצלחה ולהבנה", image:always},
      
      ];
      const renderPairs = (items) => {
        return items.reduce((acc, item, index) => {
          if (index % 2 === 0) {
            acc.push(
              <div key={index} className={styles.pairContainer}>
                {renderItem(item, index)}
                {items[index + 1] && renderItem(items[index + 1], index + 1)}
              </div>
            );
          }
          return acc;
        }, []);
      };
    
      const renderItem = (item, index) => (
        <div key={index} className={styles.item}>
          <img src={item.image} alt="" className={`${styles.itemImage} reveal-image`} />
          <p className="reveal-text">{item.text}</p>
        </div>
      );
    return <>
        <div className={styles.container}>
<div className={styles.subtitle}>לצייר על ציפורן ברמה גבוהה לא קורה בלילה אחד.. </div>
<div className={styles.title}>זה ידרוש ממך</div>
<div className={styles.solutionsContainer}>
{renderPairs(what)}
</div>
</div>
    </>
}
export default ForthScreen