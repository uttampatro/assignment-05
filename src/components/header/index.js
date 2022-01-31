import React from 'react';
import {
    Box,
    AppBar,
    Toolbar,
    Typography,
    Menu,
    MenuItem,
    Fade,
} from '@mui/material';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

function Header() {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);

    const handleClick = event => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <div>
            <Box sx={{ flexGrow: 1 }}>
                <AppBar position="static">
                    <Toolbar variant="dense">
                        <IconButton
                            edge="start"
                            color="inherit"
                            aria-label="menu"
                            sx={{ mr: 2 }}
                            onClick={handleClick}
                        >
                            <MenuIcon />
                        </IconButton>
                        <Menu
                            id="fade-menu"
                            MenuListProps={{
                                'aria-labelledby': 'fade-button',
                            }}
                            anchorEl={anchorEl}
                            open={open}
                            onClose={handleClose}
                            TransitionComponent={Fade}
                        >
                            <MenuItem onClick={handleClose}>Add User</MenuItem>
                            <hr />
                            <MenuItem
                                style={{ paddingRight: '10px' }}
                                onClick={handleClose}
                            >
                                User Data
                            </MenuItem>
                        </Menu>
                        <Typography
                            variant="h6"
                            color="inherit"
                            component="div"
                        >
                            User Data
                        </Typography>
                    </Toolbar>
                </AppBar>
            </Box>
        </div>
    );
}

export default Header;
