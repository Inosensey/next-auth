"use client";

import React, { ReactNode } from "react";
import { Text, useColorModeValue } from "@chakra-ui/react";

// Types
interface props {
  children?: ReactNode;
  fontFamily?: string;
  fontWeight?: string;
  color?: string;
  fontSize: string | Array<"string">;
}

export const PrimaryText = ({
  color,
  fontFamily,
  fontSize,
  fontWeight,
  children,
}: props) => {
  const primaryFontColor = useColorModeValue("Primary.200", "Primary.300");
  return (
    <Text
      color={color !== undefined ? color : primaryFontColor}
      fontWeight={fontWeight}
      fontSize={fontSize}
      className={fontFamily}
    >
      {children}
    </Text>
  );
};
export const SecondaryText = ({
  color,
  fontFamily,
  fontSize,
  fontWeight,
  children,
}: props) => {
  const secondaryFontColor = useColorModeValue(
    "Secondary.200",
    "Secondary.100"
  );
  return (
    <Text
      color={color !== undefined ? color : secondaryFontColor}
      fontSize={fontSize}
      fontWeight={fontWeight}
      className={fontFamily}
    >
      {children}
    </Text>
  );
};
