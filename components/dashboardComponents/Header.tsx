"use client";

// Components
import { PrimaryText } from "../reusableComponents/Text";

// ChakraUI
import { Box, Text, Image, Link } from "@chakra-ui/react";
import MdiAccount from "@/icones/MdiAccount";

// Types
interface props {
  name?: string | null;
  email?: string | null;
  image?: string | null;
}
export default function Header({ email, image, name }: props) {
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
