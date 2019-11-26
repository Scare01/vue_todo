<template>
  <div id="app" class="container">
    <GetTodo />
    <div class='content'>
      <CurrentTodos class="current_todos" />
      <CompletedTodos class="completed_todos" />
    </div>
  </div>
</template>
<script>
import GetTodo from './components/GetTodo.vue'
import CurrentTodos from './components/CurrentTodos.vue'
import CompletedTodos from './components/CompletedTodos.vue'
export default {
  components: {
    GetTodo,
    CurrentTodos,
    CompletedTodos
  }
}
</script>
<style>
  body {
    font-family: Helvetica, sans-serif;
  }
  .container {
    display: flex;
    flex-direction: column;
    width: 80%;
    margin: 0 auto;
    padding-top: 20px;
    align-items: center;
  }

  .content {
    display: flex;
    flex-direction: row;
  }

  .current_todos, .completed_todos {
    width: calc(50% - 10px);
    padding: 10px;
  }

  .btn-group{
    float: right;
  }
</style>