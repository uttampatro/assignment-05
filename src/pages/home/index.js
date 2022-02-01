import React, { useEffect, useState } from 'react';
import { makeStyles } from '@mui/styles';
import {
    TableHead,
    TableRow,
    TableBody,
    Table,
    Button,
    TableCell,
} from '@mui/material';
import Header from '../../components/header';
import { deleteUser, getAllUser } from '../../services/userService';
import { useNavigate } from 'react-router-dom';

const useStyles = makeStyles({
    homeBody: {
        padding: '50px',
    },
    table: {
        width: '100%',
        paddingLeft: '50px',
    },
    thead: {
        '& > *': {
            fontSize: 20,
            background: 'lightgray',
        },
    },
    row: {
        '& > *': {
            fontSize: 18,
        },
    },
    visuallyHidden: {
        border: 0,
        clip: 'rect(0 0 0 0)',
        height: 1,
        margin: -1,
        overflow: 'hidden',
        padding: 0,
        position: 'absolute',
        top: 20,
        width: 1,
    },
});

function Home({ auth }) {
    const classes = useStyles();
    const navigate = useNavigate();
    const [users, setUsers] = useState([]);

    const fetchUserList = async () => {
        try {
            const data = await getAllUser();
            setUsers(data);
        } catch (error) {
            console.log(error);
        }
    };

    const deletingUser = async id => {
        try {
            const data = await deleteUser(id);
            if (data) {
                alert('Deleted user successfully');
            }
            window.location = window.location;
            navigate('/home');
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        fetchUserList();
    }, []);

    return (
        <div>
            <Header auth={auth} />
            <div className={classes.homeBody}>
                <form method="post">
                    <Table className={classes.table}>
                        <TableHead>
                            <TableRow className={classes.thead}>
                                {/* <TableCell>ID</TableCell> */}
                                <TableCell>Name</TableCell>
                                <TableCell>Mobile Number</TableCell>
                                <TableCell>Email</TableCell>
                                <TableCell>Address</TableCell>
                                <TableCell>Delete</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {users.map(user => {
                                return (
                                    <TableRow
                                        className={classes.row}
                                        key={user._id}
                                    >
                                        {/* <TableCell>{user._id}</TableCell> */}
                                        <TableCell>{user.username}</TableCell>
                                        <TableCell>
                                            {user.mobileNumber}
                                        </TableCell>
                                        <TableCell>{user.email}</TableCell>
                                        <TableCell>{user.address}</TableCell>
                                        <TableCell>
                                            <Button
                                                color="primary"
                                                variant="contained"
                                                onClick={() =>
                                                    deletingUser(user._id)
                                                }
                                            >
                                                Delete
                                            </Button>
                                        </TableCell>
                                    </TableRow>
                                );
                            })}
                        </TableBody>
                    </Table>
                </form>
            </div>
        </div>
    );
}

export default Home;
