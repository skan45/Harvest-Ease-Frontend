import React from "react";
import * as Components from './Components';
import axios from 'axios';
function login() {
    const [signIn, toggle] = React.useState(true); // true for sign-in, false for sign-up

    function handleLogin(event) {
        event.preventDefault();
        const email = event.target.email.value;
        const password = event.target.password.value;

        axios.post('http://localhost:5000/api/auth/login', {
            email,
            password
        })
        .then(response => {
            console.log(response.data);  
            if (response.data.token) {
                localStorage.setItem('token', response.data.token);
            }
        })
        .catch(error => console.log('Error:', error));
    }

    function handleRegister(event) {
        event.preventDefault();
        const name = event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.password.value;

        axios.post('http://localhost:5000/api/auth/register', {
            name,
            email,
            password
        })
        .then(response => {
            console.log('User registered', response.data);
        })
        .catch(error => console.log('Error:', error));
    }

    return (
        <Components.Container>
            <Components.SignUpContainer signinIn={!signIn}>
                <Components.Form onSubmit={handleRegister}>
                    <Components.Title>Create Account</Components.Title>
                    <Components.Input type='text' name='name' placeholder='Name' />
                    <Components.Input type='email' name='email' placeholder='Email' />
                    <Components.Input type='password' name='password' placeholder='Password' />
                    <Components.Button type="submit">Sign Up</Components.Button>
                </Components.Form>
            </Components.SignUpContainer>

            <Components.SignInContainer signinIn={signIn}>
                <Components.Form onSubmit={handleLogin}>
                    <Components.Title>Sign in</Components.Title>
                    <Components.Input type='email' name='email' placeholder='Email' />
                    <Components.Input type='password' name='password' placeholder='Password' />
                    <Components.Anchor href='#'>Forgot your password?</Components.Anchor>
                    <Components.Button type="submit">Sign In</Components.Button>
                </Components.Form>
            </Components.SignInContainer>

            <Components.OverlayContainer signinIn={signIn}>
                <Components.Overlay signinIn={signIn}>
                    <Components.LeftOverlayPanel signinIn={signIn}>
                        <Components.Title>Welcome Back!</Components.Title>
                        <Components.Paragraph>
                            To keep connected with us please login with your personal info
                        </Components.Paragraph>
                        <Components.GhostButton onClick={() => toggle(true)}>
                            Sign In
                        </Components.GhostButton>
                    </Components.LeftOverlayPanel>

                    <Components.RightOverlayPanel signinIn={!signIn}>
                        <Components.Title>Hello, Friend!</Components.Title>
                        <Components.Paragraph>
                            Enter your personal details and start your journey with us
                        </Components.Paragraph>
                        <Components.GhostButton onClick={() => toggle(false)}>
                            Sign Up
                        </Components.GhostButton>
                    </Components.RightOverlayPanel>
                </Components.Overlay>
            </Components.OverlayContainer>
        </Components.Container>
    );
}

export default login;
