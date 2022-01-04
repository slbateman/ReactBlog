import axios from "axios"

const API = axios.create({ baseURL: "http://localhost:5000/api/articles"})

//Article CRUD
export const createArticle = (newArticle) => API.post('/articles', newArticle)
export const readArticles = () => API.get('/articles')
export const updateArticle = (id, updatedArticle) => API.patch(`/articles/${id}`, updatedArticle)
export const deleteArticle = (id) => API.delete(`/articles/${id}`)