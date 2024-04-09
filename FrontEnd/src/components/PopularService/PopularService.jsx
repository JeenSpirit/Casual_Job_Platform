import { Box, Typography } from "@mui/material"
import demoPic from '../../assets/webDesign.png'
import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'

const services = [
    { img: demoPic, title: 'demo1', content: 'content1' },
    { img: demoPic, title: 'demo2', content: 'content2' },
    { img: demoPic, title: 'demo3', content: 'content3' },
    { img: demoPic, title: 'demo4', content: 'content4' },
    { img: demoPic, title: 'demo5', content: 'content5' },
    { img: demoPic, title: 'demo6', content: 'content6' },
    { img: demoPic, title: 'demo7', content: 'content7' },
    { img: demoPic, title: 'demo8', content: 'content8' },
    { img: demoPic, title: 'demo9', content: 'content9' },
    { img: demoPic, title: 'demo10', content: 'content10' },
    { img: demoPic, title: 'demo11', content: 'content11' },
]
const responsive = {
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 5,
        slidesToSlide: 5 // optional, default to 1.
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 3,
        slidesToSlide: 3 // optional, default to 1.
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1,
        slidesToSlide: 1 // optional, default to 1.
    }
};


const PopularService = () => {


    return (
        <>
            
                <Typography marginTop='30px' variant="h4">Popular Services</Typography>
                <Carousel
                    additionalTransfrom={1}
                    arrows
                    autoPlaySpeed={3000}
                    centerMode={false}
                    containerClass="container"
                    draggable
                    focusOnSelect={false}
                    infinite={false}
                    keyBoardControl
                    minimumTouchDrag={80}
                    pauseOnHover
                    renderArrowsWhenDisabled={false}
                    renderButtonGroupOutside={false}
                    renderDotsOutside={false}
                    responsive={responsive}
                    rewind={false}
                    rewindWithAnimation={false}
                    rtl={false}
                    shouldResetAutoplay
                    showDots={false}
                    slidesToSlide={1}
                    swipeable
                >
                    {services.map((service) => {
                        return (

                            <Box
                                key={service.title}
                                sx={{
                                    position: 'relative',
                                    overflow: 'hidden',
                                    width: '90%',
                                    height: '245px',
                                    backgroundImage: `url(${demoPic})`,
                                    backgroundSize: 'cover',
                                    backgroundPosition: 'center',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    justifyContent: 'flex-start',
                                    alignItems: 'flex-start',
                                    margin: '10px 10px',
                                }}

                            >
                                <Typography variant="body1" color='white' bgcolor='rgba(0,0,0,0.5)'>{service.title}</Typography>
                                <Typography variant="h5" color='white' bgcolor='rgba(0,0,0,0.5)'>{service.content} </Typography>

                            </Box>
                        )
                    })}

                </Carousel>

        </>
    )
}

export default PopularService