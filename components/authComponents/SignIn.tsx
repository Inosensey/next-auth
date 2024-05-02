"use client";

import { signIn } from "next-auth/react";

// ChakraUI
import { poppins } from "@/fonts";
import { Box, Button, Link, Text } from "@chakra-ui/react";

// Icons
import PhGoogleLogoBold from "@/icones/PhGoogleLogoBold";
import MdiGithub from "@/icones/MdiGithub";
import PhArrowBendDoubleUpRightLight from "@/icones/PhArrowBendDoubleUpRightLight";

// Types
type props = {
  signInText: string;
  isSignedIn: boolean;
};

export default function SignIn({ signInText, isSignedIn }: props) {
  return (
    <Box
      className={poppins.className}
      display={"flex"}
      flexDirection={"column"}
      gap={"3"}
      mt={"2rem"}
      justifyContent={"center"}
      alignItems={"center"}
      fontSize={{ sm: "xs", md: "sm" }}
    >
      <Text textAlign={"center"}>{signInText}</Text>
      <Box
        display={"flex"}
        justifyContent={"start"}
        alignItems={"start"}
        flexDirection={"column"}
        gap={"0.5rem"}
        w={{ sm: "45%", md: "50%" }}
        minW={"150px"}
      >
        {isSignedIn ? (
          <Link w={"100%"} href={"/dashboard"}>
            <Button
              leftIcon={<PhArrowBendDoubleUpRightLight color="#fff" />}
              w={"100%"}
              size={{ sm: "sm" }}
              colorScheme="linkedin"
            >
              Dashboard
            </Button>
          </Link>
        ) : (
          <>
            <Button
              leftIcon={<MdiGithub color="#fff" />}
              w={"100%"}
              size={{ sm: "sm" }}
              colorScheme="green"
              onClick={() => signIn("github", { callbackUrl: "/dashboard" })}
            >
              Github
            </Button>
            <Button
              leftIcon={<PhGoogleLogoBold color="#fff" />}
              w={"100%"}
              size={{ sm: "sm" }}
              colorScheme="red"
              onClick={() => signIn("google", { callbackUrl: "/dashboard" })}
            >
              Google
            </Button>
          </>
        )}
      </Box>
    </Box>
  );
}
