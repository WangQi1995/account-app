import axios from 'axios'
const api = process.env.REACT_APP_RECORDS_API_URL || "https://5bd5a4609325280013d28890.mockapi.io";

export const getAll = () => 
    axios.get(`${api}/api/v1/records`)
