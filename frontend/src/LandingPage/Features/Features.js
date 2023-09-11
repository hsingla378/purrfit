import React from "react";
import SingleFeature from "./SingleFeature";
import { Box, Container, Heading, Stack, Text } from "@chakra-ui/layout";

export default function Features() {
  const features = [
    {
      name: "Goal Setting",
      headline: "Paws and pick health spots!",
      description:
        "Discover a world of health options that align with your lifestyle. Choose health spots that resonate with your goals and preferences, all while enjoying your gaming adventures.",
      image:
        "https://images.unsplash.com/photo-1554200876-56c2f25224fa?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      id: "goal-setting",
    },
    {
      name: "Reminders",
      headline: "Tail-twitch to health!",
      description:
        "Purrfit Bot will seamlessly integrate health reminders into your gaming sessions. No need to interrupt your playtime; we'll meow your way to a healthier you.",
      image:
        "https://images.unsplash.com/photo-1554200876-56c2f25224fa?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      id: "reminders",
    },
    {
      name: "Progress Tracking",
      headline: "Climb the kitty tower of health!",
      description:
        "Climb the Kitty Tower of Health by earning shiny badges and leveling up with every playful activity you engage in. Purrfit Bot makes staying healthy an exciting game!",
      image:
        "https://images.unsplash.com/photo-1554200876-56c2f25224fa?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      id: "progress-tracking",
    },
  ];

  return (
    <Box py={16}>
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
