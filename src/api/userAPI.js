import axios from "axios"

const API = axios.create({ baseURL: "http://localhost:5000/api/users"})

//User CRUD
export const createUser = (newUser) => API.post('/users', newUser)
export const readUsers = () => API.get('/users')
export const updateUser = (id, updatedUser) => API.patch(`/users/${id}`, updatedUser)
export const deleteUser = (id) => API.delete(`/users/${id}`)