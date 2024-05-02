"use client";
import { HamburgerIcon } from "@chakra-ui/icons";
import { signOut } from "next-auth/react";
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Button,
  Input,
  useDisclosure,
  Box,
} from "@chakra-ui/react";

// Components
import { PrimaryText } from "../reusableComponents/Text";

// Fonts
import { playFairDisplay } from "@/fonts";

export default function Sidebar() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const handleSignOut = () => {
    signOut();
  };
  return (
    <>
      <Box position={"fixed"}>
        <Drawer isOpen={isOpen} onClose={onClose} placement="left">
          <DrawerOverlay />
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerHeader>
              <PrimaryText
                fontFamily={playFairDisplay.className}
                fontWeight="600"
                fontSize={"2xl"}
              >
                TaskFlow
              </PrimaryText>
            </DrawerHeader>

            <DrawerBody></DrawerBody>

            <DrawerFooter></DrawerFooter>
          </DrawerContent>
        </Drawer>
      </Box>
      <Box position={"absolute"} bottom={"15px"} right={"15px"}>
        <Button colorScheme="teal" onClick={onOpen}>
          <HamburgerIcon />
        </Button>
      </Box>
    </>
  );
}
