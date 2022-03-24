import axios from "axios";
import { createContext, useContext } from "react";
import { BASE_URL } from "./URL";


export const UseFetch = async (url: string) => {
    return await axios.get(BASE_URL + `${url}`)
}

export const useFetchDetail = async (url: string) => {
    return await axios.get(BASE_URL + `${url}`)
}

export const FetchPoke = createContext({ UseFetch })

export const useGlobal = () => useContext(FetchPoke)