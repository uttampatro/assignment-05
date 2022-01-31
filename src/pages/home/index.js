import React from 'react';
import { makeStyles } from '@mui/styles';
import {
    TableHead,
    TableRow,
    TableBody,
    Table,
    TableCell,
} from '@mui/material';
import Header from '../../components/header';

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

function Home() {
    const classes = useStyles();
    

    return (
        <div>
            <Header />
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
                        {/* <TableBody>
                            {stableSort(
                                users,
                                getComparator(order, orderBy)
                            ).map((user) => {
                                return (
                                    <TableRow
                                        className={classes.row}
                                        key={user._id}
                                    >
                                        <TableCell>
                                            <input
                                                onClick={() =>
                                                    onCheckBoxClick(user)
                                                }
                                                style={{ cursor: 'pointer' }}
                                                type="checkbox"
                                            />
                                        </TableCell>
                                        <TableCell>{user._id}</TableCell>
                                        <TableCell>{user.name}</TableCell>
                                        <TableCell>
                                            {user.phoneNumber}
                                        </TableCell>
                                        <TableCell>{user.email}</TableCell>
                                        <TableCell>{user.hobbies}</TableCell>
                                        <TableCell>                                           
                                            <Button
                                                color="secondary"
                                                variant="contained"
                                                // onClick={() =>
                                                //     deleteUser(user._id)
                                                // }
                                            >
                                                Delete
                                            </Button>
                                        </TableCell>
                                    </TableRow>
                                );
                            })}
                        </TableBody> */}
                    </Table>
                </form>
            </div>
        </div>
    );
}

export default Home;
