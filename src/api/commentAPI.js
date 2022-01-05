import axios from "axios"

const API = axios.create({ baseURL: "http://localhost:5000/api/comments"})

//Comment CRUD
export const createComment = (newComment) => API.post('/', newComment)
export const readComments = () => API.get('/')
export const updateComment = (id, updatedComment) => API.patch(`/${id}`, updatedComment)
export const deleteComment = (id) => API.delete(`/${id}`)