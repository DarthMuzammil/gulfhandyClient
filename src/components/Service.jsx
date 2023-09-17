import React from 'react';
import Link from 'next/link'
import { Box, Flex, Button, Text } from "@chakra-ui/react";
import { postData } from '@/api';
import TextWTitle from '@/components/TextWTitle';

const Service = ({id, title, ppu, unitType, description }) => {

  return (
      <Box p={4} borderWidth="1px" borderRadius="lg" shadow="md">
        <Text textAlign={'left'} fontWeight={'semibold'} fontSize="xl">{title}</Text>
        <Text textAlign={'left'} mt={1}>{description}</Text>
        <TextWTitle title={"Price/Unit:"} titleWeight={'semibold'} size={'md'} direction={'row'} value={ppu} />
        <TextWTitle title={"Unit:"} titleWeight={'semibold'} size={'md'} direction={'row'} value={unitType} />
        <Flex justifyContent={'center'} flexDirection={'row'}>
          <Button>
          <Link href={{pathname: "/Checkout", query: {serviceId : id}}}>{unitType === 'After Inspection' ? "Request Quote" : "Book Now"}</Link>
          </Button>
        </Flex>
      </Box>

  );
}

export default Service;
