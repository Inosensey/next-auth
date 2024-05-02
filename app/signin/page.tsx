import { options } from "../api/auth/[...nextauth]/options";
import { getServerSession } from "next-auth";

// Components
import SignIn from "@/components/authComponents/SignIn";
import Header from "@/components/authComponents/Header";

// ChakraUI
import { Box, Stack } from "@chakra-ui/react";

export default async function page() {
  const session = await getServerSession(options);
  return (
    <Stack mt={{ sm: "8rem" }} h={{ lg: "100vh" }} color={"#fff"}>
      <Box display={"flex"} justifyContent={"center"} alignItems={"center"}>
        <Box
          display={"flex"}
          flexDirection={"column"}
          bg="Primary.400"
          height={`${session ? "220px" : "300px"}`}
          width={{ sm: "85%", md: "75%" }}
          maxW={"350px"}
          borderRadius={"12px"}
        >
          <Header />
          {session ? (
            <SignIn
              signInText="You are already Signed In. Click the button below to redirect to Dashboard"
              isSignedIn={true}
            />
          ) : (
            <SignIn signInText="You can sign in with:" isSignedIn={false} />
          )}
        </Box>
      </Box>
    </Stack>
  );
}
