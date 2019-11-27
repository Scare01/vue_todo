<template>
  <div id="current-todos" class="container">
    <div class='header' v-if="todos.length > 0">Current todos</div>
      <ul class="todo-group">
        <li class="todo" v-for="(todo, index) in todos" :key="index">
          <div>{{todo.body}}</div>
          <div class="btn-group">
            <button type="button" @click="edit(todo)">
              Edit
            </button>
            <button type="button" @click="complete(todo)">
              Complete
            </button>
            <button type="button" @click="remove(todo)">
              Remove
            </button>
          </div>
        </li>
      </ul>
    </div>
</template>
<script>
export default{
    methods: {
        edit(todo){
            this.$store.dispatch('editTodo', todo)
        },
        complete(todo){
            this.$store.dispatch('completeTodo', todo)
        },
        remove(todo){
            this.$store.dispatch('removeTodo', todo)
        }
    },
    computed: {
        todos(){
            return this.$store.getters.todos
        }
    }
}
</script>
