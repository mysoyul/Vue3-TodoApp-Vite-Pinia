<template>
    <div>
        <TransitionGroup name="list" tag="ul">
            <li v-for="todo in todoItems" :key="todo.id" class="shadow">
                <i class="fas fa-check checkBtn" :class="{ checkBtnCompleted: todo.completed }"
                    @click="toggleComplete(todo)"></i>
                <span :class="{ textCompleted: todo.completed }">
                    {{ todo.item }}
                </span>
                <span class="removeBtn" @click="removeTodo(todo)">
                    <i class="fas fa-trash-alt"></i>
                </span>
            </li>
        </TransitionGroup>
    </div>
</template>

<script setup>
import { onMounted } from "vue"
import { storeToRefs } from "pinia"
import { useTodoListStore } from '@/stores/useTodoStore'

const store = useTodoListStore()
const { todoItems } = storeToRefs(store);

onMounted(() => {
    store.loadTodoItems()
});

const removeTodo = (todoItem) => {
    store.removeTodo(todoItem)
    //.dispatch("moduleTodo/removeTodo", todoItem)
}

const toggleComplete = (todoItem) => {
    todoItem.completed = !todoItem.completed
    store.toggleTodo(todoItem)
    //.dispatch("moduleTodo/toggleTodo", todoItem)
}

</script>

<style scoped>
i,
span {
    cursor: pointer;
}

ul {
    list-style-type: none;
    padding-left: 0px;
    margin-top: 0;
    text-align: left;
}

li {
    display: flex;
    min-height: 50px;
    height: 50px;
    line-height: 50px;
    margin: 0.5rem 0;
    padding: 0 0.9rem;
    background: white;
    border-radius: 5px;
}

.removeBtn {
    margin-left: auto;
    color: #de4343;
}

.checkBtn {
    line-height: 45px;
    color: #62acde;
    margin-right: 5px;
}

.checkBtnCompleted {
    color: #b3adad;
}

.textCompleted {
    text-decoration: line-through;
    color: #b3adad;
}
</style>