"use client";
import { signOut } from "next-auth/react";

// ChakraUI
import { Box, Button, Link, Text } from "@chakra-ui/react";

// Icons
import MdiEmoticonSadOutline from "@/icones/MdiEmoticonSadOutline";
import MdiEmoticonHappyOutline from "@/icones/MdiEmoticonHappyOutline";

export default function SignOut() {
  return (
    <>
      <Text textAlign={"center"}>Do you really want to Sign Out?</Text>
      <Box
        display={"flex"}
        justifyContent={"start"}
        alignItems={"start"}
        flexDirection={"column"}
        gap={"0.5rem"}
        w={{ sm: "40 %", md: "50%" }}
        minW={"150px"}
      >
        <Box display={"flex"} justifyContent={"space-between"} w={"100%"}>
          <Button
            leftIcon={<MdiEmoticonSadOutline color="#fff" />}
            w={"44%"}
            size={{ sm: "sm" }}
            colorScheme="green"
            onClick={() => signOut({callbackUrl: "/"})}
          >
            Yes
          </Button>
          <Link w={"44%"} href="/dashboard">
            <Button
              leftIcon={<MdiEmoticonHappyOutline color="#fff" />}
              w={"100%"}
              size={{ sm: "sm" }}
              colorScheme="red"
            >
              No
            </Button>
          </Link>
        </Box>
      </Box>
    </>
  );
}
