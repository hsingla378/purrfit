import React, { useEffect } from "react";
import { useState } from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import NotLoggenIn from "../../components/NotLoggenIn/NotLoggenIn";

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
  Divider,
  Skeleton,
  SkeletonCircle,
  SkeletonText,
  Stack,
} from "@chakra-ui/react";
import { Link as ReactRouterLink } from "react-router-dom";
import { Link as ChakraLink, LinkProps } from "@chakra-ui/react";
import "./Dashboard.css";
import axios from "axios";
// import { useHistory } from "react-router-dom";
import Overview from "./Overview";
import Ranks from "./Ranks";
import ActivityTracking from "./ActivityTracking";
import Preferences from "./Preferences";
import ActivitiesCompleted from "./ActivitiesCompleted";

export default function Dashboard() {
  const [currentActivities, setCurrentActivities] = useState(null);
  const [currentBadge, setCurrentBadge] = useState({});
  const [nextBadge, setNextBadge] = useState({});
  const [goals, setGoals] = useState([]);
  const [frequency, setFrequency] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchOverview = () => {
    const token = localStorage.getItem("accessToken");
    let config = {
      method: "get",
      maxBodyLength: Infinity,
      url: "https://purrfit-back.onrender.com/api/v1/user/overview",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    setLoading(true);

    axios
      .request(config)
      .then((response) => {
        console.log(response.data.data);
        setCurrentActivities(response.data.data.ranks.activities);
        setCurrentBadge(response.data.data.ranks.badge);
        setNextBadge(response.data.data.ranks.nextBadge);
        setGoals(response.data.data.preferences.goals);
        setFrequency(response.data.data.preferences.frequency);
      })
      .catch((error) => {
        console.log(error);
      });

    setLoading(false);
  };

  useEffect(() => {
    fetchOverview();
  }, []);

  // const history = useHistory();

  // const currentPath = history.location.pathname;

  // Conditionally render components based on the current path
  // let componentToRender;

  // switch (currentPath) {
  //   case "/dashboard":
  //     componentToRender = <Overview />;
  //     break;
  //   case "/ranks":
  //     componentToRender = <Ranks />;
  //     break;
  //   case "/preferences":
  //     componentToRender = <Preferences />;
  //     break;
  //   case "/activity":
  //     componentToRender = <ActivityTracking />;
  //     break;
  //   default:
  //     componentToRender = <div>Page not found</div>;
  // }

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
        // overflow={"auto"}
      >
        <GridItem
          // rowSpan={{ base: 2, md: 2 }}
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
              {localStorage.getItem("username")
                ? localStorage.getItem("username")
                : "Profile"}
            </Text>
            {/* <Box my={4}>
              <Flex gap={1} justifyContent={{ base: "center", md: "left" }}>
                <Text as="b">UserID:</Text>
                <Text>9866550245</Text>
              </Flex>
              <Flex gap={1} justifyContent={{ base: "center", md: "left" }}>
                <Text as="b">Role:</Text>
                <Text>User</Text>
              </Flex>
            </Box> */}
          </Box>
          <Flex
            flexDirection={"column"}
            fontSize={"lg"}
            textAlign={{ base: "center", md: "left" }}
          >
            <ChakraLink
              as={ReactRouterLink}
              to="/dashboard"
              className="active-link"
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
              className="non-active-link"
            >
              Activity Tracking
            </ChakraLink>
          </Flex>
        </GridItem>
        <GridItem
          rowStart={1}
          rowEnd={7}
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
            flexDirection={{ base: "column", md: "row" }}
            gap={{ base: "3rem", md: "" }}
            justifyContent={"space-between"}
            mx={4}
            alignItems={"stretch"}
          >
            {!localStorage.getItem("accessToken") ? (
              <NotLoggenIn />
            ) : (
              <>
                <Flex
                  flexDirection={"column"}
                  justifyContent={"space-between"}
                  alignItems={"center"}
                >
                  <Text>Activities Completed</Text>
                  <Flex
                    className="activities-count"
                    fontSize={"4xl"}
                    border={"2px solid #00B81D"}
                    p={2}
                    rounded={"full"}
                    width={"80px"}
                    height={"80px"}
                    justifyContent={"center"}
                    alignItems={"center"}
                    fontWeight={"600"}
                    my={3}
                    color={"#00B81D"}
                    boxShadow={"2xl"}
                  >
                    {currentActivities}
                  </Flex>
                  <Flex gap={1}>
                    <Text as={"b"}>
                      {nextBadge.activites - currentBadge.activites}
                    </Text>
                    <Text>more to next rank</Text>
                  </Flex>
                </Flex>
                <Divider display={{ base: "block", md: "none" }} />
                <Flex
                  // borderTop={{ base: "solid", md: "none" }}
                  // borderBottom={{ base: "solid", md: "none" }}
                  flexDirection={"column"}
                  justifyContent={"space-between"}
                  alignItems={"center"}
                >
                  <Text>Current Rank</Text>
                  <Image
                    src={currentBadge.url}
                    my={3}
                    boxShadow={"2xl"}
                    rounded={"full"}
                    w={"80px"}
                  ></Image>
                  <Text as={"b"}>{currentBadge.name}</Text>
                  <Flex gap={1}>
                    <Text as={"b"}>{currentBadge.activites}</Text>
                    <Text>activities</Text>
                  </Flex>
                </Flex>
                <Divider display={{ base: "block", md: "none" }} />

                <Flex
                  flexDirection={"column"}
                  justifyContent={"space-between"}
                  alignItems={"center"}
                >
                  <Text>Next Rank</Text>
                  <Image
                    src="gold.png"
                    my={3}
                    boxShadow={"2xl"}
                    rounded={"full"}
                    w={"80px"}
                  ></Image>
                  <Text as={"b"}>{nextBadge.name}</Text>
                  <Flex gap={1}>
                    <Text as={"b"}>{nextBadge.activites}</Text>
                    <Text>activities</Text>
                  </Flex>
                </Flex>
              </>
            )}
          </Flex>
        </GridItem>
        <GridItem
          rowStart={7}
          rowEnd={13}
          colSpan={{ base: 14, md: 5 }}
          bg="#303130"
          rounded={"2xl"}
          p={6}
          alignSelf={"stretch"}
        >
          <Text fontSize={"xl"} fontWeight={600} mb={10}>
            Activity History
          </Text>
          {!localStorage.getItem("accessToken") ? (
            <NotLoggenIn />
          ) : (
            <ActivitiesCompleted />
          )}
        </GridItem>
        <GridItem
          rowStart={7}
          rowEnd={13}
          colSpan={{ base: 14, md: 5 }}
          bg="#303130"
          rounded={"2xl"}
          p={6}
          alignSelf={"stretch"}
        >
          <Text fontSize={"xl"} fontWeight={600} mb={6}>
            Preferences
          </Text>
          {!localStorage.getItem("accessToken") ? (
            <NotLoggenIn />
          ) : (
            <>
              <Box mb={4}>
                <Text as={"b"}>{goals.length ? "Health Area" : ""}</Text>
                <UnorderedList mt={2}>
                  {goals.map((goal, index) => {
                    return <ListItem key={index}>{goal}</ListItem>;
                  })}
                </UnorderedList>
              </Box>
              <Box>
                <Text as={"b"}>Frequency</Text>
                <UnorderedList mt={2}>
                  <ListItem>
                    Every {frequency} {frequency > 1 ? "minutes" : "minute"}
                  </ListItem>
                </UnorderedList>
              </Box>
            </>
          )}
        </GridItem>
      </Grid>
      <Footer />
    </>
  );
}
