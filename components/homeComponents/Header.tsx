"use client";
import { useRouter } from "next/navigation";

// ChakraUI
import { Box } from "@chakra-ui/react";

// Fonts
import { playFairDisplay, poppins } from "@/fonts";

// Icons
import TaskIcon from "@/svg/SimpleIconsTask.svg";
import {
  PrimaryText,
  SecondaryText,
} from "@/components/reusableComponents/Text";

export default function Header() {
  const router = useRouter();
  return (
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
  );
}
