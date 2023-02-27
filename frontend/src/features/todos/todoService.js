import axios from 'axios'
import {config} from "dotenv";

const API_URL = '/api/todo/'

const createTodo = async (todoData, token) => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }
    try {
        const response = await axios.post(API_URL, todoData, config)
        return response.data
    }catch (error) {
        console.log(error)
        throw error
    }

}

const todoService = {
    createTodo
}

export default todoService

