import {
  Box,
  Button,
  Container,
  Flex,
  chakra,
  Heading,
  Icon,
  Stack,
  Text,
  useColorModeValue
} from "@chakra-ui/react"
import {
  FcCommandLine,
  FcCollaboration,
  FcIdea
} from "react-icons/fc"


const Card = ({ heading, description, icon, href }) => {
  return (
    <Box
      maxW={{ base: "full", md: "275px" }}
      w={"full"}
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      p={5}
    >
      <Stack align={"start"} spacing={2}>
        <Flex
          w={16}
          h={16}
          align={"center"}
          justify={"center"}
          color={"white"}
          rounded={"full"}
          bg={useColorModeValue("gray.100", "gray.700")}
        >
          {icon}
        </Flex>
        <Box mt={2}>
          <Heading size="md">{heading}</Heading>
          <Text mt={1} fontSize={"sm"}>
            {description}
          </Text>
        </Box>
        <Button variant={"link"} colorScheme={"blue"} size={"sm"}>
          Learn more
        </Button>
      </Stack>
    </Box>
  )
}

function Features() {
  return (
    <Box p={["1","1"]}>
      <Stack spacing={4}as={Container} maxW={"3xl"} textAlign={"center"}>
      <chakra.h1
                    mb={3}
                    fontSize={{
                        base: "4xl",
                        md: "5xl",
                    }}
                    fontWeight={{
                        base: "bold",
                        md: "extrabold",
                    }}
                    color="gray.900"
                    _dark={{
                        color: "gray.100",
                    }}
                    lineHeight="shorter"
                >
                    What is DevClub ?
                </chakra.h1>
        <Text color={"gray.500"} fontSize={{ base: "sm", sm: "lg" }}>
          DevClub is a community of Developers, Builders, and Leaders who collaborate to build some cool stuff and maybe dreams!
        </Text>
      </Stack>

      <Container maxW={"5xl"} mt={12}>
        <Flex flexWrap="wrap" gridGap={10} justify="center">
          <Card
            heading={"Code"}
            icon={<Icon as={FcCommandLine} w={16} h={10} />}
            description={
              "Code your ideas into reality with DevClub's elite resources and passionate community"
            }
            href={"#"}
          />
          <Card
            heading={"Build"}
            icon={<Icon as={FcCollaboration} w={10} h={10} />}
            description={
              "Build your applications to a startup with visionary community and elite mentorship"
            }
            href={"#"}
          />
          <Card
            heading={"Learn"}
            icon={<Icon as={FcIdea} w={10} h={10} />}
            description={
              "Not sure about first two? start your Dev journey from scratch with elite our resources, events and community"
            }
            href={"#"}
          />
        </Flex>
      </Container>
    </Box>
  )
}

export default Features