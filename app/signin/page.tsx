import { options } from "../api/auth/[...nextauth]/options";
import { getServerSession } from "next-auth";

// Components
import SignIn from "@/components/authComponents/SignIn";
import Header from "@/components/homeComponents/Header";

// ChakraUI
import { Box, Stack } from "@chakra-ui/react";

export default async function page() {
  const session = await getServerSession(options);
  return (
    <Stack mt={{ sm: "4rem" }} h={{ lg: "100vh" }} color={"#fff"}>
      <Box display={"flex"} justifyContent={"center"} alignItems={"center"}>
        <Box
          display={"flex"}
          flexDirection={"column"}
          bg="Primary.400"
          pb={"1.2rem"}
          height={`${session ? "200px" : "max-content"}`}
          width={{ sm: "85%", md: "75%" }}
          maxW={"350px"}
          borderRadius={"12px"}
        >
          <Header />
          <SignIn isSignedIn={session ? true : false} />
        </Box>
      </Box>
    </Stack>
  );
}
