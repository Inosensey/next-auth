"use client";
import { useEffect } from "react";

// Components
import { PrimaryText } from "../reusableComponents/Text";

// ChakraUI
import { Box, Text, Image, Link } from "@chakra-ui/react";
import MdiAccount from "@/icones/MdiAccount";

// Zustand
import { notificationStore } from "@/store/notificationStore";

// Types
interface props {
  name?: string | null;
  email?: string | null;
  image?: string | null;
}
export default function Header({ email, image, name }: props) {
  // Zustand Store
  const {setMessage, setShowSlideNotification, setAfterSignIn} =  notificationStore((state) => state)

  // Notifications
  const ShowNotification = () => {
    setMessage(`Welcome back ${name}!`);
    setShowSlideNotification(true);
    hideNotificationTimer();
  };
  const hideNotificationTimer = () => {
    const interval = setTimeout(() => setShowSlideNotification(false), 2000);
    return () => clearTimeout(interval);
  };

  useEffect(() => {
    const sessionStorage = JSON.parse(window.sessionStorage.getItem("notification-store") as string); 
    if(!sessionStorage.state.afterSignIn) return
    ShowNotification();
    setAfterSignIn(false)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Box
      display={"flex"}
      justifyContent={"space-between"}
      alignItems={"center"}
      px={"0.7rem"}
      color={"#ccc"}
      bg={"Primary.400"}
      w={"100%"}
      h={"40px"}
    >
      <Text>Dashboard</Text>
      <Box display={"flex"} gap={"1"} alignItems={"center"}>
        <Box
          display={"flex"}
          alignItems={"center"}
          gap={"0.5rem"}
          borderRight={"1px solid #00ADB5"}
          pr={"0.4rem"}
        >
          <Box
            bg={`${image !== null || image !== undefined ? "" : "#fff"}`}
            borderRadius={`${
              image !== null || image !== undefined ? "" : "25px"
            }`}
          >
            {image !== null || image !== undefined ? (
              <Image
                boxSize="28px"
                objectFit="cover"
                src={image!}
                alt="user-image"
                borderRadius={"25px"}
              />
            ) : (
              <MdiAccount color="#00ADB5" />
            )}
          </Box>
          <Text fontSize={{ sm: "xs" }}>{name}</Text>
        </Box>
        <Link href="/signout">
          <PrimaryText cursor="pointer" fontSize={["sm"]}>
            Sign Out
          </PrimaryText>
        </Link>
      </Box>
    </Box>
  );
}
