// ChakraUI
import { Box, Button, ButtonGroup, Stack, Text } from "@chakra-ui/react";

export default function Home() {
  return (
    <main style={{ color: "#fff" }}>
      <Stack height={"100vh"} justifyContent={"center"} alignItems={"center"}>
        <Box
          display={"flex"}
          flexDirection={"column"}
          bg="brand.900"
          height={"300px"}
          width={"60%"}
          borderRadius={"12px"}
        >
          <Box p={"3"}>
            <Text fontSize={"xl"}>TaskFlow</Text>
            <Text fontSize={"xs"} color={"#ccc"}>
              Welcome to TaskFlow your Personal Task Manager
            </Text>
          </Box>
          <Box
            display={"flex"}
            flexDirection={"column"}
            gap={"3"}
            mt={"2rem"}
            justifyContent={"center"}
            alignItems={"center"}
          >
            <Text textAlign={"center"}>You can sign in with:</Text>
            <ButtonGroup>
              <Button size={"sm"}>Facebook</Button>
              <Button size={"sm"}>Google</Button>
            </ButtonGroup>
          </Box>
        </Box>
      </Stack>
    </main>
  );
}
