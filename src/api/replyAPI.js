import axios from "axios"

const API = axios.create({ baseURL: "http://localhost:5000/api/replies"})

//Reply CRUD
export const createReply = (newReply) => API.post('/', newReply)
export const readReplies = () => API.get('/')
export const updateReply = (id, updatedReply) => API.patch(`/${id}`, updatedReply)
export const deleteReply = (id) => API.delete(`/${id}`)