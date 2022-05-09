import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const useUpdateItems = () =>{
    const {id} = useParams();
    

    const [user, setUser] = useState({})
    useEffect(()=>{
        const url = `http://localhost:5000/items/${id}`;
        fetch(url)
        .then(res => res.json())
        .then(data => setUser(data))
    },[id])

    return [user, setUser]
}
export default useUpdateItems;