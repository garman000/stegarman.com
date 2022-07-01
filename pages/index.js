import {
  Box,
  Center,
  Container,
  Divider,
  Flex,
  Heading,
  Link,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { Icon } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { solid, regular, brands } from '@fortawesome/fontawesome-svg-core/import.macro'
import {
  faGithub,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

export default function Home() {
  return (
    <>
      <Center
       
        padding={0}
        height={"100vh"}
      >
      <Head>
        <title>My Portfolio by Steven Garman</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
        <SimpleGrid columns={1}>
          <Box bg="tomato" height="100px" px={20}>
            <Center bg="tomato" h="100px" color="white">
              <Heading color={"white"} align={"center"}>STEVEN GARMAN</Heading>
            </Center>
          </Box>
          <Box bg="gray.100" height="100px" px={20}>
            <Center h="100px" color="white">
              <Text align={"center"} fontSize={{ base: '18px', md: '24px', lg: '28px' }} color={"black"}>
                World Traveler | Full-Stack Developer
              </Text>
            </Center>
          </Box>
          <Box bg="white" border="1px" borderColor={"gray.200"} height="100px" px={20}>
            <Center h="100px" color="black">
              <Text align={"center"} fontSize={"24"}>Coming soon...</Text>
            </Center>
          </Box>

  


        </SimpleGrid>

      </Center>
        <Flex color="tomato" direction={"column"} align={"center"} mb={7}>
          {/* <footer className={styles.footer}> */}
          <Flex gap={4}>
            {/* <Box
              colorScheme="teal"
              _hover={{
                background: "white",
                color: "teal.500",
              }} */}

            <Link
              href="https://github.com/garman000"
              target="_blank"
              colorScheme="teal"
              _hover={{
                background: "white",
                color: "teal.500",
              }}
            >
              <FontAwesomeIcon icon={faGithub} height="30" width="30" />
            </Link>
            {/* </Box> */}

            <Link
              href="https://www.linkedin.com/in/stevengarman1/"
              target="_blank"
              colorScheme="teal"
              _hover={{
                background: "white",
                color: "teal.500",
              }}
            >
              <FontAwesomeIcon icon={faLinkedin} height="30" width="30" />
            </Link>

            <Link
              href="https://www.instagram.com/steven_garman/"
              target="_blank"
              colorScheme="teal"
              _hover={{
                background: "white",
                color: "teal.500",
              }}
            >
              <FontAwesomeIcon icon={faInstagram} height="30" width="30" />
            </Link>
          </Flex>
          <Box mt={7}>
            © 2022 Steven Garman | This site was built using NextJS
          </Box>
          {/* </footer> */}
        </Flex>
    </>
  );
}
