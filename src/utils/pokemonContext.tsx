import axios from "axios";
import { ReactChildren, ReactChild, createContext, useContext, useEffect } from "react";
import { BASE_URL } from "./URL";

interface AuxProps {
    children: ReactChild | ReactChildren;
}

export const UseFetch = async (url: string) => {
    return await axios.get(BASE_URL + `${url}`)
}

export const Network = ({ children }: AuxProps) => {
    useEffect(() => {
        window.addEventListener('online', () => {
            window.location.reload();
            localStorage.setItem('_cap_network', JSON.stringify(true))
        });
        window.addEventListener('offline', () => {
            window.location.reload();
            localStorage.setItem('_cap_network', JSON.stringify(false))
        });
    }, [])

    return (
        <>
            {children}
        </>
    )
}

export const FetchPoke = createContext({ UseFetch })

export const useGlobal = () => useContext(FetchPoke)