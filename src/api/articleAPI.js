import axios from "axios"

const API = axios.create({ baseURL: "http://localhost:5000/api/articles"})

//Article CRUD
export const createArticle = (newArticle) => API.post('/', newArticle)
export const readArticles = () => API.get('/')
export const updateArticle = (id, updatedArticle) => API.patch(`/${id}`, updatedArticle)
export const deleteArticle = (id) => API.delete(`/${id}`)