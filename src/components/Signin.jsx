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
  Center
} from '@chakra-ui/react'
import { Link, useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import toast,{Toaster} from 'react-hot-toast'
import { useContext } from 'react'
import { FirebaseContext} from '../context/Firebase'
import { FcGoogle } from 'react-icons/fc'




const Signin = ()=>{
  const { signInWithEmail,currentUser,signInWithGoogle} = useContext(FirebaseContext);

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const location = useLocation();
  const navigate = useNavigate();
  const searchParams = new URLSearchParams(location.search);
  const query = searchParams.get('query');

  useEffect(()=>{
    if(query === 'success'){
      toast.success('Account created successfully')
    }
    else if(query === 'logout'){
      toast.success('Logged out successfully')
    }
  },[])


  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
        await signInWithEmail(email, password)
        const data = currentUser()
        const emailVerified = data.emailVerified
      if(emailVerified){
        toast.success('Logged in successfully')
        navigate('/devxclub')
      }
      else{
        toast.error('Please verify your email address!')
      }
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
          <Heading fontSize={'4xl'}>Sign in to DevXClub!</Heading>
          <Text fontSize={'lg'} color={'gray.600'}>
            <Text color={'purple.400'}>Welcome Back!</Text>
          </Text>
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
              <Input type="email" name='email' isRequired onChange={(e)=>setEmail(e.target.value)}/>
            </FormControl>
            <FormControl id="password">
              <FormLabel>Password</FormLabel>
              <Input type="password" name='password' isRequired onChange={(e)=>setPassword(e.target.value)}/>
            </FormControl>
            <Stack spacing={10}>
              <Stack
                direction={{ base: 'column', sm: 'row' }}
                align={'start'}
                justify={'space-between'}>
                <Text color={'purple.300'}>Don't have an account ?</Text> <br />
              </Stack>
              <Link to={'/register'}>
              <Text fontSize='sm' mt={'-7'} color={'purple.400'}>Register!</Text></Link>
              <Button
                bg={'purple.400'}
                color={'white'}
                type='submit'
                _hover={{
                  bg: 'purple.500'
                }}>
                Login
              </Button>
              <Button w={'full'} variant={'outline'} leftIcon={<FcGoogle />} onClick={handleGoogleSignIn}>
                <Center>
                  <Text>Sign in with Google</Text>
                </Center>
              </Button>
            </Stack>
            </form>
          </Stack>
        </Box>
      </Stack>
      <Toaster/>
    </Flex>
  )
}
export default Signin;