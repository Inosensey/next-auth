"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { signIn } from "next-auth/react";

// Zustand
import { notificationStore } from "@/store/notificationStore";

// ChakraUI
import { poppins } from "@/fonts";
import { Box, Button, Link, Text } from "@chakra-ui/react";

// Icons
import PhGoogleLogoBold from "@/icones/PhGoogleLogoBold";
import MdiGithub from "@/icones/MdiGithub";
import PhArrowBendDoubleUpRightLight from "@/icones/PhArrowBendDoubleUpRightLight";
import FormInput from "../reusableComponents/FormInput";

// Types
type props = {
  signInText: string;
  isSignedIn: boolean;
};
interface credentialsType {
  email: string;
  password: string;
}
interface credentialValidationType {
  emailIsError: boolean | null;
  passwordIsError: boolean | null;
}
interface onSubmitValidationType {
  onSubmitIsError: boolean;
  errorMessage: string;
}

// Input Initials
const credentialInitials: credentialsType = {
  email: "",
  password: "",
};
const credentialValidationInitials: credentialValidationType = {
  emailIsError: null,
  passwordIsError: null,
};
const onSubmitValidationInitials: onSubmitValidationType = {
  onSubmitIsError: false,
  errorMessage: "",
};

export default function SignIn({ signInText, isSignedIn }: props) {
  // Initialize useRouter
  const router = useRouter();

  // States
  const [credentials, setCredentials] =
    useState<credentialsType>(credentialInitials);
  const [credentialsValidation, setCredentialsValidation] =
    useState<credentialValidationType>(credentialValidationInitials);
  const [onSubmitError, setOnSubmitError] = useState<onSubmitValidationType>(
    onSubmitValidationInitials
  );

  // Zustand Store
  const { setAfterSignIn } = notificationStore((state) => state);

  // Events
  const handleOnSubmit = async () => {
    const res = await signIn("credentials", {
      email: credentials.email,
      password: credentials.password,
      redirect: false,
    });
    if (!res?.ok) {
      setOnSubmitError((prev) => ({
        ...prev,
        onSubmitIsError: true,
        errorMessage: "Error! Check your credentials again.",
      }));
    } else {
      setOnSubmitError((prev) => ({
        ...prev,
        onSubmitIsError: false,
        errorMessage: "",
      }));
      router.push("/dashboard");
    }
  };
  const handleValidation = (name: string, value: string) => {
    if (name === "email") {
      setCredentialsValidation((prev) => ({
        ...prev,
        emailIsError: value === "" && true,
      }));
    } else if (name === "password") {
      setCredentialsValidation((prev) => ({
        ...prev,
        passwordIsError: value === "" && true,
      }));
    } else {
      return;
    }
  };
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    handleValidation(name, value);
    setCredentials((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <Box
      className={poppins.className}
      display={"flex"}
      flexDirection={"column"}
      gap={"3"}
      mt={"1rem"}
      justifyContent={"center"}
      alignItems={"center"}
      fontSize={{ sm: "xs", md: "sm" }}
    >
      {!isSignedIn && (
        <Box w={"90%"} display={"flex"} flexDirection={"column"} gap={"2"}>
          <FormInput
            state={credentials.email}
            placeholder="Enter your Email"
            label="Email"
            name="email"
            type="email"
            onChange={handleInputChange}
            isRequired={true}
            isError={credentialsValidation.emailIsError}
          />
          <FormInput
            state={credentials.password}
            placeholder="Enter your Password"
            label="Password"
            name="password"
            type="password"
            onChange={handleInputChange}
            isRequired={true}
            isError={credentialsValidation.passwordIsError}
          />
          {onSubmitError.onSubmitIsError && (
            <Text fontSize={{ sm: "xs", md: "sm" }} color={"red"}>
              {onSubmitError.errorMessage}
            </Text>
          )}
          <Button
            leftIcon={<PhArrowBendDoubleUpRightLight color="#fff" />}
            w={{ sm: "60%", md: "150px" }}
            m={"0.4rem auto 0 auto"}
            size={{ sm: "sm" }}
            colorScheme="linkedin"
            onClick={() => {
              handleOnSubmit();
            }}
          >
            Sign In
          </Button>
        </Box>
      )}
      <Box>
        <Text textAlign={"center"}>{signInText}</Text>
        <Box
          display={"flex"}
          justifyContent={"start"}
          alignItems={"start"}
          flexDirection={"column"}
          gap={"0.5rem"}
          w={{ sm: "45%", md: "50%" }}
          minW={"150px"}
        >
          {isSignedIn ? (
            <Link w={"100%"} href={"/dashboard"}>
              <Button
                leftIcon={<PhArrowBendDoubleUpRightLight color="#fff" />}
                w={"100%"}
                size={{ sm: "sm" }}
                colorScheme="linkedin"
              >
                Dashboard
              </Button>
            </Link>
          ) : (
            <>
              <Button
                leftIcon={<MdiGithub color="#fff" />}
                w={"100%"}
                size={{ sm: "sm" }}
                colorScheme="green"
                onClick={() => {
                  setAfterSignIn(true);
                  signIn("github", { callbackUrl: "/dashboard" });
                }}
              >
                Github
              </Button>
              <Button
                leftIcon={<PhGoogleLogoBold color="#fff" />}
                w={"100%"}
                size={{ sm: "sm" }}
                colorScheme="red"
                onClick={() => {
                  setAfterSignIn(true);
                  signIn("google", { callbackUrl: "/dashboard" });
                }}
              >
                Google
              </Button>
            </>
          )}
        </Box>
      </Box>
    </Box>
  );
}
