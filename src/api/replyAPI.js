import axios from "axios"

const API = axios.create({ baseURL: "http://localhost:5000/api/replies"})

//Reply CRUD
export const createReply = (newReply) => API.post('/replies', newReply)
export const readReplies = () => API.get('/replies')
export const updateReply = (id, updatedReply) => API.patch(`/replies/${id}`, updatedReply)
export const deleteReply = (id) => API.delete(`/replies/${id}`)