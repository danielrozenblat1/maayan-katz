
import NavBarNew from './components/NewNav/NavBarNew';
import Recommends from './components/recommends/Recommends';
import Students from './components/recommends/Students';
import AboutMe from './components/me/Me';
import FirstScreen from './screens/FirstScreen';
import CollapsibleSyllabus from './components/cousre/Course';
import ThirdScreen from './screens/ThirdScreen';
import FifthScreen from './screens/FifthScreen';
import SecondScreen from './screens/SecondScreen';
import ForthScreen from './screens/ForthScreen';
import ByMe from './components/ByMe/ByMe';
import DrawComponent from './components/DrawCourse/DrawCourse';
import DrawSillabus from './components/DrawCourse/DrawSillabus';
import SixthScreen from './screens/SixthScreen';
import PrivacyPolicy from './privacy/Privacy';
const Wrapper=()=>{

  return <>
  <div style={{overflowX:"hidden"}}>
  <NavBarNew/>
  <FirstScreen/>
  <SecondScreen/>

  <ForthScreen/>

  <ThirdScreen/>
  <DrawComponent/>
  <DrawSillabus/>
  {/* <Students/>
  <Recommends/> */}
 <AboutMe/>
 <FifthScreen/>
<SixthScreen/>
<div style={{textAlign:'center' ,margin:"2% auto"}}><a href="/negishut" style={{fontFamily:"AssistantR", fontSize:"1rem" ,textDecoration:"underline",}}>הצהרת נגישות</a></div>
<PrivacyPolicy 
  ownerName="מעיין כץ" 
  email="maayanel1611@gmail.com" 
  phone="+972 52-681-4224" 
  domain="https://maayankatz.co.il/" 
/>
<ByMe/>

</div>
</>
}
export default Wrapper