import React, {useState, useEffect} from 'react';
import { Container, Button, Spinner, Flex,Box,     Step,
    StepDescription,
    StepIcon,
    StepIndicator,
    StepNumber,
    Divider,
    StepSeparator,
    Text,
    StepStatus,
    StepTitle,
    Stepper,
    useSteps,
    Table,
    Thead,
    Tbody,
    Tfoot,
    Tr,
    Th,
    useToast,
    Td,
    TableCaption,
    TableContainer,} from '@chakra-ui/react'
import Input, {InputWithValue} from '@/components/Input';
import { redirect } from 'next/navigation'
import { useRouter } from 'next/router';
import useLocalStorage from '@/hooks/useLocalStorage';
import { getData, postData } from '@/api';
import Header from '../../components/Header'
const steps = [
    { title: 'First', description: 'Choose Service' },
    { title: 'Second', description: 'Add Details' },
    { title: 'Third', description: 'Review & Confirm' },
  ]
export default function Checkout() {
  const [address, setAddress] = useState([]);
  const [phoneNumber, setPhoneNumber] = useState(null);
  const [serviceData, setServiceData] = useState(null);
  const [isOrderPlaced, setIsOrderPlaced] = useState(false);
  const toast = useToast();
  const router = useRouter();
  const { activeStep, setActiveStep } = useSteps({
    index: 2,
    count: steps.length,
  })
  const serviceId = router.query.serviceId;

  const [id] = useLocalStorage('userId', null);
  useEffect(() => {
    getData(`/get-user/${id}`).then((r) => {setPhoneNumber(r.phoneNumber)})
    getData(`/get-service/${serviceId}`).then((r) => {setServiceData(r)})
}, [])

  const handleBack = () => {
    setActiveStep((v) =>  v - 1);
  }
  const handleContinue = () => {
    setActiveStep(3);
  }
  const handleConfirm = () => {
    const reqBody = {
      userId: id,
      address: address,
      serviceId: serviceId,
      phoneNumber: phoneNumber
    }
    postData('/add-service-request', reqBody).then(r => {toast({
        title: 'Order Placed.',
        description: "We've placed your order",
        status: 'success',
        duration: 9000,
        isClosable: true,
      }); setIsOrderPlaced(true);}).then(r => router.replace('/ViewService'))
  }
  return (
 <><Header /><Container maxW="container.md" mt={10}>
        <Stepper index={activeStep}>
      {steps.map((step, index) => (
        <Step key={index}>
          <StepIndicator>
            <StepStatus
              complete={<StepIcon />}
              incomplete={<StepNumber />}
              active={<StepNumber />}
            />
          </StepIndicator>

          <Box flexShrink='0'>
            <StepTitle>{step.title}</StepTitle>
            <StepDescription>{step.description}</StepDescription>
          </Box>

          <StepSeparator />
        </Step>
      ))}
    </Stepper>
 {activeStep === 2 && (<><Input title={"Address"} placeholder={'Your Address'} setter={setAddress} flex={1} />
   { phoneNumber !== null ? <Input title={"Phone Number"} placeholder={phoneNumber}  setter={setPhoneNumber} flex={1} /> : <Spinner />} 
    <Flex justifyContent={'center'} flexDirection={'row'} maxW={'full '} >
    <Button onClick={handleContinue}>Continue</Button>
        </Flex></>) }
        {activeStep === 3 && (<>

        <TableContainer className='mt-12 mb-6'>
  <Table variant='simple'>
    <TableCaption>Your Order</TableCaption>
    <Tbody>
      <Tr>
        <Td><Text as={'i'}>Service Name</Text></Td>
        <Td>{serviceData.title}</Td>
      </Tr>
      <Tr>
        <Td><Text as={'i'}>Service Description</Text></Td>
        <Td>{serviceData.description}</Td>
      </Tr>
      <Tr>
        <Td><Text as={'i'}>Address</Text></Td>
        <Td>{address}</Td>
      </Tr>
      <Tr>
        <Td><Text as='i'>Contact</Text></Td>
        <Td>{phoneNumber}</Td>
      </Tr>
      <Tr>
        <Td><Text as='i'>Unit Type</Text></Td>
        <Td>{serviceData.unitType}</Td>
      </Tr>
      <Tr>
        <Td><Text as={'b'}>Price Per Unit</Text></Td>
        <Td><Text as={'b'}>{serviceData.pricePerUnit}</Text></Td>
      </Tr>
    </Tbody>
  </Table>
</TableContainer>

    <Flex justifyContent={'center'} alignItems={'center'} flexDirection={'column'} gap={2} maxW={'full '} >
    <Button isDisabled={isOrderPlaced} w={'3xs'} onClick={handleConfirm}>Confirm</Button>
    <Button w={'3xs'}  onClick={handleBack}>Back</Button>
        </Flex></>) }
    </Container></>
  );
}
