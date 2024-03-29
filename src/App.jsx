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
import Home from './components/Home';
import Signup from './components/Signup';
import Signin from './components/Signin';
import Main from './components/Main';
import { BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import {auth} from './context/Firebase';
import { onAuthStateChanged } from 'firebase/auth';
import { FirebaseContext } from './context/Firebase';
import { useContext } from 'react';
import Error from './components/Error';

function App() {

  const {user,setUser} = useContext(FirebaseContext);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {   //auth is imported from context/firebase.jsx
      if (user) {
        setUser(user);
      } else {
        setUser(null);
      }
    });
  },[user]);

  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/register' element={<Signup/>}/>
        <Route path='/login' {...user && user.emailVerified ? {element: <Main/>} : {element: <Signin/>}}/> 
        <Route path='/devxclub' {...user && user.emailVerified ? {element: <Main/>} : {element: <Signin/>}}/>
        <Route path='*' element={<Error/>}/>
      </Routes>
    </Router>

  );
}

export default App;
