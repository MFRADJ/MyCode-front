
import { Avatar, Grid, Paper, TextField, Typography ,Link} from "@mui/material";
import {Component} from "react";
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Button from "@mui/material";

import './Auth.css';


    const handleClick = () => {
        console.log ('hello')
    }

const Conx=()=>{
   const paperStyle={padding :30,height:'70vh',width:400, margin:'20px auto'} 
    const avatarStyle={backgroundColor:'#4166b2'}
    
  
    return(
<Grid>
    <Paper elevation={10} style={paperStyle}>
        <Grid align='center' className="avatar__cnx">
        <Avatar style={avatarStyle} >< LockOutlinedIcon/></Avatar>
      <h2> Connexion</h2></Grid>
      <table>
        <tr>
             <td>
      <label> Email</label>
      </td>
      <td>
      <TextField label='Email' type="email" placeholder="Entre votre adresse email"  required/>
      </td>
      </tr>
      <br></br>
      <tr> <td>
      <label> Mot de passe</label></td>
<td>
      <TextField label='Mot de passe' type="password" placeholder="Entre votre Mot de Passe"  required/></td></tr>
        </table>
        <br></br>
        <Typography>
            <Link href="/Verifier">Mot de passe oublié ?</Link>
        </Typography>
        <br></br>
         <button type="submit" className="btn button" onClick={handleClick} >  Se connecter</button>
     

      <br></br>
         <Typography>
            <Link href="/Inscription"> Créer un Compte</Link>
        </Typography>
      
        </Paper>

         </Grid>
    )
}
 export default Conx;