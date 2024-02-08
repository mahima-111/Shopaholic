import axios from "axios";
const params={
    headers: {
        Authorization: "bearer "+ import.meta.env.VITE_STRAPI_KEY,
    },
};

export const fetchFromApi= async (url)=>{
    try {
        const {data}=await axios.get(import.meta.env.VITE_DEV_URL + url, params);
        return data;
    } catch (error) {
        console.log(error);
        return error;
    }
}