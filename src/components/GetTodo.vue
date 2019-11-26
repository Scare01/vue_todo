<template>
  <div class="create_todo">
      <input :value="newTodo" @change="getTodo">
      <button @click="addTodo">Add Todo</button>
  </div>
</template>
<script>
  export default {
    methods: {
        getTodo(e){
            this.$store.dispatch('getTodo', e.target.value)
        },
        addTodo(){
            this.$store.dispatch('addTodo')
            this.$store.dispatch('clearTodo')
        }
    },
    computed: {
        newTodo(){
            return this.$store.getters.newTodo
        }
    }
  }
</script>
<style>
  .create_todo {
    display: flex;
    justify-content: space-around;
    width: 20%;
    
  }
</style>