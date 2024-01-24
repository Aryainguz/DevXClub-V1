import React, { useEffect, useState } from 'react'
import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { FirebaseContext } from '../context/Firebase'
import Sidebar from './Sidebar'
import { Container, Box, Text,chakra, useColorModeValue } from '@chakra-ui/react';
import Card from './Card'
import MainCTA from './MainCTA'
import { getDocs, collection } from "firebase/firestore";

const Main = () => {
  const { logoutHandle, currentUser,search,db } = useContext(FirebaseContext)
  const [data,setData] = useState([])
  const navigate = useNavigate()

  const handleLogout = () => {
    logoutHandle();
    navigate('/login?query=logout')
  }

  useEffect(() => {

    try{
      if(search!=='') {
        const filteredData = data.filter(event => event.name.toLowerCase().includes(search.toLowerCase()))
        setData(filteredData)
      } else {
        const getEventData = async () => {
          const querySnapshot = await getDocs(collection(db, "events"));
          let events = [];
          querySnapshot.forEach((doc) => {
              events.push(doc.data());
          });
          console.log("snapshot",querySnapshot)
          console.log("events",events)
          setData(events)
        }
        getEventData();
      }
    }
    catch(err){
      alert("Error in fetching data")
    }

  }, [search])

  return (
    <Sidebar>
      <Box>
      <MainCTA />
      <Container maxW="4xl" px={{ base: 5, md: 8 }} py={16} mx="auto">
      <Box borderRadius="md">
          <Text color={useColorModeValue("gray.700", "gray.300")} fontSize="3xl" lineHeight={1.2} fontWeight="bold" pos={'relative'} right={{ base: "24px", md: "30px", xl: "200px" }} bottom='12'
          fontFamily={'heading'}
          width={'max-content'}
          borderBottom={'3px solid'}
          borderColor={'purple.400'}
          >
           Trending Now
          </Text>
        {data.map((event, index) => (

       <Card
        key={index}
        title={event.name}
        details = {event.details}
        hashtags = {event.hashtags}
        date = {event.date}
        location = {event.location}
        time = {event.time}
        /> 
        ))}
      </Box>
    </Container>
      </Box>
    </Sidebar>
  )
}

export default Main