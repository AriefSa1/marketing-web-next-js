const {default: axios} = require("axios")
const { headers } = require("next/headers")

const apikey = process.env.NEXT_PUBLIC_REST_API_KEY
const apiUrl = "http://localhost:1337/api"

const axiosClient = axios.create({
    baseUrl: apiUrl,
    headers: {
        Authorization: `Bearer ${apikey}`
    }
})

const getLatestProduct = () => axiosClient.get(`${apiUrl}/products?populate=*`);
export default {
    getLatestProduct
}