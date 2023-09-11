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
      mt={12}
      px={10}
    >
      <Container as={Stack} maxW={"5xl"} py={10}>
        <Flex
          // templateColumns={{ sm: "1fr 1fr", md: "2fr 1fr 1fr 1fr 1fr" }}
          flexDirection={{ base: "column", md: "row" }}
          justifyContent={"space-between"}
          alignItems={"center"}
          spacing={8}
        >
          <Stack spacing={6}>
            <Box m={{ base: "auto", md: "0" }}>
              <Flex gap={1} align="center">
                <Image
                  src="cartoon_cat.webp"
                  alt="Purrfit Bot"
                  boxSize="45px"
                />
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
            </Box>
            <Text fontSize={"sm"}>
              © 2023 Wellness Purrfit. All rights reserved
            </Text>
          </Stack>
          <Stack
            align={"flex-start"}
            fontSize={"lg"}
            fontWeight={500}
            mt={{ base: "2rem", md: "" }}
            flexDirection={{ base: "row", md: "column" }}
            gap={"2rem"}
          >
            <Box as="a" href={"#"}>
              Features
            </Box>
            <Box as="a" href={"#"}>
              Dashboard
            </Box>
            <Box as="a" href={"#"}>
              Help
            </Box>
          </Stack>
        </Flex>
      </Container>
    </Box>
  );
}
