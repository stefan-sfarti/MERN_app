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

const getTodos = async (token) => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }
    try {
        const response = await axios.get(API_URL, config)
        return response.data
    }catch (error) {
        console.log(error)
        throw error
    }
}

const deleteTodo = async (todoId, token) => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }
    try {
        const response = await axios.delete(API_URL + todoId, config)
        return response.data
    }catch (error) {
        console.log(error)
        throw error
    }

}

const todoService = {
    createTodo,
    getTodos,
    deleteTodo
}

export default todoService

