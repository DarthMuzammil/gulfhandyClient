import React, {useState, useEffect} from 'react';
import { Flex,Stack,Box, Grid, Input, Button } from '@chakra-ui/react'
import { getData, postData } from '../api'
import Header from '../components/Header'
import Services from '../components/Services';
import Image from 'next/image'
import logo from '../assets/logo.jpg'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

function SignIn ({setAuthState}){
  const [username, setUsername] = useState(0);
  const [password, setPassword] = useState(0);

  const handleRegister = () => {
    setAuthState(0)
  }
  const handleSignIn = () => {
  }

  return (
    <Flex height={'100vh'} justify="center" align="center">
    <Stack spacing={3}>
    <Image src={logo} width={300} height={300} alt='Dan Abramov' />
      <Input placeholder='username' size='md' />
      <Input placeholder='password' size='md' />
      <Button>Sign In</Button>
      <Button onClick={handleRegister}>Register</Button>
    </Stack>
  </Flex>
  )
}
function Register ({setAuthState}){
  const handleBack = () => {
    setAuthState(1)
  }
  const handleSignUp = () => {
    const req = {
      username: req.body.username,
      password: req.body.password,
      phoneNumber: req.body.phoneNumber,
      email: req.body.email
    }
    postData('/create-client-user', req)
  }
  return (
    <Flex height={'100vh'} justify="center" align="center">
    <Stack spacing={3}>
    <Image src={logo} width={300} height={300} alt='Dan Abramov' />
      <Input placeholder='username' size='md' />
      <Input placeholder='password' size='md' />
      <Input placeholder='email' size='md' />
      <Input placeholder='mobile' size='md' />
      <Button>Sign Up</Button>
      <Button onClick={handleBack}>Back</Button>
    </Stack>
  </Flex>
  )
}
export default function App() {
  const [authState, setAuthState] = useState(1)
  return (
      
        authState ? <SignIn setAuthState={setAuthState} /> : <Register setAuthState={setAuthState} />
      
  );
}
