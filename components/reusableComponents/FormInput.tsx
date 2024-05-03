"use client";

import React from "react";

// ChakraUi
import {
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
} from "@chakra-ui/react";

// Types
interface inputParams<T> {
  state: T extends string ? T : string;
  type: string;
  name: string;
  placeholder: string;
  label: string;
  isRequired: boolean;
  isError?: boolean | null;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onInput?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void;
}

export default function FormInput<T extends string | number>({
  label,
  name,
  state,
  type,
  placeholder,
  isRequired,
  onChange,
  isError,
}: inputParams<T>) {
  return (
    <FormControl isInvalid={isError !== null && isError} isRequired={isRequired}>
      <FormLabel fontSize={{ sm: "xs", md: "sm" }}>{label}</FormLabel>
      <Input
        name={name}
        type={type}
        value={state}
        onChange={onChange}
        placeContent={placeholder}
        fontSize={{ sm: "xs", md: "sm" }}
      />
      {isError && <FormErrorMessage>{label} is required.</FormErrorMessage>}
    </FormControl>
  );
}
