import React, {useState} from "react";
import { SERVER_URL }  from "../constants.js";
import  Button  from "@mui/material/Button";
import  TextField  from "@mui/material/TextField";
import  Stack  from "@mui/material/Stack";
import Carlist from "./Carlist.js";
import  Snackbar  from "@mui/material/Snackbar";

function Login(){
    const [user, setUser] = useState({
        username : '',
        password : ''
    });

    const [isAuthenticated,setAuth] = useState(false);

    const handleChange = (event) =>{
        setUser({...user,[event.target.name]:event.target.value});
    }

    const login =()=>{
        fetch(SERVER_URL+'login',{
            method:'POST',
            headers:{'Content-Type':'application/json'},
            body: JSON.stringify(user)
        })
        .then(res => {
            const jwtToken = res.headers.get('Authorization');
            if(jwtToken !== null){
                sessionStorage.setItem("jwt",jwtToken);
                setAuth(true);
            }
            else{
                setOpen(true);
            }
        })
        .catch(err=>console.error(err))
    }

    const logout = ()=>{
        sessionStorage.removeItem("jwt");
        setAuth(false);
    }

    const [open, setOpen] = useState(false);



    if(isAuthenticated){
        return (
            <>
                <Button onClick={logout}>logout</Button>
                <Carlist/>
            </>
        )
    }
    else{
        return(
            <>
                <Snackbar open={open} autoHideDuration={3000} onClick={()=>setOpen(false)} message="Login failed: your ID and PW"/>
                    <Stack spacing={2} alignItems='center' mt={2}>
                        <TextField
                            name="username"
                            label="Username"
                            onChange={handleChange}/>
                        <TextField
                            type="password"
                            name="password"
                            label="Password"
                            onChange={handleChange}/>
                        <Button
                            variant="outlined"
                            color="primary"
                            onClick={login}>
                                Login
                        </Button>
                    </Stack>
            </>
        )
    }
}
export default Login;