"use client"

import { useEffect } from "react";

// ChakraUI
import { Box, Button, Link, Text } from "@chakra-ui/react";

// Icons
import PhArrowBendDoubleUpRightLight from "@/icones/PhArrowBendDoubleUpRightLight";

// Zustand
import { notificationStore } from "@/store/notificationStore";

// Types
type props = {
  homeText: string;
  linkUrl: string;
  buttonText: string;
};

export default function Home({ homeText, linkUrl, buttonText }: props) {
  // Zustand Store
  const {setMessage, setShowSlideNotification, setAfterSignOut} =  notificationStore((state) => state)

  // Notifications
  const ShowNotification = () => {
    setMessage(`Successfully logged out. See you again!`);
    setShowSlideNotification(true);
    hideNotificationTimer();
  };
  const hideNotificationTimer = () => {
    const interval = setTimeout(() => setShowSlideNotification(false), 2000);
    return () => clearTimeout(interval);
  };

  useEffect(() => {
    const sessionStorage = JSON.parse(window.sessionStorage.getItem("notification-store") as string); 
    if(!sessionStorage.state.afterSignOut) return
    ShowNotification();
    setAfterSignOut(false)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <>
      <Text px={"3"} textAlign={"center"}>
        {homeText}
      </Text>
      <Box
        display={"flex"}
        justifyContent={"start"}
        alignItems={"start"}
        flexDirection={"column"}
        gap={"0.5rem"}
        w={{ sm: "40 %", md: "50%" }}
        minW={"150px"}
      >
        <Link w={"100%"} href={linkUrl}>
          <Button
            leftIcon={<PhArrowBendDoubleUpRightLight color="#fff" />}
            w={"100%"}
            size={{ sm: "sm" }}
            colorScheme="linkedin"
          >
            {buttonText}
          </Button>
        </Link>
      </Box>
    </>
  );
}
