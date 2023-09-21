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
  Stack,
  Select,
} from "@chakra-ui/react";
import { Link as ReactRouterLink } from "react-router-dom";
import { Link as ChakraLink, LinkProps } from "@chakra-ui/react";
import "./Dashboard.css";
import { DeleteIcon, AddIcon } from "@chakra-ui/icons";

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
              className="active-link"
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
          rowEnd={4}
          colSpan={{ base: 14, md: 10 }}
          // bg="#303130"
          rounded={"2xl"}
          p={4}
          alignSelf={"stretch"}
        >
          <Stack spacing={4} as={Container} maxW={"5xl"} textAlign={"left"}>
            <Heading fontSize={{ base: "2xl", sm: "3xl" }} fontWeight={"600"}>
              Reminder Preferences
            </Heading>
            <Text color={"gray.500"} fontSize={{ base: "sm", sm: "lg" }}>
              Purrfit will meow at you during games! Pick what you want to hear
              about and how often.
            </Text>
          </Stack>
        </GridItem>
        <GridItem
          rowStart={4}
          rowEnd={13}
          colSpan={{ base: 14, md: 10 }}
          // bg="#303130"
          rounded={"2xl"}
          p={6}
          alignSelf={"stretch"}
        >
          <Select
            placeholder="Select option"
            borderColor={"#00B81D"}
            color={"#00B81D"}
            focusBorderColor={"#00B81D"}
            size={"lg"}
          >
            <option value="10mins">Every 10 Minutes</option>
            <option value="30mins">Every 30 Minutes</option>
            <option value="1hour">Every 1 hour</option>
            <option value="90mins">Every 90 minutes</option>
            <option value="2hours">Every 2 hours</option>
          </Select>
          <Grid
            templateColumns="repeat(3, 1fr)"
            gap={6}
            alignItems={"stretch"}
            pt={8}
            h={"100%"}
          >
            <GridItem
              bg="#303130"
              alignSelf={"stretch"}
              rounded={"2xl"}
              textAlign={"center"}
              fontSize={"lg"}
              fontWeight={500}
              position={"relative"}
              display={"flex"}
              flexDirection={"column"}
              justifyContent={"center"}
              alignItems={"center"}
            >
              {/* <Image
                src={""}
                alt={""}
                backgroundColor={"#1F1F1F"}
                height={"75px"}
                width={"75px"}
                rounded={"full"}
                boxShadow={"0 3px 10px rgb(0 0 0 / 0.2)"}
                mx="auto"
                my={2}
              /> */}
              <Box
                backgroundColor={"#1F1F1F"}
                height={"75px"}
                width={"75px"}
                rounded={"full"}
                boxShadow={"0 3px 10px rgb(0 0 0 / 0.2)"}
                mx="auto"
                my={2}
              ></Box>
              <DeleteIcon
                w={6}
                h={6}
                color="#A9A9A9"
                position={"absolute"}
                top={"15px"}
                right={"15px"}
              />
              <Text my={2}>Posture</Text>
            </GridItem>
            <GridItem
              bg="#303130"
              alignSelf={"stretch"}
              rounded={"2xl"}
              textAlign={"center"}
              fontSize={"lg"}
              fontWeight={500}
              position={"relative"}
              display={"flex"}
              flexDirection={"column"}
              justifyContent={"center"}
              alignItems={"center"}
            >
              {/* <Image
                src={""}
                alt={""}
                backgroundColor={"#1F1F1F"}
                height={"75px"}
                width={"75px"}
                rounded={"full"}
                boxShadow={"0 3px 10px rgb(0 0 0 / 0.2)"}
                mx="auto"
                my={2}
              /> */}
              <Box
                backgroundColor={"#1F1F1F"}
                height={"75px"}
                width={"75px"}
                rounded={"full"}
                boxShadow={"0 3px 10px rgb(0 0 0 / 0.2)"}
                mx="auto"
                my={2}
              ></Box>
              <DeleteIcon
                w={6}
                h={6}
                color="#A9A9A9"
                position={"absolute"}
                top={"15px"}
                right={"15px"}
              />
              <Text my={2}>Hydration</Text>
            </GridItem>{" "}
            <GridItem
              bg="#303130"
              alignSelf={"stretch"}
              rounded={"2xl"}
              textAlign={"center"}
              fontSize={"lg"}
              fontWeight={500}
              position={"relative"}
              display={"flex"}
              flexDirection={"column"}
              justifyContent={"center"}
              alignItems={"center"}
            >
              {/* <Image
                src={""}
                alt={""}
                backgroundColor={"#1F1F1F"}
                height={"75px"}
                width={"75px"}
                rounded={"full"}
                boxShadow={"0 3px 10px rgb(0 0 0 / 0.2)"}
                mx="auto"
                my={2}
              /> */}
              <Box
                backgroundColor={"#1F1F1F"}
                height={"75px"}
                width={"75px"}
                rounded={"full"}
                boxShadow={"0 3px 10px rgb(0 0 0 / 0.2)"}
                mx="auto"
                my={2}
              ></Box>
              <DeleteIcon
                w={6}
                h={6}
                color="#A9A9A9"
                position={"absolute"}
                top={"15px"}
                right={"15px"}
              />
              <Text my={2}>Eye Breaks</Text>
            </GridItem>{" "}
            <GridItem
              bg="#303130"
              alignSelf={"stretch"}
              rounded={"2xl"}
              textAlign={"center"}
              fontSize={"lg"}
              fontWeight={500}
              position={"relative"}
              display={"flex"}
              flexDirection={"column"}
              justifyContent={"center"}
              alignItems={"center"}
            >
              {/* <Image
                src={""}
                alt={""}
                backgroundColor={"#1F1F1F"}
                height={"75px"}
                width={"75px"}
                rounded={"full"}
                boxShadow={"0 3px 10px rgb(0 0 0 / 0.2)"}
                mx="auto"
                my={2}
              /> */}
              <Box
                backgroundColor={"#1F1F1F"}
                height={"75px"}
                width={"75px"}
                rounded={"full"}
                boxShadow={"0 3px 10px rgb(0 0 0 / 0.2)"}
                mx="auto"
                my={2}
              ></Box>
              <DeleteIcon
                w={6}
                h={6}
                color="#A9A9A9"
                position={"absolute"}
                top={"15px"}
                right={"15px"}
              />
              <Text my={2}>Stretching</Text>
            </GridItem>{" "}
            <GridItem
              bg="#303130"
              alignSelf={"stretch"}
              rounded={"2xl"}
              textAlign={"center"}
              fontSize={"lg"}
              fontWeight={500}
              position={"relative"}
              display={"flex"}
              flexDirection={"column"}
              justifyContent={"center"}
              alignItems={"center"}
            >
              {/* <Image
                src={""}
                alt={""}
                backgroundColor={"#1F1F1F"}
                height={"75px"}
                width={"75px"}
                rounded={"full"}
                boxShadow={"0 3px 10px rgb(0 0 0 / 0.2)"}
                mx="auto"
                my={2}
              /> */}
              <Box
                backgroundColor={"#1F1F1F"}
                height={"75px"}
                width={"75px"}
                rounded={"full"}
                boxShadow={"0 3px 10px rgb(0 0 0 / 0.2)"}
                mx="auto"
                my={2}
              ></Box>
              <DeleteIcon
                w={6}
                h={6}
                color="#A9A9A9"
                position={"absolute"}
                top={"15px"}
                right={"15px"}
              />
              <Text my={2}>Movement</Text>
            </GridItem>{" "}
            <GridItem
              bg="#303130"
              alignSelf={"stretch"}
              rounded={"2xl"}
              textAlign={"center"}
              fontSize={"md"}
              fontWeight={500}
              position={"relative"}
              display={"flex"}
              flexDirection={"column"}
              justifyContent={"center"}
              alignItems={"center"}
            >
              {/* <Image
                src={""}
                alt={""}
                backgroundColor={"#1F1F1F"}
                height={"75px"}
                width={"75px"}
                rounded={"full"}
                boxShadow={"0 3px 10px rgb(0 0 0 / 0.2)"}
                mx="auto"
                my={2}
              /> */}
              <Flex
                backgroundColor={"#1F1F1F"}
                height={"75px"}
                width={"75px"}
                rounded={"full"}
                boxShadow={"0 3px 10px rgb(0 0 0 / 0.2)"}
                mx="auto"
                my={2}
                justifyContent={"center"}
                alignItems={"center"}
              >
                <AddIcon w={8} h={8} color="#00B81D" />
              </Flex>
              <DeleteIcon
                w={6}
                h={6}
                color="#A9A9A9"
                position={"absolute"}
                top={"15px"}
                right={"15px"}
              />
              <Text my={2}>Add focus area</Text>
            </GridItem>
          </Grid>
        </GridItem>
      </Grid>
      <Footer />
    </>
  );
}
