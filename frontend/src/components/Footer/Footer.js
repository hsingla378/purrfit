"use client";

import {
  Box,
  Container,
  Flex,
  Image,
  SimpleGrid,
  Stack,
  Text,
  useBreakpointValue,
  useColorModeValue,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

const ListHeader = ({ children }) => {
  return (
    <Text fontWeight={"500"} fontSize={"lg"} mb={2}>
      {children}
    </Text>
  );
};

export default function Footer() {
  return (
    <Box
      bg={"#303130"}
      color={useColorModeValue("gray.700", "gray.200")}
      mt={16}
      px={10}
      // position={"fixed"}
      bottom={0}
      // w={"100%"}
    >
      <Container as={Stack} maxW={"5xl"} py={10}>
        <Flex
          // templateColumns={{ sm: "1fr 1fr", md: "2fr 1fr 1fr 1fr 1fr" }}
          flexDirection={{ base: "column", md: "row" }}
          justifyContent={"space-between"}
          alignItems={"center"}
          // alignItems={"center"}
          spacing={8}
        >
          <Stack spacing={6}>
            <Box m={{ base: "auto", md: "0" }}>
              <HashLink to={"/"}>
                <Flex gap={1} align="center" alignItems={"center"}>
                  <Image src="purrfit_logo.png" alt="Purrfit Bot" />
                </Flex>
              </HashLink>
            </Box>
          </Stack>
          <Stack
            align={"flex-start"}
            fontSize={"lg"}
            fontWeight={500}
            // mt={{ base: "2rem", md: "" }}
            flexDirection={{ base: "column", md: "row" }}
            alignItems={"center"}
            gap={"2rem"}
          >
            <HashLink to={"/#features"}>Features</HashLink>
            <HashLink to={"/dashboard"}>Dashboard</HashLink>
            <HashLink to={"/help"}>Help</HashLink>
          </Stack>
        </Flex>
      </Container>
    </Box>
  );
}
