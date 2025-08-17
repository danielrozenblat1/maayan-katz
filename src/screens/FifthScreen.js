import Box from "../components/box/Box"
import styles from "./FifthScreen.module.css"
import nail from "../Icons/wired-outline-1592-nail-polish-hover-pinch.json"
import IconTextComponent from "../components/can/Can"
import CollapsibleSyllabus from "../components/cousre/Course"
const FifthScreen=()=>{


return <>
<div className={styles.description}>ואם את לא מניקורסטית אבל מאוהבת בתחום ורוצה להתחיל ללמוד אותו</div>
<div className={styles.title}>הגעת למקום הנכון!</div>
<div className={styles.description}>את יכולה</div>
<div className={styles.row}>
<IconTextComponent text="לקום כל בוקר בתחושה של הגשמה עצמית" icon={nail}/>
<IconTextComponent text="להרוויח סכומים שרק חלמת עליהם עליהם" icon={nail}/>
<IconTextComponent text="לנהל את עצמך ולא להיות תלוייה באף אחד!" icon={nail}/>
</div>
<div className={styles.description}>אני מעבירה קורסים והשתלמויות שמקנים לך את כל הכלים כדי שתצאי לדרך עצמאית כשאת בטוחה בעצמך,מאמינה בעצמך ויודעת מה את שווה!</div>
<CollapsibleSyllabus/>

</>


}
export default FifthScreen