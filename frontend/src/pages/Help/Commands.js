import React from "react";
import { Box, Container, Flex, Heading, Stack, Text } from "@chakra-ui/react";

export default function Commands() {
  const commandList = [
    {
      command: "/menu",
      desc: "Typing /menu to learn how to get started, view commands, and set preferences.",
    },
    {
      command: "/preferences",
      desc: "Typing /preferences to set the Health Area and the Frequency for the goal.",
    },
    {
      command: "/goal",
      desc: "Typing /goal to view current goal, including the Health Area and the Frequency.",
    },
    {
      command: "/start",
      desc: "Typing /start to allow the bot to begin the notification system.",
    },
    {
      command: "/end",
      desc: "Typing /end to allow the bot to end the notification system.",
    },
    {
      command: "/pause",
      desc: "Typing /end to allow the bot to end the notification system.",
    },
    {
      command: "/profile @username",
      desc: "Typing /profile @username to view profile, including goals, ranking, and activity history.",
    },
    {
      command: "/share",
      desc: "Share your progress on social media.",
    },
    {
      command: "/command",
      desc: "Typing /command to view all commands.",
    },
  ];

  return (
    <Box mt={16} color={"gray.500"} fontSize={{ base: "sm", sm: "lg" }}>
      {" "}
      {commandList.map((commandObj, index) => {
        return (
          <Flex
            key={index}
            spacing={4}
            maxW={"100%"}
            mb={12}
            my={6}
            bg={"#303130"}
            rounded={"2xl"}
            p={2}
            alignItems={"center"}
            style={{ boxShadow: "0 3px 10px rgb(0 0 0 / 0.2)" }}
          >
            <Text
              fontSize={{ base: "sm", lg: "lg" }}
              fontWeight={"600"}
              color={"gray.100"}
              p={3}
              w={{ base: "30%", lg: "15%" }}
            >
              {commandObj.command}
            </Text>
            <Text
              fontSize={{ base: "sm", lg: "lg" }}
              p={3}
              w={{ base: "70%", sm: "85%" }}
            >
              {commandObj.desc}
            </Text>
          </Flex>
        );
      })}
    </Box>
  );
}
