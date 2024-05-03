import { options } from "./api/auth/[...nextauth]/options";
import { getServerSession } from "next-auth/next";

// Components
import Home from "@/components/homeComponents/Home";
import Header from "@/components/homeComponents/Header";

// ChakraUI
import { poppins } from "@/fonts";
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
          height={"220px"}
          width={{ sm: "85%", md: "75%" }}
          maxW={"350px"}
          borderRadius={"12px"}
        >
          <Header />
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
            {!session ? (
              <Home
                homeText="Click the button below to sign in"
                linkUrl="/signin"
                buttonText="Sign In"
              />
            ) : (
              <Home
                homeText="You are already Signed In. Click the button below to redirect to Dashboard"
                linkUrl="/dashboard"
                buttonText="Dashboard"
              />
            )}
          </Box>
        </Box>
      </Box>
    </Stack>
  );
}
