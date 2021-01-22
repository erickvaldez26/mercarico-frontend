import React, { createContext, useState } from 'react';
import fire from '../services/Firebase';

export const LoginContext = createContext();

const LoginProvider = ( props ) => {
  const db = fire.firestore();
    const [user, setUser] = useState(() => {
        const usu = window.localStorage.getItem("@Mercario:uid");
        if (usu) return JSON.parse(usu)
        return null
    });
    const [datauser, setDataUser] = useState({
      name: '',
      email: '',
      date_create: new Date(),
      uid: '',
    });

    const handleLogin = async ( email, password ) => {
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

    const handleRegister = async (name, email, password) => {
      try{
        const temp = await fire
          .auth()
          .createUserWithEmailAndPassword(email, password);
        
        if(temp){
          setUser(temp.user.uid);
          window.localStorage.setItem(
            "@Mercario:uid",
            JSON.stringify(temp.user.uid)
          );
          setDataUser({
            ...datauser,
            name: name,
            email: email,
            uid: temp.user.uid
          })
          await db.collection('users').doc(temp.user.uid).set(datauser);
        }
         
      } catch(err){
        console.log(err);
      }
    }

    const handleSignOut = () => {
        fire.auth().signOut();
        window.localStorage.removeItem("@Mercario:uid");
        setUser();
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