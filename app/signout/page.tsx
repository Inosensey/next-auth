// Components
import SignOut from "@/components/authComponents/SignOut";
import Header from "@/components/homeComponents/Header";

// ChakraUI
import { Box, Stack } from "@chakra-ui/react";

// Fonts
import { poppins } from "@/fonts";

export default function page() {
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
            <SignOut />
          </Box>
        </Box>
      </Box>
    </Stack>
  );
}
