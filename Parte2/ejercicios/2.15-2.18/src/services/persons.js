import axios from "axios";

const url = 'http://localhost:3001/persons'

const getAll = async () => {
    const response = await axios.get(url)
    return response.data
}

export { getAll };
