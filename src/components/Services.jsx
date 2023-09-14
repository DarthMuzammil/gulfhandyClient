

import React from "react";
import { Box, Text } from "@chakra-ui/react";
import Service from "./Service";

const Services = ({services}) => {
  return (
    services.map((service, index) => (
        <Service key={index} title={service.title} ppu={service.pricePerUnit} unitType={service.unitType} description={service.description} />
      ))
  );
};

export default Services;
