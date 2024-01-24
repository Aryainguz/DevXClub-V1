import * as React from 'react';
import {
  chakra,
  Container,
  Stack,
  HStack,
  Text,
  useColorModeValue,
  Button,
  Image,
  Skeleton,
  Box,
  Link,
  Icon
} from '@chakra-ui/react';
// Here we have used react-icons package for the icons
import { GoChevronRight } from 'react-icons/go';
import bust from '../images/bust.png'
import Features from './Features';
import { HashLink } from 'react-router-hash-link';

const Hero = () => {
  return (
    <>
      <br /> <br />
      <Container maxW="6xl" px={['7', '0']} py={'28'}>
        <Stack direction={{ base: 'column', md: 'row' }} justifyContent="center">
          <Stack direction="column" spacing={6} justifyContent="center" >
            <HStack
              as={Link}
              p={1}
              rounded="full"
              fontSize="sm"
              w="max-content"
              bg={useColorModeValue('gray.300', 'gray.700')}
            >
              <Box
                py={1}
                px={2}
                lineHeight={1}
                rounded="full"
                color="white"
                backgroundColor='purple.400'
              >
                Powered By
              </Box>
              <HStack spacing={1} alignItems="center" justifyContent="center">
                <a href="https://www.thexitingway.com/" target='_blank'>
                <Text lineHeight={1} >The Xiting Way</Text></a>
                <Icon as={GoChevronRight} w={4} h={4} />
              </HStack>
            </HStack>
            <chakra.h1 textAlign="left" fontWeight={'bold'} fontSize={{ base: '6xl', sm: '4xl', md: '6xl' }}
          lineHeight={'100%'}>
              Hello World! <br />
              <chakra.span color='teal.500'>Welcome to </chakra.span>
              <Text as={'span'} color={'purple.400'}>

                Dev
              </Text>
              <Text as={'span'} color={'purple.500'}>

                X
              </Text>
              <Text as={'span'} color={'purple.400'}>
                Club.
              </Text>
            </chakra.h1>
            <Text
              fontSize="1.2rem"
              textAlign="left"
              lineHeight="1.375"
              fontWeight="400"
              color="gray.500"
            >
              DevXClub is a community of developers from beginners to leaders, united with passion to make their ideas into reality. 
            </Text>
            <HStack
              spacing={{ base: 0, sm: 2 }}
              mb={{ base: '3rem !important', sm: 0 }}
              flexWrap="wrap"
            >
              <chakra.button
                w={{ base: '100%', sm: 'auto' }}
                h={12}
                px={6}
                color="white"
                size="lg"
                rounded="md"
                mb={{ base: 2, sm: 0 }}
                zIndex={5}
                lineHeight={1}
                backgroundColor={'purple.400'}
                _hover={{ bg: 'purple.500' }}
              >
                <chakra.span as={HashLink} to={'/register'}> Get Started </chakra.span>
              </chakra.button>
              {/* <Box
                d="flex"
                justifyContent="center"
                w={{ base: '100%', sm: 'auto' }}
                border="1px solid"
                borderColor="gray.300"
                p={3}
                lineHeight={1.18}
                rounded="md"
                boxShadow="md"
                as={Link}
                zIndex={55555555}
              >
                Watch Video
              </Box> */}
            </HStack>
          </Stack>
          <Box ml={{ base: 0, md: 5 }} pos="relative">
            <DottedBox />
            <Image
              w={['330px', '99px']}
              minW={{ base: 'auto', md: '30rem' }}
              objectFit="cover"
              src={bust}
              rounded="md"
              fallback={<Skeleton />}
            />
          </Box>
        </Stack>
      </Container>
      <Features />
    </>
  );
};

function DottedBox() {
  return (
    <Box position="absolute" left="-45px" top="-30px" height="full" maxW="700px" zIndex={-1}>
      <svg
        color={useColorModeValue('rgba(55,65,81, 0.1)', 'rgba(55,65,81, 0.7)')}
        width="350"
        height="420"
        fill="none"
      >
        <defs>
          <pattern
            id="5d0dd344-b041-4d26-bec4-8d33ea57ec9b"
            x="0"
            y="0"
            width="20"
            height="20"
            patternUnits="userSpaceOnUse"
          >
            <rect x="0" y="0" width="4" height="4" fill="currentColor"></rect>
          </pattern>
        </defs>
        <rect width="404" height="404" fill="url(#5d0dd344-b041-4d26-bec4-8d33ea57ec9b)"></rect>
      </svg>
    </Box>
  );
}

export default Hero;