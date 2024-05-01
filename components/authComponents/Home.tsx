// ChakraUI
import { Box, Button, Link, Text } from "@chakra-ui/react";

// Icons
import PhArrowBendDoubleUpRightLight from "@/icones/PhArrowBendDoubleUpRightLight";

export default function Home() {
  return (
    <>
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
          <Button
            leftIcon={<PhArrowBendDoubleUpRightLight color="#fff" />}
            w={"100%"}
            size={{ sm: "sm" }}
            colorScheme="linkedin"
          >
            Sign In
          </Button>
        </Link>
      </Box>
    </>
  );
}
