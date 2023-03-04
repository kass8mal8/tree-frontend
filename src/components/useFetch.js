import axios from 'axios'
import { useState, useEffect } from 'react'

const useFetch = (url) => {
    const [data, setData] = useState({})
    
    useEffect( () => {
        const fetchData = async() => {
            try {
                const res = await axios.get(url)
                setData(res.data)

            } catch (error) {
                console.log(error.message);
            }
        }

        fetchData()
    }, [url])
        
    return data
}

export default useFetch