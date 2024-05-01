// Components
import SignIn from "@/components/authComponents/SignIn";
import Header from "@/components/authComponents/Header";

// ChakraUI
import { Box, Stack } from "@chakra-ui/react";

export default function page() {
  return (
    <Stack mt={{ sm: "8rem" }} h={{ lg: "100vh" }} color={"#fff"}>
      <Box display={"flex"} justifyContent={"center"} alignItems={"center"}>
        <Box
          display={"flex"}
          flexDirection={"column"}
          bg="Primary.400"
          height={"300px"}
          width={{ sm: "85%", md: "75%" }}
          maxW={"350px"}
          borderRadius={"12px"}
        >
          <Header />
          <SignIn />
        </Box>
      </Box>
    </Stack>
  );
}
