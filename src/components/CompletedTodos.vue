<template>
  <div id="completed-todos">
    <div class="header" v-if="completed.length > 0">Completed</div>
    <ul class="todo-group">
      <li class="todo" v-for="(todo, index) in completed" :key="index">
        <div>{{todo.body}}</div>
        <button type="button" @click="remove(todo)">
          Remove
        </button>
      </li>
  </ul>
</div>
</template>
<script>
    export default{
        methods: {
            remove(todo){
                this.$store.dispatch('removeTodo', todo)
            }
        },
        computed: {
            completed(){
                return this.$store.getters.completedTodos
            }
        }
    }
</script>