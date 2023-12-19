import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Button } from '@chakra-ui/react'
import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { FirebaseContext } from '../context/Firebase'
import Sidebar from './Sidebar'

const Main = () => {
  const {logoutHandle,currentUser} = useContext(FirebaseContext)
  const navigate = useNavigate()
  const [userName, setUserName] = React.useState('')
  
  useEffect(()=>{
    const data = currentUser()
    setUserName(data.email.split('@')[0])
  })
  const handleLogout = () => {
    logoutHandle();
    navigate('/login?query=logout')
  }
  return (
    <Sidebar>
    <br /> <br /> <br />
      <h1>Hi, {userName}! This page is under construction</h1>

      <Button
                bg={'blue.400'}
                color={'white'}
                onClick={handleLogout}
                _hover={{
                  bg: 'blue.500'
                }}>
                Logout
              </Button>

    </Sidebar>
  )
}

export default Main