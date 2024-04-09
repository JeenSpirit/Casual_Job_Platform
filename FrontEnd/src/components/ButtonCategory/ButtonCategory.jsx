import { Box, Divider, Typography, Grid, Button } from "@mui/material"
import DesignServicesOutlinedIcon from '@mui/icons-material/DesignServicesOutlined';
import ComputerOutlinedIcon from '@mui/icons-material/ComputerOutlined';
import BorderColorOutlinedIcon from '@mui/icons-material/BorderColorOutlined';
import VideoCameraFrontOutlinedIcon from '@mui/icons-material/VideoCameraFrontOutlined';
import LibraryMusicOutlinedIcon from '@mui/icons-material/LibraryMusicOutlined';
import AddShoppingCartOutlinedIcon from '@mui/icons-material/AddShoppingCartOutlined';
import BusinessCenterOutlinedIcon from '@mui/icons-material/BusinessCenterOutlined';
import EmojiFoodBeverageOutlinedIcon from '@mui/icons-material/EmojiFoodBeverageOutlined';
import DataThresholdingOutlinedIcon from '@mui/icons-material/DataThresholdingOutlined';
import AddAPhotoOutlinedIcon from '@mui/icons-material/AddAPhotoOutlined';


const categories = [
    { icon: DesignServicesOutlinedIcon, title: 'Graphics & Design' },
    { icon: AddShoppingCartOutlinedIcon, title: 'Digital Marketing' },
    { icon: BorderColorOutlinedIcon, title: 'Writing & Translation' },
    { icon: VideoCameraFrontOutlinedIcon, title: 'Video & Animation' },
    { icon: LibraryMusicOutlinedIcon, title: 'Music & Audio' },
    { icon: ComputerOutlinedIcon, title: 'Programming & Tech' },
    { icon: BusinessCenterOutlinedIcon, title: 'Business' },
    { icon: EmojiFoodBeverageOutlinedIcon, title: 'Lifestyle' },
    { icon: DataThresholdingOutlinedIcon, title: 'Data' },
    { icon: AddAPhotoOutlinedIcon, title: 'Photography' }
]

const ButtonCategory = () => {
    return (
        
            <Box sx={{ display: 'flex', flexDirection: 'column', marginTop: '30px' }}>
                
                <Typography variant="h4" marginBottom='20px'>{"You need it, we've got it"}</Typography>
                <Grid container spacing={2} columns={{ xs: 4, sm: 6, md: 10 }}>
                    {categories.map((category) => {
                        return (
                            <Grid xs={2} sm={2} md={2} item key={category.title} sx={{ display: 'flex', flexDirection: 'column', alignItems: "center" }}>
                                <category.icon fontSize="large" />
                                <Divider />
                                <Button sx={{ color: 'black', whiteSpace: 'nowrap' }}>{category.title}</Button>
                            </Grid>
                        )
                    })}
                </Grid>
            </Box>

    )
}

export default ButtonCategory