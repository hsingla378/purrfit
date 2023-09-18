"use client";

import {
  Box,
  Flex,
  Text,
  IconButton,
  Button,
  Stack,
  Collapse,
  Icon,
  Popover,
  PopoverTrigger,
  PopoverContent,
  useColorModeValue,
  useBreakpointValue,
  useDisclosure,
  Image,
  Link as ChakraLink,
  LinkProps,
} from "@chakra-ui/react";
import {
  HamburgerIcon,
  CloseIcon,
  ChevronDownIcon,
  ChevronRightIcon,
} from "@chakra-ui/icons";
import "./Header.css";
// import { Link as ReactRouterLink } from "react-router-dom";
import { Link } from "@chakra-ui/react";

export default function Header() {
  const { isOpen, onToggle } = useDisclosure();

  const NAV_ITEMS = [
    {
      label: "Features",
      children: [
        {
          label: "Goal Setting",
          // subLabel: "Trending Design to inspire you",
          href: "/#goal-setting",
        },
        {
          label: "Reminders",
          // subLabel: "Up-and-coming Designers",
          href: "/#reminders",
        },
        {
          label: "Progress Tracking",
          // subLabel: "Up-and-coming Designers",
          href: "/#progress-tracking",
        },
      ],
      href: "/#features",
    },
    {
      label: "Dashboard",
      children: [
        {
          label: "Ranks",
          // subLabel: "Find your dream design job",
          href: "#",
        },
        {
          label: "Preferences",
          // subLabel: "An exclusive list for contract work",
          href: "#",
        },
        {
          label: "Activity History",
          // subLabel: "An exclusive list for contract work",
          href: "#",
        },
      ],
      href: "/dashboard",
    },
    {
      label: "Help",
      children: [
        {
          label: "Get Started",
          // subLabel: "Find your dream design job",
          href: "/help#get-started",
        },
        {
          label: "Commands",
          // subLabel: "An exclusive list for contract work",
          href: "/help#commands",
        },
        {
          label: "FAQs",
          // subLabel: "An exclusive list for contract work",
          href: "/help#faq",
        },
      ],
      href: "/help",
    },
    {
      label: "Our Team",
      href: "#team",
    },
    {
      label: "Login",
      className: "login-btn",
      href: "#",
    },
  ];

  const handleLinkClick = (event, href) => {
    event.preventDefault();

    // scrollToSection(href);
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);

    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const DesktopNav = () => {
    const linkColor = useColorModeValue("gray.600", "gray.200");
    const linkHoverColor = useColorModeValue("gray.800", "white");
    const popoverContentBgColor = useColorModeValue("white", "gray.800");

    return (
      <Stack direction={"row"} spacing={4} maxW={"5xl"}>
        {NAV_ITEMS.map((navItem) => (
          <Box key={navItem.label}>
            <Popover trigger={"hover"} placement={"bottom-start"}>
              <PopoverTrigger>
                <Link href={navItem.href ?? "#"}>
                  <Flex
                    as="a"
                    p={2}
                    fontSize={"1rem"}
                    // fontWeight={500}
                    color={linkColor}
                    _hover={{
                      textDecoration: "none",
                      color: linkHoverColor,
                    }}
                    alignItems={"center"}
                  >
                    <Text
                      fontWeight={600}
                      // color={useColorModeValue("gray.600", "gray.200")}
                    >
                      {!navItem.className && navItem.label}
                    </Text>
                    {navItem.children && (
                      <Icon
                        as={ChevronDownIcon}
                        transition={"all .25s ease-in-out"}
                        transform={isOpen ? "rotate(180deg)" : ""}
                        w={6}
                        h={6}
                      />
                    )}
                  </Flex>
                </Link>
              </PopoverTrigger>

              {navItem.children && (
                <PopoverContent
                  border={0}
                  boxShadow={"xl"}
                  // bg={popoverContentBgColor}
                  // backgroundColor={"rgba(38, 39, 38, 0.8)"}
                  p={4}
                  rounded={"xl"}
                  minW={"sm"}
                >
                  <Stack>
                    {navItem.children.map((child) => (
                      <DesktopSubNav key={child.label} {...child} />
                    ))}
                  </Stack>
                </PopoverContent>
              )}
            </Popover>
          </Box>
        ))}
      </Stack>
    );
  };

  const DesktopSubNav = ({ label, href, subLabel }) => {
    return (
      <Box
        as="a"
        href={href}
        role={"group"}
        display={"block"}
        p={2}
        rounded={"md"}
        _hover={{ bg: useColorModeValue("rgba(0, 184, 29, 1)", "gray.900") }}
      >
        <Stack direction={"row"} align={"center"}>
          <Box>
            <Text
              transition={"all .3s ease"}
              _groupHover={{ color: "rgba(0, 184, 29, 1)" }}
              fontWeight={500}
            >
              {label}
            </Text>
            <Text fontSize={"sm"}>{subLabel}</Text>
          </Box>
          <Flex
            transition={"all .3s ease"}
            transform={"translateX(-10px)"}
            opacity={0}
            _groupHover={{ opacity: "100%", transform: "translateX(0)" }}
            justify={"flex-end"}
            align={"center"}
            flex={1}
          >
            <Icon
              color={"rgba(0, 184, 29, 1)"}
              w={5}
              h={5}
              as={ChevronRightIcon}
            />
          </Flex>
        </Stack>
      </Box>
    );
  };

  const MobileNav = () => {
    return (
      <Stack
        // bg={useColorModeValue("white", "gray.800")}
        p={4}
        display={{ md: "none" }}
      >
        {NAV_ITEMS.map((navItem) => (
          <MobileNavItem key={navItem.label} {...navItem} />
        ))}
      </Stack>
    );
  };

  const MobileNavItem = ({ label, className, children, href }) => {
    const { isOpen, onToggle } = useDisclosure();

    return (
      <Stack
        spacing={4}
        onClick={children && onToggle}
        textAlign={"left"}
        fontSize={"lg"}
      >
        <Flex
          my={4}
          as="a"
          // href={href ?? "#"}
          // justifyContent="space-between"
          alignItems="center"
          _hover={{
            textDecoration: "none",
          }}
          gap={2}
          paddingLeft={4}
        >
          <Text
            fontWeight={600}
            color={useColorModeValue("gray.600", "gray.200")}
          >
            {label}
          </Text>
          {children && (
            <Icon
              as={ChevronDownIcon}
              transition={"all .25s ease-in-out"}
              transform={isOpen ? "rotate(180deg)" : ""}
              w={6}
              h={6}
            />
          )}
        </Flex>

        <Collapse
          in={isOpen}
          animateOpacity
          style={{ marginTop: "0!important" }}
        >
          <Stack
            mt={2}
            pl={4}
            borderLeft={1}
            borderStyle={"solid"}
            borderColor={useColorModeValue("gray.200", "gray.700")}
            align={"start"}
          >
            {children &&
              children.map((child) => (
                <Link href={child.href} key={child.label}>
                  <Box as="a" py={2}>
                    {child.label}
                  </Box>
                </Link>
              ))}
            <Button
              as={"a"}
              display={{ base: "none", md: "inline-flex" }}
              fontSize={"1rem"}
              fontWeight={"bold"}
              color={"white"}
              bg={"#00B81D"}
              href={"#"}
              // _hover={{
              //   bg: "#00B81D",
              // }}
              _hover={{
                bg: "rgba(0, 184, 29, .7)",
              }}
              rounded={"full"}
              px={8}
            >
              {" "}
              Login
            </Button>
          </Stack>
        </Collapse>
      </Stack>
    );
  };

  return (
    <Box
      py={3}
      style={{ boxShadow: "0 3px 10px rgb(0 0 0 / 0.2)" }}
      maxW={{ base: "90%", md: "5xl" }}
      m={"auto"}
      mt={6}
      borderRadius={"1rem"}
      backgroundColor="rgba(38, 39, 38, 0.8)"
    >
      <Flex
        // bg={useColorModeValue("white", "gray.800")}
        // backgroundColor="#262726"
        color={useColorModeValue("gray.600", "white")}
        minH={"60px"}
        py={{ base: 2 }}
        px={{ base: 4 }}
        // borderBottom={1}
        // borderStyle={"solid"}
        // borderColor={useColorModeValue("gray.200", "gray.900")}
        align={"center"}
      >
        <Flex
          flex={{ base: 1 }}
          justify={{ base: "center", md: "start" }}
          align="center"
          gap={2}
        >
          <Link href={"/"}>
            <Flex gap={1} align="center" alignItems={"center"}>
              <Image src="purrfit_logo.png" alt="Purrfit Bot" />
              {/* <Text
                textAlign={useBreakpointValue({ base: "center", md: "left" })}
                // fontFamily={"heading"}
                color={useColorModeValue("gray.800", "white")}
                fontSize={"30px"}
                fontWeight={600}
              >
                Purrfit
              </Text> */}
            </Flex>
          </Link>

          <Flex display={{ base: "none", md: "flex" }} ml={10}>
            <DesktopNav />
          </Flex>
        </Flex>
        <Flex
          flex={{ base: 1, md: "auto" }}
          // mr={{ base: -2 }}
          display={{ base: "flex", md: "none" }}
          justifyContent={"end"}
        >
          <IconButton
            onClick={onToggle}
            icon={
              isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />
            }
            variant={"ghost"}
            aria-label={"Toggle Navigation"}
          />
        </Flex>

        <Stack
          flex={{ base: 1, md: 0 }}
          justify={"flex-end"}
          direction={"row"}
          display={{ base: "none", md: "block" }}
          spacing={6}
        >
          <Button
            as={"a"}
            display={{ base: "none", md: "inline-flex" }}
            fontSize={"1rem"}
            fontWeight={"bold"}
            color={"white"}
            colorScheme={"green"}
            bg={"#00B81D"}
            href={"#"}
            // _hover={{
            //   bg: "#00B81D",
            // }}
            _hover={{
              bg: "rgba(0, 184, 29, .7)",
            }}
            rounded={"xl"}
            px={6}
          >
            {" "}
            Login
          </Button>
        </Stack>
      </Flex>

      <Collapse in={isOpen} animateOpacity>
        <MobileNav />
      </Collapse>
    </Box>
  );
}
