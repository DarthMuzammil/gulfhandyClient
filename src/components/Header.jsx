import React from "react";
import Link from 'next/link'
import { Box, Text, Button, Stack, Hide, Show, Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton, useDisclosure } from "@chakra-ui/react";

  function DrawerExample() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = React.useRef()
  
    return (
      <>
        <Button ref={btnRef} colorScheme='teal' onClick={onOpen}>
          Open
        </Button>
        <Drawer
          isOpen={isOpen}
          placement='right'
          onClose={onClose}
          finalFocusRef={btnRef}
        >
          <DrawerOverlay />
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerHeader>Create your account</DrawerHeader>
  
            <DrawerBody>
            <Stack spacing={4} direction='column' marginLeft={20} align='center'>
        <Button colorScheme='blue' size='md'>
          Button
        </Button>
        <Button colorScheme='blue' size='md'>
          Button
        </Button>
        <Button colorScheme='blue' size='md'>
          Button
        </Button>
        <Button colorScheme='blue' size='md'>
          Button
        </Button>
      </Stack>
            </DrawerBody>
          </DrawerContent>
        </Drawer>
      </>
    )
  }

const Header = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const btnRef = React.useRef()
  return (
    <>
        <Hide below="md">
    <Box
      bg="blue.500"  // Change the background color as needed
      p={4}
      gap={3}
      display="flex"
      alignItems="center"
    >
      <Text fontSize="2xl" fontWeight="bold" color="white">
        GulfHandy
      </Text>
      <Stack spacing={4} direction='row' marginLeft={20} align='center'>
        <Button colorScheme='blue' size='md'>
          <Link href="/ViewService">View Services</Link>
        </Button>
      </Stack>
    </Box>
    </Hide>
    <Show below="md">
    <Box
      bg="blue.500"  // Change the background color as needed
      p={4}
      gap={3}

      display="flex"
      alignItems="center"
    >
      <Text fontSize="2xl" fontWeight="bold" color="white">
        GulfHandy
      </Text>
      <Button ref={btnRef} onClick={onOpen} colorScheme='blue' marginLeft='auto' alignSelf='flex-end' size='sm'>
          Menu
        </Button>
    </Box>
    <Drawer
          isOpen={isOpen}
          placement='right'
          onClose={onClose}
          finalFocusRef={btnRef}
        >
          <DrawerOverlay />
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerBody>
            <Stack spacing={4} direction='column' align='center'>
              <Button colorScheme='blue' size='lg'>
                View Services
              </Button>
            </Stack>
            </DrawerBody>
          </DrawerContent>
        </Drawer>
    </Show>
    </>


  );
};

export default Header;
