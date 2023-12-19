import React from 'react'
import Features from './Features';
import CTA from './CTA';
import Footer from './Footer';
import {
  Flex,
  Container,
  Heading,
  Stack,
  Text,
  Button,
  Icon,
  IconProps,
  Image
} from '@chakra-ui/react'
import imgx2 from "../images/imgx2.png"
import Header from './Header';
import Illustration from './Illustration';
import Articles from './Articles';
import FeaturesTwo from './FeaturesTwo';

function Home() {
  return (
    <>
    <Header/>
    <Container maxW={'5xl'} marginTop={['4','-8']} p={['6','4']} h="100%">
      <Stack
        textAlign={'center'}
        align={'center'}
        spacing={{ base:8, md: 10 }}
        py={{ base: 20, md: 28 }}>
        <Heading
          fontWeight={500}
          fontSize={{ base: '6xl', sm: '4xl', md: '6xl' }}
          lineHeight={'100%'}
          mt={'16'}
          fontFamily={'fantasy'}
          > 
          Welcome to{' '}
          <Text as={'span'} color={'purple.200'}>

          Dev
          </Text>
          <Text as={'span'} color={'purple.400'}>
            Club.
          </Text>
        </Heading>
        <Text color={'gray.400'} maxW={'3xl'} fontFamily={'mono'}>
        DevClub is a place to make your ideas into reality.
        </Text>
        <Stack spacing={6} direction={'col'}>
          <Button
            rounded={'full'}
            px={6}
            colorScheme={'purple'}
            bg={'purple.400'}
            _hover={{ bg: 'purple.500' }}>
            Get started
          </Button>
          <Button rounded={'full'} px={6}>
            Learn more
          </Button>
        </Stack>
        <Flex w={['100%','55%']} mt={['0','-14']}>
          {/* <Image src={imgx2}></Image> */}
          <Illustration height={{ sm: '24rem', lg: '20rem' }} />
        </Flex>
      </Stack>
      <Features/>
    </Container>
    <Articles/>
    <CTA/>
    <Footer/>
      </>
    
  )
}

export default Home