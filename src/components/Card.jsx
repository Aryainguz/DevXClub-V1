import {
  Box,
  Heading,
  Spacer,
  Button,
  VStack,
  HStack,
  Grid,
  Text,
  useColorModeValue,
  Icon,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  ButtonGroup,
} from "@chakra-ui/react"

import {
  FormLayout,
  PrevButton,
  NextButton,
  FormStepper,
  StepsCompleted,
  LoadingOverlay,
  LoadingText,
} from '@saas-ui/react'

import { FaCalendar, FaMapMarkedAlt } from "react-icons/fa"
import { Link } from "react-router-dom"
import React from "react"
import { StepForm } from '@saas-ui/forms/yup'
import * as yup from 'yup'
import { addDoc, collection, getDocs } from "firebase/firestore"
import { FirebaseContext } from '../context/Firebase'
import { useContext } from 'react'
import toast,{Toaster} from 'react-hot-toast'



function Card({
  title,
  details,
  time,
  date,
  location,
  hashtags
}) {

  const { db, user } = useContext(FirebaseContext)
  const { isOpen, onOpen, onClose } = useDisclosure()
  const initialRef = React.useRef()
  const finalRef = React.useRef()

  const steps = [
    {
      name: 'Personal Details',
      schema: yup.object({
        name: yup.string().label('Name'),
        college: yup.string().label('College'),
        Branch: yup.string().label('Branch'),
        Year: yup.string().label('Year'),
      }),
    },
    {
      name: 'Social Details',
      schema: yup.object({
        linkedin: yup.string().label('LinkedIn'),
        github: yup.string().label('GitHub'),
        discord: yup.string().label('Discord'),
        twitter: yup.string().label('Twitter'),
      }),
    },
    {
      name: "Event Details",
      user_email: user.email,
      event_name: title,
      event_date: date,
      event_time: time,
      event_location: location
    }
  ]
  const onSubmit = async (params) => {
    try {
      const querySnapshot = await getDocs(collection(db, "registrations"));
      let registrations = [];
      querySnapshot.forEach((doc) => {
        registrations.push(doc.data());
      });
      let x = registrations.filter(registration => registration.user_email === params.user_email && registration.event_name === params.event_name )
      if (x.length > 0) {
         toast.error("You have already registered for this event!")   
      }
      else{

        await addDoc(collection(db, "registrations"), {
          ...params
        })
  
        await fetch("https://dev-x-club-server.vercel.app/api/send", {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            ...params
          })
        })
        
      }

    }
    catch (e) {
      alert("Error Occured")
    }
  }
  return (
    <Box
      mt="3"
      as="article"
      bg="white"
      borderRadius="md"
      overflow="hidden"
      border="1px solid #000"
      _hover={{ boxShadow: "lg" }}
      transition="all 0.3s ease"
    >
      <Grid
        templateColumns={{ base: "1fr", sm: "max-content 1fr" }}
        gap={2}
        p={4}
        bg={useColorModeValue("gray.100", "gray.800")}
      >
        <HStack d={{ base: "flex", sm: "block" }}>
          <VStack
            align="flex-start"
            spacing={0}
            d={{ base: "flex", sm: "none" }}
          >

          </VStack>
        </HStack>
        <Box>
          <VStack
            align="flex-start"
            spacing={0}
            d={{ base: "none", sm: "flex" }}
          >
            <HStack>
              <Text color={useColorModeValue("gray.700", "gray.400")} fontSize="12px">
                {date} -
              </Text>
              <Text color={useColorModeValue("gray.700", "gray.400")} fontSize="12px">
                {time}
              </Text>
            </HStack>

          </VStack>
          <Heading fontSize={{ base: "xl", sm: "3xl" }} mt="3">
            <Text
              color={useColorModeValue("gray.700", "gray.400")}
              textDecoration='none'
            >
              {title}
            </Text>
          </Heading>
          <br />
          <Text
            color={useColorModeValue("gray.700", "gray.400")}
            fontSize="14px"
          >
            {details}
          </Text>
          <HStack mt="3" fontSize="14px" color="#64707d">

            {
              hashtags.map((hashtag, index) => (
                <Text as={Link} key={index} >
                  #{hashtag}
                </Text>
              ))
            }


          </HStack>
          <HStack mt={3}>

            <Button
              bg="transparent"
              padding="6px 8px"
              height="auto"
              fontWeight="normal"
              fontSize="14px"
              lineHeight="1.2"
              rounded="md"
              _hover={{ bg: useColorModeValue("gray.200", "gray.600") }}
            >
              <Icon
                as={FaMapMarkedAlt}
                color={useColorModeValue("gray.600", "gray.400")}
              />
              <Box ml="2" as="span" d={{ base: "none", sm: "block" }} color={useColorModeValue("gray.600", "gray.400")}>
                {location.split(',')[0]}
              </Box>
              <Icon
                ml={'4'}
                as={FaCalendar}
                color={useColorModeValue("gray.600", "gray.400")}
              />
              <Box ml="2" as="span" d={{ base: "none", sm: "block" }} color={useColorModeValue("gray.600", "gray.400")}>
                26 May 2024
              </Box>
            </Button>
            <Spacer />
            <Button
              bg={useColorModeValue("gray.200", "gray.600")}
              padding="8px 12px"
              height="auto"
              fontWeight="normal"
              fontSize="14px"
              rounded="md"
              _hover={'purple.500'}
              color={useColorModeValue("gray.200", "gray.200")}
              backgroundColor={'purple.500'}
              onClick={onOpen}
            >
              Register
            </Button>
          </HStack>
        </Box>
      </Grid>

      <Modal
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalOverlay />
        <ModalContent mx={['4', '0']}>
          <ModalHeader>Register For {title} </ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <StepForm
              steps={steps}
              initialValues={{
                name: '',
                college: '',
                Branch: '',
                Year: '',
                linkedin: '',
                github: '',
                discord: '',
                twitter: '',
                event_name: `${title}`,
                event_time: `${time}`,
                event_date: `${date}`,
                event_location: `${location}`
              }}
              onSubmit={onSubmit}
            >
              {({ Field, FormStep }) => (
                <FormLayout>
                  <FormStepper orientation="vertical">
                    <FormStep name="Personal Details" title="Personal details">
                      <FormLayout>
                        <Field name="name" isRequired label="Name" />
                        <Field name="college" isRequired label="College" />
                        <Field name="Branch" isRequired label="Branch" />
                        <Field name="Year" isRequired label="Year" />
                        <NextButton />
                      </FormLayout>
                    </FormStep>
                    <FormStep name="Social Details" title="Social Details">
                      <FormLayout>
                        <Field name="linkedin" isRequired label="LinkedIn" />
                        <Field name="github" isRequired label="GitHub" />
                        <Field name="discord" isRequired label="Discord" />
                        <Field name="twitter" isRequired label="Twitter" />
                        <ButtonGroup>
                          <NextButton />
                          <PrevButton variant="ghost" />
                        </ButtonGroup>
                      </FormLayout>
                    </FormStep>
                    <FormStep name="confirm" title="Confirm">
                      <FormLayout>
                        <Field name="event_name" value={title} isRequired hidden />
                        <Field name="event_time" value={time} isRequired hidden />
                        <Field name="event_date" value={date} isRequired hidden />
                        <Field name="user_email" value={user.email} isRequired hidden />
                        <Field name="event_location" value={location} isRequired hidden />
                        <ButtonGroup>
                          <NextButton />
                          <PrevButton variant="ghost" />
                        </ButtonGroup>
                      </FormLayout>
                    </FormStep>
                    <StepsCompleted>
                      <LoadingOverlay>
                        <LoadingText>Successfully Submitted!</LoadingText>
                      </LoadingOverlay>
                    </StepsCompleted>
                  </FormStepper>
                </FormLayout>
              )}
            </StepForm>
          </ModalBody>
          <ModalFooter>
            <Button onClick={onClose}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
      <Toaster/>
    </Box>


  )
}

export default Card
