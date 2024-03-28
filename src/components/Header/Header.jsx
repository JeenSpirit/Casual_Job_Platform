import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import { useEffect, useState } from 'react';
import SearchIcon from '@mui/icons-material/Search';
import CreateIcon from '@mui/icons-material/Create';
import { ListItemIcon } from '@mui/material';
import { styled, alpha } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import ShortCutBar from '../ShortCutBar/ShortCutBar';
import { useLocation } from 'react-router-dom';

//Data to be collected from backend
const pages = ['Get Premium', 'Explore', 'Become a Seller', 'Sign in', 'Join'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];
const explore = [
    { title: 'Discover', content: 'Inspiring projects made on our platform' },
    { title: 'Community', content: 'Connect with our team and community' },
    { title: 'Guides', content: 'In-depth guides covering business topics' },
    { title: 'Podcast', content: 'Inside tips from top business minds' },
    { title: 'Learn', content: 'Professional online courses, led by experts' },
    { title: 'Blog', content: 'New, information and community stories' },
    { title: 'Logo Maker', content: 'Create your logo instantly' },
    { title: 'Workspace', content: 'One place to manage your business' },
]
const premium = [
    { icon: SearchIcon, title: "I'm looking to hire", content: "I'd like to work with Pro freelancers and agencies while using free business tools" },
    { icon: CreateIcon, title: "I want to offer Pro services", content: "I'd like to work on business projects as a Pro freelancer or agency" }
]



