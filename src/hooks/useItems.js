import { useEffect, useState } from "react";
import { Bars } from "react-loader-spinner";

const useItems = () => {
        const [items, setItems] = useState([]);
    useEffect( ()=> {
        fetch('https://young-garden-12148.herokuapp.com/items')
        .then(res => res.json())
        .then(data => {
            setItems(data)
        })
    }, []);
    return [items, setItems]
}
export default useItems;