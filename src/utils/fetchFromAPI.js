import axios from "axios";

const BASE_URL = import.meta.env.VITE_URL;

const options = {
    params: {
        maxResults: '50'
    },
    headers: {
      'X-RapidAPI-Key': import.meta.env.VITE_RAPID_KEY,
      'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
    }
  };

  export const fetchFromAPI = async(url)=>{
    try {
        const {data} =await axios.get(`${BASE_URL}/${url}`,options)
        return data
    } catch (error) {
        console.log(error)
    }
  }