import React, { useState, useEffect } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Icon from '@material-ui/core/Icon';

import { login } from '../shared/APICaller';
import { useAppContext } from "../contextApp/useContextApp";
import swal from 'sweetalert';

const jwt = require('jsonwebtoken');

export default function FormDialog() {
    const [open, setOpen] = React.useState(false);
    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");

    const {
        NavigationConfig,
        updateNavigationConfig,
        updateIsLogin
    } = useAppContext();

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    function handleLogin() {
        console.log(userName, password);

        var bodyFormData = new FormData();
        bodyFormData.set("Name", userName);
        bodyFormData.set("Password", password);

        login(bodyFormData, function (res) {
            console.log(res);
            if (res.data.token.status !== "error") {
                localStorage.setItem("token", res.data.token.token);
                localStorage.setItem("user-role", res.data.token.role);
                updateNavigationConfig(localStorage.getItem('user-role'));
                console.log(NavigationConfig);
                updateIsLogin(true);
                setOpen(false);
            }
            else{
                swal("Username or password is wrong");
            }
        })

    }

    function handleChangeUserName(e) {
        setUserName(e.target.value);
    }

    function handleChangePassword(e) {
        setPassword(e.target.value);
    }

    return (
        <div>
            <Button variant="outlined" color="primary" onClick={handleClickOpen}>
                <Icon>person</Icon>
            </Button>
            <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title">Login</DialogTitle>
                <DialogContent>
                    <TextField
                        autoFocus
                        margin="dense"
                        id="name"
                        label="UserName"
                        type="name"
                        fullWidth
                        variant="outlined"
                        onChange={handleChangeUserName}
                    />
                    <TextField
                        autoFocus
                        margin="dense"
                        id="password"
                        label="Password"
                        type="password"
                        fullWidth
                        variant="outlined"
                        onChange={handleChangePassword}
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="primary">
                        Cancel
                    </Button>
                    <Button onClick={handleLogin} color="primary">
                        Login
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}