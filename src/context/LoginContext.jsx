import React, { createContext, useState } from 'react';
import {toast} from 'react-toastify';
import fire from '../services/Firebase';

export const LoginContext = createContext();

const LoginProvider = ( props ) => {
  const db = fire.firestore();
  const [user, setUser] = useState(() => {
    const usu = window.localStorage.getItem("@Mercario:uid");
    if (usu) return JSON.parse(usu)
    return null
  });
  /* const [datauser, setDataUser] = useState({
    name: '',
    email: '',
    date_create: new Date(),
    uid: '',
  }); */

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
      toast.success('Bienvenido!',{
        position: "bottom-left",
        autoClose: 4000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: false,
        progress: undefined,
      })
    } catch (err) {
      toast.error('😪 Verifica tus credenciales',{
        position: "bottom-left",
        autoClose: 4000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: false,
        progress: undefined,
      })
    }
  };

  const handleRegister = async (name, email, password) => {

    try{
      const temp = await fire.auth().createUserWithEmailAndPassword(email, password);
      
      const dataUser = ({
        name: name,
        email: temp.user.email,
        date_create: new Date(),
        uid: temp.user.uid,
      })

      setUser(temp.user.uid);
      window.localStorage.setItem(
        "@Mercario:uid",
        JSON.stringify(temp.user.uid)
      );
      await db.collection('users').doc(temp.user.uid).set(dataUser);
         
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