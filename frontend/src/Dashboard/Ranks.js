import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import {
  Box,
  Container,
  Flex,
  Grid,
  GridItem,
  Heading,
  Image,
  Text,
  List,
  ListItem,
  ListIcon,
  OrderedList,
  UnorderedList,
} from "@chakra-ui/react";
import { Link as ReactRouterLink } from "react-router-dom";
import { Link as ChakraLink, LinkProps } from "@chakra-ui/react";
import "./Dashboard.css";

export default function Dashboard() {
  return (
    <>
      <Header />
      <Grid
        maxW={"5xl"}
        as={Container}
        h="200px"
        templateRows="repeat(2, 1fr)"
        templateColumns="repeat(6, 1fr)"
        gap={6}
        height={"auto"}
      >
        <GridItem
          rowSpan={{ base: 2, md: 2 }}
          colSpan={{ base: 6, md: 2 }}
          bg="#303130"
          rounded={"2xl"}
          pb={6}
        >
          <Box textAlign={"center"} p={6}>
            <Image
              src={"profile_image.png"}
              alt={"Profile Image"}
              // backgroundColor={"gray"}
              height={"75px"}
              // width={"75px"}
              rounded={"full"}
              // boxSize="150px"
              // boxShadow={"0 3px 10px rgb(0 0 0 / 0.2)"}
              mx="auto"
            ></Image>
            <Text className="username" fontSize={"3xl"} fontWeight={500} my={3} justifyContent={{ base: "center", md: "left" }}>
              @kaisumio
            </Text>
            <Box my={4}>
              <Flex gap={1} justifyContent={{ base: "center", md: "left" }}>
                <Text as="b">UserID:</Text>
                <Text>9866550245</Text>
              </Flex>
              <Flex gap={1} justifyContent={{ base: "center", md: "left" }}>
                <Text as="b">Role:</Text>
                <Text>User</Text>
              </Flex>
            </Box>
          </Box>
          <Flex
            flexDirection={"column"}
            fontSize={"lg"}
            textAlign={{ base: "center", md: "left" }}
          >
            <ChakraLink
              as={ReactRouterLink}
              to="/dashboard"
              className="non-active-link"
            >
              Overview
            </ChakraLink>
            <ChakraLink
              as={ReactRouterLink}
              to="/ranks"
              className="active-link"
            >
              Ranks
            </ChakraLink>
            <ChakraLink
              as={ReactRouterLink}
              to="/preferences"
              className="non-active-link"
            >
              Preferences
            </ChakraLink>
            <ChakraLink
              as={ReactRouterLink}
              to="/activity"
              className="non-active-link"
            >
              Activity Tracking
            </ChakraLink>
          </Flex>
        </GridItem>

        <GridItem
          colSpan={{ base: 6, md: 4 }}
          bg="#303130"
          rounded={"2xl"}
          p={6}
        >
          <Text fontSize={"xl"} fontWeight={600} mb={10}>
            Activity History
          </Text>
        </GridItem>

        <GridItem
          colSpan={{ base: 6, md: 4 }}
          bg="#303130"
          rounded={"2xl"}
          p={6}
        >
          <Text fontSize={"xl"} fontWeight={600} mb={10}>
            Ranks
          </Text>
          <Flex
            mb={6}
            justifyContent={"space-between"}
            mx={4}
            alignItems={"stretch"}
          >
            <Flex
              flexDirection={"column"}
              justifyContent={"space-between"}
              alignItems={"center"}
            >
              <Text>Activities Completed</Text>
              <Flex
                className="activities-count"
                fontSize={"4xl"}
                border={"2px solid #00B81D"}
                p={2}
                rounded={"full"}
                width={"80px"}
                height={"80px"}
                justifyContent={"center"}
                alignItems={"center"}
                fontWeight={"600"}
                my={3}
                color={"#00B81D"}
                boxShadow={"2xl"}
              >
                32
              </Flex>
              <Flex gap={1}>
                <Text as={"b"}>18</Text>
                <Text>more to next rank</Text>
              </Flex>
            </Flex>
            <Flex
              flexDirection={"column"}
              justifyContent={"space-between"}
              alignItems={"center"}
            >
              <Text>Current Rank</Text>
              <Image
                src="silver_badge.png"
                my={3}
                boxShadow={"2xl"}
                rounded={"full"}
              ></Image>
              <Text as={"b"}>Silver</Text>
              <Flex gap={1}>
                <Text as={"b"}>18</Text>
                <Text>activities</Text>
              </Flex>
            </Flex>
            <Flex
              flexDirection={"column"}
              justifyContent={"space-between"}
              alignItems={"center"}
            >
              <Text>Next Rank</Text>
              <Image
                src="gold_badge.png"
                my={3}
                boxShadow={"2xl"}
                rounded={"full"}
              ></Image>
              <Text as={"b"}>Gold</Text>
              <Flex gap={1}>
                <Text as={"b"}>50</Text>
                <Text>activities</Text>
              </Flex>
            </Flex>
          </Flex>
        </GridItem>
      </Grid>
      <Footer />
    </>
  );
}
