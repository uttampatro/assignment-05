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
import { createUser } from '../../services/userService';

const theme = createTheme();

function AddUser({ auth }) {
    const [newUser, setNewUser] = useState({
        username: '',
        mobileNumber: '',
        email: '',
        address: '',
    });

    const handleSubmit = async e => {
        e.preventDefault();
        try {
            const user = await createUser(newUser);
            setNewUser({
                name: '',
                mobileNumber: '',
                email: '',
                address: '',
            });
            if (user) {
                alert('User added successfully');
            }
        } catch (error) {
            console.log(error);
            alert('something went wrong');
        }
    };

    const onAddInputChange = e => {
        setNewUser(prev => {
            return { ...prev, [e.target.name]: e.target.value };
        });
    };

    return (
        <div>
            <Header auth={auth} />
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
                            Add User
                        </Typography>
                        <Box component="form" sx={{ mt: 3 }}>
                            <Grid container spacing={2}>
                                <Grid item xs={12}>
                                    <TextField
                                        required
                                        value={newUser.username}
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
                                        value={newUser.mobileNumber}
                                        onChange={onAddInputChange}
                                        fullWidth
                                        type="number"
                                        id="Mobile Number"
                                        label="Mobile Number"
                                        name="mobileNumber"
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        required
                                        value={newUser.email}
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
                                        value={newUser.address}
                                        onChange={onAddInputChange}
                                        fullWidth
                                        name="address"
                                        label="Address"
                                        id="address"
                                    />
                                </Grid>
                            </Grid>
                            <Button
                                onClick={handleSubmit}
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
                                Add
                            </Button>
                        </Box>
                    </Box>
                </Container>
            </ThemeProvider>
        </div>
    );
}

export default AddUser;
