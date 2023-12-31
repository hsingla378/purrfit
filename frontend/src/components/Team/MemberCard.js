import { Button } from "@chakra-ui/button";
import { Icon } from "@chakra-ui/icon";
import { Image } from "@chakra-ui/image";
import { Box, Flex, Heading, Link, Stack, Text } from "@chakra-ui/layout";
import React from "react";

export default function MemberCard({
  image,
  first_name,
  last_name,
  name,
  designation,
  linkedin,
}) {
  return (
    <Box
      maxW={{ base: "full", md: "225px" }}
      w={"full"}
      borderWidth="1px"
      borderRadius="24px"
      // borderColor={"rgba(0, 184, 29, .5)"}
      overflow="hidden"
      p={5}
      align="center"
      // boxShadow={"0 3px 10px rgb(0 0 0 / 0.2)"}
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
            alt={name}
            // backgroundColor={"gray"}
            // height={"100px"}
            // width={"100px"}
            // rounded={"full"}
            // boxSize="150px"
            // boxShadow={"0 3px 10px rgb(0 0 0 / 0.2)"}
            mx="auto"
          ></Image>
        </Flex>
        <Box mt={4} w={"full"}>
          <Heading fontSize={"1.75rem"} fontWeight={600}>
            {first_name}
          </Heading>
          <Heading fontSize={"1.75rem"} fontWeight={600} mt={2}>
            {last_name}
          </Heading>
          <Text mt={4} fontSize={"md"} color={"gray.400"}>
            {designation}
          </Text>
        </Box>
        {/* <Link
          href={linkedin}
          isExternal
          position={"absolute"}
          right={0}
          color={"blue.400"}
        >
          <Icon as={AiFillLinkedin} w={8} h={8} />
        </Link> */}
      </Stack>
    </Box>
  );
}
