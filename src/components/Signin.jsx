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
import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import toast,{Toaster} from 'react-hot-toast'



const Signin = ()=>{
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const location = useLocation();
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


    }

          

  return (
    <Flex
      minH={'100vh'}
      align={'center'}
      justify={'center'}
      bg={useColorModeValue('gray.50', 'gray.800')}>
      <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
        <Stack align={'center'}>
          <Heading fontSize={'4xl'}>Sign in to your account</Heading>
          <Text fontSize={'lg'} color={'gray.600'}>
            <Text color={'blue.400'}>Welcome Back!</Text>
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
              <Input type="email" name='email' onChange={(e)=>setEmail(e.target.value)}/>
            </FormControl>
            <FormControl id="password">
              <FormLabel>Password</FormLabel>
              <Input type="password" name='password' onChange={(e)=>setPassword(e.target.value)}/>
            </FormControl>
            <Stack spacing={10}>
              <Stack
                direction={{ base: 'column', sm: 'row' }}
                align={'start'}
                justify={'space-between'}>
                <Text color={'blue.200'}>Don't have an account ?</Text> <br />
              </Stack>
              <Link to={'/register'}>
              <Text fontSize='sm' mt={'-7'} color={'blue.400'}>Register!</Text></Link>
              <Button
                bg={'blue.400'}
                color={'white'}
                type='submit'
                _hover={{
                  bg: 'blue.500'
                }}>
                Login
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


export default Signin