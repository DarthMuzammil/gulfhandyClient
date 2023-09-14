import React, {useState, useEffect} from 'react';
import { Container, Grid } from '@chakra-ui/react'
import { getData } from '../../api';
import Header from '@/components/Header';
import Services from '@/components/Services';
import Image from 'next/image'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function ViewService() {
  const [services, setServices] = useState([]);

  useEffect(() => {
    getData('/get-services').then((r) => {setServices(r)}).catch(e => console.log(e))
  }, [])
  return (
 <><Header /><Container maxW="container.md" mt={10}>
      <Grid templateRows="repeat(2, 1fr)" gap={4}>
        <Services services={services} />
      </Grid>
    </Container></>
  );
}
