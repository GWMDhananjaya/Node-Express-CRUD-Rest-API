import React, { useEffect } from 'react'
import axios from 'axios'

export default function Home() {
    useEffect(() => {
        axios.get('http://localhost:8081/')
        .then(res => console.log(res))
        .catch(err => console.log(err))
    }, [])


    return (
    <>
    
    </>
  )
}