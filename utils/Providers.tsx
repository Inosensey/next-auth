"use client";

import { ChakraProvider } from "@chakra-ui/react";
import { extendTheme } from "@chakra-ui/react";

const breakpoints = {
  base: '0px',
  sm: '280px',
  md: '420px',
  lg: '769px',
  xl: '1280px',
  '2xl': '1920px',
}

// Custom ChakraUI Theme
const theme = extendTheme({
  breakpoints,
  colors: {
    Primary: {
      400: "#222831",
      300: "#006166",
      200: "#00ADB5",
      100: "#EEEEEE",
    },
    Secondary: {
      200: "#393E46",
      100: "#2e3238",
    }
  },
})

export function Providers({ children }: { children: React.ReactNode }) {
  return <ChakraProvider theme={theme}>{children}</ChakraProvider>;
}
