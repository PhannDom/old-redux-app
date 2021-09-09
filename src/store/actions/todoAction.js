import axios from "axios"
import { GET_TODOS, MARK_COMPLETE, ADD_TODO, DELETE_TODO } from '../types'

export const getTodos = () => async dispatch => {

    try {
        const response = await axios.get("https://jsonplaceholder.typicode.com/todos?_limit=10")
        dispatch({
            type: GET_TODOS,
            payload: response.data
        })
    } catch (error) {
        console.log(error)
    }
}

export const markComplte = (id) => {
    const markComplteAction = dispatch => {
        dispatch({
            type: MARK_COMPLETE,
            payload: id
        })
    }

    return markComplteAction
}

export const addTodo = (newTodo) => async dispatch => {
    try {
        await axios.post("https://jsonplaceholder.typicode.com/todos", newTodo)
        dispatch({
            type: ADD_TODO,
            payload: newTodo
        })
    } catch (error) {
        console.log(error)
    }

}

export const deleteTodo = (id) => async dispatch => {
    try {
        await axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
        dispatch({
            type: DELETE_TODO,
            payload: id
        })
    } catch (error) {
        console.log(error)
    }
}