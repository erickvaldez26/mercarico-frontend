import React, {createContext} from 'react'
import fire from '../services/Firebase';
import {toast} from 'react-toastify';

export const MarketContext = createContext();

const Market = (props) => {
    const db = fire.firestore();
    const st = fire.storage().ref(`markets/`);

    const handleRegisterMarket = async (name, reference, picture) => {
        const auth = fire.auth().currentUser?.uid.toString();
        try{
            var uploadTask = await st.child(picture.name).put(picture);

            uploadTask.task.on('state_changed', 
                function(snapshot){
                    var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                    console.log(progress);
                }, function(err){
                    switch (err.code) {
                        case 'storage/unauthorized':
                            toast.warn('😪 No esta autorizado',{
                                position: "bottom-left",
                                autoClose: 4000,
                                hideProgressBar: false,
                                closeOnClick: true,
                                pauseOnHover: false,
                                draggable: false,
                                progress: undefined,
                              })
                        break;
                        case 'storage/canceled':
                            console.log(err.code);
                        break;
                        case 'storage/unknown':
                            toast.error('😪 Algo salio mal',{
                                position: "bottom-left",
                                autoClose: 4000,
                                hideProgressBar: false,
                                closeOnClick: true,
                                pauseOnHover: false,
                                draggable: false,
                                progress: undefined,
                            })
                        break;
                        default:
                            break;
                    }
                }, function() {
                    uploadTask.task.snapshot.ref.getDownloadURL().then(function(downloadURL) {
                        if(downloadURL){
                            const data = ({
                                name: name,
                                reference: reference,
                                picture: downloadURL,
                                date_create: new Date()
                            })
                            db.collection('users').doc(auth).collection('contributions').doc().set(data);

                            toast.success('Mercado registrado correctamente',{
                                position: "bottom-left",
                                autoClose: 4000,
                                hideProgressBar: false,
                                closeOnClick: true,
                                pauseOnHover: false,
                                draggable: false,
                                progress: undefined,
                            })
                        }
                    })
                }
            )
        }catch(err){
            console.log(err);
        }
    }

    return (
        <MarketContext.Provider
            value={{
                handleRegisterMarket
            }}
        >
            {props.children}
        </MarketContext.Provider>
    )
}

export default Market
