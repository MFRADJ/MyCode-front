/*imprtation necessaire  pour utilisee le react  js*/
import * as React from 'react';
import { Link } from "react-router-dom";
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';

/*import Link from '@mui/material/Link';*/
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import Form from 'react-bootstrap/Form';
import axios from 'axios'

function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

// TODO remove, this demo shouldn't need to reset the theme.

const defaultTheme = createTheme();

export default function Connexion() {
  
  const [email,setEmail]=useState('')
  const [password,setPassword]=useState('')
  const navivgate = useNavigate()


  
  const onEmailChange=(event)=>{
    setEmail(event.target.value)
  }
  const onPasswordChange=(event)=>{
    setPassword(event.target.value)
  }
  const handleSubmit = () => {
    axios.post('http://localhost:8080/auth', { email, password })
      .then((res) => {
        const token = res.data.token;
        localStorage.setItem('token', token);
       // navivgate('/' + uniter)
      })
      .catch((error) => {
        console.error(error);
      });
  };


  return (
    <ThemeProvider theme={defaultTheme}>
      <Grid container component="main" sx={{ height: '100vh' }}>
        <CssBaseline />
        <Grid
          item
          xs={1}
          sm={1}
          md={3}
          sx={{
            
            backgroundRepeat: 'no-repeat',
            backgroundColor: (t) =>
              t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              connecter
            </Typography>
            <Box component="form" noValidate sx={{ mt: 1 }}>
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="adresse email"
                name="email"
                value={email}
                onChange={onEmailChange}
                autoFocus
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="mot de passe"
                type="password"
                id="password"
                value={password}
                onChange={onPasswordChange}
                autoComplete="current-password"
              />
              <Grid item xs={12} sm={11} md={9}  sx={{ mt: 7, mx: 4,
              
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center', }} margin="normal" required fullWidth   maxHeight={9}  >
              
              </Grid>

              <Button variant="contained" sx={{ mt: 3, mb: 2 }} onClick={ handleSubmit } > connecter </Button>

              <Grid container>
              <Grid item>
                  <Link to="/Verifier" variant="body2">
                    {"Mot de Passe Oublier"}
                  </Link>
                </Grid>  

                <Grid item xs>

                </Grid>
                <Grid item>
                  <Link to="/Inscription" variant="body2">
                    {"Inscription "}
                  </Link>
                </Grid>
              </Grid>
              <Copyright sx={{ mt: 5 }} />
            </Box>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}