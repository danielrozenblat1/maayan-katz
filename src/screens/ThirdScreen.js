import Box from "../components/box/Box"
import styles from "./ThirdScreen.module.css"
import nail from "../Icons/wired-outline-1594-manicure-hover-pinch (1).json"
import Students from "../components/recommends/Students"
import business from "../Icons/wired-outline-279-avatar-female-plus-hover-pinch.json"
import sign from "../Icons/wired-outline-1018-signature-sig-hover-pinch.json"
import PinkButton from "../components/SellButton/SellButton"
const ThirdScreen=()=>{


return <>
<div className={styles.title}>"מעיין איך הקורס תורם למניקוריסטיות?"</div>
<div className={styles.description}>שאלה ששאלתי את עצמי לא פעם ולא פעמיים לפני שלקחתי כמה וכמה קורסים דיגיטליים בתחילת דרכי, ובזכות זה ידעתי איך לדייק את עצמי לקורס מרוכז אחד!!</div>
<div className={styles.description}>ועכשיו, כשאני כבר אחרי.. אני יכולה להגיד לך שלהוסיף את היכולת הזו לסל השירותים שלך יתרום לך מכמה וכמה סיבות..</div>
{/* <div className={styles.description}>אמנם לדעת לצייר על ציפורן זה לא חובה אבל</div> */}
<div className={styles.row}>
<Box title="זה האינטרס שלך" description="בתור עצמאית, את לא רוצה להישאר במקום, להיות בעשייה עבור העסק שלך רק יוסיף ללקוחה שלך ערך מוסף שאני תמיד ממשיכה להתפתח ולהתמקצע. הלקוחה רואה את זה- מתלהבת- משתפת- מפרסמת, ואת מרוויחה!" icon={nail}/>
<Box title="שירות נוסף לעסק" description="בעסק כמו שלנו טיפול אחת על אחת דורש את מלוא תשומת הזמן וההשקעה לכל אחת בנפרד. ואם כבר אני משקיעה את הזמן עבור כל לקוחה בנפרד-למה לא להרוויח מזה יותר כסף? ועל הדרך גם לקבל פרסום מפה לאוזן מאותן לקוחות שמדגמנות את האומנות שלך?" icon={business}/>
<Box title="דינמיות ובידול" description="היום השוק מוצף באלפי מניקוריסטיות, והתחום הולך ומתקדם, וגם את צריכה!
את חייבת לעניין את קהל הלקוחות שלך, גם הקיים וגם העתידי, לתת שירות שלקוחות לא יראו באף מקום אחר ויחכו להגיע רק אלייך, להיות ייחודית ולהבדיל את עצמך ממקצועיות אחרות." icon={sign}/>
</div>
<Students/>
<PinkButton text="ראיתי מספיק ואני רוצה את הקורס!" url="https://my.schooler.biz/s/83690/NAILPAINT?utm_source=DRAWLIKEAPRO"/>
</>


}
export default ThirdScreen