import axios from 'axios'
import { useState, useEffect } from 'react'

const useFetch = (url) => {
    const [data, setData] = useState(null)
    // const [loading, setLoading] = useState(false)
     const [error, setError] = useState(null)
    
    useEffect( () => {
        const fetchData = async() => {
            //etLoading(true)
            try {
                const res = await axios.get(url)
                setData(()=>res.data)

            } catch (error) {
                setError(error)
            }
            //setLoading(false)
        }

        fetchData()
    }, [url])

    useEffect(()=>{ },[data])
        
    return data
}

export default useFetch