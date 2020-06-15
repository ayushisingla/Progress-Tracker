import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Home from './Home';
import Database from '../data.json';

const Login = ({ onLoginSucess }) => {

    const [name, setName] = useState('test1');
    const [mail, setMail] = useState('test1@gmail.com');
    const [password, setPassword] = useState('pass1');

    const onLogin = () => {
        if (name && mail && password) {
            let userFoundFlag = false;
            Database.users.map(item => {
                if (name.toLowerCase() === item.name && mail.toLowerCase() === item.mail && password === item.password) {
                    userFoundFlag = true;
                }
            });
            if (userFoundFlag) {
                onLoginSucess({ name, mail });
            } else {
                alert('Incorrect user credentials');
            }

        }
        else {
            alert('All fields are required');
        }
    }

    return (
        <div style={{ margin: 20 }}>
            <div style={{ display: 'flex', flex: 1, justifyContent: 'center' }}>
                <div style={{ width: '50%', minWidth: 400 }}>
                    <h2 style={{ textAlign: "center", margin: 20 }}>Progress Tracker Login</h2>
                    <div style={{ backgroundColor: 'lightgrey', flex: 1, justifyContent: 'row', alignItems: 'flex-end', textAlign: 'center', padding: 20 }}>
                        {/* Name */}
                        <label htmlFor="name">
                            Enter Name:
                </label>
                        <br />
                        <input
                            id="name"
                            value={name}
                            onChange={e => setName(e.target.value)}
                        />
                        <br />
                        <br />

                        {/* Mail*/}
                        <label htmlFor="mail">
                            Enter Mail:
                </label>
                        <br />
                        <input type="email"
                            id="mail"
                            value={mail}
                            onChange={e => setMail(e.target.value)}
                        />
                        <br />
                        <br />

                        {/* Password */}
                        <label htmlFor="password">
                            Enter Password:
                </label>
                        <br />
                        <input type="password"
                            id="password"
                            value={password}
                            onChange={e => setPassword(e.target.value)}
                        />
                        <br />
                        <br />
                        <Button variant="success"
                            onClick={onLogin}
                            style={{ position: 'relative', top: '50%', left: '45%' }}>
                            Login
            </Button>{' '}
                    </div>

                </div>
            </div>
        </div>



    );
}

export default Login;
