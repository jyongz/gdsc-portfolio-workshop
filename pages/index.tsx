import { Stack } from "@chakra-ui/react"
import {NextPage} from "next"
import Container from "../components/container"
import Intro from "../components/intro"

const Home: NextPage = () => {
    return (
        <>
            <Container>
                <Stack
                    paddingTop='1vh'
                    paddingLeft='2vw'>
                    <Intro/>
                </Stack>
            </Container>
        </>
    )
}

export default Home