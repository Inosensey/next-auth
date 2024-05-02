"use server"

import { options } from "../api/auth/[...nextauth]/options";
import { getServerSession } from "next-auth/next";

// ChakraUI
import { Box, Stack } from "@chakra-ui/react";

// Components
import Sidebar from "@components/dashboardComponents/Sidebar";
import Header from "@/components/dashboardComponents/Header";

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getServerSession(options);
  console.log(session)
  return (
    <Stack h={"100vh"}>
      <Sidebar />
      <Box display={"flex"} justifyContent={"center"} alignItems={"center"}>
        <Box w={{ sm: "100%", lg: "900px" }}>
          <Header email={session?.user?.email} image={session?.user?.image} name={session?.user?.name} />
          {children}
        </Box>
      </Box>
    </Stack>
  );
}
