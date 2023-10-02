import React, { useEffect } from "react";
import { useState } from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import NotLoggenIn from "../../components/NotLoggenIn/NotLoggenIn";
import Loading from "../../components/Loading";
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
import axios from "axios";

export default function Ranks() {
  const [loading, setLoading] = useState(false);
  const token = localStorage.getItem("accessToken");
  const [currentBadge, setCurrentBadge] = useState({});
  const [badges, setBadges] = useState([]);

  const fetchRanks = () => {
    setLoading(true);
    let data = "";

    let config = {
      method: "get",
      maxBodyLength: Infinity,
      url: "https://purrfit-back.onrender.com/api/v1/user/rank",
      headers: {
        Authorization: `Bearer ${token}`,
      },
      data: data,
    };

    axios
      .request(config)
      .then((response) => {
        console.log(response.data.data);
        setCurrentBadge(response.data.data.badge);
        setBadges(response.data.data.badges);
      })
      .catch((error) => {
        console.log(error);
      });
    setLoading(false);
  };

  useEffect(() => {
    fetchRanks();
  }, []);

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
              className="non-active-link"
            >
              Overview
            </ChakraLink>
            <ChakraLink
              as={ReactRouterLink}
              to="/ranks"
              className="active-link"
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
          rowEnd={8}
          colSpan={{ base: 14, md: 10 }}
          // bg="#303130"
          rounded={"2xl"}
          p={6}
          m={"auto"}
          color={"gray.200"}
          alignSelf={"stretch"}
        >
          {loading ? (
            <Loading />
          ) : !localStorage.getItem("accessToken") ? (
            <NotLoggenIn />
          ) : (
            <Flex
              // borderTop={{ base: "solid", md: "none" }}
              // borderBottom={{ base: "solid", md: "none" }}
              flexDirection={"column"}
              justifyContent={"center"}
              alignItems={"center"}
            >
              <Text color={"gray.100"} fontSize={"lg"}>
                Current Rank
              </Text>
              <Image
                src={currentBadge.url}
                my={3}
                boxShadow={"2xl"}
                rounded={"full"}
                w={"150px"}
              ></Image>
              <Text as={"b"} fontSize={"2xl"}>
                {currentBadge.name}
              </Text>
              <Flex gap={1} my={4}>
                <Text as={"b"}>{currentBadge.activites}</Text>
                <Text>
                  {currentBadge.activites > 0 ? "activities" : "activity"}
                </Text>
              </Flex>
              {/* <Button
              borderColor={"#00B81D"}
              color={"#00B81D"}
              variant="outline"
              my={4}
            >
              Share
            </Button> */}
            </Flex>
          )}
        </GridItem>

        <GridItem
          rowStart={8}
          rowEnd={13}
          colSpan={{ base: 14, md: 10 }}
          bg="#303130"
          rounded={"2xl"}
          p={6}
          alignSelf={"stretch"}
        >
          <Text fontSize={"xl"} fontWeight={600} mb={10}>
            Ranks
          </Text>
          {loading ? (
            <Loading />
          ) : !localStorage.getItem("accessToken") ? (
            <NotLoggenIn />
          ) : (
            <Flex
              mb={6}
              justifyContent={"space-between"}
              mx={4}
              alignItems={"stretch"}
            >
              {badges.map((badge) => {
                return (
                  <Flex
                    // borderTop={{ base: "solid", md: "none" }}
                    // borderBottom={{ base: "solid", md: "none" }}
                    key={badge.id}
                    flexDirection={"column"}
                    justifyContent={"center"}
                    alignItems={"center"}
                    color={"gray.200"}
                    filter="auto"
                    brightness={badge.valid ? "100%" : "50%"}
                    width={{ base: "50%", md: "auto" }}
                    marginBottom={{ base: "20px", md: 0 }}
                  >
                    <Box position={"relative"}>
                      <Image
                        src={badge.url}
                        my={3}
                        boxShadow={"2xl"}
                        rounded={"full"}
                        w={"60px"}
                      ></Image>
                      <Flex
                        border={"1px solid #00B81D"}
                        color={"#00B81D"}
                        variant="outline"
                        p={"2px"}
                        fontSize={"10px"}
                        width={"20px"}
                        borderRadius={"100%"}
                        justifyContent={"center"}
                        alignItems={"center"}
                        position={"absolute"}
                        right={"0"}
                        top={"8px"}
                        bg={"gray.800"}
                        display={badge.valid ? "flex" : "none"}
                      >
                        ✓
                      </Flex>
                    </Box>
                    <Text as={"b"}>{badge.name}</Text>
                    <Flex gap={1} my={1}>
                      <Text as={"b"}>{badge.activites}</Text>
                      <Text>
                        {badge.activites > 0 ? "activities" : "activity"}
                      </Text>
                    </Flex>
                  </Flex>
                );
              })}
            </Flex>
          )}
        </GridItem>
      </Grid>
      <Footer />
    </>
  );
}
