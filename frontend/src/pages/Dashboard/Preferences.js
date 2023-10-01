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
  Stack,
  Select,
  Skeleton,
  SkeletonCircle,
  SkeletonText,
  useToast,
  AlertDialog,
  AlertDialogBody,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogContent,
  AlertDialogOverlay,
  AlertDialogCloseButton,
  Button,
  useDisclosure,
} from "@chakra-ui/react";
import { Link as ReactRouterLink } from "react-router-dom";
import { Link as ChakraLink, LinkProps } from "@chakra-ui/react";
import "./Dashboard.css";
import { DeleteIcon, AddIcon } from "@chakra-ui/icons";

export default function Preferences() {
  // const [preferences, setPreferences] = useState([
  //   "posture",
  //   "hydration",
  //   "eyeBreaks",
  //   "stretching",
  // ]);
  const frequencies = [1, 30, 60, 90, 120];
  const token = localStorage.getItem("accessToken");
  const [preferences, setPreferences] = useState([]);
  const [frequency, setFrequency] = useState(null);
  const [preferencesLeft, setPreferencesLeft] = useState([]);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const cancelRef = React.useRef();
  const toast = useToast();

  const fetchPreferences = () => {
    let config = {
      method: "get",
      maxBodyLength: Infinity,
      url: "https://purrfit-back.onrender.com/api/v1/user/preferences",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    axios
      .request(config)
      .then((response) => {
        console.log(response.data.data);
        // console.log(response.data.data.preferences.goals);
        setPreferences(response.data.data.preferences.goals);
        setFrequency(response.data.data.preferences.frequency);
      })
      .catch((error) => {
        console.log(error);
      });

    const preferencesLeftArray = allPreferences.filter((preference) => {
      return !preferences.includes(preference);
    });
    setPreferencesLeft(preferencesLeftArray);
  };

  useEffect(() => {
    fetchPreferences();
  }, []);

  // useEffect(() => {
  //   const preferencesLeftArray = allPreferences.filter((preference) => {
  //     return !preferences.includes(preference);
  //   });
  //   setPreferencesLeft(preferencesLeftArray);
  // }, []);

  const changeFrequency = (value) => {
    let data = JSON.stringify({
      frequency: value,
    });

    let config = {
      method: "post",
      maxBodyLength: Infinity,
      url: "https://purrfit-back.onrender.com/api/v1/user/preferences/frequency",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      data: data,
    };

    axios
      .request(config)
      .then((response) => {
        console.log(JSON.stringify(response.data));
        toast({
          title: `Frequency set to ${value} minutes successfully`,
          status: "success",
          isClosable: true,
        });
        setFrequency(value);
      })
      .catch((error) => {
        toast({
          title: `Oops! Something went wrong`,
          status: "error",
          isClosable: true,
        });
        console.log(error);
      });
  };

  const addPreference = (value) => {
    const token = localStorage.getItem("accessToken");
    let data = JSON.stringify({
      goals: [...preferences, value],
    });

    let config = {
      method: "post",
      maxBodyLength: Infinity,
      url: "https://purrfit-back.onrender.com/api/v1/user/preferences/goals",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      data: data,
    };

    axios
      .request(config)
      .then((response) => {
        console.log(JSON.stringify(response.data));
        fetchPreferences();
        toast({
          title: `Preference added successfully`,
          status: "success",
          isClosable: true,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const deletePreference = (value) => {
    console.log(value);
    const token = localStorage.getItem("accessToken");
    let updatedPreferences = [...preferences];
    const index = updatedPreferences.indexOf(value);
    if (index > -1) {
      updatedPreferences.splice(index, 1);
    }
    let data = JSON.stringify({
      goals: [...updatedPreferences],
    });

    let config = {
      method: "post",
      maxBodyLength: Infinity,
      url: "https://purrfit-back.onrender.com/api/v1/user/preferences/goals",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      data: data,
    };

    axios
      .request(config)
      .then((response) => {
        console.log(JSON.stringify(response.data));
        fetchPreferences();
        toast({
          title: `Preference removed successfully`,
          status: "success",
          isClosable: true,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const allPreferences = [
    "posture",
    "hydration",
    "eyeBreaks",
    "stretching",
    "movement",
    "mindfulBreathing",
  ];

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
              className="non-active-link"
            >
              Ranks
            </ChakraLink>
            <ChakraLink
              as={ReactRouterLink}
              to="/preferences"
              className="active-link"
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
          rowEnd={4}
          colSpan={{ base: 14, md: 10 }}
          // bg="#303130"
          rounded={"2xl"}
          p={4}
          alignSelf={"stretch"}
        >
          <Stack spacing={4} as={Container} maxW={"5xl"} textAlign={"left"}>
            <Heading fontSize={{ base: "2xl", sm: "3xl" }} fontWeight={"600"}>
              Reminder Preferences
            </Heading>
            <Text color={"gray.500"} fontSize={{ base: "sm", sm: "lg" }}>
              Purrfit will meow at you during games! Pick what you want to hear
              about and how often.
            </Text>
          </Stack>
        </GridItem>
        <GridItem
          rowStart={4}
          rowEnd={13}
          colSpan={{ base: 14, md: 10 }}
          // bg="#303130"
          rounded={"2xl"}
          p={6}
          alignSelf={"stretch"}
        >
          {!localStorage.getItem("accessToken") ? (
            <NotLoggenIn />
          ) : (
            <>
              <Select
                // placeholder="Select Frequency"
                borderColor={"#00B81D"}
                color={"#00B81D"}
                focusBorderColor={"#00B81D"}
                size={"lg"}
                onChange={(e) => changeFrequency(e.target.value)}
              >
                <option selected={frequency == null && true} disabled={true}>
                  Select Frequency
                </option>
                {frequencies.map((value, index) => {
                  return (
                    <option
                      key={index}
                      value={value}
                      selected={value === frequency && true}
                      // disabled={value === frequency ? true : false}
                    >
                      Every {value} Minutes
                    </option>
                  );
                })}
              </Select>
              <Grid
                templateColumns="repeat(3, 1fr)"
                gap={6}
                alignItems={"stretch"}
                pt={8}
                h={"100%"}
              >
                {preferences.map((preference) => {
                  return (
                    <GridItem
                      bg="#303130"
                      alignSelf={"stretch"}
                      rounded={"2xl"}
                      textAlign={"center"}
                      fontSize={"lg"}
                      fontWeight={500}
                      position={"relative"}
                      display={"flex"}
                      flexDirection={"column"}
                      justifyContent={"center"}
                      alignItems={"center"}
                      maxHeight={"200px"}
                    >
                      {/* <Image
                src={""}
                alt={""}
                backgroundColor={"#1F1F1F"}
                height={"75px"}
                width={"75px"}
                rounded={"full"}
                boxShadow={"0 3px 10px rgb(0 0 0 / 0.2)"}
                mx="auto"
                my={2}
              /> */}
                      <Box
                        backgroundColor={"#1F1F1F"}
                        height={"75px"}
                        width={"75px"}
                        rounded={"full"}
                        boxShadow={"0 3px 10px rgb(0 0 0 / 0.2)"}
                        mx="auto"
                        my={2}
                      ></Box>
                      <DeleteIcon
                        w={6}
                        h={6}
                        color="#A9A9A9"
                        position={"absolute"}
                        top={"15px"}
                        right={"15px"}
                        cursor={"pointer"}
                        onClick={(e) => deletePreference(preference)}
                      />
                      <Text my={2}>{preference}</Text>
                    </GridItem>
                  );
                })}
                <GridItem
                  bg="#303130"
                  alignSelf={"stretch"}
                  rounded={"2xl"}
                  textAlign={"center"}
                  fontSize={"md"}
                  fontWeight={500}
                  position={"relative"}
                  flexDirection={"column"}
                  justifyContent={"center"}
                  alignItems={"center"}
                  display={preferences.length === 6 ? "none" : "flex"}
                >
                  {/* <Image
                src={""}
                alt={""}
                backgroundColor={"#1F1F1F"}
                height={"75px"}
                width={"75px"}
                rounded={"full"}
                boxShadow={"0 3px 10px rgb(0 0 0 / 0.2)"}
                mx="auto"
                my={2}
              /> */}
                  <Flex
                    backgroundColor={"#1F1F1F"}
                    height={"75px"}
                    width={"75px"}
                    rounded={"full"}
                    boxShadow={"0 3px 10px rgb(0 0 0 / 0.2)"}
                    mx="auto"
                    my={2}
                    justifyContent={"center"}
                    alignItems={"center"}
                    onClick={onOpen}
                    cursor={"pointer"}
                  >
                    <AddIcon w={8} h={8} color="#00B81D" />
                    <AlertDialog
                      motionPreset="slideInBottom"
                      leastDestructiveRef={cancelRef}
                      onClose={onClose}
                      isOpen={isOpen}
                      isCentered
                    >
                      <AlertDialogOverlay />

                      <AlertDialogContent>
                        <AlertDialogHeader>Add preference</AlertDialogHeader>
                        <AlertDialogCloseButton />
                        <AlertDialogBody>
                          <Select
                            onChange={(e) => addPreference(e.target.value)}
                          >
                            <option value="" disabled selected>
                              Select Preference to add
                            </option>
                            {preferencesLeft.map((preference) => {
                              return (
                                <option value={preference}>{preference}</option>
                              );
                            })}
                          </Select>
                        </AlertDialogBody>
                        <AlertDialogFooter>
                          <Button ref={cancelRef} onClick={onClose}>
                            Cancel
                          </Button>
                          {/* <Button colorScheme="green" onClick={onClose} ml={3}>
                            Add
                          </Button> */}
                        </AlertDialogFooter>
                      </AlertDialogContent>
                    </AlertDialog>
                  </Flex>
                  {/* <DeleteIcon
                w={6}
                h={6}
                color="#A9A9A9"
                position={"absolute"}
                top={"15px"}
                right={"15px"}
              /> */}
                  <Text my={2}>Add focus area</Text>
                </GridItem>
              </Grid>
            </>
          )}
        </GridItem>
      </Grid>
      <Footer />
    </>
  );
}
