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
  Button,
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
      >
        <GridItem
          rowStart={1}
          rowEnd={13}
          // rowSpan={{ base: 2, md: 2 }}
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
              className="non-active-link"
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
              className="active-link"
            >
              Activity Tracking
            </ChakraLink>
          </Flex>
        </GridItem>
        <GridItem
          rowStart={1}
          rowEnd={6}
          colSpan={{ base: 14, md: 10 }}
          // bg="#303130"
          rounded={"2xl"}
          p={6}
          alignSelf={"stretch"}
        >
          <Flex mb={6} justifyContent={"center"} mx={4} alignItems={"center"}>
            <Flex
              flexDirection={"column"}
              justifyContent={"center"}
              alignItems={"center"}
            >
              <Text fontSize={"lg"} fontWeight={500}>
                Activities Completed
              </Text>
              <Flex
                className="activities-count"
                fontSize={"6xl"}
                border={"2px solid white"}
                p={2}
                rounded={"full"}
                width={"120px"}
                height={"120px"}
                justifyContent={"center"}
                alignItems={"center"}
                fontWeight={"600"}
                my={3}
                color={"gray.100"}
                boxShadow={"2xl"}
              >
                32
              </Flex>
            </Flex>
          </Flex>
        </GridItem>
        <GridItem
          rowStart={6}
          rowEnd={13}
          colSpan={{ base: 14, md: 5 }}
          bg="#303130"
          rounded={"2xl"}
          p={6}
          alignSelf={"stretch"}
          textAlign={"center"}
        >
          <Text fontSize={"xl"} fontWeight={600} mb={2}>
            Activities Completed
          </Text>
          <Text fontSize={"md"}>Last 6 Months</Text>
          <Button
            borderColor={"#00B81D"}
            color={"#00B81D"}
            variant="outline"
            my={4}
          >
            Share
          </Button>
        </GridItem>
        <GridItem
          rowStart={6}
          rowEnd={13}
          colSpan={{ base: 14, md: 5 }}
          bg="#303130"
          rounded={"2xl"}
          p={6}
          textAlign={"center"}
          alignSelf={"stretch"}
        >
          <Text fontSize={"xl"} fontWeight={600} mb={2}>
            Activities by Area
          </Text>
          <Text fontSize={"md"}>Last 6 Months</Text>
          <Button
            borderColor={"#00B81D"}
            color={"#00B81D"}
            variant="outline"
            my={4}
          >
            Share
          </Button>
        </GridItem>
      </Grid>
      <Footer />
    </>
  );
}
