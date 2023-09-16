import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { Box, Container, Heading, Stack, Text } from "@chakra-ui/layout";
import {
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  TabIndicator,
} from "@chakra-ui/react";
import GetStarted from "./GetStarted";
import Commands from "./Commands";
import FAQ from "./FAQ";

export default function Help() {
  return (
    <>
      <Header />
      <Box pt={16}>
        <Stack
          spacing={4}
          as={Container}
          maxW={"5xl"}
          textAlign={"left"}
          mb={12}
          id="features"
        >
          <Heading fontSize={{ base: "2xl", sm: "3xl" }} fontWeight={"600"}>
            Help Center
          </Heading>
          <Text color={"gray.500"} fontSize={{ base: "sm", sm: "lg" }}>
            Need help setting up the bot or exploring its features? Find
            everything you need right here, meow!
          </Text>
        </Stack>
        <Stack
          spacing={4}
          as={Container}
          maxW={"5xl"}
          mb={12}
          textAlign={"left"}
          id="features"
        >
          <Tabs position="relative" variant="unstyled" my={12}>
            <TabList>
              <Tab w={"100%"} fontSize={"lg"} fontWeight={500}>
                Get Started
              </Tab>
              <Tab w={"100%"} fontSize={"lg"} fontWeight={500}>
                Commands
              </Tab>
              <Tab w={"100%"} fontSize={"lg"} fontWeight={500}>
                FAQ
              </Tab>
            </TabList>
            <TabIndicator
              mt="-1.5px"
              height="2px"
              bg="#00B81D"
              // color="#00B81D"
              borderRadius="1px"
            />
            <TabPanels>
              <TabPanel>{<GetStarted />}</TabPanel>
              <TabPanel>{<Commands />}</TabPanel>
              <TabPanel>{<FAQ />}</TabPanel>
            </TabPanels>
          </Tabs>
        </Stack>
      </Box>
      <Footer />
    </>
  );
}
