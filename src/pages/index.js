import React, {useState, useEffect} from 'react';
import { Flex,Stack,Box, Grid, Input, Button, InputGroup, InputRightAddon, InputRightElement } from '@chakra-ui/react'
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
  const [show, setShow] = useState(false)
  const handleClick = () => setShow(!show)
  const router = useRouter();
  const handleRegister = () => {
    setAuthState(0)
  }
  const handleSignIn = () => {
    if (!username || !password) {
      alert("Please enter your credentials!")
    } else {
      postData('/login', {username: username, password: password}).then(r => {console.log(r); if (r.status === 200) {
        setUserId(r.id);
        router.replace('/ViewService').then();
      }})
    }

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
      <Input color='#b6ccd8' onChange={handleInputChange} value={username} placeholder='username' size='md' />
    <InputGroup>
    <Input color='#b6ccd8' type={show ? 'text' : 'password'} onChange={handleInputChange} value={password} placeholder='password' size='md' />
    <InputRightElement width='4.5rem'>
    <Button h='1.75rem' size='sm' onClick={handleClick}>
          {show ? 'Hide' : 'Show'}
        </Button>
    </InputRightElement>
    </InputGroup> 
      <Button onClick={handleSignIn}>Sign In</Button>
      <Button onClick={handleRegister}>Register</Button>
    </Stack>
  </Flex>
  )
}
function Register ({setAuthState}){
  const [username, setUsername] = useState(null);
  const [password, setPassword] = useState(null);
  const [email, setEmail] = useState(null);
  const [mobile, setMobile] = useState(null);
  const [show, setShow] = useState(false)
  const handleClick = () => setShow(!show)
  const handleBack = () => {
    setAuthState(1)
  }
  const handleInputChange = (e) => {
    const placeholder = e.target.getAttribute("placeholder");

    if (placeholder === 'username') {   
      setUsername(e.target.value);
    } else if (placeholder === 'password') {
      setPassword(e.target.value);
    } else if (placeholder === 'mobile') {
      setMobile(e.target.value);
    } else if (placeholder === 'email') {
      setEmail(e.target.value);
    }
  }
  const handleSignUp = () => {
    const req = {
      username: username,
      password: password,
      phoneNumber: mobile,
      email: email
    }
    if (username && password && phoneNumber && email) {
      postData('/create-client-user', req).then(r => {
        setUserId(r.id);
        router.replace('/ViewService').then();
      })
    } else {
      alert('Please fill all details!')
    }

  }
  return (
    <Flex  className="bg-[#313d44]" height={'100vh'} justify="center" align="center">
    <Stack spacing={3}>
    <Image src={logo} width={300} height={300} alt='Dan Abramov' />
      <Input onChange={handleInputChange} color='#b6ccd8' placeholder='username' size='md' />
      <InputGroup>
    <Input color='#b6ccd8' type={show ? 'text' : 'password'} onChange={handleInputChange} value={password} placeholder='password' size='md' />
    <InputRightElement width='4.5rem'>
    <Button h='1.75rem' size='sm' onClick={handleClick}>
          {show ? 'Hide' : 'Show'}
        </Button>
    </InputRightElement>
    </InputGroup> 
      <Input onChange={handleInputChange} color='#b6ccd8' placeholder='email' size='md' />
      <Input onChange={handleInputChange} color='#b6ccd8' placeholder='mobile' size='md' />
      <Button onClick={handleSignUp}>Sign Up</Button>
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
