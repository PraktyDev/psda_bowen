import axios from "axios"

const BASE_URL = process.env.NEXT_PUBLIC_API_URL

export async function FetchData(method, endpoint, data){
    try {
        if(method === 'POST'){
            const res = await axios({
                method: method,
                url: `${BASE_URL}${endpoint}`,
                data: data
            })
            return res
        }
        if(method === 'GET'){
            const res = await axios({
                method: method,
                url: `${BASE_URL}${endpoint}`
            })
            return res.data
        }
        if(method === 'PUT'){
            const res = await axios({
                method: method,
                url: `${BASE_URL}${endpoint}`,
                data: data
            })
            return res
        }
        if(method === 'DELETE'){
            const res = await axios({
                method: method,
                url: `${BASE_URL}${endpoint}`
            })
            return res
        }
    } catch (error) {
        console.log(error.message)
        throw new Error(error.message)
    }
}