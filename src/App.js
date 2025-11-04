import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Negishut from './Negishut';
import Wrapper from './Wrapper';

function App() {
  return <>
 
  <Router>
    <Routes>
    <Route path="/" index element={<Wrapper/>}/>
    <Route path="/Negishut" index element={<Negishut/>}/>


 </Routes>
 </Router>
  </>
}

export default App;
