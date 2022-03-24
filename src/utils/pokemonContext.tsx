import axios from "axios";
import { createContext, useContext, useEffect } from "react";
// import { useNavigate } from "react-router";
import { BASE_URL } from "./URL";


export const UseFetch = async (url: string) => {
    return await axios.get(BASE_URL + `${url}`)
}

export const Network = ({ children }: any) => {
    // const navigate = useNavigate()

    useEffect(() => {
        window.addEventListener('online', (event) => {
            console.log("You are now connected to the network.");
            // navigate('/')
            window.location.reload();
            localStorage.setItem('_cap_network', JSON.stringify(true))
        });
        window.addEventListener('offline', (event) => {
            console.log("You are now not connected to the network.");
            window.location.reload();
            localStorage.setItem('_cap_network', JSON.stringify(false))
        });
        if (navigator.onLine) {
            localStorage.setItem('_cap_network', JSON.stringify(true))
        } else {
            localStorage.setItem('_cap_network', JSON.stringify(false))
        }
    }, [navigator])

    return (
        <>
            {children}
        </>
    )
}

export const FetchPoke = createContext({ UseFetch })

export const useGlobal = () => useContext(FetchPoke)