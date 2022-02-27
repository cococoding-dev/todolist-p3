<template>
  <div>
    <search-container></search-container>
    <button @click="m_test">mixin test</button>
    <input
      type="text"
      v-model="newTodoItem"
      @keydown="addTodo"
      :placeholder="m_placeholder"
    />
  </div>
  <!-- :placeholder="getPlaceholder" -->
</template>

<script>
import todoListMixin from "../mixins/todoListMixin";

export default {
  name: "AddTodo",

  mixins: [todoListMixin],

  data() {
    return {
      newTodoItem: "",
      placeholder: "data-placeholder",
    };
  },

  methods: {
    addTodo(e) {
      if (e.keyCode === 13) {
        let newTodoObj = {
          id: this.getTodoList[this.getTodoList.length - 1].id + 1,
          todo: this.newTodoItem,
          isCompleted: false,
          isEdit: false,
        };

        let list = this.getTodoList;
        list.push(newTodoObj);

        // this.$emit('메소드 이름', 부모에게 보내줄 데이터)
        // this.$emit("emit-add-todo", newTodoObj);
        //this.$store.commit('mutations에 작성한 함수명', 넘겨줄데이터) // commit()- 동기데이터 처리 함수
        this.$store.commit("SET_TODOLIST", list);

        this.newTodoItem = "";
      }
    },
  },

  // data =/= computed // cache // this.getPlaceholder
  computed: {
    getPlaceholder() {
      return this.$store.getters.GET_PLACEHOLDER;
    },

    getTodoList() {
      return this.$store.getters.GET_TODOLIST;
    },
  },
};
</script>