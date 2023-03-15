import axios from 'axios'
import { useState, useEffect } from 'react'

const useFetch = (url) => {
    const [data, setData] = useState(null)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(false)
    
    useEffect( () => {
        const fetchData = async() => {
            setLoading(true)
            try {
                const res = await axios.get(url)
                setData(()=>res.data)

            } catch (error) {
                setError(error.message)
            }
            setLoading(false)
        }

        fetchData()
        
    }, [url])

    useEffect(()=>{ },[data])
        
    return { data, loading, error }
}

export default useFetch