import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const useUpdateItems = () => {
  const { id } = useParams();


  const [user, setUser] = useState({})
  useEffect(() => {
    const url = `https://young-garden-12148.herokuapp.com/items/${id}`;
    fetch(url)
      .then(res => res.json())
      .then(data => {
        setUser(data)
      })
  }, [id])

  return [user, setUser]
}
export default useUpdateItems;