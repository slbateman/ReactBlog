import axios from "axios"

const API = axios.create({ baseURL: "http://localhost:5000/api/comments"})

//Comment CRUD
export const createComment = (newComment) => API.post('/comments', newComment)
export const readComments = () => API.get('/comments')
export const updateComment = (id, updatedComment) => API.patch(`/comments/${id}`, updatedComment)
export const deleteComment = (id) => API.delete(`/comments/${id}`)