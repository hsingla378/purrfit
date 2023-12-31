import React, { useEffect } from "react";
import { useState } from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import NotLoggenIn from "../../components/NotLoggenIn/NotLoggenIn";
import axios from "axios";
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
  Skeleton,
  SkeletonCircle,
  SkeletonText,
} from "@chakra-ui/react";
import { Link as ReactRouterLink } from "react-router-dom";
import { Link as ChakraLink, LinkProps } from "@chakra-ui/react";
import "./Dashboard.css";
import ActivitiesByArea from "./ActivitiesByArea";
import ActivitiesCompleted from "./ActivitiesCompleted";
import Loading from "../../components/Loading";

export default function ActivityTracking() {
  const [loading, setLoading] = useState(false);
  const [activityCount, setActivityCount] = useState(null);

  const fetchAcitivities = () => {
    setLoading(true);
    const token = localStorage.getItem("accessToken");

    let config = {
      method: "get",
      maxBodyLength: Infinity,
      url: "https://purrfit-back.onrender.com/api/v1/user/activiyTrack",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    axios
      .request(config)
      .then((response) => {
        setActivityCount(() => {
          let sum = 0;
          for (let activity of response.data.data.activityCount) {
            sum += activity.count;
          }
          setLoading(false);
          return sum;
        });
        // setActivityCount(response.data.data.activityCount.length);
      })
      .catch((error) => {
        console.log(error);
      });
    setLoading(false);
  };

  useEffect(() => {
    fetchAcitivities();
  }, []);

  return (
    <>
      <Header />
      <Grid
        maxW={"5xl"}
        as={Container}
        h="200px"
        templateRows="1fr 1fr"
        templateColumns={{ base: "1fr", md: "27% 1fr 1fr" }}
        gap={6}
        height={"auto"}
        alignItems={"start"}
        // maxHeight={"675px"}
        // overflow={"auto"}
      >
        <GridItem
          rowStart={{ md: 1 }}
          rowEnd={{ md: 3 }}
          // rowSpan={{ base: 2, md: 2 }}
          colStart={{ base: 1, md: 1 }}
          colEnd={{ base: 4, md: 2 }}
          // colSpan={{ base: 14, md: 4 }}
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
              className="non-active-link"
            >
              Preferences
            </ChakraLink>
            <ChakraLink
              as={ReactRouterLink}
              to="/activity"
              className="active-link"
            >
              Activity Tracking
            </ChakraLink>
          </Flex>
        </GridItem>
        <GridItem
          rowStart={{ md: 1 }}
          rowEnd={{ md: 2 }}
          colStart={{ base: 1, md: 2 }}
          colEnd={{ base: 4, md: 4 }}
          // colSpan={{ base: 14, md: 10 }}
          // bg="#303130"
          rounded={"2xl"}
          p={6}
          alignSelf={"stretch"}
          minHeight={"200px"}
        >
          {!localStorage.getItem("accessToken") ? (
            <NotLoggenIn />
          ) : loading ? (
            <Loading />
          ) : (
            <Flex mb={6} justifyContent={"center"} mx={4} alignItems={"center"}>
              <Flex
                flexDirection={"column"}
                justifyContent={"center"}
                alignItems={"center"}
              >
                <Text fontSize={"lg"} fontWeight={500}>
                  Activities Completed
                </Text>
                <Flex
                  className="activities-count"
                  fontSize={"6xl"}
                  border={"2px solid white"}
                  p={2}
                  rounded={"full"}
                  width={"120px"}
                  height={"120px"}
                  justifyContent={"center"}
                  alignItems={"center"}
                  fontWeight={"600"}
                  my={3}
                  color={"gray.100"}
                  boxShadow={"2xl"}
                >
                  {activityCount}
                </Flex>
              </Flex>
            </Flex>
          )}
        </GridItem>
        <GridItem
          rowStart={{ md: 2 }}
          rowEnd={{ md: 3 }}
          colStart={{ base: 1, md: 2 }}
          colEnd={{ base: 4, md: 3 }}
          // colSpan={{ base: 14, md: 5 }}
          bg="#303130"
          rounded={"2xl"}
          p={6}
          alignSelf={"stretch"}
          textAlign={"center"}
          minHeight={"200px"}
        >
          <Text fontSize={"xl"} fontWeight={600} mb={2}>
            Activities Completed
          </Text>
          <Text fontSize={"md"}>Last 6 Months</Text>
          {/* <Button
            borderColor={"#00B81D"}
            color={"#00B81D"}
            variant="outline"
            my={4}
          >
            Share
          </Button> */}

          <Flex justifyContent={"center"} alignItems={"center"} h={"80%"}>
            <ActivitiesCompleted />
          </Flex>
        </GridItem>
        <GridItem
          rowStart={{ md: 2 }}
          rowEnd={{ md: 4 }}
          colStart={{ base: 1, md: 3 }}
          colEnd={{ base: 4, md: 4 }}
          // colSpan={{ base: 14, md: 5 }}
          bg="#303130"
          rounded={"2xl"}
          p={6}
          textAlign={"center"}
          alignSelf={"stretch"}
          minHeight={"200px"}
        >
          <Text fontSize={"xl"} fontWeight={600} mb={2}>
            Activities by Area
          </Text>
          <Text fontSize={"md"}>Last 6 Months</Text>
          <Flex justifyContent={"center"} alignItems={"center"} h={"80%"}>
            <ActivitiesByArea />
          </Flex>

          {/* <Button
            borderColor={"#00B81D"}
            color={"#00B81D"}
            variant="outline"
            my={4}
          >
            Share
          </Button> */}
        </GridItem>
      </Grid>
      <Footer />
    </>
  );
}
