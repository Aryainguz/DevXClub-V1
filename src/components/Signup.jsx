import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Stack,
  Button,
  Heading,
  Text,
  useColorModeValue,
} from '@chakra-ui/react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { FcGoogle } from 'react-icons/fc'
import { Center } from '@chakra-ui/layout'
import { useContext } from 'react'
import { FirebaseContext } from '../context/Firebase'
import toast, { Toaster } from 'react-hot-toast';                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              

const Signup = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [password2, setPassword2] = useState('')


  const { signUpwithEmail, signInWithGoogle } = useContext(FirebaseContext);

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (password !== password2) {
      toast.error('Passwords do not match')
      return
    }
    else if (password.length < 6) {
      toast.error('Password must be atleast 6 characters long')
      return
    }
    try {
      const myPromise = signUpwithEmail(email, password)
      toast.promise(myPromise, {
        loading: 'Just a sec!',
        success: 'Verification email sent!',
        error: 'Error when fetching',
      });
    } catch (error) {
      console.log(error.message)
    }
  }

  const handleGoogleSignIn = async () => {
    try {
      await signInWithGoogle()
      if (signInWithGoogle) {
        navigate('/login')
      }
    } catch (error) {
      toast.error(error.message)
    }
  }

  return (
    <Flex
      minH={'100vh'}
      align={'center'}
      justify={'center'}
      bg={useColorModeValue('gray.50', 'gray.800')}>
      <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
        <Stack align={'center'}>
          <Heading fontSize={['3xl', '4xl']} mt={'9'}>Register your account!</Heading>

        </Stack>
        <Box
          rounded={'lg'}
          bg={useColorModeValue('white', 'gray.700')}
          boxShadow={'lg'}
          p={8}>
          <Stack spacing={4}>
            <form onSubmit={handleSubmit}>

              <FormControl id="email">
                <FormLabel>Email address</FormLabel>
                <Input required type="email" name='email' onChange={(e) => { setEmail(e.target.value) }} />
              </FormControl>

              <FormControl id="password">
                <FormLabel>Password</FormLabel>
                <Input required type="password" name="password" onChange={(e) => { setPassword(e.target.value) }} />
              </FormControl>

              <FormControl id="password2">
                <FormLabel>Confirm Password</FormLabel>
                <Input required type="password" name="password2" onChange={(e) => { setPassword2(e.target.value) }} />
              </FormControl>

              <Stack spacing={10}>
                <Stack
                  direction={{ base: 'column', sm: 'row' }}
                  align={'start'}
                  justify={'space-between'}>
                  <Text color={'purple.300'} mt={'5'}>Already have an account ?</Text>
                </Stack>
                <Link to={'/login'}>
                  <Text fontSize='medium' mt={'-9'} color={'purple.400'}>Login</Text></Link>
                <Button
                  bg={'purple.400'}
                  color={'white'}
                  type='submit'
                  mt={'-7'}
                  _hover={{
                    bg: 'purple.500',
                  }}>
                  Register
                </Button>
              </Stack>
              <br />
              <Button w={'full'} variant={'outline'} leftIcon={<FcGoogle />} onClick={handleGoogleSignIn}>
                <Center>
                  <Text>Sign in with Google</Text>
                </Center>
              </Button>
            </form>

          </Stack>
        </Box>
      </Stack>
      <Toaster />
    </Flex>
  )
}

export default Signup