function ResponsiveAppBar() {
    const [anchorElNav, setAnchorElNav] = useState(null);
    const [anchorElUser, setAnchorElUser] = useState(null);
    const [anchorElExploreMenu, setAnchorElElExploreMenu] = useState(null)
    const [anchorElPremiumMenu, setAnchorElPremiumMenu] = useState(null)
    const [isHome, setIsHome] = useState(true)
    const location = useLocation()
    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleOpenExtraNavMenu = (event, page) => {
        if (page === 'Explore') {
            setAnchorElElExploreMenu(event.currentTarget)
        } else if (page === 'Get Premium') {
            setAnchorElPremiumMenu(event.currentTarget)
        }
    }
    const [headerBG, setHeaderBG] = useState("transparent")
    const [searchDispay, setSearchDispaly] = useState(false)

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };
    const handleCloseExtraNavMenu = () => {
        setAnchorElElExploreMenu(null)
        setAnchorElPremiumMenu(null)
    }
    const handleScroll = () => {
        const offset = window.scrollY
        console.log(isHome);
        if (isHome) {
            if (offset > 0) {
                setHeaderBG('primary')
            } else {
                setHeaderBG('transparent')
            }
            if (offset > 100) {
                setSearchDispaly(true)
            } else {
                setSearchDispaly(false)
            }
        }
    }

    const Search = styled('div')(({ theme }) => ({
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: alpha(theme.palette.common.white, 0.15),
        '&:hover': {
            backgroundColor: alpha(theme.palette.common.white, 0.25),
        },
        marginRight: theme.spacing(2),
        marginLeft: 0,
        width: '100%',

    }));

    const SearchIconWrapper = styled('div')(({ theme }) => ({
        padding: theme.spacing(0, 2),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    }));

    const StyledInputBase = styled(InputBase)(({ theme }) => ({
        color: 'inherit',
        '& .MuiInputBase-input': {
            padding: theme.spacing(1, 0, 1, 0),
            // vertical padding + font size from searchIcon
            paddingLeft: `calc(1em + ${theme.spacing(4)})`,
            transition: theme.transitions.create('width'),
            width: '100%',

        },
    }));

    useEffect(() => {
        window.addEventListener('scroll', handleScroll)
        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [])

    useEffect(() => {
        setIsHome(location.pathname==='/')
    }, [location])

    return (
        <>
            <AppBar position= {isHome? "fixed":'relative'} sx={{
                backgroundColor: isHome ? headerBG : 'primary',
                width: '100%',
                boxShadow: 'none',
                transition: 'background-color 0.5s ease-in-out',
                height: '70px',
                
            }}>
                <Toolbar sx={{ justifyContent: 'space-between', alignItems: 'center', height: '100%', margin:'0 15px'}} disableGutters>
                    <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
                    <Typography
                        variant="h6"
                        noWrap
                        component="a"
                        href="#app-bar-with-responsive-menu"
                        sx={{
                            mr: 2,
                            display: { xs: 'none', md: 'flex' },
                            fontFamily: 'monospace',
                            fontWeight: 700,
                            letterSpacing: '.3rem',
                            color: 'inherit',
                            textDecoration: 'none',
                            flexShrink: 0
                        }}
                    >
                        LOGO
                    </Typography>

                    <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleOpenNavMenu}
                            color="inherit"
                        >
                            <MenuIcon />
                        </IconButton>
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorElNav}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'left',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'left',
                            }}
                            open={Boolean(anchorElNav)}
                            onClose={handleCloseNavMenu}
                            sx={{
                                display: { xs: 'block', md: 'none' },
                            }}
                        >
                            {pages.map((page) => (
                                <MenuItem key={page} sx={{ width: '100%' }} onClick={handleCloseNavMenu}>
                                    <Typography textAlign="center">{page}</Typography>
                                </MenuItem>
                            ))}
                        </Menu>
                    </Box>
                    <Box sx={{ display: { md: 'flex', sm: 'none', xs: 'none' }, flexGrow: 1, minWidth: 0, marginLeft: '10px' }}>
                        {searchDispay && (<Search>
                            <SearchIconWrapper>
                                <SearchIcon />
                            </SearchIconWrapper>
                            <StyledInputBase
                                placeholder="Search for any service"
                                inputProps={{ 'aria-label': 'search' }}
                            />
                        </Search>)}
                    </Box>
                    <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
                    <Typography
                        variant="h5"
                        noWrap
                        component="a"
                        href="#app-bar-with-responsive-menu"
                        sx={{
                            mr: 2,
                            display: { xs: 'flex', md: 'none' },
                            flexGrow: 1,
                            fontFamily: 'monospace',
                            fontWeight: 700,
                            letterSpacing: '.3rem',
                            color: 'inherit',
                            textDecoration: 'none',
                        }}
                    >
                        LOGO
                    </Typography>
                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, justifyContent: 'flex-end', whiteSpace: 'noWrap' }}>
                        {pages.map((page) => (
                            <Button
                                key={page}
                                onClick={(e) => handleOpenExtraNavMenu(e, page)}
                                sx={{ my: 2, mx: 1, color: 'white', display: 'block' }}
                            >
                                {page}
                            </Button>

                        ))}
                        <Menu
                            id='explore-menu'
                            anchorEl={anchorElExploreMenu}
                            open={Boolean(anchorElExploreMenu)}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'left',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'left',
                            }}
                            onClose={handleCloseExtraNavMenu}
                            sx={{
                                display: { xs: 'block', md: 'block' },
                            }}
                        >
                            {explore.map(item => {
                                return (<MenuItem key={item.title} onClick={handleCloseExtraNavMenu}>
                                    <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                                        <Typography variant='body1' fontWeight={700}>{item.title}</Typography>
                                        <Typography variant='body2'>{item.content}</Typography>
                                    </Box>
                                </MenuItem>)
                            })}
                        </Menu>

                        <Menu
                            id='premium-menu'
                            anchorEl={anchorElPremiumMenu}
                            open={Boolean(anchorElPremiumMenu)}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'left',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'left',
                            }}
                            onClose={handleCloseExtraNavMenu}
                            sx={{
                                display: { xs: 'block', md: 'block' },
                            }}
                        >
                            {premium.map(item => {
                                return (<MenuItem key={item.title} onClick={handleCloseExtraNavMenu}>
                                    <ListItemIcon>
                                        <item.icon />
                                    </ListItemIcon>
                                    <Box sx={{ display: 'flex', flexDirection: 'column', maxWidth: 300 }}>
                                        <Typography variant='body1' fontWeight={700} sx={{ width: '100%', whiteSpace: 'normal' }}>{item.title}</Typography>
                                        <Typography variant='body1' sx={{ width: '100%', whiteSpace: 'normal' }}>{item.content}</Typography>
                                    </Box>
                                </MenuItem>)
                            })}
                        </Menu>
                    </Box>

                    <Box sx={{ flexGrow: 0 }}>
                        <Tooltip title="Open settings">
                            <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
                            </IconButton>
                        </Tooltip>
                        <Menu
                            sx={{ mt: '45px' }}
                            id="menu-appbar"
                            anchorEl={anchorElUser}
                            anchorOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            open={Boolean(anchorElUser)}
                            onClose={handleCloseUserMenu}
                        >
                            {settings.map((setting) => (
                                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                                    <Typography textAlign="center">{setting}</Typography>
                                </MenuItem>
                            ))}
                        </Menu>
                    </Box>

                </Toolbar>



            </AppBar>
            <ShortCutBar opacityFlag={searchDispay} />
        </>
    );
}
export default ResponsiveAppBar;