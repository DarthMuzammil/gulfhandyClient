import React from 'react';
import { Box, Flex, Button, Text } from "@chakra-ui/react";
import { postData } from '@/api';
import TextWTitle from '@/components/TextWTitle';

const Service = ({id, title, ppu, unitType, description }) => {
  const handleClick = () => {
    const reqBody = {
      userId: '650188dee7d2c2c0f178bb4a',
      address: 'mock address',
      serviceId: id,
      status: 0,
      handyMan: ""
    }
    postData('/add-service-request', reqBody).then(r => alert(r))
  }
  return (
      <Box p={4} borderWidth="1px" borderRadius="lg" shadow="md">
        <Text textAlign={'left'} fontWeight={'semibold'} fontSize="xl">{title}</Text>
        <Text textAlign={'left'} mt={1}>{description}</Text>
        <TextWTitle title={"Price/Unit:"} titleWeight={'semibold'} size={'md'} direction={'row'} value={ppu} />
        <TextWTitle title={"Unit:"} titleWeight={'semibold'} size={'md'} direction={'row'} value={unitType} />
        <Flex justifyContent={'center'} flexDirection={'row'}>
          <Button onClick={handleClick}>
            {unitType === 'After Inspection' ? "Request Quote" : "Book Now"}
          </Button>
        </Flex>
      </Box>

  );
}

export default Service;
