import { Box, Button, Divider, useTheme, Menu, Grid } from '@mui/material'
import { useEffect, useRef, useState } from 'react'
import ArrowBackIosOutlinedIcon from '@mui/icons-material/ArrowBackIosOutlined';
import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined';
import JobCategory from '../JobCatagory/JobCategory';
import { useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';

const categories = ['Graphics & Design',
    'Programming & Tech',
    'Digital Marketing',
    'Video & Animation',
    'Writing & Translation',
    'Music & Audio',
    'Business',
    'Consulting',
    'Data',
    'AI Services']


const ShortCutBar = ({ opacityFlag }) => {
    ShortCutBar.propTypes = {
        opacityFlag: PropTypes.bool,
      };
    const theme = useTheme()
    const scrollRef = useRef(null)
    const [showLeftArrow, setShowLeftArrow] = useState(false)
    const [showRightArrow, setShowRightArrow] = useState(false)

    const [jobData, setJobData] = useState('')
    const [anchorEl, setAnchorEl] = useState(null)
    const [jobToShow, setJobToShow] = useState('')
    const handleClick = (e) => {
        setAnchorEl(e.currentTarget)
    }

    const open = Boolean(anchorEl)
    const handleClose = () => {
        setAnchorEl(null)
    }

    const fetchJobData = async () => {
        try {
            const url = new URL('../../assets/complete_services_categories.json', import.meta.url).href;
            const res = await fetch(url)
            if (res.ok) {
                const data = await res.json()
                setJobData(data)
            } else {
                throw new Error("response not ok")
            }

        } catch (error) {
            console.error('fetch failed')
        }
    }
    useEffect(() => { fetchJobData() }, [])

    useEffect(() => {
        if (anchorEl) {
            const jobShown = jobData.filter(job => job.id.toUpperCase() === anchorEl.innerText.toUpperCase())[0]
            setJobToShow(jobShown)
        }
    }, [jobData, anchorEl])

    const checkLeftArrow = () => {
        if (scrollRef.current) {
            if (scrollRef.current.scrollLeft > 0) {
                setShowLeftArrow(true)
            } else {
                setShowLeftArrow(false)
            }
        }
    }

    const checkRightArrow = () => {
        if (scrollRef.current) {
            if (scrollRef.current.scrollLeft + scrollRef.current.clientWidth < scrollRef.current.scrollWidth) {
                setShowRightArrow(true)
            } else {
                setShowRightArrow(false)
            }
        }
    }

    useEffect(() => {
        const handleResize = () => {
            checkLeftArrow();
            checkRightArrow();
        }

        window.addEventListener('resize', handleResize);
        handleResize();


        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, [])

    useEffect(() => {
        const handleScrollEvent = () => {
            checkLeftArrow()
            checkRightArrow()
        }
        scrollRef.current.addEventListener('scroll', handleScrollEvent)
        return () => scrollRef.current.removeEventListener('scroll', handleScrollEvent)
    }, [])

    const handleScroll = (direction) => {
        const toolbar = scrollRef.current
        if (toolbar) {
            const scrollAmount = direction === 'left' ? -toolbar.offsetWidth : toolbar.offsetWidth
            toolbar.scrollTo({
                left: toolbar.scrollLeft + scrollAmount,
                behavior: 'smooth'
            })
        }
    }
    const [isHome,setIsHome] = useState(true)
    const location =useLocation()
    useEffect(()=>{
        setIsHome(location.pathname==='/')
    },[location])

    return (

        <Box sx={{
            opacity: isHome?(opacityFlag ? 1 : 0):1,
            transition: 'opacity 0.5s ease-in-out',
            visibility: isHome?(opacityFlag ? 'visible' : 'hidden'):'visible',
            backgroundColor: theme.palette.primary.main,
            position: isHome?'fixed':'relative',
            top: isHome?'70px':'0',
            width: '100%',
            zIndex: 10,
            display: 'flex',
            flexDirection: 'column'
        }}>
            <Divider />
            <Box sx={{ overflowX: 'hidden', height: '100%', display: 'flex', whiteSpace: "nowrap", justifyContent: 'space-evenly', alignItems: 'center' }}>
                {showLeftArrow && <Button onClick={() => handleScroll('left')} sx={{ left: '-20px', position: 'absolute', color: 'white', zIndex: 10 }}>
                    <ArrowBackIosOutlinedIcon />
                </Button>}

                <ul ref={scrollRef} style={{
                    overflow: 'auto',
                    padding: 0,
                    margin: 0,
                    display: 'flex',
                    justifyContent: 'space-evenly',
                    scrollbarWidth: 'none',
                    msOverflowStyle: 'none',
                    '&::WebkitScrollbar': {
                        display: 'none'
                    },
                    listStyleType: 'none'
                }}>
                    {
                        categories.map((category) => {
                            return (
                                <li key={category} style={{ margin: '0 10px', color: 'white' }}>
                                    <Button variant='text' onClick={handleClick} sx={{ color: 'white' }}>{category}</Button>
                                </li>
                            )
                        })
                    }
                </ul>

                {showRightArrow && <Button onClick={() => handleScroll('right')} sx={{ position: 'absolute', color: 'white', right: '-20px', zIndex: 10 }}>
                    <ArrowForwardIosOutlinedIcon />
                </Button>}

            </Box>

            {<Menu
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left',
                }}
                keepMounted
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'left',
                }}

            >
                <Grid 
                container 
                spacing={2}
                alignContent='flex-start'
                flexDirection='row'
                padding="10px"
                 >
                    {jobToShow.categories && jobToShow.categories.map((catagory) => {
                        return (
                            <Grid  item key={catagory.title}>
                                
                                <JobCategory title={catagory.title} contents={catagory.content} />
                            
                            </Grid>
                        )
                    })}
                </Grid>
            </Menu>}


        </Box >
    )
}

export default ShortCutBar