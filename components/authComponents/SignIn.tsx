"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { signIn } from "next-auth/react";

// Components
import FormInput from "../reusableComponents/FormInput";

// Zustand
import { notificationStore } from "@/store/notificationStore";

// ChakraUI
import { Box, Button, Link, Text } from "@chakra-ui/react";

// Icons
import PhGoogleLogoBold from "@/icones/PhGoogleLogoBold";
import MdiGithub from "@/icones/MdiGithub";
import PhArrowBendDoubleUpRightLight from "@/icones/PhArrowBendDoubleUpRightLight";

// Fonts
import { poppins } from "@/fonts";

// Types
type props = {
  isSignedIn: boolean;
};
type credentialsType = {
  email: string;
  password: string;
};
type credentialValidationType = {
  emailIsError: boolean | null;
  passwordIsError: boolean | null;
};
type onSubmitValidationType = {
  onSubmitIsError: boolean;
  errorMessage: string;
};
type isSubmittingType = {
  credentialsSubmit: boolean;
  gitHubSubmit: boolean;
  googleSubmit: boolean;
};

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
const isSubmittingInitials: isSubmittingType = {
  credentialsSubmit: false,
  gitHubSubmit: false,
  googleSubmit: false,
};

export default function SignIn({ isSignedIn }: props) {
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
  const [isSubmitting, setIsSubmitting] =
    useState<isSubmittingType>(isSubmittingInitials);

  // Zustand Store
  const { setAfterSignIn } = notificationStore((state) => state);

  // Events
  const handleOnSubmit = async (provider: string) => {
    let res;
    if (provider === "credentials") {
      setIsSubmitting((prev) => ({ ...prev, credentialsSubmit: true }));
      res = await signIn(provider, {
        email: credentials.email,
        password: credentials.password,
        redirect: false,
      });
      setIsSubmitting((prev) => ({ ...prev, credentialsSubmit: false }));
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
        setAfterSignIn(true);
        router.push("/dashboard");
      }
    } else if (provider === "github") {
      setIsSubmitting((prev) => ({ ...prev, gitHubSubmit: true }));
      setAfterSignIn(true);
      await signIn(provider, { callbackUrl: "/dashboard" });
      setIsSubmitting((prev) => ({ ...prev, gitHubSubmit: false }));
    } else if (provider === "google") {
      setIsSubmitting((prev) => ({ ...prev, googleSubmit: true }));
      setAfterSignIn(true);
      await signIn(provider, { callbackUrl: "/dashboard" });
      setIsSubmitting((prev) => ({ ...prev, googleSubmit: false }));
    } else {
      return "Provider not found";
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
      justifyContent={"center"}
      alignItems={"center"}
      fontSize={{ sm: "xs", md: "sm" }}
    >
      {!isSignedIn ? (
        <>
          <Box w={"90%"} display={"flex"} flexDirection={"column"} gap={"2"}>
            <Box color={"#ccc"} fontSize={"0.7rem"}>
              <Text>
                Note: You can use the email and password below to sign in using
                credentials.
              </Text>
              <Text>
                Email:{" "}
                <span style={{ color: "#00ADB5", textDecoration: "underline" }}>
                  admin@admin.com
                </span>
              </Text>
              <Text>
                Password:{" "}
                <span style={{ color: "#00ADB5", textDecoration: "underline" }}>
                  admin/123
                </span>
              </Text>
            </Box>
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
              loadingText="Processing"
              isLoading={isSubmitting.credentialsSubmit}
              size={{ sm: "sm" }}
              colorScheme="linkedin"
              onClick={() => {
                handleOnSubmit("credentials");
              }}
            >
              Sign In
            </Button>
          </Box>
          <Box display={"flex"} flexDirection={"column"} alignItems={"center"}>
            <Text textAlign={"center"}>Or you can Sign In with:</Text>
            <Box
              display={"flex"}
              justifyContent={"start"}
              alignItems={"start"}
              flexDirection={"column"}
              gap={"0.5rem"}
              w={{ sm: "45%", md: "50%" }}
              minW={"150px"}
            >
              <Button
                leftIcon={<MdiGithub color="#fff" />}
                w={"100%"}
                size={{ sm: "sm" }}
                colorScheme="green"
                loadingText="Redirecting"
                isLoading={isSubmitting.gitHubSubmit}
                onClick={() => {
                  handleOnSubmit("github");
                }}
              >
                Github
              </Button>
              <Button
                leftIcon={<PhGoogleLogoBold color="#fff" />}
                w={"100%"}
                size={{ sm: "sm" }}
                colorScheme="red"
                loadingText="Redirecting"
                isLoading={isSubmitting.googleSubmit}
                onClick={() => {
                  handleOnSubmit("google");
                }}
              >
                Google
              </Button>
            </Box>
          </Box>
        </>
      ) : (
        <Box display={"flex"} flexDirection={"column"} alignItems={"center"}>
          <Text px={"2"} textAlign={"center"}>
            You are already Signed In. Click the button below to redirect to
            Dashboard
          </Text>
          <Box
            display={"flex"}
            justifyContent={"start"}
            alignItems={"start"}
            flexDirection={"column"}
            gap={"0.5rem"}
            w={{ sm: "45%", md: "50%" }}
            minW={"150px"}
          >
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
          </Box>
        </Box>
      )}
    </Box>
  );
}
