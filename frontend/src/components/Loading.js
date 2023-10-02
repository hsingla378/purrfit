import { Flex, Spinner, Text } from "@chakra-ui/react";
import React from "react";

export default function Loading() {
  return (
    <Flex
      justifyContent={"center"}
      alignItems={"center"}
      height={"50%"}
      flexDirection={"column"}
    >
      <Spinner color="#00B81D" />
      {/* <Spinner
    thickness="4px"
    speed="0.65s"
    emptyColor="gray.200"
    color="#00B81D"
    size="xl"
  /> */}
      {/* <Text mt={4}>Loading...</Text> */}
    </Flex>
  );
}
