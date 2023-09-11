import { Button } from "@chakra-ui/button";
import { Icon } from "@chakra-ui/icon";
import { Image } from "@chakra-ui/image";
import { Box, Flex, Heading, Link, Stack, Text } from "@chakra-ui/layout";
import React from "react";
import { AiFillLinkedin } from "react-icons/ai";

export default function MemberCard({ image, name, designation, linkedin }) {
  return (
    <Box
      maxW={{ base: "full", md: "250px" }}
      w={"full"}
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      p={5}
      align="center"
    >
      <Stack align={"start"} spacing={2} position={"relative"}>
        <Flex
          //   w={16}
          //   h={16}
          align={"center"}
          justify={"center"}
          color={"white"}
          rounded={"full"}
          w={"full"}
          //   bg={useColorModeValue("gray.100", "gray.700")}
        >
          <Image
            src={image}
            alt="Whiskers Bot"
            width={"100px"}
            rounded={"full"}
            // boxSize="150px"
            mx="auto"
          />
        </Flex>
        <Box mt={4} w={"full"}>
          <Heading size="lg">{name}</Heading>
          <Text mt={4} fontSize={"lg"} color={"gray.400"}>
            {designation}
          </Text>
        </Box>
        <Link
          href={linkedin}
          isExternal
          position={"absolute"}
          right={0}
          color={"blue.400"}
        >
          <Icon as={AiFillLinkedin} w={8} h={8} />
        </Link>
      </Stack>
    </Box>
  );
}
