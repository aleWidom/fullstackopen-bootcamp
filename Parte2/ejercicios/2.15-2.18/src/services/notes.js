import axios from "axios";

const baseUrl = 'http://localhost:3001/notes'

/* const getAll = () => {
  return axios.get(baseUrl).then(response => response.data)
}*/

const getAll = async () => {
  const response = await axios.get(baseUrl);
  return response.data;
}

const create = (noteAdd) => {
  return axios.post(baseUrl, noteAdd ).then(response => {return response.data})
}

const update = (id, noteUpdate) => {
    return axios.put(`${baseUrl}/${id}`, noteUpdate ).then((response)=> response.data)
 }


export {
    getAll,
    create,
    update
}
