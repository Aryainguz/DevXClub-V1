import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from '@chakra-ui/react'
import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { FirebaseContext } from '../context/Firebase'

const Main = () => {
  const {logoutHandle} = useContext(FirebaseContext)
  const navigate = useNavigate()

  const handleLogout = () => {
    logoutHandle();
    navigate('/login?query=logout')
  }
  return (
    <>
      <h1 style={{color:"white"}}>hello</h1>
      <Button
                bg={'blue.400'}
                color={'white'}
                onClick={handleLogout}
                _hover={{
                  bg: 'blue.500'
                }}>
                Logout
              </Button>
    </>
  )
}

export default Main