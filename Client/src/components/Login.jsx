import React from 'react'
import { Container } from 'react-bootstrap'
// import './styles.css'

const AUTH_URL = "https://accounts.spotify.com/authorize?client_id=YOUR_CLIENT_ID&response_type=code&redirect_uri=http://127.0.0.1:5173/&scope=streaming%20user-read-email%20user-read-private%20user-library-read%20user-library-modify%20user-read-playback-state%20user-modify-playback-state"

function Login() {
    return (
        <Container className='d-flex justify-content-center align-items-center' style={{ minHeight: "100vh" }}>
            <a className='btn btn-success btn-lg' href={AUTH_URL}>Login to Spotify</a>
        </Container>
    )
}

export default Login 