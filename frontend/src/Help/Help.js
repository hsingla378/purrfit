import React, { useState, useEffect } from "react";
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
  const [currentTab, setCurrentTab] = useState("get-started");
  const hash = window.location.hash.substring(1);

  useEffect(() => {
    const tabMapping = {
      "get-started": "get-started",
      commands: "commands",
      faq: "faq",
    };

    setCurrentTab(tabMapping[hash] || "get-started");
  }, [hash]);

  console.log("current tab is " + currentTab);
  return (
    <>
      <Header />
      <Box>
        <Stack spacing={4} as={Container} maxW={"5xl"} textAlign={"left"}>
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
          my={12}
          textAlign={"left"}
        >
          <Tabs position="relative" variant="unstyled" my={12}>
            <TabList borderBottom={"2px solid gray"} pb={4}>
              <Tab
                w={"100%"}
                fontSize={"lg"}
                fontWeight={500}
                id="get-started"
                _selected={{ color: "#00B81D" }}
              >
                Get Started
              </Tab>
              <Tab
                w={"100%"}
                fontSize={"lg"}
                fontWeight={500}
                id="commands"
                _selected={{ color: "#00B81D" }}
              >
                Commands
              </Tab>
              <Tab
                w={"100%"}
                fontSize={"lg"}
                fontWeight={500}
                id="faq"
                _selected={{ color: "#00B81D" }}
              >
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
