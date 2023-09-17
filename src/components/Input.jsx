import React, {useState, useEffect} from 'react';
import {Container,Input, Text,Stack, Grid,  Editable,
  EditableInput,
  EditableTextarea,
  EditablePreview, } from '@chakra-ui/react'

export default function Input_({title,flex, getter, placeholder, setter}) {
  const handleOnChange = (text) => {
    setter(text.target.value);
  }
  return (
  <>
  <Stack flex={flex} padding={4} spacing ={3}>
    {title && <Text as='b' fontSize={'2xl'}>{title}</Text>}
    <Input value={getter} onChange={handleOnChange}  placeholder={placeholder} />
  </Stack>
  </>
  );
}
