import React from "react";
import SingleFeature from "./SingleFeature";
import { Box, Container, Heading, Stack, Text } from "@chakra-ui/layout";

export default function Features() {
  const features = [
    {
      name: "Goal Setting",
      headline: "Paws and pick health spots!",
      description:
        "Browse whisker-twitching health options that purr-fectly fit you",
      image:
        "goal_setting.png",
      id: "goal-setting",
    },
    {
      name: "Reminders",
      headline: "Tail-twitch to health!",
      description:
        "Purrfit will meow activity reminders while you’re gaming, just the way you like it.",
      image:
        "reminders.png",
      id: "reminders",
    },
    {
      name: "Progress Tracking",
      headline: "Climb the kitty tower of health!",
      description:
        "Collect shiny badges and climb higher with every playful activity you do!",
      image:
        "progress_tracking.png",
      id: "progress-tracking",
    },
  ];

  return (
    <Box pt={16} pb={28}>
      <Stack
        spacing={4}
        as={Container}
        maxW={"3xl"}
        textAlign={"center"}
        mb={12}
        id="features"
      >
        <Heading fontSize={{ base: "2xl", sm: "4xl" }} fontWeight={"600"}>
          Features
        </Heading>
        {/* <Text color={"gray.600"} fontSize={{ base: "sm", sm: "lg" }}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis
          obcaecati ut cupiditate pariatur, dignissimos, placeat amet officiis.
        </Text> */}
      </Stack>
      {features.map((feature, index) => {
        return <SingleFeature key={index} index={index} feature={feature} />;
      })}
    </Box>
  );
}
