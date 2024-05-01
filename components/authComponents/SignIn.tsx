"use client";

import { signIn } from "next-auth/react";

// ChakraUI
import {  poppins } from "@/fonts";
import { Box, Button, Text } from "@chakra-ui/react";

// Icons
import IcSharpFacebook from "@/icones/IcSharpFacebook";
import PhGoogleLogoBold from "@/icones/PhGoogleLogoBold";
import MdiGithub from "@/icones/MdiGithub";

export default function SignIn() {
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
      <Text textAlign={"center"}>You can sign in with:</Text>
      <Box
        display={"flex"}
        justifyContent={"start"}
        alignItems={"start"}
        flexDirection={"column"}
        gap={"0.5rem"}
        w={{ sm: "45%", md: "50%" }}
        minW={"150px"}
      >
        {/* <Link w={"100%"} href={"http://localhost:3000/api/auth/signin/github"}> */}
        <Button
          leftIcon={<MdiGithub color="#fff" />}
          w={"100%"}
          size={{ sm: "sm" }}
          colorScheme="green"
          onClick={() => signIn("github", { callbackUrl: "/" })}
        >
          Github
        </Button>
        {/* </Link> */}
        <Button
          leftIcon={<PhGoogleLogoBold color="#fff" />}
          w={"100%"}
          size={{ sm: "sm" }}
          colorScheme="red"
        >
          Google
        </Button>
      </Box>
    </Box>
  );
}
