"use client";

import React, { ReactNode } from "react";
import { Text, useColorModeValue } from "@chakra-ui/react";

// Types
interface props {
  children?: ReactNode;
  fontFamily?: string;
  fontWeight?: string;
  color?: string;
  fontSize: string | string[];
  cursor?: string,
  onClick?: () => void
}
export const PrimaryText = ({
  color,
  fontFamily,
  fontSize,
  fontWeight,
  children,
  cursor,
  onClick
}: props) => {
  const primaryFontColor = useColorModeValue("Primary.200", "Primary.300");
  return (
    <Text
      color={color !== undefined ? color : primaryFontColor}
      fontWeight={fontWeight}
      fontSize={fontSize}
      className={fontFamily}
      cursor={cursor}
      onClick={onClick}
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
  onClick
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
      onClick={onClick}
    >
      {children}
    </Text>
  );
};
