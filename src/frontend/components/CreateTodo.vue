<template>
  <div class="w-25 mx-auto">
    <h2>Create a TODO List</h2>
    <b-form @submit="onSubmit" @reset="onReset">
      <b-form-input
        id="newTodo"
        v-model="form.todo"
        required
        placeholder="Enter something todo"
        @keypress="typing=true"
      />
      <span v-show="typing" class="help-block small text-center">Hit enter to save</span>
    </b-form>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      form: {
        todo: ""
      },
      typing: true
    };
  },
  methods: {
    // addTodo(event) {
    //     if (event) {
    //         event.preventDefault();
    //     }
    //     const url = 'http://localhost:4000/api/add';
    //     const param = {
    //         name: this.todo,
    //         done: 0
    //     };
    //     axios
    //         .post(url, param)
    //         .then((response) => {
    //             console.log(response);
    //             this.clearTodo();
    //             this.refreshTodo();
    //             this.typing = false;
    //         })
    //         .catch((error) => {
    //             console.log(error);
    //         });
    // },
    // clearTodo() {
    //     this.todo = '';
    // },
    // refreshTodo() {
    //     // bus.$emit("refreshTodo");
    // }
  }
};
</script>
