import React from 'react';
import {
  useDisclosure,
  useColorModeValue,
  Flex,
  Icon,
  Box,
  Text,
  Collapse,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  IconButton,
  InputGroup,
  InputLeftElement,
  Input
} from '@chakra-ui/react'; // Import Chakra UI components and hooks
import { Link } from 'react-router-dom'
import {
  FiMenu,
  FiSearch,
  HiCode,
  MdHome,
  MdKeyboardArrowRight,
  FaSignOutAlt
} from 'react-icons/all'; // Import the required icons from the respective icon libraries
import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { FirebaseContext } from '../context/Firebase'


const Sidebar = ({children}) => {
  const sidebar = useDisclosure();
  const integrations = useDisclosure();
  const color = useColorModeValue("gray.600", "gray.300");
  
  const {logoutHandle,currentUser,setSearch,search} = useContext(FirebaseContext)
  const navigate = useNavigate()
  
  const handleLogout = () => {
    logoutHandle();
    navigate('/login?query=logout')
  }

  const NavItem = (props) => {
    const { icon, children, ...rest } = props;
    return (
      <Flex
        align="center"
        px="4"
        pl="4"
        py="3"
        cursor="pointer"
        color="inherit"
        _dark={{
          color: "gray.400",
        }}
        _hover={{
          bg: "gray.100",
          _dark: {
            bg: "gray.900",
          },
          color: "gray.900",
        }}
        role="group"
        fontWeight="semibold"
        transition=".15s ease"
        {...rest}
      >
        {icon && (
          <Icon
            mx="2"
            boxSize="4"
            _groupHover={{
              color: color,
            }}
            as={icon}
          />
        )}
        {children}
      </Flex>
    );
  };

  const SidebarContent = (props) => (
    <Box
      as="nav"
      pos="fixed"
      top="0"
      left="0"
      zIndex="sticky"
      h="full"
      pb="10"
      overflowX="hidden"
      overflowY="auto"
      bg="white"
      _dark={{
        bg: "gray.800",
      }}
      border
      color="inherit"
      borderRightWidth="1px"
      w="60"
      {...props}
    >
      <Flex px="4" py="5" align="center">
        {/* <Logo /> */}
        <Text
          fontSize="2xl"
          ml="2"
          color="brand.500"
          _dark={{
            color: "white",
          }}
          fontWeight="semibold"
          as={Link}
          to={'/'}
        >
          DevClub
        </Text>
      </Flex>
      <Flex
        direction="column"
        as="nav"
        fontSize="sm"
        color="gray.600"
        aria-label="Main Navigation"
      >
        <NavItem icon={MdHome} as={Link} to={'/devxclub'}>DevHome</NavItem>
        {/* <NavItem icon={FaRss} as={Link} to={'/event'}>DevEvents</NavItem> */}
        <NavItem icon={HiCode} onClick={integrations.onToggle}>
          DevCourses
          <Icon
            as={MdKeyboardArrowRight}
            ml="auto"
            transform={integrations.isOpen && "rotate(90deg)"}
          />
        </NavItem>
        <Collapse in={integrations.isOpen}>
          {/* <NavItem pl="12" py="2">
            Shopify
          </NavItem>
          <NavItem pl="12" py="2">
            Slack
          </NavItem> */}
          <NavItem pl="12" py="2">
            Coming Soon
          </NavItem>
        </Collapse>
        <NavItem icon={FaSignOutAlt} onClick={handleLogout}>SignOut</NavItem>
      </Flex>
    </Box>
  );

  
  

  return (
    <Box
      as="section"
      bg="gray.50"
      _dark={{
        bg: "gray.700",
      }}
      minH="100vh"
    >
      <SidebarContent
        display={{
          base: "none",
          md: "unset",
        }}
      />
      <Drawer
        isOpen={sidebar.isOpen}
        onClose={sidebar.onClose}
        placement="left"
      >
        <DrawerOverlay />
        <DrawerContent>
          <SidebarContent w="full" borderRight="none" />
        </DrawerContent>
      </Drawer>
      <Box
        ml={{
          base: 0,
          md: 60,
        }}
        transition=".3s ease"
      >
        <Flex
          as="header"
          align="center"
          justify="space-between"
          w="full"
          px="4"
          bg="white"
          _dark={{
            bg: "gray.800",
          }}
          borderBottomWidth="1px"
          color="inherit"
          h="14"
        >
          <IconButton
            aria-label="Menu"
            display={{
              base: "inline-flex",
              md: "none",
            }}
            onClick={sidebar.onOpen}
            icon={<FiMenu />}
            size="sm"
          />
          <InputGroup
            w={["60","96"]}
            mr={["16","0"]}
            display={{
              base: "flex",
              md: "flex",
            }}
          >
            <InputLeftElement color="gray.500" 
            >
              <FiSearch />
            </InputLeftElement>
            <Input placeholder="Search for events and bootcamps..." onChange={(e) => setSearch(e.target.value)} />
          </InputGroup>
        </Flex>

        <Box as="main" p="4">
         {children}
        </Box>
      </Box>
    </Box>
  );
}
export default Sidebar;   