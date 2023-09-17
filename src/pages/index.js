import React, {useState, useEffect} from 'react';
import { Flex,Stack,Box, Grid, Input, Button } from '@chakra-ui/react'
import { getData, postData } from '../api'
import useLocalStorage from '@/hooks/useLocalStorage';
import Image from 'next/image'
import { useRouter } from 'next/router';
import logo from '../assets/logo.jpg'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

function SignIn ({setAuthState}){
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [userId, setUserId] = useLocalStorage('userId', null);
  const router = useRouter();
  const handleRegister = () => {
    setAuthState(0)
  }
  const handleSignIn = () => {
    console.log(username, password)
    postData('/login', {username: username, password: password}).then(r => {console.log(r); if (r.status === 200) {
      setUserId(r.id);
      router.replace('/ViewService').then();
    }})
  }

  const handleInputChange = (e) => {
    const placeholder = e.target.getAttribute("placeholder");

    if (placeholder === 'username') {   
      setUsername(e.target.value);
    } else if (placeholder === 'password') {
      setPassword(e.target.value);
    }
  }

  return (
    <Flex className="bg-[#313d44]" height={'100vh'} justify="center" align="center">
    <Stack spacing={3}>
    <Image src={logo} width={300} height={300} alt='Dan Abramov' />
      <Input onChange={handleInputChange} value={username} placeholder='username' size='md' />
      <Input onChange={handleInputChange} value={password} placeholder='password' size='md' />
      <Button onClick={handleSignIn}>Sign In</Button>
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
    <Flex  className="bg-[#313d44]" height={'100vh'} justify="center" align="center">
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
