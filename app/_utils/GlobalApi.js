const {default: axios} = require("axios")

const apikey = process.env.NEXT_PUBLIC_REST_API_KEY
const apiUrl = "http://localhost:1337/api"

const axiosClient = axios.create({
    baseUrl: apiUrl,
    headers: {
        Authorization: `Bearer ${apikey}`,
    }
})

const getLatestProduct = () => axiosClient.get(`${apiUrl}/products?populate=*`);

const getSingleProduct = ({slug}) => axiosClient.get(`${apiUrl}/products?populate=*&filters[slug][$eq]=${slug}`);

const getCategory = () => axiosClient.get(`${apiUrl}/categories?populate=*`);

const getProductByCategory = ({category}) => axiosClient.get(`${apiUrl}/products?populate=*&filters[category][name][$eq]=${category}`);

export default {
    getLatestProduct,
    getSingleProduct,
    getCategory,
    getProductByCategory
}