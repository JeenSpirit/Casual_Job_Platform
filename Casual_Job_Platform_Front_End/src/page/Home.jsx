import SearchBar from '../components/SearchBar/SearchBar'
import { Box, Container } from '@mui/material'
import PopularService from '../components/PopularService/PopularService'
import bgp from '../assets/bgp.jpg'
import VideoDemo from '../components/VideoDemo/VideoDemo'
import ButtonCategory from '../components/ButtonCategory/ButtonCategory'
const Home = () => {
    return (
        <>
            { /*Box with background pic */}

            <Box
                sx={{
                    height: '800px',
                    width: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: "center",
                    backgroundImage: `url(${bgp})`,
                    backgroundPosition: 'center',
                    backgroundSize: 'cover'
                }}
            >
                <Container maxWidth='xl'>
                    <SearchBar />
                </Container>
            </Box>

            <Container maxWidth='xl'>
                <PopularService />
            </Container>
            <Box sx={{ backgroundColor: 'lightblue' }}>
                <Container maxWidth='xl'>
                    <VideoDemo />
                </Container>
            </Box>
            <Container maxWidth='xl'>
                <ButtonCategory />
            </Container>

        </>
    )
}

export default Home