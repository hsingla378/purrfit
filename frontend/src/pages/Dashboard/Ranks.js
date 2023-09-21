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
        overflow={"auto"}
      >
        <GridItem
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
          rowStart={1}
          rowEnd={8}
          colSpan={{ base: 14, md: 10 }}
          // bg="#303130"
          rounded={"2xl"}
          p={6}
          m={"auto"}
          color={"gray.200"}
          alignSelf={"stretch"}
        >
          <Flex
            // borderTop={{ base: "solid", md: "none" }}
            // borderBottom={{ base: "solid", md: "none" }}
            flexDirection={"column"}
            justifyContent={"center"}
            alignItems={"center"}
          >
            <Text color={"gray.100"} fontSize={"lg"}>
              Current Rank
            </Text>
            <Image
              src="silver_badge.png"
              my={3}
              boxShadow={"2xl"}
              rounded={"full"}
              w={"150px"}
            ></Image>
            <Text as={"b"} fontSize={"2xl"}>
              Silver
            </Text>
            <Flex gap={1} my={4}>
              <Text as={"b"}>25</Text>
              <Text>activities</Text>
            </Flex>
            <Button
              borderColor={"#00B81D"}
              color={"#00B81D"}
              variant="outline"
              my={4}
            >
              Share
            </Button>
          </Flex>
        </GridItem>

        <GridItem
          rowStart={8}
          rowEnd={13}
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
            justifyContent={"space-between"}
            mx={4}
            alignItems={"stretch"}
          >
            <Flex
              // borderTop={{ base: "solid", md: "none" }}
              // borderBottom={{ base: "solid", md: "none" }}
              flexDirection={"column"}
              justifyContent={"center"}
              alignItems={"center"}
              color={"gray.200"}
              filter="auto"
              brightness="100%"
              width={{ base: "50%", md: "auto" }}
              marginBottom={{ base: "20px", md: 0 }}
            >
              <Box position={"relative"}>
                <Image
                  src="bronze.png"
                  my={3}
                  boxShadow={"2xl"}
                  rounded={"full"}
                  w={"60px"}
                ></Image>
                <Flex
                  border={"1px solid #00B81D"}
                  color={"#00B81D"}
                  variant="outline"
                  p={"2px"}
                  fontSize={"10px"}
                  width={"20px"}
                  borderRadius={"100%"}
                  justifyContent={"center"}
                  alignItems={"center"}
                  position={"absolute"}
                  right={"0"}
                  top={"8px"}
                  bg={"gray.800"}
                  display={"flex"}
                >
                  ✓
                </Flex>
              </Box>
              <Text as={"b"}>Bronze</Text>
              <Flex gap={1} my={1}>
                <Text as={"b"}>1</Text>
                <Text>activity</Text>
              </Flex>
            </Flex>{" "}
            <Flex
              // borderTop={{ base: "solid", md: "none" }}
              // borderBottom={{ base: "solid", md: "none" }}
              flexDirection={"column"}
              justifyContent={"center"}
              alignItems={"center"}
              color={"gray.200"}
              filter="auto"
              brightness="100%"
              width={{ base: "50%", md: "auto" }}
              marginBottom={{ base: "20px", md: 0 }}
            >
              <Box position={"relative"}>
                <Image
                  src="silver.png"
                  my={3}
                  boxShadow={"2xl"}
                  rounded={"full"}
                  w={"60px"}
                ></Image>
                <Flex
                  border={"1px solid #00B81D"}
                  color={"#00B81D"}
                  variant="outline"
                  p={"2px"}
                  fontSize={"10px"}
                  width={"20px"}
                  borderRadius={"100%"}
                  justifyContent={"center"}
                  alignItems={"center"}
                  position={"absolute"}
                  right={"0"}
                  top={"8px"}
                  bg={"gray.800"}
                  display={"flex"}
                >
                  ✓
                </Flex>
              </Box>
              <Text as={"b"}>Silver</Text>
              <Flex gap={1} my={1}>
                <Text as={"b"}>25</Text>
                <Text>activities</Text>
              </Flex>
            </Flex>
            <Flex
              // borderTop={{ base: "solid", md: "none" }}
              // borderBottom={{ base: "solid", md: "none" }}
              flexDirection={"column"}
              justifyContent={"center"}
              alignItems={"center"}
              color={"gray.200"}
              filter="auto"
              brightness="50%"
              width={{ base: "50%", md: "auto" }}
              marginBottom={{ base: "20px", md: 0 }}
            >
              <Box position={"relative"}>
                <Image
                  src="gold.png"
                  my={3}
                  boxShadow={"2xl"}
                  rounded={"full"}
                  w={"60px"}
                ></Image>
                <Flex
                  border={"1px solid #00B81D"}
                  color={"#00B81D"}
                  variant="outline"
                  p={"2px"}
                  fontSize={"10px"}
                  width={"20px"}
                  borderRadius={"100%"}
                  justifyContent={"center"}
                  alignItems={"center"}
                  position={"absolute"}
                  right={"0"}
                  top={"8px"}
                  bg={"gray.800"}
                  display={"none"}
                >
                  ✓
                </Flex>
              </Box>
              <Text as={"b"}>Gold</Text>
              <Flex gap={1} my={1}>
                <Text as={"b"}>50</Text>
                <Text>activities</Text>
              </Flex>
            </Flex>{" "}
            <Flex
              // borderTop={{ base: "solid", md: "none" }}
              // borderBottom={{ base: "solid", md: "none" }}
              flexDirection={"column"}
              justifyContent={"center"}
              alignItems={"center"}
              color={"gray.200"}
              filter="auto"
              brightness="50%"
              width={{ base: "50%", md: "auto" }}
              marginBottom={{ base: "20px", md: 0 }}
            >
              <Box position={"relative"}>
                <Image
                  src="platinum.png"
                  my={3}
                  boxShadow={"2xl"}
                  rounded={"full"}
                  w={"60px"}
                ></Image>
                <Flex
                  border={"1px solid #00B81D"}
                  color={"#00B81D"}
                  variant="outline"
                  p={"2px"}
                  fontSize={"10px"}
                  width={"20px"}
                  borderRadius={"100%"}
                  justifyContent={"center"}
                  alignItems={"center"}
                  position={"absolute"}
                  right={"0"}
                  top={"8px"}
                  bg={"gray.800"}
                  display={"none"}
                >
                  ✓
                </Flex>
              </Box>
              <Text as={"b"}>Platinum</Text>
              <Flex gap={1} my={1}>
                <Text as={"b"}>100</Text>
                <Text>activities</Text>
              </Flex>
            </Flex>{" "}
            <Flex
              // borderTop={{ base: "solid", md: "none" }}
              // borderBottom={{ base: "solid", md: "none" }}
              flexDirection={"column"}
              justifyContent={"center"}
              alignItems={"center"}
              color={"gray.200"}
              filter="auto"
              brightness="50%"
              width={{ base: "50%", md: "auto" }}
              marginBottom={{ base: "20px", md: 0 }}
            >
              <Box position={"relative"}>
                <Image
                  src="diamond.png"
                  my={3}
                  boxShadow={"2xl"}
                  rounded={"full"}
                  w={"60px"}
                ></Image>
                <Flex
                  border={"1px solid #00B81D"}
                  color={"#00B81D"}
                  variant="outline"
                  p={"2px"}
                  fontSize={"10px"}
                  width={"20px"}
                  borderRadius={"100%"}
                  justifyContent={"center"}
                  alignItems={"center"}
                  position={"absolute"}
                  right={"0"}
                  top={"8px"}
                  bg={"gray.800"}
                  display={"none"}
                >
                  ✓
                </Flex>
              </Box>
              <Text as={"b"}>Diamond</Text>
              <Flex gap={1} my={1}>
                <Text as={"b"}>150</Text>
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
