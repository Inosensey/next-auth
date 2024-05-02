// ChakraUI
import { Box, Button, Link, Text } from "@chakra-ui/react";

// Icons
import PhArrowBendDoubleUpRightLight from "@/icones/PhArrowBendDoubleUpRightLight";

// Types
type props = {
  homeText: string;
  linkUrl: string;
  buttonText: string;
};

export default function Home({ homeText, linkUrl, buttonText }: props) {
  return (
    <>
      <Text px={"3"} textAlign={"center"}>
        {homeText}
      </Text>
      <Box
        display={"flex"}
        justifyContent={"start"}
        alignItems={"start"}
        flexDirection={"column"}
        gap={"0.5rem"}
        w={{ sm: "40 %", md: "50%" }}
        minW={"150px"}
      >
        <Link w={"100%"} href={linkUrl}>
          <Button
            leftIcon={<PhArrowBendDoubleUpRightLight color="#fff" />}
            w={"100%"}
            size={{ sm: "sm" }}
            colorScheme="linkedin"
          >
            {buttonText}
          </Button>
        </Link>
      </Box>
    </>
  );
}
