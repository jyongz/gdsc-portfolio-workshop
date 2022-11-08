import {NextPage} from "next"
import Container from "../components/container"
import AboutMe from "../components/about-me";
import Projects from "../components/projects";
import {Stack, Text} from "@chakra-ui/react";
import NextLink from "next/link";

const CV: NextPage = () => {
    return (
        <>
            <Container>
                <Stack
                    paddingTop = '1vh'
                    paddingLeft = '2vw'
                >
                    <AboutMe/>
                    <Projects/>
                    <NextLink
                        href="/CV - Joshua Yong.pdf"
                        passHref
                    >
                        <Text
                            cursor="pointer"
                            color="displayColor"
                            fontSize="display3"
                        >
                            My CV
                        </Text>
                    </NextLink>
                </Stack>
            </Container>
        </>
    )
}

export default CV