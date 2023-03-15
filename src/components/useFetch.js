import axios from 'axios'
import { useState, useEffect } from 'react'

const useFetch = (url) => {
    const [data, setData] = useState(null)
    
    useEffect( () => {
        const fetchData = async() => {
            try {
                const res = await axios.get(url)
                setData(()=>res.data)

            } catch (error) {
                console.log(error.message)
            }
            //setLoading(false)
        }

        fetchData()
    }, [url])

    useEffect(()=>{ },[data])
        
    return data
}

export default useFetch