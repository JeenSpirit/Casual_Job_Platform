import { Box,  Typography } from "@mui/material"
import CheckCircleOutlineOutlinedIcon from '@mui/icons-material/CheckCircleOutlineOutlined';

const features = [
    { title: 'Stick to your budget', content: 'Find the right service for every price point. No hourly rates, just project-based pricing.' },
    { title: 'Get quality work done quickly', content: 'Hand your project over to a talented freelancer in minutes, get long-lasting results.' },
    { title: "Pay when you're happy", content: 'Upfront quotes mean no surprises. Payments only get released when you approve.' },
    { title: 'Count on 24/7 support', content: 'Our round-the-clock support team is available to help anytime, anywhere.' },
]
const VideoDemo = () => {
    return (
        
        <Box sx={{ width:'100%', display: 'flex', flexDirection: { xs: 'column', sm: 'column', md: 'row' }, justifyContent: "space-between", alignItems: 'center' }}>
                <Box sx={{ display: 'flex', flexDirection: 'column', margin: "30px 0" }}>
                    <Typography variant="h3">
                        The best part? Everything.
                    </Typography>
                    {<Box sx={{ marginTop: '10px' }}>
                        {features.map((feature) => {
                            return (
                                <Box key={feature.title}>
                                    <Typography sx={{ display: 'flex', alignItems: 'center' }} variant="h6">
                                        <CheckCircleOutlineOutlinedIcon sx={{ marginRight: '5px' }} />
                                        {feature.title}
                                    </Typography>
                                    <Typography>{feature.content}</Typography>
                                </Box>
                            )
                        })}
                    </Box>
                    }
                </Box>
            <Box>
                this is a Video
            </Box>

        </Box>
    )
}

export default VideoDemo