"use client"
import {
  Box,
  chakra,
  Container,
  Stack,
  Text,
  useColorModeValue,
  VisuallyHidden,
  Flex
} from "@chakra-ui/react"
import { FaGithub, FaInstagram, FaLinkedin, FaTwitter, FaYoutube } from "react-icons/fa"
import { Link } from "react-router-dom"

const SocialButton = ({ children, label, href }) => {
  return (
    <chakra.button
      bg={useColorModeValue("blackAlpha.100", "whiteAlpha.100")}
      rounded={"full"}
      w={8}
      h={8}
      cursor={"pointer"}
      as={"a"}
      href={href}
      display={"inline-flex"}
      alignItems={"center"}
      justifyContent={"center"}
      transition={"background 0.3s ease"}
      _hover={{
        bg: useColorModeValue("blackAlpha.200", "whiteAlpha.200")
      }}
    >
      <VisuallyHidden>{label}</VisuallyHidden>
      {children}
    </chakra.button>
  )
}

function Footer() {
  return (
    <Box
    >
      <Container
        as={Stack}
        maxW={"6xl"}
        py={4}
        spacing={4}
        justify={"center"}
        align={"center"}
      >
        <Flex>
        <Text colorScheme="purple" color={'purple.400'} fontWeight={'bold'}>Dev</Text>
        <Text colorScheme="purple" color={'purple.500'} fontWeight={'bold'}>X</Text>
        <Text colorScheme="purple" color={'purple.400'} fontWeight={'bold'}>Club</Text>
        </Flex>

        <Stack direction={"row"} spacing={6}>
          <Box as={Link} to={"/"}>
            Home
          </Box>
          <Box as={Link} to={"/devxclub"}>
            DevXClub
          </Box>
          <Box as={Link} to={"/register"}>
            Join
          </Box>
        </Stack>
      </Container>

      <Box
        borderTopWidth={1}
        borderStyle={"solid"}
      >
        <Container
          as={Stack}
          maxW={"6xl"}
          py={4}
          direction={{ base: "column", md: "row" }}
          spacing={4}
          justify={{ base: "center", md: "space-between" }}
          align={{ base: "center", md: "center" }}
        >
          <Text>© 2024 DevXClub - A TXW Innovation </Text>
          <Stack direction={"row"} spacing={6}>
            <SocialButton label={"Twitter"} href={"https://twitter.com/TheXitingWay?"}>
              <FaTwitter />
            </SocialButton>
            <SocialButton label={"Linkedin"} href={"https://www.linkedin.com/company/the-xiting-way/"}>
              <FaLinkedin />
            </SocialButton>
            <SocialButton label={"Youtube"} href={"https://www.youtube.com/@thexitingway"}>
              <FaYoutube />
            </SocialButton>
            <SocialButton label={"Instagram"} href={"https://www.instagram.com/thexitingway/"}>
              <FaInstagram />
            </SocialButton>
          </Stack>
        </Container>
      </Box>
    </Box>
  )
}

export default Footer