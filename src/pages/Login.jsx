import React from 'react';
import MyInput from '../components/UI/input/MyInput';
import MyButton from '../components/UI/button/MyButton';

const Login = () => {
    return (
        <div>
            <h1>Login</h1>
            <form>
                <MyInput type="text" placeholder='Schreibe deinen Login...'/>
                <MyInput type="password" placeholder='Schreibe dein Passwort...'/>
                <MyButton>Login</MyButton>
            </form>
        </div>
    );
};

export default Login;