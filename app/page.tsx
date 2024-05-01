// ChakraUI
import { playFairDisplay, poppins } from "@/fonts";
import { Box, Button, Link, Stack, Text } from "@chakra-ui/react";

// Icons
import TaskIcon from "../svg/SimpleIconsTask.svg";
import {
  PrimaryText,
  SecondaryText,
} from "@/components/reusableComponents/Text";
import PhArrowBendDoubleUpRightLight from "@/icones/PhArrowBendDoubleUpRightLight";

export default function Home() {
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
          <Box display={"flex"} flexDirection={"column"} p={"3"} gap={"1"}>
            <Box gap={"1"} display={"flex"}>
              <PrimaryText
                fontFamily={playFairDisplay.className}
                fontWeight="600"
                fontSize={"xl"}
              >
                TaskFlow
              </PrimaryText>
              <TaskIcon />
            </Box>
            <SecondaryText
              fontFamily={poppins.className}
              fontSize={"xs"}
              color="#ccc"
            >
              Welcome to TaskFlow your Personal Task Manager
            </SecondaryText>
          </Box>
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
            <Text textAlign={"center"}>Click the button below to sign in</Text>
            <Box
              display={"flex"}
              justifyContent={"start"}
              alignItems={"start"}
              flexDirection={"column"}
              gap={"0.5rem"}
              w={{ sm: "40 %", md: "50%" }}
              minW={"150px"}
            >
              <Link w={"100%"} href="/signin">
                <Button leftIcon={<PhArrowBendDoubleUpRightLight color="#fff" />} w={"100%"} size={{ sm: "sm" }} colorScheme="linkedin">
                  Sign In
                </Button>
              </Link>
            </Box>
          </Box>
        </Box>
      </Box>
    </Stack>
  );
}
