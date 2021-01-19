import React, { createContext, useState } from 'react';
import fire from '../services/Firebase';

export const LoginContext = createContext();

const LoginProvider = ( props ) => {
    const [user, setUser] = useState(() => {
        const usu = window.localStorage.getItem("@Mercario:uid");
        if (usu) return JSON.parse(usu)
        return null
    });

    const handleLogin = async (email, password) => {
      try {
        const temp = await fire
          .auth()
          .signInWithEmailAndPassword(email, password);
        setUser(temp.user.uid);
        window.localStorage.setItem(
          "@Mercario:uid",
          JSON.stringify(temp.user.uid)
        );
      } catch (err) {
        console.log(err);
      }
    };

    const handleRegister = () => {
        fire.auth().createUserWithEmailAndPassword().catch(err => {
            var errorCode = err.code;
            var errorMessage = err.message;
            console.log(`${errorCode} + ${errorMessage}`);
        })
    }

    const handleSignOut = () => {
        fire.auth().signOut();
    }

   
    return (
        <LoginContext.Provider
            value={{
                user,
                setUser,
                handleLogin,
                handleSignOut,
                handleRegister
            }}
        >
            {props.children}
        </LoginContext.Provider>
    )
}

export default LoginProvider;