import React, { useEffect,useState } from 'react';
import {
  ChakraProvider,
  Box,
  Text,
  Link,
  VStack,
  Code,
  Grid,
  theme,
} from '@chakra-ui/react';
import { ColorModeSwitcher } from './ColorModeSwitcher';
import Header from './components/Header';
import Home from './components/Home';
import Signup from './components/Signup';
import Signin from './components/Signin';
import Main from './components/Main';
import { BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import {auth} from './context/Firebase';
import { onAuthStateChanged } from 'firebase/auth';
import About from './components/About';
import Footer from './components/Footer';


function App() {

  const [user,setUser] = useState(null);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {   //auth is imported from context/firebase.jsx
      if (user) {
        setUser(user);
      } else {
        setUser(null);
      }
    }
  )}, []);
  return (
    <Router>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/register' element={<Signup/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/login' 
        {...user ? {element: <Main/>} : {element: <Signin/>}}/> 
      </Routes>
      <Footer/>
    </Router>

  );
}

export default App;
