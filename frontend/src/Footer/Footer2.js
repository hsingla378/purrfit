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
      py={3}
      style={{ boxShadow: "0 3px 10px rgb(0 0 0 / 0.2)" }}
      maxW={{ base: "90%", lg: "5xl" }}
      m={"auto"}
      mb={6}
      borderRadius={"1rem"}
      backgroundColor="rgba(38, 39, 38, 0.8)"
    >
      <Container
        as={Stack}
        maxW={"6xl"}
        py={4}
        direction={{ base: "column", md: "row" }}
        spacing={5}
        justify={{ base: "center", md: "space-between" }}
        align={{ base: "center", md: "center" }}
      >
        <Flex gap={1} align="center">
          <Image src="cartoon_cat.webp" alt="Purrfit Bot" boxSize="45px" />
          <Text
            textAlign={useBreakpointValue({ base: "center", md: "left" })}
            // fontFamily={"heading"}
            color={useColorModeValue("gray.800", "white")}
            fontSize={"30px"}
            fontWeight={600}
          >
            Purrfit
          </Text>
        </Flex>
        <Text my={2}>© 2023 Purrfit. All rights reserved</Text>
        <Stack direction={"row"} spacing={6} color={"white"}>
          <SocialButton label={"Twitter"} href={"#"}>
            <FaTwitter />
          </SocialButton>
          <SocialButton label={"YouTube"} href={"#"}>
            <FaYoutube />
          </SocialButton>
          <SocialButton label={"Instagram"} href={"#"}>
            <FaInstagram />
          </SocialButton>
        </Stack>
      </Container>
    </Box>
  );
}
