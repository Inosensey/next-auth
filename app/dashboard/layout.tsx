// ChakraUI
import { Box, Stack } from "@chakra-ui/react";

// Components
import Sidebar from "@components/dashboardComponents/Sidebar";
import Header from "@/components/dashboardComponents/Header";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Stack>
      <Sidebar />
      <Box display={"flex"} justifyContent={"center"} alignItems={"center"}>
        <Box w={{ sm: "100%", lg: "900px" }}>
          <Header />
          {children}
        </Box>
      </Box>
    </Stack>
  );
}
