import { Box, Button, Container, Divider, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';


const footers = [
    {
        title: 'Categories', contents: ['Graphics & Design',
            'Digital Marketing',
            "Writing & Translation",
            'Video & Animation',
            'Music & Audio',
            'Fiverr Logo Maker',
            'Programming & Tech',
            'Data',
            'Business',
            'Lifestyle',
            'Photography',
            'End-to-End Projects',
            'Sitemap']
    },
    {
        title: 'About', contents: ['Careers',
            'Press & News',
            'Partnerships',
            'Privacy Policy',
            'Terms of Service',
            'Intellectual Property Claims',
            'Investor Relations']
    },
    {
        title: 'Support and Education', contents: ['Help & Support',
            'Trust & Safety',
            'Selling on Fiverr',
            'Buying on Fiverr',
            'Fiverr Guides',
            'Fiverr Workspace',
            'Learn'
        ]
    },
    {
        title: 'Community', contents: ['Customer Success Stories',
            'Community Hub',
            'Forum',
            'Events',
            'Blog',
            'Creators',
            'Affiliates',
            'Podcast',
            'Invite a Friend',
            'Become a Seller',
            'Community Standards']
    },
    {
        title: 'Business Solutions', contents: ['About Business Solutions',
            'Fiverr Pro',
            'Fiverr Certified',
            'Become an Agency',
            'Fiverr Enterprise',
            'ClearVoice',
            'Working Not Working',
            'Contact Sales'
        ]
    },
]

const Footer = () => {
    const [isXs, setIsXs] = useState(false)

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth <= 960) {
                setIsXs(true)
            } else {
                setIsXs(false)
            }
        }
        handleResize()
        window.addEventListener('resize', handleResize)
        return () => window.removeEventListener('resize', handleResize)
    }, [])

    return (
        <Container maxWidth='xl'>
            <Divider sx={{ margin: '20px' }}></Divider>
            {!isXs && <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', flexWrap: 'wrap' }}>
                {footers.map((footer) => {
                    return (
                        <Box key={footer.title} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', margin: '20px' }}>
                            <Typography variant="body1" sx={{ whiteSpace: 'nowrap', fontWeight: 700 }}>{footer.title}</Typography>
                            {footer.contents.map((content) => {
                                return <Button key={content} variant="text" sx={{ display: 'flex', justifyContent: 'flex-start', padding: '0px', margin: "5px 0", whiteSpace: 'nowrap', color: 'black' }}>{content}</Button>
                            })}
                        </Box>

                    )
                })}
            </Box>}
            {isXs && <Box>
                {footers.map((footer) => {
                    return (
                        <Accordion key={footer.title}>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel1-content"
                                id="panel1-header"
                                sx={{ fontWeight: 700, margin: '0' }}
                            >
                                {
                                    footer.title
                                }
                            </AccordionSummary>
                            <AccordionDetails sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start' }}>
                                {footer.contents.map((content) => {
                                    return <Button key={content} sx={{ color: 'black', padding: '0', display: 'flex', justifyContent: 'flex-start' }}>{content}</Button>
                                })}
                            </AccordionDetails>
                        </Accordion>

                    )
                })}
            </Box>

            }
        </Container>
    )
}

export default Footer