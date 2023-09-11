import {
  Container,
  SimpleGrid,
  Image,
  Flex,
  Heading,
  Text,
  Stack,
  StackDivider,
  Icon,
  useColorModeValue,
} from "@chakra-ui/react";
import {
  IoAnalyticsSharp,
  IoLogoBitcoin,
  IoSearchSharp,
} from "react-icons/io5";

const Feature = ({ text, icon, iconBg }) => {
  return (
    <Stack direction={"row"} align={"center"}>
      <Flex
        w={8}
        h={8}
        align={"center"}
        justify={"center"}
        rounded={"full"}
        bg={iconBg}
      >
        {icon}
      </Flex>
      <Text fontWeight={600}>{text}</Text>
    </Stack>
  );
};

export default function SingleFeature({ feature, index }) {
  const { name, headline, description, image, id } = feature;
  let bgColor = useColorModeValue("rgba(0, 184, 29, 1)", "rgba(0, 184, 29, 1)");
  return (
    <>
      {/* For Desktop */}
      <Container
        maxW={"5xl"}
        py={12}
        id={id}
        display={{ base: "none", md: "block" }}
      >
        <SimpleGrid
          columns={{ base: 1, md: 2 }}
          spacing={10}
          alignItems={"center"}
        >
          {console.log("index: ", index)}
          {index % 2 === 0 ? (
            <>
              <Flex>
                <Image
                  rounded={"md"}
                  alt={"feature image"}
                  src={image}
                  objectFit={"cover"}
                />
              </Flex>
              <Stack spacing={4}>
                <Text
                  textTransform={"uppercase"}
                  color={"rgba(0, 184, 29, 1)"}
                  fontWeight={600}
                  fontSize={"1rem"}
                  // bg={bgColor}
                  py={2}
                  alignSelf={"flex-start"}
                  rounded={"md"}
                >
                  {name}
                </Text>
                <Heading fontSize={"2rem"}>{headline}</Heading>
                <Text color={"gray.500"} fontSize={"lg"}>
                  {description}
                </Text>
              </Stack>
            </>
          ) : (
            <>
              <Stack spacing={4}>
                <Text
                  textTransform={"uppercase"}
                  color={"rgba(0, 184, 29, 1)"}
                  fontWeight={600}
                  fontSize={"1rem"}
                  // bg={bgColor}
                  py={2}
                  alignSelf={"flex-start"}
                  rounded={"md"}
                >
                  {name}
                </Text>
                <Heading fontSize={"2rem"}>{headline}</Heading>
                <Text color={"gray.500"} fontSize={"lg"}>
                  {description}
                </Text>
              </Stack>
              <Flex>
                <Image
                  rounded={"md"}
                  alt={"feature image"}
                  src={image}
                  objectFit={"cover"}
                />
              </Flex>
            </>
          )}
        </SimpleGrid>
      </Container>
      {/* For Mobile */}
      <Container
        maxW={"5xl"}
        p={12}
        id={id}
        display={{ base: "block", md: "none" }}
      >
        <SimpleGrid
          columns={{ base: 1, md: 2 }}
          spacing={10}
          alignItems={"center"}
        >
          <>
            <Flex>
              <Image
                rounded={"md"}
                alt={"feature image"}
                src={image}
                objectFit={"cover"}
              />
            </Flex>
            <Stack spacing={4}>
              <Text
                textTransform={"uppercase"}
                color={"rgba(0, 184, 29, 1)"}
                fontWeight={700}
                fontSize={"xl"}
                // bg={bgColor}
                py={2}
                alignSelf={"flex-start"}
                rounded={"md"}
              >
                {name}
              </Text>
              <Heading>{headline}</Heading>
              <Text color={"gray.500"} fontSize={"lg"}>
                {description}
              </Text>
            </Stack>
          </>
        </SimpleGrid>
      </Container>
    </>
  );
}
