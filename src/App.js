import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import lately from "./lately.png";
import {
  Box,
  Button,
  Center,
  Divider,
  Flex,
  Grid,
  Heading,
  HStack,
  Image,
  Link,
  Text,
} from "@chakra-ui/react";
import { Icon } from "@chakra-ui/react";
import { AiFillGithub } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";
import { AiOutlineMail } from "react-icons/ai";

function App() {
  return (
    <div className="App">
      <Navbar />

      <Box
        backgroundColor="#00203FFF"
        h="2000px"
        width="100%"
        fontFamily="cursive"
      >
        <Flex
          pt="100px"
          verticalAlign="center"
          flexWrap="wrap"
          maxW="900px"
          margin="auto"
        >
          <Box margin="auto">
            <Image
              src="https://avatars.githubusercontent.com/u/105877055?v=4"
              borderRadius="50%"
              width="300px"
            />
          </Box>
          <Box textAlign="center" margin="auto">
            <Box>
              <Center>
                <Heading color="rgb(125, 125, 125)" as="h2">
                  Hello my name is
                  <Text
                    fontWeight="bold"
                    fontSize="40px"
                    display="inline"
                    ml="20"
                    color="#DB4437"
                  >
                    Rajesh
                  </Text>
                </Heading>
              </Center>
              <Heading color="rgb(125, 125, 125)" as="h2">
                I'am a
                <Text
                  fontWeight="bold"
                  fontSize="40px"
                  display="inline"
                  ml="20"
                  color="#DB4437"
                >
                  Web Developer
                </Text>
              </Heading>
              <Box>
                <HStack gap="10" ml="40px">
                  <Link href="https://github.com/Rajesh-P-07">
                    <Icon as={AiFillGithub} w={40} h={40} color="white" />
                  </Link>
                  <Link href="https://www.linkedin.com/in/rajesh-reddy-5aa8a412a/">
                    <Icon as={AiFillLinkedin} w={40} h={40} color="lightblue" />
                  </Link>
                  <Link href="https://github.com/Rajesh-P-07">
                    <Icon
                      as={AiOutlineMail}
                      w={40}
                      h={40}
                      color="#DB4437"
                      p={0}
                    />
                  </Link>
                  <Link
                    href="https://github.com/Rajesh-P-07"
                    textDecoration="none"
                  >
                    <Button
                      bgColor="#DB4437"
                      color="white"
                      fontSize="20px"
                      p="5"
                      borderRadius="6"
                    >
                      Resume
                    </Button>
                  </Link>
                </HStack>
              </Box>
            </Box>
          </Box>
        </Flex>
        <Divider borderBottom="1px solid grey" width="98%" pt="100px"></Divider>
        <Heading color="rgb(219, 210, 210)" as="h1">
          About Me
        </Heading>
        <Heading color="rgb(125, 125, 125)">I'am Rajesh</Heading>
        <Text color="rgb(125, 125, 125)" fontSize={"20px"}>
          Aspiring full-stack developer.
        </Text>
        <Text></Text>
        <Divider borderBottom="1px solid grey" width="98%" pt="100px"></Divider>
        <Heading color="rgb(219, 210, 210)" as="h1">
          Skills
        </Heading>
        <Flex
          gap={100}
          flexWrap="wrap"
          maxWidth="900px"
          margin="auto"
          justifyContent="center"
          mt="40px"
        >
          <Box>
            <Image
              src="https://cdn-icons-png.flaticon.com/512/919/919827.png"
              boxSize="120px"
              bgColor="white"
            />
            <Heading color="white">HTML</Heading>
          </Box>
          <Box>
            <Image
              src="https://cdn-icons-png.flaticon.com/512/919/919826.png"
              boxSize="120px"
              bgColor="white"
            />
            <Heading color="white">css</Heading>
          </Box>
          <Box>
            <Image
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSV-nkWSx_ggFwSsr8P8QbmpBtG45JTN8iFuQ&usqp=CAU"
              boxSize="120px"
            />
            <Heading color="white">JavaScript</Heading>
          </Box>
          <Box>
            <Image
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png"
              boxSize="120px"
            />
            <Heading color="white">React</Heading>
          </Box>

          <Box>
            <Image
              src="https://pbs.twimg.com/profile_images/1244925541448286208/rzylUjaf_400x400.jpg"
              boxSize="120px"
            />
            <Heading color="white">chakra UI</Heading>
          </Box>

          <Box>
            <Image
              src="https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/redux-icon.png"
              boxSize="120px"
            />
            <Heading color="white">Redux</Heading>
          </Box>

          <Box>
            <Image
              src="https://ui-lib.com/blog/wp-content/uploads/2021/12/nextjs-boilerplate-logo.png"
              boxSize="120px"
            />
            <Heading color="white">Next JS</Heading>
          </Box>

          <Box>
            <Image
              src="https://cdn-icons-png.flaticon.com/512/5968/5968381.png"
              boxSize="120px"
            />
            <Heading color="white">TypeScript</Heading>
          </Box>
        </Flex>
        <Divider borderBottom="1px solid grey" width="98%" pt="100px"></Divider>
      </Box>
      <Flex>
        <Box>
          <Image
            src=""
            boxSize="400px"
          />
        </Box>
      </Flex>
    </div>
  );
}

export default App;
