import React from "react";
import {
  Box,
  Container,
  Heading,
  Stack,
  Text,
  List,
  ListItem,
  ListIcon,
  OrderedList,
  UnorderedList,
} from "@chakra-ui/react";

export default function GetStarted() {
  return (
    <Box
      mt={16}
      color={"gray.400"}
      fontSize={{ base: "sm", sm: "lg" }}
      lineHeight={"1.8em"}
    >
      <Stack
        spacing={4}
        as={Container}
        maxW={"5xl"}
        textAlign={"left"}
        mb={12}
      >
        <Heading
          fontSize={{ base: "2xl", sm: "3xl" }}
          fontWeight={"600"}
          color={"gray.100"}
        >
          Adding Purrfit to Your Server
        </Heading>
        <Text>
          Step into the cozy cat den of ease! Adding our Discord bot, PurrFit,
          to your server is as simple as a catnap. Just follow these simple
          steps:
        </Text>
        <OrderedList>
          <ListItem>
            Invite: Use our Invite Bot link or set it up in your server settings
            (ensure you have "Manage Server" permission).
          </ListItem>
          <ListItem>
            Authorize: Click the invite, pick your server, and approve. Ensure
            it’s in the correct channels.
          </ListItem>
          <ListItem>
            Customize: Adjust your Health Goals and Frequency as needed. Use
            commands or our web dashboard for tweaks.
          </ListItem>
          <ListItem>
            Enjoy: You're set! Dive into its features and amplify your Discord
            fun.
          </ListItem>
        </OrderedList>
      </Stack>
      <Stack
        spacing={4}
        as={Container}
        maxW={"5xl"}
        textAlign={"left"}
      >
        {" "}
        <Heading
          fontSize={{ base: "2xl", sm: "3xl" }}
          fontWeight={"600"}
          color={"gray.100"}
        >
          Adjust Preferences via Dashboard
        </Heading>
        <OrderedList>
          <ListItem>Login: Visit our site and sign in.</ListItem>
          <ListItem>
            Dashboard: Click on Dashboard in our navigation bar to tweak Health
            Goals and Frequency.
          </ListItem>
        </OrderedList>
        <Text>
          Got a furball of doubt or need a paw? Reach out to our support crew.
          Enjoy PurrFit’s company and the fun she sprinkles on your server!
        </Text>
      </Stack>
    </Box>
  );
}
