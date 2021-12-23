import axios from "axios";


export const getTodoLists = () => axios.get("/api")
export const addTodoListCall = (description: string) => axios.post("/api/create", description, {
    headers: {"Content-Type": "text/plain"}
})
