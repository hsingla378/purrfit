"use client";

import { Box, Container, Flex, Heading, Stack, Text } from "@chakra-ui/react";
import MemberCard from "./MemberCard";

export default function Team() {
  let teamData = [
    {
      image: "Jiaqian_Yu.jpeg",
      first_name: "Jiaqian",
      last_name: "Yu",
      name: "Jiaqian Yu",
      designation: "Product Manager",
      linkedin: "https://www.linkedin.com/in/cypm/",
    },
    {
      image: "Mitchell_Law.jpeg",
      first_name: "Mitchell",
      last_name: "Law",
      name: "Mitchell Law",
      designation: "Product Designer",
      linkedin: "https://www.linkedin.com/in/mitchellowenlaw/",
    },
    {
      image: "Shubham_Aggarwal.jpeg",
      first_name: "Shubham",
      last_name: "Aggarwal",
      name: "Shubham Aggarwal",
      designation: "Back-end Developer",
      linkedin: "https://www.linkedin.com/in/shubham-aggarwal-654ab521a/",
    },
    {
      image: "himanshu_singla.jpg",
      first_name: "Himanshu",
      last_name: "Singla",
      name: "Himanshu Singla",
      designation: "Front-end Developer",
      linkedin: "https://www.linkedin.com/in/hsingla378/",
    },

    {
      image: "Esther_Fischer.jpeg",
      first_name: "Esther",
      last_name: "Fischer",
      name: "Esther Fischer",
      designation: "Mentor",
      linkedin: "https://www.linkedin.com/in/estherfischerberlin/",
    },
  ];

  return (
    <Box p={4} mt={16} mb={20} id="team">
      <Stack
        spacing={4}
        as={Container}
        maxW={"3xl"}
        textAlign={"center"}
        mb={20}
      >
        <Heading fontSize={{ base: "2xl", sm: "4xl" }} fontWeight={"600"}>
          The Team
        </Heading>
        {/* <Text color={"gray.600"} fontSize={{ base: "sm", sm: "lg" }}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis
          obcaecati ut cupiditate pariatur, dignissimos, placeat amet officiis.
        </Text> */}
      </Stack>

      <Container maxW={"7xl"} mt={12}>
        <Flex flexWrap="wrap" gridGap={6} justify="center">
          {teamData.map((member) => {
            return (
              <MemberCard
                first_name={member.first_name}
                last_name={member.last_name}
                name={member.name}
                image={member.image}
                designation={member.designation}
                linkedin={member.linkedin}
              />
            );
          })}
        </Flex>
      </Container>
    </Box>
  );
}
