import React, {useState, useEffect} from 'react';
import {Container,Input, Text,Stack, Grid } from '@chakra-ui/react'

export default function Input_({title,flex, placeholder, setter}) {
  const handleOnChange = (text) => {
    setter(text.target.value);
  }
  return (
  <>
  <Stack flex={flex} padding={4} spacing ={3}>
    {title && <Text as='b' fontSize={'2xl'}>{title}</Text>}
    <Input onChange={handleOnChange}  placeholder={placeholder} />
  </Stack>
  </>
  );
}
