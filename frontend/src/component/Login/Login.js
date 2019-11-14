import React, { Component } from 'react';
import './login.css';

export class Login extends Component {
    render() {
        return (
            <form role="form" action="" method="post">
                <div className="login-box">
                <h1>Đăng nhập</h1>
                <div className="textbox">
                    <i className="fas fa-user" />
                    <input type="text" id="email" name="email" placeholder="Email hoặc Tên tài khoản" />
                </div>
                <div className="textbox">
                    <i className="fas fa-lock" />
                    <input type="password" id="password" name="password" placeholder="Mật khẩu" />
                </div>
                <button type="submit" className="btn">Đăng nhập</button>
                </div>
            </form>
        );
    }
}

export default Login;
