import React from 'react'
import {
    AlertDialogBody,
    AlertDialogCloseButton,
    AlertDialogContent,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogOverlay,
    Box,
    Button,
    chakra,
    Flex,
    GridItem,
    Icon,
    SimpleGrid,
    Stack,
    useDisclosure,
    AlertDialog,
    Image
} from '@chakra-ui/react'
import imgx from "../images/imgx.png"


const CTA = () => {
    const Feature = (props) => (
        <Flex
            alignItems="center"
            color={null}
            _dark={{
                color: "white",
            }}
        >
            <Icon
                boxSize={4}
                mr={1}
                color="green.600"
                viewBox="0 0 20 20"
                fill="currentColor"
            >
                <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                ></path>
            </Icon>
            {props.children}
        </Flex>
    );

    const { isOpen, onOpen, onClose } = useDisclosure()
    const cancelRef = React.useRef()

    return (
        <Box px={[8,4]} py={[28,32]} mx="auto">
            <Image src={imgx} alt='illustration' margin={'auto'}></Image>
            <Box
                w={{
                    base: "full",
                    md: 11 / 12,
                    xl: 8 / 12,
                }}
                textAlign={{
                    base: "left",
                    md: "center",
                }}
                mx="auto"
            >
                <chakra.h1
                    mb={3}
                    fontSize={{
                        base: "4xl",
                        md: "5xl",
                    }}
                    fontWeight={{
                        base: "bold",
                        md: "extrabold",
                    }}
                    color="gray.900"
                    _dark={{
                        color: "gray.100",
                    }}
                    lineHeight="shorter"
                >
                Events && Workshops
                </chakra.h1>
                <chakra.p
                    mb={6}
                    fontSize={{
                        base: "lg",
                        md: "xl",
                    }}
                    color="gray.500"
                    lineHeight="base"
                >
                    Join us for the coolest tech. events and workshops where you can network with like-minded people and learn from the best in the industry.
                    <br /> <br />
                    <Button
                        onClick={onOpen}
                        as={GridItem}
                        w="auto"
                        variant="solid"
                        colSpan={{
                            base: "auto",
                            lg: 2,
                        }}
                        size="lg"
                        type="submit"
                        colorScheme="brand"
                        cursor="pointer"
                        bg={'purple.400'}
                    >
                        A TXW Innovation
                    </Button>
      <AlertDialog
        motionPreset='slideInBottom'
        leastDestructiveRef={cancelRef}
        onClose={onClose}
        isOpen={isOpen}
        isCentered
      >
        <AlertDialogOverlay />
        <AlertDialogContent>
          <AlertDialogHeader></AlertDialogHeader>
          <AlertDialogCloseButton />
          <AlertDialogBody>
           DevClub is powered by The Xiting Way ( TXW ), <br />
            a software development company from Chandigarh, India. Our motto of revolutionizing technology for the 21st century is a testament to DevClub's foundation. <br /> <a href="https://www.thexitingway.com/" target='_blank'>www.thexitingway.com</a> 
          </AlertDialogBody>
          <AlertDialogFooter>
           - Team DevClub
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
                </chakra.p>
                <SimpleGrid
                    as="form"
                    w={{
                        base: "full",
                        md: 7 / 12,
                    }}
                    columns={{
                        base: 1,
                        lg: 6,
                    }}
                    spacing={3}
                    pt={1}
                    mx="auto"
                    mb={8}
                >
                    <GridItem
                        as="label"
                        colSpan={{
                            base: "auto",
                            lg: 2,
                        }}
                    >
                    </GridItem>

                </SimpleGrid>
                <Stack
                    display="flex"
                    direction={{
                        base: "column",
                        md: "row",
                    }}
                    justifyContent={{
                        base: "start",
                        md: "center",
                    }}
                    mb={3}
                    spacing={{
                        base: 2,
                        md: 8,
                    }}
                    fontSize="xs"
                    color="gray.600"
                >
                    <Feature>Begin</Feature>
                    <Feature>Learn</Feature>
                    <Feature>Lead</Feature>
                </Stack>
            </Box>
        </Box>
    );
};

export default CTA