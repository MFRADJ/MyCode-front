import { Avatar, Grid, Paper, TextField, Typography ,Link} from "@mui/material";
import React from "react";
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { Button } from "bootstrap";
import './Auth.css'
const handleClick = () => {
    console.log ('hello')
}

const Verifier=()=>{
   const paperStyle={padding :30,height:'70vh',width:400, margin:'20px auto'} 
    const avatarStyle={backgroundColor:'#4166b2'}
    return(
<Grid>
    <Paper elevation={10} style={paperStyle}>
        <Grid align='center' >

        <Avatar style={avatarStyle}>< LockOutlinedIcon/>
        
        </Avatar>
      <h3> Oublier Mot de passe</h3></Grid>
<table>
<tr>
             <td>
      <label> E-
        mail</label> 
      </td><br></br>
      <td>
      <TextField label='E-mail'type="email" placeholder="Votre email"  required/>
      </td>
      </tr>
      <br/>
      <tr>
             <td>
      <label>mot de passe</label> 
      </td>
      <br/>
      <td>
      <TextField label='mot de passe'type="password" placeholder="entre un nouveau mot de passe"  required/>
      </td>
      </tr>
      <br/>
      <tr>
             <td>
      <label>mot de passe</label> 
      </td><br></br>
      <td>
      <TextField label='Conformer mot de passe'type="password" placeholder="Conformer votre mot de passe"  required/>
      </td>
      </tr>
      <br/>
      
      <button type="submit"  onClick={handleClick} className="btn button"   >connecter</button>
</table>
      </Paper>

      </Grid>
      )}
      export default Verifier;