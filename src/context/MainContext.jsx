import React, { useState, useEffect, createContext } from 'react';

export const MainContext = createContext();

const MainProvider = ( props ) => {
    const [ geopoint, setGeopoint ] = useState({
        longitud: -12.045996,
        latitud: -77.030290
    });

    return (
        <MainContext.Provider
            value={{
                geopoint,
                setGeopoint
            }}
        >
            {props.children}
        </MainContext.Provider>
    )
}

export default MainProvider;