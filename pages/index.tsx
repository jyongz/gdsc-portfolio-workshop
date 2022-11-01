import {NextPage} from "next"
import Container from "../components/container"
import Intro from "../components/intro"

const Home: NextPage = () => {
    return (
        <>
            <Container>
                <Intro/>
            </Container>
        </>
    )
}

export default Home