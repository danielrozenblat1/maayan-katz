import logo from './logo.svg';
import './App.css';
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

function App() {
  return <>
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
 <ByMe/>
  </>
}

export default App;
