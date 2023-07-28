import axios from "axios"
import { useState } from "react"

const useFetch = (baseUrl, callback) => {

    
    const [infoApi, setInfoApi] = useState()

    //Get

    const getApi = (path) => {
        const url = `${baseUrl}${path}/`
        axios
            .get(url)
            .then(res => setInfoApi(res.data))   
            .catch(err => console.log(err))
    }

    //Post 

    const postApi = (path, data) => {
        const url = `${baseUrl}${path}/`
        axios
            .post(url, data)
            .then (res => {
                console.log(res.data)
                setInfoApi([ ...infoApi, res.data ])
                callback(true)
            })
            .catch(err => console.log(err))

    }

    //Delete

    const deleteApi = (path, id) => {
        const url = `${baseUrl}${path}/${id}/`
        axios
            .delete(url)
            .then(res => {
                console.log(res.data)
                const infoApiFiltered = infoApi.filter(e => e.id !== id)
                setInfoApi(infoApiFiltered)
            })
            .catch(err => console.log(err))
    }

    //Update

    const updateApi = (path, id, data) => {
        const url = `${baseUrl}${path}/${id}/`
        axios
            .put(url, data)
            .then(res => {
                console.log(res.data)
                const infoApiMapped = infoApi.map(e => e.id === id ? res.data : e)
                setInfoApi (infoApiMapped)
                callback(true)

            })
            .catch(err => console.log(err))
    }

    return [infoApi, getApi, postApi, deleteApi, updateApi]

}

export default useFetch