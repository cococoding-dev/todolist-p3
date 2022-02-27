<template>
  <div>

    <button @click="m_test">mixin test - table</button>

    <table>
      <thead>
        <tr>
          <th>NO.</th>
          <th>TODO</th>
          <th>DONE</th>
          <th>EDIT</th>
          <th>DELETE</th>
        </tr>
      </thead>

      <tbody>
        <tr v-for="(todo, index) in getTodoList" :key="'todo_' + todo.id">
          <td>{{ todo.id }}</td>

          <td v-if="todo.isEdit === false">{{ todo.todo }}</td>
          <td v-else>
            <input
              type="text"
              :placeholder="todo.todo"
              v-model="editTodoItem"
              @keydown="editTodoText($event, index)"
            />
          </td>

          <td @click="toggleStatus(index)">{{ todo.isCompleted }}</td>
          <td><button @click="editTodo(index)">EDIT</button></td>
          <td><button @click="deleteTodo(index)">DELETE</button></td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import todoListMixin from '../mixins/todoListMixin'

export default {
  name: "TodoList",

  mixins: [todoListMixin],
  
  data() {
    return {
      editTodoItem: "",
    };
  },

  methods: {
    toggleStatus(index) {
      // this.todoList[index].isCompleted = !this.todoList[index].isCompleted

      if (this.getTodoList[index].isCompleted) {
        this.getTodoList[index].isCompleted = false;
      } else {
        this.getTodoList[index].isCompleted = true;
      }
    },

    deleteTodo(index) {
      console.log("----child: delete todo");
      // this.$emit("delete-todo", index);
      //   this.todoListA.splice(index, 1);
      this.getTodoList.splice(index, 1);
    },

    editTodo(index) {
      this.getTodoList[index].isEdit = !this.getTodoList[index].isEdit;
    },

    editTodoText(e, index) {
      if (e.keyCode === 13) {
        this.getTodoList[index].todo = this.editTodoItem;
        this.getTodoList[index].isEdit = !this.getTodoList[index].isEdit;
        this.editTodoItem = "";
      }
    },
  },

  computed: {
    getTodoList() {
      return this.$store.getters.GET_TODOLIST;
    },
  },
};
</script>