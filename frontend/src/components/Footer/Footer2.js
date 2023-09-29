"use client";

import {
  Box,
  chakra,
  Container,
  Flex,
  Stack,
  Text,
  useBreakpointValue,
  useColorModeValue,
  VisuallyHidden,
  Image,
  Link,
  Button,
} from "@chakra-ui/react";
import { FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

const SocialButton = ({ children, label, href }) => {
  return (
    <chakra.button
      bg={useColorModeValue("blackAlpha.100", "whiteAlpha.100")}
      rounded={"full"}
      w={8}
      h={8}
      cursor={"pointer"}
      as={"a"}
      href={href}
      display={"inline-flex"}
      alignItems={"center"}
      justifyContent={"center"}
      transition={"background 0.3s ease"}
      _hover={{
        bg: useColorModeValue("blackAlpha.200", "whiteAlpha.200"),
      }}
    >
      <VisuallyHidden>{label}</VisuallyHidden>
      {children}
    </chakra.button>
  );
};

export default function Footer2() {
  return (
    <Box
      mt={20}
      py={3}
      style={{ boxShadow: "0 3px 10px rgb(0 0 0 / 0.2)" }}
      maxW={{ base: "90%", lg: "5xl" }}
      mx={"auto"}
      mb={6}
      borderRadius={"1rem"}
      backgroundColor="rgba(38, 39, 38, 0.8)"
    >
      <Container
        as={Stack}
        maxW={"6xl"}
        py={2}
        direction={{ base: "column", md: "row" }}
        spacing={5}
        justify={{ base: "center", md: "space-between" }}
        align={{ base: "center", md: "center" }}
      >
        <Flex gap={1} align="center">
          <Image src="purrfit_logo.png" alt="Purrfit Bot" />
          {/* <Text
            textAlign={useBreakpointValue({ base: "center", md: "left" })}
            // fontFamily={"heading"}
            color={useColorModeValue("gray.800", "white")}
            fontSize={"30px"}
            fontWeight={600}
          >
            Purrfit
          </Text> */}
        </Flex>
        <Stack direction={"row"} spacing={6} color={"gray.200"} mr={"1rem"}>
          <Link href={"/#features"} fontWeight={"500"} fontSize={"1rem"}>
            Features
          </Link>
          <Link href={"/dashboard"} fontWeight={"500"} fontSize={"1rem"}>
            Dashboard
          </Link>
          <Link href={"/help"} fontWeight={"500"} fontSize={"1rem"}>
            Help
          </Link>
          <Link href={"/#team"} fontWeight={"500"} fontSize={"1rem"}>
            Team
          </Link>
          {/* <SocialButton label={"Twitter"} href={"#"}>
            <FaTwitter />
          </SocialButton>
          <SocialButton label={"YouTube"} href={"#"}>
            <FaYoutube />
          </SocialButton>
          <SocialButton label={"Instagram"} href={"#"}>
            <FaInstagram />
          </SocialButton> */}
        </Stack>
        {/* <Stack
          flex={{ base: 1, md: 0 }}
          justify={"flex-end"}
          direction={"row"}
          display={{ base: "none", md: "block" }}
          spacing={6}
        >
          <Button
            as={"a"}
            display={{ base: "none", md: "inline-flex" }}
            fontSize={"1rem"}
            fontWeight={"bold"}
            color={"white"}
            colorScheme={"green"}
            bg={"#00B81D"}
            href={"#"}
            // _hover={{
            //   bg: "#00B81D",
            // }}
            _hover={{
              bg: "rgba(0, 184, 29, .7)",
            }}
            rounded={"xl"}
            px={6}
          >
            {" "}
            Login
          </Button>
        </Stack> */}
      </Container>
    </Box>
  );
}
