import { Drawer, DrawerBody, DrawerHeader, DrawerOverlay, DrawerContent, DrawerCloseButton, Button, useDisclosure, VStack, HStack, Box } from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import { BiMenuAltLeft } from "react-icons/bi"
import { useContext } from 'react'
import { FirebaseContext } from '../context/Firebase'

import React from 'react'

const Header = () => {
    const { isOpen, onClose, onOpen } = useDisclosure()
     return (
        <Box bgColor={"whiteAlpha.900"}>
            <Button zIndex={"overlay"} pos={"fixed"} top={"6"} left={"8"} colorScheme='purple' borderRadius={'full'} p="0" w={"10"} h={"10"} onClick={onOpen}>
                <BiMenuAltLeft size={"25"}>

                </BiMenuAltLeft>
            </Button>

            <Drawer isOpen={isOpen} placement='left' onClose={onClose}>
                <DrawerOverlay>
                    <DrawerContent>
                        <DrawerCloseButton />
                        <DrawerHeader colorScheme="purple" p="4" as={Link} to={'/'}>DevClub</DrawerHeader>
                        <DrawerBody>
                            <VStack alignItems={"flex-start"}>
                                <Link to="/">
                                    <Button onClick={onClose} colorScheme='purple' variant={"ghost"} className='ho'>
                                        Home
                                    </Button>
                                </Link>
                                <Link to="/devxclub">
                                    <Button onClick={onClose} colorScheme='purple' variant={"ghost"}>
                                        DevClub
                                    </Button>
                                </Link>
                                <a href="https://chat.whatsapp.com/KSdvT1gNzSL1R5zwuytwQc" target='_blank'>
                                    <Button onClick={onClose} colorScheme='purple' variant={"ghost"}>
                                        Community
                                    </Button>
                                </a>
                            </VStack>
                            <HStack pos={"absolute"} bottom={"10"} left={"4"}>
                                <Link to={'/login'}>
                                    <Button onClick={onClose} colorScheme='purple'>
                                        Login
                                    </Button>
                                </Link>

                                <Link to={'/register'}>
                                    <Button onClick={onClose} colorScheme='purple' variant={'outline'}>
                                        Sign Up
                                    </Button>
                                </Link>
                            </HStack>
                        </DrawerBody>
                    </DrawerContent>
                </DrawerOverlay>
            </Drawer>
        </Box>

    )
}

export default Header