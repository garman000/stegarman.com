import { Box, Center, Container, Flex, Text } from "@chakra-ui/react";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <>
      <div className={styles.container}>
        <Head>
          <title>Create Next App</title>
          <meta name="description" content="Generated by create next app" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <main className={styles.main}>
          <Container maxW="container.xl" padding={0}>
            {/* <Flex height="100vh" py={20}> */}

            <Center bg="tomato" h="100px" color="white">
             <Text fontSize='4xl'>STEVEN GARMAN</Text> 
            </Center>
            <Center bg="grey" h="75px" color="black">
            <Text fontSize='2xl'>
            <Box> Full Stack Developer</Box>
            </Text>
            </Center>
            <Center h="100px" color="black"  border='1px' borderColor='black.200'>
            <Box>COMING SOON...</Box>
            </Center>
            {/* </Flex> */}
          </Container>
        </main>
        <footer className={styles.footer}>
          <a
            href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Powered by{" "}
            <span className={styles.logo}>
              <Image
                src="/vercel.svg"
                alt="Vercel Logo"
                width={72}
                height={16}
              />
            </span>
          </a>
        </footer>

      </div>
    </>
  );
}
