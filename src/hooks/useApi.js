import { useNavigate } from "react-router-dom"
import axios from "../api/axios"

//hook to handle refresh token and access token expiry 
const useApi = () => {
    const navigate = useNavigate()

    const handlerefresh = async () => {
        try {
            const res = await axios.get('/users/refresh-token')
            if (res.status == 200 || res.status == 201){
                console.log("Token expierd")
                return true
            }
        } catch (error) {
            console.log("Error refreshing the token ", error)
            return false
        }
    }
    const get = async (url) => {
        try {
            const res = await axios.get(url);
            return res;
        } catch (error) {
            if (error.status == 405) {
                const result = await handlerefresh();
                if (result) {
                    try {
                        console.log("trying again")
                        const try_again_res = await axios.get(url);
                        return try_again_res
                    } catch (error) {
                        console.log("try again failed ")
                        if (error.status == 401 || error.status == 405) {
                            navigate('/login')
                        } else {
                            throw error
                        }
                    }
                } else {
                    navigate('/login')
                }
            } else if (error.status == 401) {
                navigate('/login')
            } else {
                throw error
            }
        }
    }

    const post = async (url, data) => {
        try {
            const res = await axios.post(url, data);
            console.log("normal trying")
            return res;
        } catch (error) {
            if (error.status == 405) {
                const result =await handlerefresh();
                if (result) {
                    try {
                        console.log("try")
                        const try_again_res = await axios.post(url, data);
                        console.log("trying again")
                        return try_again_res
                    } catch (try_error) {
                        if (try_error.status == 401 || try_error.status == 405) {
                            console.log("error when tried again",try_error)
                            navigate('/login')
                        } else {
                            throw try_error
                        }
                    }
                } else {
                    navigate('/login')
                }
            } else if (error.status == 401) {
                navigate('/login')
            } else {
                throw error
            }
        }
    }



    return { get, post }
}

export default useApi