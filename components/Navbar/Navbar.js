import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import Link from 'next/link';
import ChairIcon from '@mui/icons-material/Chair';

const pages = ['Services', 'Contact Us', 'About Us', 'Faq', 'Blogs'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

function Navbar() {
    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const [anchorElUser, setAnchorElUser] = React.useState(null);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    return (
        <AppBar position="static">
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    {/* <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} /> */}
                    <Link href={'/'}>
                        <ChairIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
                    </Link>
                    <Link href={'/'}>
                        <Typography
                            variant="h5"
                            noWrap
                            component="a"
                            href="/"
                            sx={{
                                mr: 2,
                                display: { xs: 'none', md: 'flex' },
                                fontFamily: 'monospace',
                                fontWeight: 600,
                                color: 'inherit',
                                textDecoration: 'none',
                            }}
                        >
                            HOME DACOR
                        </Typography>
                    </Link>

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
                            <Link href={'/'}>
                                <MenuItem onClick={handleCloseNavMenu}>
                                    <Typography textAlign="center">Home</Typography>
                                </MenuItem>
                            </Link>
                            <Link href={'/services'}>
                                <MenuItem onClick={handleCloseNavMenu}>
                                    <Typography textAlign="center">Services</Typography>
                                </MenuItem>
                            </Link>
                            <Link href={'/contact_us'}>
                                <MenuItem onClick={handleCloseNavMenu}>
                                    <Typography textAlign="center">Contact Us</Typography>
                                </MenuItem>
                            </Link>
                            <Link href={'/about_us'}>
                                <MenuItem onClick={handleCloseNavMenu}>
                                    <Typography textAlign="center">About Us</Typography>
                                </MenuItem>
                            </Link>
                            <Link href={'/faq'}>
                                <MenuItem onClick={handleCloseNavMenu}>
                                    <Typography textAlign="center">Faq</Typography>
                                </MenuItem>
                            </Link>
                            <Link href={'/blogs'}>
                                <MenuItem onClick={handleCloseNavMenu}>
                                    <Typography textAlign="center">Blogs</Typography>
                                </MenuItem>
                            </Link>
                        </Menu>
                    </Box>
                    <Link href={'/'}>
                        <ChairIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
                    </Link>

                    <Link href={'/'}>
                        <Typography
                            variant="h5"
                            noWrap
                            component="a"
                            href=""
                            sx={{
                                mr: 2,
                                display: { xs: 'flex', md: 'none' },
                                flexGrow: 1,
                                fontFamily: 'monospace',
                                fontWeight: 600,
                                color: 'inherit',
                                textDecoration: 'none',
                            }}
                        >
                            HOME DACOR
                        </Typography>
                    </Link>
                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, justifyContent: 'end' }}>
                        <Link href={'/'}>
                            <Button onClick={handleCloseNavMenu}
                                sx={{ my: 2, color: 'white', display: 'block' }}
                            >
                                Home
                            </Button>
                        </Link>
                        <Link href={'/services'}>
                            <Button onClick={handleCloseNavMenu}
                                sx={{ my: 2, color: 'white', display: 'block' }}
                            >
                                Services
                            </Button>
                        </Link>
                        <Link href={'/contact_us'}>
                            <Button onClick={handleCloseNavMenu}
                                sx={{ my: 2, color: 'white', display: 'block' }}
                            >
                                Contact Us
                            </Button>
                        </Link>
                        <Link href={'/about_us'}>
                            <Button onClick={handleCloseNavMenu}
                                sx={{ my: 2, color: 'white', display: 'block' }}
                            >
                                About Us
                            </Button>
                        </Link>
                        <Link href={'/faq'}>
                            <Button onClick={handleCloseNavMenu}
                                sx={{ my: 2, color: 'white', display: 'block' }}
                            >
                                Faq
                            </Button>
                        </Link>
                        <Link href={'/blogs'}>
                            <Button onClick={handleCloseNavMenu}
                                sx={{ my: 2, color: 'white', display: 'block' }}
                            >
                                Blogs
                            </Button>
                        </Link>

                    </Box>

                    {/* <Box sx={{ flexGrow: 0 }}>
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
                    </Box> */}
                </Toolbar>
            </Container>
        </AppBar>
    );
}
export default Navbar;