import axios from 'axios'
import {config} from "dotenv";

const API_URL = '/api/todos/'

const createTodo = async (todoData, token) => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }
    const response = await axios.post(API_URL, todoData, config)

    return response.data
}

const todoService = {
    createTodo
}

export default todoService

