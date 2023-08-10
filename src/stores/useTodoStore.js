import { defineStore } from "pinia";
import http from "@/common/http-common"
import axios from "axios"

export const useTodoListStore = defineStore("todoItems", {
    state: () => ({
        todoItems: [],
    }),
    actions:{
        async loadTodoItems() {
            try {
                const res = await http.get('/todos')
                const data = await res.data
                this.todoItems = data
                console.log(data)
            } catch (error) {
                if (axios.isAxiosError(error)) {
                    console.log(error?.response?.status + ' : ' + error.message)
                } else {
                    console.error(error);
                }
            }
        },
        async removeTodo(payload){
            const res = await http.delete(`/todos/${payload.id}`)
            const data = await res.data
            this.todoItems = data
        },
        async addTodo(payload){
            const res = await http.post(`/todos`, payload)
            const data = await res.data
            this.todoItems = data
        },
        async toggleTodo(payload){
            const res = await http.patch(`/todos/${payload.id}`, payload)
            const data = await res.data
            this.todoItems = data
        },
        async clearTodo(){
            const res = await http.delete(`/todos`)
            const data = await res.data
            this.todoItems = data
        },
    }
});
