import React from "react";
import Link from 'next/link'
import { useRouter } from "next/router";
import { Box, Text, Button, Stack, Hide, Show, Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton, useDisclosure } from "@chakra-ui/react";



const Header = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const router = useRouter();
  const btnRef = React.useRef()

  const handleLogOut = () => {
    router.replace('/login').then()
  }
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
        <Button colorScheme='blue' size='md'>
                Logout
        </Button>
        <Button colorScheme='blue' size='md'>
                Manage Account
        </Button>
        <Button colorScheme='blue' size='md'>
                Order History
        </Button>
        <Button colorScheme='blue' size='md'>
                Contact Us
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
              <Link href="/ViewService">View Services</Link>
              </Button>
              <Button onClick={handleLogOut} colorScheme='blue' size='lg'>
                Logout
        </Button>
        <Button colorScheme='blue' size='lg'>
                Manage Account
        </Button>
        <Button colorScheme='blue' size='lg'>
                Order History
        </Button>
        <Button colorScheme='blue' size='lg'>
                Contact Us
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
