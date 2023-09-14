import React, {useState, useEffect} from 'react';
import {Button,Hide, Show, Container, Grid, HStack, VStack } from '@chakra-ui/react'
import { postData } from '@/api';
import Header from '@/components/Header';
import Input from '@/components/Input';
import Select from '@/components/Select';
export default function AddService() {
  const [title, setTitle] = useState(null);
  const [description, setDescription] = useState(null);
  const [unit, setUnit] = useState('');
  const [pricePerUnit, setPricePerUnit] = useState(null);
  const handleAddService = () => {
    console.log('h')
    const reqBody = {
      title: title,
      description: description,
      pricePerUnit: pricePerUnit,
      unitType: unit
    }
    postData('/add-service', reqBody).then(r => {alert(r)})
  }
  return (
  <>
  <Header />
  <Hide below='md'>
  <VStack  align={'stretch'} padding={12}  mt={10} width={'-moz-max-content'}>
    <Input setter={setTitle} title="Service Title" placeholder={"Eg: Plumbing"}/>
    <Input setter={setDescription} title="Service Description" placeholder={"Eg: Describe the service in detail"}/>
    <HStack w="full">
    <Select setter={setUnit} getter={unit} flex={1} title={"Unit"} options={["Square Feet", "Square Meter", "Hourly", "After Inspection", "Fixed"]} />
    <Input setter={setPricePerUnit} flex={1} title="Price Per Unit" placeholder={"Eg: 1200"}/>
    </HStack>
    <Button w={56} onClick={handleAddService} alignSelf={'center'} mt={2} colorScheme='blue'>Add Service</Button>
  </VStack>
  </Hide>
  <Show below='md'>
  <VStack  align={'stretch'}  mt={10} width={'-moz-max-content'}>
    <Input setter={setTitle} title="Service Title" placeholder={"Eg: Plumbing"}/>
    <Input setter={setDescription} title="Service Description" placeholder={"Eg: Describe the service in detail"}/>
    <HStack w="full">
    <Select setter={setUnit} getter={unit}  flex={1} title={"Unit"} options={["Square Feet", "Square Meter", "Hourly", "After Inspection", "Fixed"]} />
    <Input setter={setPricePerUnit} flex={1} title="Price Per Unit" placeholder={"Eg: 1200"}/>
    </HStack>
    <Button w={'sm'} onClick={() => {console.log('CLICKED')}} h={12}  alignSelf={'center'} mt={2} colorScheme='blue'>Add SDSSSDDervice</Button>
  </VStack>
  </Show>
 
  </>
  );
}
