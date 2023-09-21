import React from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
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
  Divider,
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
        templateRows="repeat(12, 1fr)"
        templateColumns="repeat(14, 1fr)"
        gap={6}
        height={"auto"}
        alignItems={"start"}
        // maxHeight={"675px"}
        overflow={"auto"}
      >
        <GridItem
          // rowSpan={{ base: 2, md: 2 }}
          rowStart={1}
          rowEnd={13}
          colSpan={{ base: 14, md: 4 }}
          bg="#303130"
          rounded={"2xl"}
          pb={6}
          alignSelf={"stretch"}
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
            <Text
              className="username"
              fontSize={"3xl"}
              fontWeight={500}
              my={3}
              justifyContent={{ base: "center", md: "left" }}
            >
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
              className="active-link"
            >
              Overview
            </ChakraLink>
            <ChakraLink
              as={ReactRouterLink}
              to="/ranks"
              className="non-active-link"
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
          rowStart={1}
          rowEnd={7}
          colSpan={{ base: 14, md: 10 }}
          bg="#303130"
          rounded={"2xl"}
          p={6}
          alignSelf={"stretch"}
        >
          <Text fontSize={"xl"} fontWeight={600} mb={10}>
            Ranks
          </Text>
          <Flex
            mb={6}
            flexDirection={{ base: "column", md: "row" }}
            gap={{ base: "3rem", md: "" }}
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
            {/* <hr /> */}
            <Divider display={{ base: "block", md: "none" }} />
            <Flex
              // borderTop={{ base: "solid", md: "none" }}
              // borderBottom={{ base: "solid", md: "none" }}
              flexDirection={"column"}
              justifyContent={"space-between"}
              alignItems={"center"}
            >
              <Text>Current Rank</Text>
              <Image
                src="silver.png"
                my={3}
                boxShadow={"2xl"}
                rounded={"full"}
                w={"80px"}
              ></Image>
              <Text as={"b"}>Silver</Text>
              <Flex gap={1}>
                <Text as={"b"}>18</Text>
                <Text>activities</Text>
              </Flex>
            </Flex>
            <Divider display={{ base: "block", md: "none" }} />

            <Flex
              flexDirection={"column"}
              justifyContent={"space-between"}
              alignItems={"center"}
            >
              <Text>Next Rank</Text>
              <Image
                src="gold.png"
                my={3}
                boxShadow={"2xl"}
                rounded={"full"}
                w={"80px"}
              ></Image>
              <Text as={"b"}>Gold</Text>
              <Flex gap={1}>
                <Text as={"b"}>50</Text>
                <Text>activities</Text>
              </Flex>
            </Flex>
          </Flex>
        </GridItem>
        <GridItem
          rowStart={7}
          rowEnd={13}
          colSpan={{ base: 14, md: 5 }}
          bg="#303130"
          rounded={"2xl"}
          p={6}
          alignSelf={"stretch"}
        >
          <Text fontSize={"xl"} fontWeight={600} mb={10}>
            Activity History
          </Text>
        </GridItem>
        <GridItem
          rowStart={7}
          rowEnd={13}
          colSpan={{ base: 14, md: 5 }}
          bg="#303130"
          rounded={"2xl"}
          p={6}
          alignSelf={"stretch"}
        >
          <Text fontSize={"xl"} fontWeight={600} mb={10}>
            Preferences
          </Text>
          <Box mb={4}>
            <Text as={"b"}>Health Area</Text>
            <UnorderedList mt={2}>
              <ListItem>Posture</ListItem>
              <ListItem>Eye Breaks</ListItem>
              <ListItem>Hydration</ListItem>
            </UnorderedList>
          </Box>
          <Box>
            <Text as={"b"}>Frequency</Text>
            <UnorderedList mt={2}>
              <ListItem>Every 30 minutes</ListItem>
            </UnorderedList>
          </Box>
        </GridItem>
      </Grid>
      <Footer />
    </>
  );
}
