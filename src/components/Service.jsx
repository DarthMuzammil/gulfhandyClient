import React from 'react';
import { Box, Text } from "@chakra-ui/react";
import TextWTitle from '@/components/TextWTitle';
const Service = ({ title, ppu, unitType, description }) => {
  return (
    <Box p={4} borderWidth="1px" borderRadius="lg" shadow="md">
      <Text fontWeight={'semibold'} fontSize="xl">{title}</Text>
      <Text mt={1}>{description}</Text>
      <TextWTitle title={"Price/Unit:"} titleWeight={'semibold'} size={'md'} direction={'row'} value={ppu} />
      <TextWTitle title={"Unit:"} titleWeight={'semibold'} size={'md'} direction={'row'} value={unitType} />
    </Box>
  );
}

export default Service;
