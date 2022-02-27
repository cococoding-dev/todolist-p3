<template>
  <div id="app">
    <add-todo></add-todo>
    <todo-list></todo-list>
  </div>
</template>

<script>
import AddTodo from "./components/AddTodo.vue";
import TodoList from "./components/TodoList.vue";

export default {
  name: "App",
  components: {
    AddTodo,
    TodoList,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

table thead tr th {
  height: 30px;
  background-color: black;
  color: white;
}

table thead tr th:nth-child(2) {
  width: 150px;
}

table tbody tr {
  height: 30px;
}

/* odd - 홀수 / even - 짝수 */
table tbody tr:nth-child(odd) {
  background-color: #cccccc;
}

table tbody tr:hover {
  background-color: lightgreen;
  cursor: pointer;
}

input {
  margin-bottom: 20px;
  padding: 10px;
  font-size: 14px;
  border-radius: 10px;
  border: 1px solid lightgrey;
}
</style>
