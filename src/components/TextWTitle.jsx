import React, {useState, useEffect} from 'react';
import {Container,Input, Text,Stack, Grid } from '@chakra-ui/react'

export default function Text_({title, value, size, titleWeight, titleSize, direction}) {
  return (
  <>
  <Stack spacing={1} direction={direction}>
    <Text fontWeight={titleWeight} fontSize={titleSize || size}>{title}</Text>
    <Text  fontSize={size}>{value}</Text>
  </Stack>
  </>
  );
}
