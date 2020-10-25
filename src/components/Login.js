
import React from 'react'
import { Button } from '@material-ui/core'
import '../css/login.css'
import { auth,provider } from '../firebase';
import logo from '../img/torochat.png';
import { useStateValue } from './StateProvider';
import { actionTypes } from './reducer';

function Login() {

    const [{}, dispatch] = useStateValue();

    const singIn =  ()=>{
        auth.signInWithPopup(provider)
        .then((result) => {
            dispatch({
                type:actionTypes.SET_USER,
                user:result.user,
            });
        })
        .catch((error) =>alert(error))
    }

    return (
        <div className="login">
            <div className="login__container">
                <img 
                src={logo} alt="Logo Torochat"
                />

                <div className="login__text">
                    <h1>Ingresar a Toro-Chat</h1>
                </div>

                <Button onClick={singIn}>
                    Ingresar con Google
                </Button>
            </div>
        </div>
    )
}

export default Login
