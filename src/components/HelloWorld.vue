<template>
  <div id="app">
  <TodoHeader></TodoHeader>
  <TodoInput></TodoInput>
  <TodoList></TodoList>
  <TodoFooter></TodoFooter>
  </div>
</template>

<script>
import { defineComponent } from 'vue';
import TodoFooter from '@/components/TodoFooter.vue';
import TodoHeader from '@/components/TodoHeader.vue';
import TodoInput from '@/components/TodoInput.vue';
import TodoList from '@/components/TodoList.vue';

export default defineComponent({
  name: 'App',
  components: {
    TodoHeader,
    TodoInput,
    TodoList,
    TodoFooter
  },

});
</script>

<style>


</style>