import {useState, useEffect} from "react"


export const useFetch = (url) => {
    const [respdata, setRespData] = useState([]);

    useEffect(()=> {
     fetch(url)
        .then((resp)=> resp.json())
        .then((data)=> setRespData(data))

    }, [url]) 
    return respdata
}
