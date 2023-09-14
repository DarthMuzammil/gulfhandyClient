import React, {useState, useEffect} from 'react';
import {Select, Text,Stack, Grid } from '@chakra-ui/react'
export default function Select_({title,flex,setter, getter, options}) {
  const handleOnChange = (e) => {
    setter(e.target.value)
  }
  return (
  <>
  <Stack flex={flex} padding={4} spacing ={3}>
    {title && <Text as='b' fontSize={'2xl'}>{title}</Text>}
    <Select value={getter} onChange={handleOnChange}>
    {
        options.map((el, index) => {
            return <option key={index} value={el}>{el}</option>
        })
    }
    </Select>
  </Stack>
  </>
  );
}
