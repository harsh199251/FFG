import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Main from './components/Main';
import Safety from './components/Safety';
import Whyus from './components/Whyus';
import Franchise from './components/Franchise';
import Checkout from './components/Checkout';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Routes
} from "react-router-dom";
import Train from './components/Train';

function App() {
  return (
    <>
    <Routes>
    <Route path='/' element= {<Main/>}/>
    <Route path='/safety' element={<Safety/>}/>
    <Route path='/whyus' element={<Whyus/>}/>
    <Route path='/franchise' element={<Franchise/>}/>
    <Route path='/check' element={<Checkout/>}/>
    <Route path='train'  element={<Train/>}/>
    </Routes> 
    {/* <Whyus/> */}
    </> 
  );
}

export default App;
