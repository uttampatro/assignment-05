import React, { useState } from 'react';
import Header from '../../components/header';
import {
    Avatar,
    Box,
    Button,
    Container,
    CssBaseline,
    Grid,
    TextField,
    Typography,
} from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme();

function AddUser() {
    const [newUser, setNewUser] = useState({
        username: '',
        mobileNumber: '',
        email: '',
        address: '',
    });

    const onAddInputChange = (e) => {
        setNewUser((prev) => {
            return { ...prev, [e.target.name]: e.target.value };
        });
    };

    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);

    const handleClick = event => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <div>
            <Header />
            <ThemeProvider theme={theme}>
                <Container component="main" maxWidth="xs">
                    <CssBaseline />
                    <Box
                        sx={{
                            border: '1px solid gray',
                            borderRadius: '2px',
                            marginTop: '80px',
                            padding: '30px',
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                        }}
                    >
                        <Avatar
                            style={{
                                margin: '10px',
                                backgroundColor: 'lightRed',
                            }}
                        />
                        <Typography component="h1" variant="h5">
                            Sign In
                        </Typography>
                        <Box component="form" sx={{ mt: 3 }}>
                            <Grid container spacing={2}>
                                <Grid item xs={12}>
                                    <TextField
                                        required
                                        // value={email}
                                        onChange={onAddInputChange}
                                        fullWidth
                                        id="username"
                                        label="Username"
                                        name="username"
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        required
                                        // value={email}
                                        onChange={onAddInputChange}
                                        fullWidth
                                        type="number"
                                        id="Mobile Number"
                                        label="Mobile Number"
                                        name="Mobile Number"
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        required
                                        // value={email}
                                        onChange={onAddInputChange}
                                        fullWidth
                                        id="email"
                                        label="Email"
                                        name="email"
                                        autoComplete="email"
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        required
                                        // value={password}
                                        onChange={onAddInputChange}
                                        fullWidth
                                        name="Address"
                                        label="Address"
                                        id="Address"
                                    />
                                </Grid>
                            </Grid>
                            <Button
                                // disabled={isLoggingIn}
                                // onClick={handleSubmit}
                                type="submit"
                                fullWidth
                                variant="contained"
                                style={{
                                    marginTop: '30px',
                                    padding: '3px',
                                    marginBottom: '20px',
                                    backgroundColor: 'lightblue',
                                    color: 'black',
                                }}
                            >
                                {/* {isLoggingIn ? "Singing In..." : "Sign In"} */}
                                Add User
                            </Button>
                        </Box>
                    </Box>
                </Container>
            </ThemeProvider>
        </div>
    );
}

export default AddUser;